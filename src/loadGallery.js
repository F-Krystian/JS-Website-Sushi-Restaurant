import get from "./getElements.js";
import fetchData from "./fetchData.js";
import galleryModal from "./galleryModal.js";
const galleryContainer = get('.gallery__container');

const loadGallery = function(data) {
  galleryContainer.innerHTML = '';
  const galleryImages = data.map((item) => {
   let singleImage = `<div class="gallery-item">
    <img src="${item.imgURL}" alt="gallery image" class="gallery-item__img"/>
    </div>
    `;
    return singleImage;
  }).join('');
  galleryContainer.innerHTML = galleryImages;
}

const displayGallery = async() => {
  fetchData('../gallery_db.json')
  .then((data) => {
    loadGallery(data);
    galleryModal();
    })
  }
  

export default displayGallery;