import get from "./src/getElements.js";
import loadHeaderImage from "./src/loadHeaderImage.js";
import displayHours from "./src/displayHours.js";
import reviewsDisplay from "./src/reviewsCarouselDisplay.js";
import galleryModal from "./src/galleryModal.js"


window.addEventListener('DOMContentLoaded', () => {
  loadHeaderImage(get('.header-wrapper'));
  loadHeaderImage(get('.about-content__top'));
  reviewsDisplay();
  galleryModal();
})