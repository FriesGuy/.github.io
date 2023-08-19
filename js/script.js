document.addEventListener("DOMContentLoaded", function () {
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
        if (operator !== "" && prevInput !== "") {
          currentInput = calculate(prevInput, currentInput, operator);
          resultInput.value = currentInput;
          prevInput = currentInput;
          operator = "";
        }
      } else if (["+", "-", "*", "/"].includes(value)) {
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
      } else {
        currentInput += value;
        resultInput.value = currentInput;
      }
    });
  });

  function clearCalculator() {
    currentInput = "";
    prevInput = "";
    operator = "";
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
      default:
        return num2;
    }
  }

  const flipButtons = document.querySelectorAll(".flip-button");
  flipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const calculatorContainer = button.closest(".calculator-container");
      calculatorContainer.classList.toggle("flip");
    });
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const flipButtons = document.querySelectorAll(".flip-button");
    const calculatorContainer = document.querySelector(".calculator-container");

    flipButtons.forEach((button) => {
      button.addEventListener("click", () => {
        calculatorContainer.classList.toggle("flipped");
      });
    });
  });
