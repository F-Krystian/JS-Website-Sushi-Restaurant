import get from "./src/getElements.js";
import loadHeaderImage from "./src/loadHeaderImage.js";
import displayGallery from "./src/loadGallery.js";

window.addEventListener('DOMContentLoaded', () => {
  loadHeaderImage(get('.header-wrapper'));
  loadHeaderImage(get('.about-content__top'));
  displayGallery();
})