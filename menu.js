import get from "./src/getElements.js";
import loadHeaderImage from "./src/loadHeaderImage.js";
import displayMenu from "./src/displayMenu.js";

window.addEventListener('DOMContentLoaded', () => {
  loadHeaderImage(get('.header-wrapper'));
  loadHeaderImage(get('.about-content__top'));
  displayMenu();
})