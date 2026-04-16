"use strict";

const btnBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

btnBurger.addEventListener("click", () => {
  btnBurger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("lock");
});

const links = document.querySelectorAll(".header__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    btnBurger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("lock");
  });
});

document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !btnBurger.contains(e.target)
  ) {
    {
      btnBurger.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("lock");
    }
  }
});
