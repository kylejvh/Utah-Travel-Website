// add eventlistener to photo elemets
// make a function to transform clicked element to fullscreen, or to grow flex element.

let zionTitle = document.querySelector(".hero-contentwrapper");

const toggleBackgroundClass = () => {
  zionTitle.classList.toggle("active");
};

zionTitle.addEventListener("click", toggleBackgroundClass);

//! NEW TEST

const modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

const imageModal = e => {
  const srcImage = e.srcElement.currentSrc;
  modal.style.display = "block";
  modalImg.src = srcImage;
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// Select all children images of wrapping div, and add onClick event listeners to trigger modal.
const wrapper = document.querySelector(".zionphotos-wrapper");
const zionpictures = wrapper.querySelectorAll("img");

for (let i = 0; i < zionpictures.length; i++) {
  zionpictures[i].addEventListener("click", imageModal);
}
