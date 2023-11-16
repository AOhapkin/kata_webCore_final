//side menu

const burgerButton = document.querySelector('.header-button--burger-menu');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = sideMenu.querySelector('.header-button--close-menu');
const menuOverlay = document.querySelector('.page__menu-overlay');

burgerButton.addEventListener('click', onBurgerButtonClick);

function onBurgerButtonClick(evt) {
  evt.preventDefault();
  sideMenu.classList.add('side-menu--open');
  closeMenuButton.addEventListener('click', onCloseMenuButtonClick);
  menuOverlay.classList.add('page__menu-overlay--show');
  menuOverlay.addEventListener('click', onMenuOverlayClick);
  window.addEventListener('keydown', onSideMenuEscButtonClick);
}

function onCloseMenuButtonClick(evt) {
  evt.preventDefault();
  sideMenu.classList.remove('side-menu--open');
  closeMenuButton.removeEventListener('click', onCloseMenuButtonClick);
  menuOverlay.classList.remove('page__menu-overlay--show');
  menuOverlay.removeEventListener('click', onMenuOverlayClick);
  window.removeEventListener('keydown', onSideMenuEscButtonClick);
}

function onMenuOverlayClick(evt) {
  evt.preventDefault();
  sideMenu.classList.remove('side-menu--open');
  closeMenuButton.removeEventListener('click', onCloseMenuButtonClick);
  menuOverlay.classList.remove('page__menu-overlay--show');
  menuOverlay.removeEventListener('click', onMenuOverlayClick);
  window.removeEventListener('keydown', onSideMenuEscButtonClick);
}

function onSideMenuEscButtonClick(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    sideMenu.classList.remove('side-menu--open');
    closeMenuButton.removeEventListener('click', onCloseMenuButtonClick);
    menuOverlay.classList.remove('page__menu-overlay--show');
    menuOverlay.removeEventListener('click', onMenuOverlayClick);
    window.removeEventListener('keydown', onSideMenuEscButtonClick);
  }
}