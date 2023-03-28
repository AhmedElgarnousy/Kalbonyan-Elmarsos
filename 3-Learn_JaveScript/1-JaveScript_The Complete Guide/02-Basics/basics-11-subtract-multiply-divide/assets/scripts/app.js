const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function CreateAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription); // from vender file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult = currentResult + enteredNumber;
  CreateAndWriteOutput("+", initResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult = currentResult - enteredNumber;
  CreateAndWriteOutput("-", initResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult = currentResult * enteredNumber;
  CreateAndWriteOutput("*", initResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult = currentResult / enteredNumber;
  CreateAndWriteOutput("/", initResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
