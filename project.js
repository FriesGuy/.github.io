<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Xavier's Portfolio</title>
    <style>
      body,
      h1,
      h2,
      p {
        margin: 0;
        padding: 0;
      }

      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        color: #333;
      }

      header {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 1em 0;
      }

      nav {
        background-color: #444;
        display: flex;
        justify-content: center;
      }

      nav a {
        color: #fff;
        text-decoration: none;
        padding: 1em;
      }

      .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 2em;
      }

      footer {
        text-align: center;
        background-color: #333;
        color: #fff;
        padding: 1em 0;
      }

      nav {
          background-color: #444;
          display: flex;
          justify-content: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
          padding: 1em;
          transition: background-color 0.3s;
        }

        nav a:hover {
          background-color: #555;
        }
    </style>
  </head>
  <body>
    <header>
      <h1>Programing Projects</h1>
    </header>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
    </nav>

    <div class="container">
      <h2>Xavier's Projects</h2>
      <p>
        Below you will see various projects that i have biult using code. First
        is a basic calculator.
      </p>
    </div>

    <head>
      <style>
        table {
            border: 2px solid black;
            margin-left: auto;
            margin-right: auto;
        }

        input[type="button"] {
            width: 100%;
            padding: 20px 40px;
            background-color: yellow;
            color: Black;
            font-size: 24px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
        }

        input[type="text"] {
            padding: 20px 30px;
            font-size: 24px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            border: 2px dark gray;
        }
      </style>
    </head>

    <table id="calculator">
      <tr>
        <td colspan="3">
          <input type="text" id="result" />
        </td>
        <td><input type="button" value="c" /></td>
      </tr>

      <tr>
        <td><input type="button" value="1" /></td>
        <td><input type="button" value="2" /></td>
        <td><input type="button" value="3" /></td>
        <td><input type="button" value="/" /></td>
      </tr>
      <tr>
        <td><input type="button" value="4" /></td>
        <td><input type="button" value="5" /></td>
        <td><input type="button" value="6" /></td>
        <td><input type="button" value="*" /></td>
      </tr>
      <tr>
        <td><input type="button" value="7" /></td>
        <td><input type="button" value="8" /></td>
        <td><input type="button" value="9" /></td>
        <td><input type="button" value="-" /></td>
      </tr>
      <tr>
        <td><input type="button" value="0" /></td>
        <td><input type="button" value="." /></td>
        <td><input type="button" value="=" /></td>
        <td><input type="button" value="+" /></td>
      </tr>
    </table>

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

    <p>
      Here is a study case I did a while back. I did this study case About
      airbnb rentals in amsterdam. This page isnt loading so ill figure that
      out.
    </p>
    <img src="./Untitled presentation.jpg" width="500" height="300" />
    <img src="./Untitled presentation (1).jpg" width="500" height="300" />
    <img src="./Untitled presentation (2).jpg" width="500" height="300" />
    <img src="./Untitled presentation (3).jpg" width="500" height="300" />
    <img src="./Untitled presentation (4).jpg" width="500" height="300" />
    <img src="./Untitled presentation (5).jpg" width="500" height="300" />
    <img src="./Untitled presentation (6).jpg" width="500" height="300" />

    <footer>
      <p>&copy; Xavier's Portfolio. All rights reserved.</p>
    </footer>
  </body>
</html>
