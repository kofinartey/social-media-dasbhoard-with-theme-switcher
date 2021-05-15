let themeToggler = document.querySelector(".theme__button");
let buttonBkg = document.querySelector(".btn__background");
let themeKnob = document.querySelector(".btn__knob");

themeToggler.addEventListener("click", () => {
  themeKnob.classList.toggle("btn__knob--dark");
  buttonBkg.classList.toggle("btn__background--dark");
});
