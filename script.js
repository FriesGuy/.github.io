<script>
      document.addEventListener("DOMContentLoaded", function () {
        const resultInput = document.getElementById("result");
        const buttons = document.querySelectorAll(
          "#calculator input[type='button']"
        );
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
            } else if (
              value === "+" ||
              value === "-" ||
              value === "*" ||
              value === "/"
            ) {
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
      });
    </script>
