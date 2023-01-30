const defaultResult = 0;
let currentResult = defaultResult;

let result;

/*
function add(number1, number2) {
  
  result = number1 + number2;
  //alert(`The result is ${result}`); // alert("The result is " + result);
  return result;
}
*/

function add() {
  currentResult = currentResult + userInput.Value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
// currentResult = ((defaultResult + 10) * 3) / 2 - 1;
// currentResult = result;

// let calculationDescription = `(${defaultResult} +  10) * 3 / 2 - 1`; // let calculationDescription = "(" + defaultResult + "+ 10) * 3 / 2 - 1";

// let errorMessage = "error \n" + "occurred";

// outputResult(currentResult, errorMessage);
