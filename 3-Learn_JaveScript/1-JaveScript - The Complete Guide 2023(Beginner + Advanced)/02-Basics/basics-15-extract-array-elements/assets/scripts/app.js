const defaultResult = 0;
let currentResult = defaultResult;

let logEnteries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function CreateAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription); // from vender file
}

function WriteToLog(operIdentifier, prevResult, operNum, newResult) {
  const logEntry = {
    operation: operIdentifier,
    prevResult: prevResult,
    number: operNum,
    result: newResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult += enteredNumber;
  CreateAndWriteOutput("+", initResult, enteredNumber);
  WriteToLog("ADD", initResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult -= enteredNumber;
  CreateAndWriteOutput("-", initResult, enteredNumber);
  WriteToLog("SUBTRACT", initResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult *= enteredNumber;
  CreateAndWriteOutput("*", initResult, enteredNumber);
  WriteToLog("MULTIPLY", initResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initResult = currentResult;
  currentResult /= enteredNumber;
  CreateAndWriteOutput("/", initResult, enteredNumber);
  WriteToLog("DIVIDE", initResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
