let callBlock = document.querySelector(".call")
let callContainer = document.querySelector(".call-container")
let callMenuOpenButton = document.querySelector(".action-buttons__button--call")
let callNavigationOpenButton = document.querySelector(
  ".navigation__button--call"
)
let callCloseButton = document.querySelector(".call-header__button")

callMenuOpenButton.addEventListener("click", () => {
  callBlock.classList.add("call--animation-open")
  callContainer.classList.add("call-container--open")
})

callNavigationOpenButton.addEventListener("click", () => {
  callBlock.classList.add("call--animation-open")
  callContainer.classList.add("call-container--open")
})

callCloseButton.addEventListener("click", () => {
  callBlock.classList.remove("call--animation-open")
  callContainer.classList.remove("call-container--open")
})

// callContainer.addEventListener('click', () => {
// 	callBlock.classList.remove('call--animation-open');
// 	callContainer.classList.remove('call-container--open');
// });
