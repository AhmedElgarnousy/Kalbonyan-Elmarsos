let Result = 0;
let logEntries = [];

function writeToLog(operationIdentifier, prevRes, operationNum, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevRes,
    number: operationNum,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function getUserNumInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, lastRes, curNum) {
  calcDescription = `${lastRes} ${operator} ${curNum}`;
  outputResult(Result, calcDescription);
}

function add() {
  let enteredNum = getUserNumInput();
  let InitCurRes = Result;
  Result += enteredNum;
  createAndWriteOutput("+", InitCurRes, enteredNum);
  writeToLog("ADD", InitCurRes, enteredNum, Result);
}

function suptract() {
  let enteredNum = getUserNumInput();
  let InitCurRes = Result;
  Result = Result - enteredNum;
  createAndWriteOutput("-", InitCurRes, enteredNum);
  writeToLog("SUBTRACT", InitCurRes, enteredNum, Result);
}
function multiply() {
  let enteredNum = getUserNumInput();
  let InitCurRes = Result;
  Result = Result * enteredNum;
  createAndWriteOutput("*", InitCurRes, enteredNum);
  writeToLog("MULTIPLY", InitCurRes, enteredNum, Result);
}
function divide() {
  let enteredNum = getUserNumInput();
  let InitCurRes = Result;
  Result = Result / enteredNum;
  createAndWriteOutput("/", InitCurRes, enteredNum);
  writeToLog("DIVIDE", InitCurRes, enteredNum, Result);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", suptract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
