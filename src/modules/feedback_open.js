let feedbackBlock = document.querySelector(".feedback")
let feedbackContainer = document.querySelector(".feedback-container")
let feedbackMenuOpenButton = document.querySelector(
  ".action-buttons__button--feedback"
)
let feedbackNavigationOpenButton = document.querySelector(
  ".navigation__button--chat"
)
let feedbackCloseButton = document.querySelector(".feedback-header__button")

feedbackMenuOpenButton.addEventListener("click", () => {
  feedbackBlock.classList.add("feedback--animation-open")
  feedbackContainer.classList.add("feedback-container--open")
})

feedbackNavigationOpenButton.addEventListener("click", () => {
  feedbackBlock.classList.add("feedback--animation-open")
  feedbackContainer.classList.add("feedback-container--open")
})

feedbackCloseButton.addEventListener("click", () => {
  feedbackBlock.classList.remove("feedback--animation-open")
  feedbackContainer.classList.remove("feedback-container--open")
})

// feedbackContainer.addEventListener('click', () => {
// 	feedbackBlock.classList.remove('feedback--animation-open');
// 	feedbackContainer.classList.remove('feedback-container--open');
// });
