import get from "./getElements.js";
import carouselFunctionality from "./reviewsCarouselFunctionality.js";

const reviewsContainer = get('.reviews__wrapper__boxes');

const fetchData = async () => {
    try{
      const response = await fetch('reviews_db.json');
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(`Error fetching JSON ${error}`);
      throw error;
    }
}

const displayReviewsHTML = ((reviewData) => {

  const transformedData = reviewData.map((item) => {
    const {
          name,
          img,
          score,
          review
        } = item;

  const starDisplay = `<span class="material-symbols-outlined">
  star
  </span>`;
  const displayScore = starDisplay.repeat(score);
  
  return `
  <article class="reviews__wrapper__item">
    <img src="${img}" class="review__img"/>
    <h3 class="review__title">${name}</h3>
    <div class="review__score">${displayScore}</div>
    <p class="review__text">${review}</p>
  </article>
  `  
  }).join('');

  return transformedData;
})

const reviewsDisplay = async() => {
  fetchData()
  .then((data) => {
    const transformedHTML = displayReviewsHTML(data);
    reviewsContainer.innerHTML = transformedHTML;
  }).then(()=>{
    carouselFunctionality();
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })
}

export default reviewsDisplay;