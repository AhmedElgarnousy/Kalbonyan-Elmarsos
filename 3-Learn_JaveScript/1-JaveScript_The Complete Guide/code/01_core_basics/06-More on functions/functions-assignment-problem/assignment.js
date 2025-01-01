// function sayHello(name) {
//   console.log("Hi " + name);
// }
/*Re-write the function you find in assignment.js as an arrow function. */
/*
const sayHello = (name) => {
  console.log(`Hi ${name}`);
};
sayHello("Ahmed");
*/

/*
Adjust the arrow function you created as
part of task 1 to use three different syntaxes:
With two arguments (incl. a phrase that replaces "Hi"),
with no arguments (hard-coded values in function body)
and with one returned value
(instead of outputting text inside of the function directly).*/

/*
const sayHello2 = function (hi, name) {
  console.log(`${hi} ${name}`);
};
sayHello2("Hello", "Ahmed");
*/

/*
const sayHello3 = () => console.log('Hi Hard-coded!');
const sayHello4 = name => 'Hi ' + name;

sayHello('Max');
sayHello2('Max', 'Hello');
sayHello3();
console.log(sayHello4('Max'));
*/

/*
Add a default argument to the function you created: 
A fallback value for the phrase if no value is provided.
*/

/* Add a new function: "checkInput" 
which takes an unlimited amount of arguments 
(unlimited amount of strings) and executes  
a callback function if NO argument/ string is an empty string. */

/*
 */
const checkInput = (cbFunction, ...strings) => {
  let sum = 0;
  for (const string of strings) {
    if (string === " ") {
      //!string
      console.log("There is empty string");
      break;
    } else {
      cbFunction();
    }
  }
};

const cb = () => {
  console.log("I am a callback function, All not empty");
};

// checkInput(cb, "Hello", " ", "12", "adsfa", "Not empty");
checkInput(
  () => {
    console.log("I am a callback function, All not empty");
  },
  "Hello",
  "ahmed",
  "12",
  "adsfa",
  "Not empty"
);
