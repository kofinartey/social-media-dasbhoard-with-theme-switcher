const themeToggler = document.querySelector(".theme__button");

themeToggler.addEventListener("click", () => {
  let buttonBkg = document.querySelector(".btn__background");
  let themeKnob = document.querySelector(".btn__knob");
  let themeText = document.querySelector(".theme__text");

  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    themeKnob.classList.remove("btn__knob--dark");
    buttonBkg.classList.remove("btn__background--dark");
    themeText.innerText = "Dark Mode";
  } else {
    document.body.classList.add("dark");
    themeKnob.classList.add("btn__knob--dark");
    buttonBkg.classList.add("btn__background--dark");
    themeText.innerText = "Light Mode";
  }
});
