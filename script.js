document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".navbar .mobile-toggle");
  const mobileBut = document.querySelector(".navbar .mobile-menu-list");

  toggleMenu.addEventListener("click", function () {
    mobileBut.classList.toggle("active");
  });
});
//
window.addEventListener("scroll", function () {
  const navi = document.querySelector(".navbar"); // or ".navbar" if using a class
  if (window.scrollY > 0) {
    navi.classList.add("navbar-scroll");
  } else {
    navi.classList.remove("navbar-scroll");
  }
});
