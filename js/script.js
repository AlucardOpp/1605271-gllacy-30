const feedbackButton = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackCloseButton = document.querySelector(".close-button");
const feedbackBackground = document.querySelector(".overlay-feedback");
const feedbackForm = document.querySelector(".feedback-form");
const feedbackFormNAS = feedbackPopup.querySelector(".feedback-nameandsurname");
const feedbackFormEmail = feedbackPopup.querySelector(".feedback-email");
const feedbackFormComment = feedbackPopup.querySelector(".feedback-comment");
let firstSliderButton = document.querySelector(".change-button-first");
let secondSliderButton = document.querySelector(".change-button-second");
let thirdSliderButton = document.querySelector(".change-button-third");
let sliderPage = document.querySelector(".slider-page");
let firstSlider = document.querySelector(".slider-first");
let secondSlider = document.querySelector(".slider-second");
let thirdSlider = document.querySelector(".slider-third");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.toggle("feedback-show");
  feedbackBackground.classList.toggle("overlay-feedback-hide");
  feedbackBackground.classList.toggle("overlay-feedback-show");
});

feedbackCloseButton.addEventListener("click", function () {
  feedbackPopup.classList.remove("feedback-show");
  feedbackPopup.classList.remove("feedback-error");
  feedbackBackground.classList.toggle("overlay-feedback-hide");
  feedbackBackground.classList.toggle("overlay-feedback-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackFormNAS.value || !feedbackFormEmail.value || !feedbackFormComment.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("feedback-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (feedbackPopup.classList.contains("feedback-show")) {
      feedbackPopup.classList.remove("feedback-show");
      feedbackPopup.classList.remove("feedback-error");
      feedbackBackground.classList.toggle("overlay-feedback-hide");
      feedbackBackground.classList.toggle("overlay-feedback-show");
    }
  }
})

firstSliderButton.addEventListener("click", function () {
  if (firstSliderButton.classList.contains("current")) {} else {
    firstSlider.classList.add("slide-current");
    firstSliderButton.classList.add("current");
    sliderPage.classList.add("background-green");
    if (secondSliderButton.classList.contains("current")) {
      secondSlider.classList.remove("slide-current");
      sliderPage.classList.remove("background-blue");
      secondSliderButton.classList.remove("current");
    }
    if (thirdSliderButton.classList.contains("current")) {
      thirdSlider.classList.remove("slide-current");
      sliderPage.classList.remove("background-brown");
      thirdSliderButton.classList.remove("current");
    }
  }
});

secondSliderButton.addEventListener("click", function () {
  if (secondSliderButton.classList.contains("current")) {} else {
    secondSlider.classList.add("slide-current");
    secondSliderButton.classList.add("current");
    sliderPage.classList.add("background-blue");
    if (firstSliderButton.classList.contains("current")) {
      firstSlider.classList.remove("slide-current");
      sliderPage.classList.remove("background-green");
      firstSliderButton.classList.remove("current");
    }
    if (thirdSliderButton.classList.contains("current")) {
      thirdSlider.classList.remove("slide-current");
      sliderPage.classList.remove("background-brown")
      thirdSliderButton.classList.remove("current");
    }
  }
});

thirdSliderButton.addEventListener("click", function () {
  if (thirdSliderButton.classList.contains("current")) {} else {
    thirdSlider.classList.add("slide-current");
    thirdSliderButton.classList.add("current");
    sliderPage.classList.add("background-brown");
    if (firstSliderButton.classList.contains("current")) {
      firstSlider.classList.remove("slide-current");
      sliderPage.classList.remove("background-green");
      firstSliderButton.classList.remove("current");
    }
    if (secondSliderButton.classList.contains("current")) {
      secondSlider.classList.remove("slide-current");
      sliderPage.classList.remove("background-blue");
      secondSliderButton.classList.remove("current");
    }
  }
});
