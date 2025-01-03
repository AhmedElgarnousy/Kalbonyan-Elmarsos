let Result = 0;

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
}
function suptract() {
  let enteredNum = getUserNumInput();
  let InitCurRes = Result;
  Result = Result - enteredNum;
  createAndWriteOutput("-", InitCurRes, enteredNum);
}
function multiply() {
  let enteredNum = getUserNumInput();
  let InitCurRes = Result;
  Result = Result * enteredNum;
  createAndWriteOutput("*", InitCurRes, enteredNum);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", suptract);
multiplyBtn.addEventListener("click", multiply);
