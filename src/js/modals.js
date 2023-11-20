//side menu

const burgerButton = document.querySelector('.header-button--burger-menu');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = sideMenu.querySelector('.header-button--close-menu');
const menuOverlay = document.querySelector('.page__menu-overlay');
const feedbackButton = sideMenu.querySelector('.header-button--chat');

const feedbackModal = document.querySelector('.modal--feedback');
const feedbackModalOverlay = feedbackModal.querySelector('.modal__wrapper');
const feedbackModalCloseButton = feedbackModal.querySelector('.modal__close-button');

burgerButton.addEventListener('click', onBurgerButtonClick);
feedbackButton.addEventListener('click', onFeedbackButtonClick);
window.addEventListener('keydown', onWindowEscButtonClick);

function onBurgerButtonClick(evt) {
  evt.preventDefault();
  sideMenu.classList.add('side-menu--open');
  closeMenuButton.addEventListener('click', onCloseMenuButtonClick);
  menuOverlay.classList.add('page__menu-overlay--show');
  menuOverlay.addEventListener('click', onMenuOverlayClick);
}

function onCloseMenuButtonClick(evt) {
  evt.preventDefault();
  sideMenuClose();
}

function onMenuOverlayClick(evt) {
  evt.preventDefault();
  sideMenuClose();
}

function sideMenuClose() {
  sideMenu.classList.remove('side-menu--open');
  closeMenuButton.removeEventListener('click', onCloseMenuButtonClick);
  menuOverlay.classList.remove('page__menu-overlay--show');
  menuOverlay.removeEventListener('click', onMenuOverlayClick);
}

function onWindowEscButtonClick(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    sideMenuClose();
    feedbackModal.classList.remove('modal--open');
    closeFeedbackModal();
  }
}

// modal--feedback

function onFeedbackButtonClick() {
  showFeedbackModal();
}

function onFeedbackModalClick(evt) {
  if (evt.target === feedbackModalCloseButton) {
    closeFeedbackModal();
  }
}

function showFeedbackModal() {
  feedbackModal.classList.add('modal--open');
  feedbackModal.addEventListener('click', onFeedbackModalClick);
}

function closeFeedbackModal() {
  feedbackModal.classList.remove('modal--open');
  feedbackModalOverlay.removeEventListener('click', onFeedbackModalOverlayClick);
}

// modal--call


