import get from "./src/getElements.js";
import loadHeaderImage from "./src/loadHeaderImage.js";

window.addEventListener('DOMContentLoaded', () => {
  loadHeaderImage(get('.header-wrapper'));
  loadHeaderImage(get('.about-content__top'));
})