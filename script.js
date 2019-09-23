// add eventlistener to photo elemets
// make a function to transform clicked element to fullscreen, or to grow flex element.

const imageModal = function(e) {
  let modal = document.querySelector("#myModal");
  let srcImage = e.srcElement.src;
  let modalImg = document.getElementById("img01");

  modal.style.display = "block";
  modalImg.src = srcImage;
};

const zionpictures = document.querySelectorAll(".zionphotos", ".zionphotos2");

zionpictures.forEach(picture => {
  picture.addEventListener("click", imageModal);
});

const modalClose = document.getElementById("modalcloser");
if (modalClose) {
  modalClose.onclick = () => {
    const modal = document.querySelector("#myModal");
    modal.style.display = "none";
  };
}

// Expand div by toggling class on Button Click.

function mobileMenuToggle() {
  const nav = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".navigation li");
  nav.classList.toggle("expanded");
  navLinks.forEach(item => {
    item.classList.toggle("expanded");
  });
}

const mobileMenuButton = document.querySelector("#mobilemenu");
mobileMenuButton.addEventListener("click", mobileMenuToggle);

function checkThis() {
  textDiv.classList.add("transformtext");
}

const homepageText = document.querySelectorAll(".introtext");

const textDiv = document.querySelector(".backgroundtext");

homepageText.forEach(text => text.addEventListener("click", checkThis));

// Panel functionality

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

// PhotoSwipe Code

// const pswpElement = document.querySelectorAll(".pswp")[0];

// const galleryItems = [
//   // mobile images should be served with largest dimension at 1200px

//   {
//     src: "panos/final/zion.jpg",
//     w: 3696,
//     h: 918
//   },
//   {
//     src: "panos/final/lake.jpg",
//     w: 3697,
//     h: 1602
//   },
//   {
//     src: "panos/final/zion2.jpg",
//     w: 3697,
//     h: 1366
//   },
//   {
//     src: "panos/final/church.jpg",
//     w: 3837,
//     h: 725
//   },
//   {
//     src: "panos/final/zion3.jpg",
//     w: 3697,
//     h: 1132
//   },
//   {
//     src: "panos/final/zion4.jpg",
//     w: 3698,
//     h: 1367
//   }
// ];

// My Photoswipe code

// const options = {
//     modal: false,
//     closeOnScroll: false
// };

// let PhotoSwipeGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);

// PhotoSwipeGallery.init();

//  Initial Test of Inline Gallery Script

var initPhotoSwipeFromDOM = function(gallerySelector) {
  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      childElements,
      linkEl,
      size,
      item;

    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute("data-size").split("x");

      // create slide object
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    var eTarget = e.target || e.srcElement;

    var clickedListItem = closest(eTarget, function(el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });

    if (!clickedListItem) {
      return;
    }

    // find index of clicked item
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;

    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }

    if (index >= 0) {
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
      params = {};

    if (hash.length < 5) {
      return params;
    }

    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    if (!params.hasOwnProperty("pid")) {
      return params;
    }
    params.pid = parseInt(params.pid, 10);
    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      index: index,

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of docs for more info
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          boundingRect = thumbnail.getBoundingClientRect();

        var rect = {
          x: boundingRect.left,
          y: boundingRect.top + pageYScroll,
          w: boundingRect.width
        };
        var templateBounds = pswpElement.parentElement.getBoundingClientRect();
        rect.x -= templateBounds.left;
        rect.y -= templateBounds.top;

        return rect;
      },

      // history & focus options are disabled on CodePen
      // remove these lines in real life:
      history: false,
      focus: false,

      modal: false,
      closeOnScroll: false
    };

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.listen("updateScrollOffset", function(_offset) {
      var r = pswpElement.getBoundingClientRect();
      _offset.x += r.left;
      _offset.y += r.top;
    });
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector);

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if (hashData.pid > 0 && hashData.gid > 0) {
    openPhotoSwipe(hashData.pid - 1, galleryElements[hashData.gid - 1], true);
  }
};

// execute above function
initPhotoSwipeFromDOM(".my-simple-gallery");
