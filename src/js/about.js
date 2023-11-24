const showMoreAboutButton = document.querySelector('.about__show-more-button');
const aboutTextContainer = document.querySelector('.about__text-wrapper');
let isAboutTextCollapsed = true;

showMoreAboutButton.addEventListener('click', onShowMoreAboutButtonClick);

function onShowMoreAboutButtonClick() {
  aboutTextContainer.classList.toggle('about__text-wrapper--open');
  showMoreAboutButton.classList.toggle('show-more-button--clicked');
  if (isAboutTextCollapsed) {
    showMoreAboutButton.textContent = 'Скрыть';
    isAboutTextCollapsed = false;
  } else {
    showMoreAboutButton.textContent = 'Читать далее';
    isAboutTextCollapsed = true;
  }
}