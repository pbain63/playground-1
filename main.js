const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const navList = document.querySelector(".nav__list");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    navList.classList.toggle("visible");
  }
});
window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    navList.classList.remove("visible");
  }
});
