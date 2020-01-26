// Homepage VanillaTilt Code

// Expand div by toggling class on Button Click.

// function mobileMenuToggle() {
//   const nav = document.querySelector(".navigation");
//   const navLinks = document.querySelectorAll(".navigation li");
//   nav.classList.toggle("expanded");
//   navLinks.forEach(item => {
//     item.classList.toggle("expanded");
//   });
// }

// const mobileMenuButton = document.querySelector("#mobilemenu");
// mobileMenuButton.addEventListener("click", mobileMenuToggle);

// const homepageText = document.querySelectorAll(".introtext");

// const textDiv = document.querySelector(".backgroundtext");

// homepageText.forEach(text => text.addEventListener("click", checkThis));

// Panel functionality

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
