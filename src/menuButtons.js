import get from "../src/getElements.js";

const buttonsFunctionality = function hideShowItems(){
  const expandBtn = [...document.querySelectorAll('.menu__expand__btn')];
  

  expandBtn.forEach((btn) => {
    const menuSection = btn.closest('.menu__container__section')
    const menuList = menuSection.querySelector('.menu__container__section-list');
    console.log(menuSection);
    console.log(menuList);
    btn.addEventListener('click', () => {
      btn.classList.toggle('expanded');
      menuList.classList.toggle('expanded');

        if (menuList.classList.contains('expanded')) {
          menuList.style.maxHeight = menuList.scrollHeight + 'px';
        } else {
          menuList.style.maxHeight = null;
        }
    })
  })  
}

export default buttonsFunctionality;