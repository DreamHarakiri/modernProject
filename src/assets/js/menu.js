/* мне было реально лень за бесплатно делать норм меню, так что поиграем просто со стилями, сории */

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".navList__menu");
const btnLK = document.querySelector(".btn__toAccount");
const navList = document.querySelector(".navList");
const body = document.querySelector("body");

let isMenu = false;

const openMenu = () => {
  menu.style.display = "flex";
  btnLK.style.display = "block";
  navList.style.height = "100vh";
  navList.style.alignItems = "normal";
  body.style.overflowY = "hidden";
  isMenu = true;
};

const closeMenu = () => {
  menu.style.display = "none";
  btnLK.style.display = "none";
  navList.style.height = "86px";
  navList.style.alignItems = "normal";
  body.style.overflowY = "scroll";
  isMenu = false;
};

menuBtn.addEventListener("click", function () {
  if (isMenu === false) {
    openMenu();
  } else {
    closeMenu();
  }
});
