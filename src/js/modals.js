//side menu

const burgerButton = document.querySelector('.header-button--burger-menu');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = sideMenu.querySelector('.header-button--close-menu');
const menuOverlay = document.querySelector('.page__menu-overlay');

const feedbackButtons = document.querySelectorAll('.header-button--chat');
const callButtons = document.querySelectorAll('.header-button--phone');

const feedbackModal = document.querySelector('.modal--feedback');
const feedbackModalCloseButton = feedbackModal.querySelector('.modal__close-button');

const callModal = document.querySelector('.modal--call');
const callModalCloseButton = callModal.querySelector('.modal__close-button');

burgerButton.addEventListener('click', onBurgerButtonClick);

feedbackButtons.forEach((button) => {
  button.addEventListener('click', onFeedbackButtonClick);
})

callButtons.forEach((button) => {
  button.addEventListener('click', onCallButtonClick);
})

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
  console.log(evt.keyCode);
  if (evt.keyCode === 27) {
    sideMenuClose();
    feedbackModal.classList.remove('modal--open');
    closeFeedbackModal();
    closeCallModal();
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
}

// modal--call

function onCallButtonClick() {
  showCallModal();
}

function onCallModalClick(evt) {
  console.log('here');
  console.log(evt.target);

  if (evt.target === callModalCloseButton) {
    closeCallModal();
  }
}

function showCallModal() {

  callModal.classList.add('modal--open');
  callModalCloseButton.addEventListener('click', onCallModalClick);
}

function closeCallModal() {
  callModal.classList.remove('modal--open');
}