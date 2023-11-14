import get from "../src/getElements.js";
import fetchData from '../src/fetchData.js';
import buttonsFunctionality from "./menuButtons.js";

const groupingData = function(data) {
  const groupData = data.reduce((acc, item) => {
    if(!acc[item.category]) {
      acc[item.category] = []
    }

    acc[item.category].push(item);
    return acc;
  }, {});  
  return groupData;
}

// For In 
// const menuItems = function(data){
//   const menuContainer = get('.menu-page__container');
//   console.log(menuContainer);
//   // Start
//   for (const category in data){
//     if(data.hasOwnProperty(category)){
//       const categoryItems = data[category];
//       console.log(categoryItems);

//       const categorySection = `
//       <div class="menu__container__section">
//       <div class="menu__container__section-header">
//       <h2 class="menu__section__header__h2">${category}</h2>
//       <button class="material-symbols-outlined menu__expand__btn">
//         expand_more
//       </button>
//       </div>
//       <div class="menu__container__section-list">
//       </div>
//       </div>
//       </div>
//       `;

//       menuContainer.insertAdjacentHTML('afterbegin', categorySection);
//       const menuList = get('.menu__container__section-list');
//       console.log(menuList);
//       categoryItems.forEach((item) => {
//         const menuItem = `
//         <div class="menu__container-item">
//         <div class="menu__item__img">
//           <img src="${item.imgURL}" alt="menu image 1" srcset="" class="menu__item__img-img">
//         </div>
//         <div class="menu__item__data">
//           <div class="menu__item__header">
//             <h3 class="menu__item__h3">${item.name}</h3>
//             <h3 class="menu__item__price">$ ${item.price}</h3>
//           </div>
//           <div class="menu__item__description">
//             <p class="menu__item__description-p">
//               ${item.description}
//             </p>
//           </div>
//         </div>
//       </div>
//         `;
        
//         menuList.insertAdjacentHTML('afterbegin', menuItem);
//       })
//     }
//   }
// }

// Map
const menuItems = function(data) {
  const menuContainer = get('.menu-page__container');
  //Array of categories
  const categorySections = Object.keys(data).map((category, index) => {
    const categoryItems = data[category];
  // Category Sections

  const categorySection = document.createElement('div');
  categorySection.classList.add('menu__container__section');

      categorySection.innerHTML = `
      <div class="menu__container__section-header">
      <h2 class="menu__section__header__h2">${category}</h2>
      <button class="material-symbols-outlined menu__expand__btn ${index === 0 ? 'expanded' : ''}">
        expand_more
      </button>
      </div>
      <div class="menu__container__section-list">
      </div>
      </div>
      `;
      
  const menuList = categorySection.querySelector('.menu__container__section-list');  
  
  if(index === 0) {
    menuList.classList.add('expanded');
  }
  
  // Array of menu items
  const menuItems = categoryItems.map((item) => 
    `
      <div class="menu__container-item">
        <div class="menu__item__img">
          <img src="${item.imgURL}" alt="menu image 1" srcset="" class="menu__item__img-img">
        </div>
        <div class="menu__item__data">
          <div class="menu__item__header">
            <h3 class="menu__item__h3">${item.name}</h3>
            <h3 class="menu__item__price">$ ${item.price}</h3>
          </div>
          <div class="menu__item__description">
            <p class="menu__item__description-p">
              ${item.description}
            </p>
          </div>
        </div>
      </div>
    `
    ).join('');

    menuList.innerHTML = menuItems;


    return categorySection;
  })

  // Append category sections

  categorySections.forEach((categorySection) => {
    menuContainer.appendChild(categorySection);
  });

  buttonsFunctionality();
}
const displayMenu = async() => {
fetchData('../menu_db.json')
.then((data) => {
  menuItems(groupingData(data));
  })
}

export default displayMenu;