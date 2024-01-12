const menuButtonElement = document.querySelector('.main-navigation__toggle');
const navigationListElement = document.querySelector('.main-navigation');

menuButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  menuButtonElement.classList.toggle('main-navigation__toggle--is-opened');
  navigationListElement.classList.toggle('main-navigation--is-opened');
});
