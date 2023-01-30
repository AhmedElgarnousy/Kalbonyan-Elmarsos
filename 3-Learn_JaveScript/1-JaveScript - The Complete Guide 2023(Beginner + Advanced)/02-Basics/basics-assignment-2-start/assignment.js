const task3Element = document.getElementById("task-3");

// Assignment- Functions

/*
//  task 1,2,3

function display() {
  alert("Hi there");
}
function showName(name) {
  alert(name);
}

task3Element.addEventListener("click", display);
*/

// display();
// showName("Ahmed");

/*
//  task 4,5
*/
let result;
function concatenate(str1, str2, str3) {
  result = str1 + str2 + str3; //result = `${str1}  ${str2} ${str3}`;

  return result;
}

concatenate("Ahmed", " kamal", " hussein");
alert(`concatination result is ${result}`);
// alert(result);
