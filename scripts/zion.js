// add eventlistener to photo elemets
// make a function to transform clicked element to fullscreen, or to grow flex element.

let zionTitle = document.querySelector(".hero-contentwrapper");

const toggleBackgroundClass = () => {
  zionTitle.classList.toggle("active");
};

zionTitle.addEventListener("click", toggleBackgroundClass);

const zionModal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

const imageModal = e => {
  const srcImage = e.srcElement.currentSrc;
  zionModal.style.display = "block";
  modalImg.src = srcImage;
};

const span = document.getElementsByClassName("close")[0];

// Closes the modal
span.onclick = function() {
  zionModal.style.display = "none";
};

// Select all children images of wrapping div, and add onClick event listeners to trigger modal.
const wrapper = document.querySelector(".zionphotos-wrapper");
const zionpictures = wrapper.querySelectorAll("img");

for (let i = 0; i < zionpictures.length; i++) {
  zionpictures[i].addEventListener("click", imageModal);
}
