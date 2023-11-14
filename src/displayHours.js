import get from "./getElements.js";

const hourBox = [...document.querySelectorAll('.about-content__box-hours')];
const hoursBtn = get('.about-content__time-btn');

const displayHours = () => {
  hoursBtn.addEventListener('click', () => {
    hoursBtn.classList.toggle('rotate');
    hourBox.forEach((item, index) => {
      if(index !== 0) {
        item.classList.toggle('hidden')
      }
    })
  })
}

export default displayHours();