// default values
let defaultCurrentDpi = (document.querySelector(
  ".current_dpi_input"
).defaultValue = 400);

let defaultCurrentSens = (document.querySelector(
  ".current_sensitivity_input"
).defaultValue = 1.2);

let defaultNewDpi = (document.querySelector(
  ".new_dpi_input"
).defaultValue = 800);

let DefaultNewSens = (document.querySelector(
  ".new_sensitivity_input"
).defaultValue = (defaultCurrentDpi * defaultCurrentSens) / defaultNewDpi);

function calculateDpi() {
  let currentDpi = document.querySelector(".current_dpi_input").value;
  let currentSens = document.querySelector(".current_sensitivity_input").value;
  let newDpi = document.querySelector(".new_dpi_input").value;

  document.querySelector(".new_sensitivity_input").value =
    (currentDpi * currentSens) / newDpi;
}

function resetButton() {
  document.querySelector(".current_dpi_input").value = 400;
  document.querySelector(".current_sensitivity_input").value = 1.2;
  document.querySelector(".new_dpi_input").value = 800;
  document.querySelector(".new_sensitivity_input").value = 0.6;
}

document
  .querySelector(".current_dpi_input")
  .addEventListener("input", function () {
    // if (this.value === "") {

    // }
    calculateDpi();
  });

document
  .querySelector(".current_sensitivity_input")
  .addEventListener("input", function () {
    calculateDpi();
  });

document.querySelector(".new_dpi_input").addEventListener("input", function () {
  calculateDpi();
});

document.querySelector(".reset").addEventListener("click", function () {
  resetButton();
});
