const menuButtonElement = document.querySelector('.page-header__toggle');
const navigationListElement = document.querySelector('.main-navigation');

menuButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  menuButtonElement.classList.toggle('page-header--is-opened');
  navigationListElement.classList.toggle('main-navigation--is-opened');
});
