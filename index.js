let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

function appendNumber(number) {
  if (shouldResetDisplay) {
    displayValue = "";
    shouldResetDisplay = false;
  }
  if (number === "." && displayValue.includes(".")) {
    return;
  }
  displayValue += number;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = displayValue || "0";
}

function clearDisplay() {
  displayValue = "";
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  updateDisplay();
}

function setOperation(operator) {
  if (currentOperation !== null) {
    calculateResult();
  }
  firstOperand = parseFloat(displayValue);
  currentOperation = operator;
  shouldResetDisplay = true;
}

function calculateResult() {
  if (currentOperation === null || shouldResetDisplay) {
    return;
  }
  secondOperand = parseFloat(displayValue);
  displayValue = operate(
    currentOperation,
    firstOperand,
    secondOperand
  ).toString();
  updateDisplay();
  currentOperation = null;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (a === 0 || b === 0) {
        alert("Cannot divide by zero!");
        return 0;
      }
      return a / b;
    default:
      return 0;
  }
}
