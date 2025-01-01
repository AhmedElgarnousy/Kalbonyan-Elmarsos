/*
Create an array of numbers (of your choice) 
and perform three array operations on it: filter for numbers greater than 5, 
map every number to an object which holds the number on some property (e.g. "num") 
and reduce the array to a single number 
(the multiplication of all numbers).
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArr = arr.filter((element) => {
  return element <= 5;
});
console.log(filteredArr);

const transformedArr = arr.map((element, idx) => {
  const Obj = { num: element, index: idx };
  return Obj;
});
console.log(transformedArr);

let multipliedArr = 1;
const reduceddArr = arr.reduce((element) => {
  multipliedArr *= element;
  return multipliedArr;
});
console.log(reduceddArr);

/*Write a function ("findMax") which executes some 
logic that finds the largest number in a list of arguments. 
Pass the array from task 1 split up into multiple 
arguments to that function. */

/*
Tweak the "findMax" function such that it finds both the 
minimum and maximum and returns those as an array. 
Then use destructuring when calling the function to store 
the two results in separate constants.
*/

/*
Create a list (and possibly some surrounding logic) 
where you ensure that NO duplicate values can be added. 
Use whichever approach seems appropriate to you.
*/
