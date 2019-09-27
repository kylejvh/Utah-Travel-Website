// Homepage VanillaTilt Code

VanillaTilt.init(document.querySelector(".background"), {
  max: 5,
  speed: 400,
  reverse: false,
  startX: 0,
  startY: 0,
  perspective: 2000,
  scale: 1,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45
});

// add eventlistener to photo elemets
// make a function to transform clicked element to fullscreen, or to grow flex element.

const imageModal = function(e) {
  let modal = document.querySelector("#myModal");
  let srcImage = e.srcElement.currentSrc;
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

// lightgallery Code

lightGallery(document.getElementById("gallery-container"), {
  mode: "lg-soft-zoom", //  "lg-slide-skew", "lg-scale-up" "lg-soft-zoom"
  cssEasing: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
  download: false,
  thumbnail: true,
  thumbWidth: 125,
  thumbMargin: 10,
  selector: "a"
});
