import get from "./getElements.js";

const galleryModal = function openGalleryModal(){
  const galleryImages = [...document.querySelectorAll('.gallery-item__img')];
  const galleryModal = get('.gallery-modal');
  const galleryImgLarge = get('.modal-gallery__image-large');
  const btnClose = get('.gallery__btn-close');
  const btnPrev = get('.gallery__btn-prev');
  const btnNext = get('.gallery__btn-next');
  let imgIndex;
  let imgSrc;

  galleryImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
      galleryModal.classList.add('open');
      imgIndex = index;
      imgSrc = e.target.src;
      galleryImgLarge.src = imgSrc;
    })
  })

    btnClose.addEventListener('click', () => {
      galleryModal.classList.remove('open');
    })

    btnPrev.addEventListener('click', () => {
      imgIndex--;
      if(imgIndex < 0) {
        imgIndex = galleryImages.length - 1;
        galleryImgLarge.src = galleryImages[imgIndex].src;        
      } else {
        galleryImgLarge.src = galleryImages[imgIndex].src;   
      }


    })

    btnNext.addEventListener('click', () => {
      imgIndex++;
      if(imgIndex > galleryImages.length - 1) {
        imgIndex = 0;
        galleryImgLarge.src = galleryImages[imgIndex].src; 
      } else {
        galleryImgLarge.src = galleryImages[imgIndex].src; 
      }    

    })
}

export default galleryModal;

