import get from "./getElements.js";
const carouselFunctionality = function () {
  const btnPrev = get('.reviews__btn--prev');
  const btnNext = get('.reviews__btn--next');
  const reviewBoxes = [...document.querySelectorAll('.reviews__wrapper__item')];
  const carouselWrapper = get('.reviews__wrapper__boxes');
  const movementWidth = carouselWrapper.offsetWidth / 3;
  // const itemWidth = reviewBoxes[0].offsetWidth;
  let currentPosition = 0;
  let maxPosition = reviewBoxes.length -3;

  btnPrev.addEventListener('click', () => {

    if(currentPosition > 0) {
      currentPosition --;
      reviewBoxes.forEach((item) => {
        item.style.transform = `translateX(-${currentPosition * movementWidth}px)`;
      }) 
    } else {
      currentPosition = maxPosition;
      reviewBoxes.forEach((item) => {
        item.style.transform = `translateX(-${currentPosition * movementWidth}px)`;
      }) 
    }
  });

  btnNext.addEventListener('click', () => {

    if(currentPosition < maxPosition) {
      currentPosition ++;
      reviewBoxes.forEach((item) => {
        item.style.transform = `translateX(-${currentPosition * movementWidth}px)`;
      }) 
    }else {
      currentPosition = 0;
      reviewBoxes.forEach((item) => {
        item.style.transform = `translateX(-${currentPosition * movementWidth}px)`;
      }) 
    }
  });
};

export default carouselFunctionality;
