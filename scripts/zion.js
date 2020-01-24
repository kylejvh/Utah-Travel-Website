// add eventlistener to photo elemets
// make a function to transform clicked element to fullscreen, or to grow flex element.

const imageModal = e => {
  let modal = document.querySelector(".modal-wrapper");
  let srcImage = e.srcElement.currentSrc;
  let modalImg = document.querySelector(".modal-content");
  modal.style.display = "block";
  modalImg.src = srcImage;
};

const wrapper = document.querySelector(".zionphotos-wrapper");
const zionpictures = wrapper.querySelectorAll("img");
console.log(zionpictures);

for (let i = 0; i < zionpictures.length; i++) {
  zionpictures[i].addEventListener("click", imageModal);
}

// const modalClose = document.getElementById("modalcloser");
// if (modalClose) {
//   modalClose.onclick = () => {
//     const modal = document.querySelector(".moda");
//     modal.style.display = "none";
//   };
// }

// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function() {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// };
