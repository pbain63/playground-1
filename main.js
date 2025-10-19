const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");
// It's set to false initially because when the page first loads, the navigation menu is closed.
let isOpen = false;

navToggle.addEventListener("click", () => {
  // 1. Flip the state
  isOpen = !isOpen;
  // 2. Show or hide the menu
  navList.classList.toggle("nav--visible");
});
//  if (isOpen) {
//   navToggle.textContent = "✖"; // Menu is open, show a close icon
// } else {
//   navToggle.textContent = "☰"; // Menu is closed, show a hamburger icon
// }
