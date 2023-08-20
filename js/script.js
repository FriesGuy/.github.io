document.addEventListener("DOMContentLoaded", function () {
  // Regular Calculator functionality
  const regularResultInput = document.querySelector(".calculator.regular .result");
  const regularButtons = document.querySelectorAll(".calculator.regular input[type='button']");
  let regularCurrentInput = "";
  let regularPrevInput = "";
  let regularOperator = "";

  regularButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;

      if (value === "c") {
        clearRegularCalculator();
      } else if (value === "=") {
        performRegularCalculation();
      } else if (["+", "-", "*", "/"].includes(value)) {
        handleRegularOperatorClick(value);
      } else {
        appendToRegularInput(value);
      }
    });
  });

  function clearRegularCalculator() {
    regularCurrentInput = "";
    regularPrevInput = "";
    regularOperator = "";
    regularResultInput.value = regularCurrentInput;
  }

  function performRegularCalculation() {
    if (regularOperator !== "" && regularPrevInput !== "") {
      regularCurrentInput = calculate(regularPrevInput, regularCurrentInput, regularOperator);
      regularResultInput.value = regularCurrentInput;
      regularPrevInput = regularCurrentInput;
      regularOperator = "";
    }
  }

  function handleRegularOperatorClick(value) {
    if (regularCurrentInput !== "") {
      if (regularPrevInput === "") {
        regularPrevInput = regularCurrentInput;
        regularOperator = value;
        regularCurrentInput = "";
      } else {
        regularPrevInput = calculate(regularPrevInput, regularCurrentInput, regularOperator);
        regularResultInput.value = regularPrevInput;
        regularCurrentInput = "";
        regularOperator = value;
      }
    }
  }

  function appendToRegularInput(value) {
    regularCurrentInput += value;
    regularResultInput.value = regularCurrentInput;
  }

  // DND Calculator functionality
  const dndResultInput = document.querySelector(".calculator.dnd .result");
  const dndButtons = document.querySelectorAll(".calculator.dnd input[type='button']");
  let dndCurrentInput = "";

  dndButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;

      if (value === "c") {
        clearDNDCalculator();
      } else if (value === "=") {
        performDNDCalculation();
      } else if (["d4", "d6", "d8", "d10", "d12", "d20", "d100", "dx"].includes(value)) {
        handleDNDOperatorClick(value);
      } else {
        appendToDNDInput(value);
      }
    });
  });

  function clearDNDCalculator() {
    dndCurrentInput = "";
    dndResultInput.value = dndCurrentInput;
  }

  function handleDNDOperatorClick(value) {
    const sides = parseInt(value.slice(1));
    const result = Math.floor(Math.random() * sides) + 1;
    dndResultInput.value = `d${sides} = ${result}`;
  }

  function appendToDNDInput(value) {
    dndCurrentInput += value;
    dndResultInput.value = dndCurrentInput;
  }

  // Calculator flip buttons
  const flipButtons = document.querySelectorAll(".flip-button");
  flipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const calculatorContainer = button.closest(".calculator-container");
      calculatorContainer.classList.toggle("flip");
    });
  });
});

