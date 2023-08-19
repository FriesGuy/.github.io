document.addEventListener("DOMContentLoaded", function () {
  // Calculator functionality
  const resultInputs = document.querySelectorAll(".result");
  const buttons = document.querySelectorAll("#calculator input[type='button']");
  let currentInput = "";
  let prevInput = "";
  let operator = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;

      if (value === "c") {
        clearCalculator();
      } else if (value === "=") {
        performCalculation();
      } else if (["+", "-", "*", "/"].includes(value)) {
        handleOperatorClick(value);
      } else {
        appendToInput(value);
      }
    });
  });

  function clearCalculator() {
    currentInput = "";
    prevInput = "";
    operator = "";
    resultInputs.forEach(input => input.value = currentInput);
  }

  function performCalculation() {
    if (operator !== "" && prevInput !== "") {
      currentInput = calculate(prevInput, currentInput, operator);
      resultInputs.forEach(input => input.value = currentInput);
      prevInput = currentInput;
      operator = "";
    }
  }

  function handleOperatorClick(value) {
    if (currentInput !== "") {
      if (prevInput === "") {
        prevInput = currentInput;
        operator = value;
        currentInput = "";
      } else {
        prevInput = calculate(prevInput, currentInput, operator);
        resultInputs.forEach(input => input.value = prevInput);
        currentInput = "";
        operator = value;
      }
    }
  }

  function appendToInput(value) {
    currentInput += value;
    resultInputs.forEach(input => input.value = currentInput);
  }

  function calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return num2;
    }
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
