document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");
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
        if (prevInput !== "" && operator !== "") {
          currentInput = calculate(prevInput, currentInput, operator);
          resultInput.value = currentInput;
          prevInput = currentInput;
          operator = "";
        }
      } else if (value === "+" || value === "-" || value === "*" || value === "/") {
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

document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");
  const buttons = document.querySelectorAll("#calculator input[type='button']");
  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;

      if (value === "c") {
        clearCalculator();
      } else if (value === "=") {
        try {
          currentInput = evaluateExpression(currentInput);
          resultInput.value = currentInput;
        } catch (error) {
          resultInput.value = "Error";
        }
      } else {
        currentInput += value;
        resultInput.value = currentInput;
      }
    });
  });

  function clearCalculator() {
    currentInput = "";
    resultInput.value = currentInput;
  }

  function evaluateExpression(expression) {
    expression = expression.replace(/x/g, "*").replace(/÷/g, "/");

    const parsedExpression = math.parse(expression);
    const evaluatedResult = parsedExpression.evaluate();
    
    return evaluatedResult.toString();
  }
});
