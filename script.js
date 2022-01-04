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
let alert1 = document.querySelector("#alert1");
let alert2 = document.querySelector("#alert2");
let content = document.createElement("p");

function alertEmpty(alert) {
  alert.classList.add("alert");
  alert.textContent = "Este campo es requerido";

  container.appendChild(content);
}

document
  .querySelector(".current_dpi_input")
  .addEventListener("input", function () {
    if (this.value === "") {
      alert1.style.backgroundColor = "#e60000";
      alertEmpty(alert1);
    } else {
      calculateDpi();
      alert1.style.backgroundColor = "transparent";
      alert1.textContent = "";
    }
  });

document
  .querySelector(".current_sensitivity_input")
  .addEventListener("input", function () {
    if (this.value === "") {
      alert2.style.backgroundColor = "#e60000";

      alertEmpty(alert2);
    } else {
      calculateDpi();
      alert2.style.backgroundColor = "transparent";
      alert2.textContent = "";
    }
  });

document.querySelector(".new_dpi_input").addEventListener("input", function () {
  calculateDpi();
});

document.querySelector(".reset").addEventListener("click", function () {
  resetButton();
  alert1.style.backgroundColor = "transparent";
  alert2.style.backgroundColor = "transparent";
  alert1.textContent = "";
  alert2.textContent = "";
});

// navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
