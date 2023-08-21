document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.querySelector(".calculator .result");
  const buttons = document.querySelectorAll(".calculator input[type='button']");
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
      } else if (value === "sqrt") {
        performSquareRoot();
      } else if (value === "^") {
        handleExponentiation();
      } else if (["sin", "cos", "tan"].includes(value)) {
        performTrigFunction(value);
      } else {
        appendToInput(value);
      }
    });
  });

  function clearCalculator() {
    currentInput = "";
    prevInput = "";
    operator = "";
    resultInput.value = currentInput;
  }

  function performCalculation() {
    if (operator !== "" && prevInput !== "") {
      currentInput = calculate(prevInput, currentInput, operator);
      resultInput.value = currentInput;
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
        resultInput.value = prevInput;
        currentInput = "";
        operator = value;
      }
    }
  }

  function performSquareRoot() {
    if (currentInput !== "") {
      currentInput = Math.sqrt(parseFloat(currentInput));
      resultInput.value = currentInput;
    }
  }

  function handleExponentiation() {
    if (currentInput !== "") {
      prevInput = currentInput;
      operator = "^";
      currentInput = "";
    }
  }

  function performTrigFunction(func) {
    if (currentInput !== "") {
      const angle = parseFloat(currentInput);
      if (func === "sin") {
        currentInput = Math.sin(angle);
      } else if (func === "cos") {
        currentInput = Math.cos(angle);
      } else if (func === "tan") {
        currentInput = Math.tan(angle);
      }
      resultInput.value = currentInput;
    }
  }

  function appendToInput(value) {
    currentInput += value;
    resultInput.value = currentInput;
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
      case "^":
        return Math.pow(num1, num2);
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

  // Calculator flip buttons
  const flipButtons = document.querySelectorAll(".flip-button");
  flipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const calculatorContainer = button.closest(".calculator-container");
      calculatorContainer.classList.toggle("flip");
    });
  });
});

