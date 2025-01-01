// const numbers = [1, 2, 3];
// console.log(numbers);

/* Sometimes you need it create arrays with ways dynamiclly   */

// const moreNumber = Array("Hi", "welcome"); // []
// console.log(moreNumber);

// const yetmoreNumbers = Array.of(1, 2); // []
// console.log(yetmoreNumbers);

/* Array.from() Allows you to create an array-like object or iterables to an array */

// const moreNumbers = Array.from("Hi");
// console.log(moreNumbers);

/*
const listItems = document.querySelectorAll("li");
console.log(listItems); // You will get a NodeList because has  indexes and lenght

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["cooking", "sports"];
const personalData = [30, "max", { moreDetails: [] }];

const AnalyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of AnalyticsData) {
  for (const dataPoints of data) {
    console.log(dataPoints);
  }
}

console.log(personalData[0]);
console.log(AnalyticsData[0][0]);

*/
/*
const hobbies = ["sports", "cooking"];

hobbies.push("Reading");
hobbies.unshift("Coding");
const poppedHobbies = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "coding";
// hobbies[5] = "Reading"; // Rarely used

hobbies.splice(1, 0, "Good Food"); // 0(index) 0(don't delete any item, "good food" (add your inserting items))
console.log(hobbies);

hobbies.splice(-1);
console.log(hobbies);
*/
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
/* 

// console.log(testResults.slice());
// console.log(testResults.slice(2, 3));

// const storedTestResults = testResults; // the name of the array is a pointer to the array

// testResults.push("pushed");

// const storedTestResults = testResults.slice(-3, 4);
// console.log(storedTestResults, testResults); // arrays are reference values the same memory locations with 2 names

const storedTestResults = testResults.push(2);
// const storedTestResults = testResults.concat([1, 2]);

console.log(storedTestResults, testResults);

console.log(`the first index of 1.5 is ${testResults.indexOf(1.5)}`);
console.log(`the last index of 1.5 is ${testResults.lastIndexOf(1.5)}`);

*/

// To solve this previous issue that indexOf() Dose't work fine with reference values
/*
const personData = [{ name: "Ahmed" }, { name: "Mohaned" }];
// console.log(personData.indexOf({ name: "Mohaned" })); // this doesn't work

const Mohaned = personData.find((person, idx, persons) => {
  // js which calls this anymonous function
  return person.name === "Mohaned";
  // return person.name === "Mohaned";
});

// find doesn't create a copy,  works with the same object
Mohaned.name = "Mostafa";
console.log(Mohaned, personData);

const AhmedIndex = personData.findIndex((person, idx, persons) => {
  // js which calls this anymonous function
  return person.name === "Ahmed";
});

console.log(AhmedIndex);

console.log(testResults.includes(10.99));

*/
/*
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
  //   taxAdjustedPrices.push(price * (1 + tax));
  // }
  
  prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
  });
  console.log(taxAdjustedPrices);
  */
/*
 
 const prices = [10.99, 5.99, 3.99, 6.59];
 const tax = 0.19;
// create a new brand array and prices still untouched
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});
console.log(prices, taxAdjustedPrices);
*/

/* 
// exersise code solution 
function transformToObjects(numberArray) {
  const arrayOfObject = numberArray.map((numArray, idx, numArrays) => {
    const objectArr = { index: idx, val: numArray };
    return objectArr;
  });
  
  return arrayOfObject;
}
console.log(transformToObjects([1, 2, 3]));
*/
const prices = [10.99, 5.99, 3.99, 6.59];
// // const sortedPrices = prices.sort(); // doesn't work because it soretd them as strings

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);
// console.log(sortedPrices.reverse());

/*
const filteredArray = prices.filter((price, idx, prices) => {
  // prices array still untouched
  return price > 6; // if this true will return price otherwise will dropped it
});
*/

// shorter expression and that why arrow function is a great addition to js.
// const filteredArray = prices.filter((price) => {
//   price > 6; // this expression will return by the function automatically
// });
// console.log(filteredArray);

/*
// for (const price of prices) {
//   sum += price;
// }
  
let i;
let sum = 0;
for (i = 0; i < 4; i++) {
  sum += prices[i];
}
console.log(sum);
*/

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });

// reduce() reduces the array to simpler value for ex sum of the array nums or any thing
/*
const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
  return preValue + curValue;
}, 0); // 0 is initial value and an optional parameter

*/
/*
// shorter exepresion
const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0);
console.log(sum);
*/
/**
 * 
const data = "newyork;10.99;2000";
const transformedData = data.split(";");

console.log(transformedData);

const nameFragments = ["Ahmed", "kamal"];
const name = nameFragments.join(" ");
console.log(name);

const copiedNameFragments = [...nameFragments];
console.log(copiedNameFragments);

console.log(Math.min(-3, 1, 2));
console.log(Math.min(...prices));

const persons = [
  { name: "Ahmed", age: 21 },
  { name: "mohaned", age: 14 },
];
*/

// const copiedPersons = [...persons];
/*
const copiedPersons = [
  ...persons.map((person) => ({ name: person.name, age: person.age })), // this will create a new object with anew places in memory
]; // if you return an object{} u have to put extra () to tell js that not a function boby
*/
// u can ommit the spread operator because map() return an array
// const copiedPersons = persons.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));
// persons.push({ name: "mostafa", age: 26 });

// persons[0].age = 50; // because objects are reference the value and you copied the array
// console.log(persons, copiedPersons);

// const nameData = ["Ahmed ", "kamal", "Mr", 21];

// // const firstName = nameData[0]
// // const secondName = nameData[1]

// // Destructuring the array  feature
// const [firstName, secondName, ...otherInfo] = nameData;

// console.log(firstName, secondName, otherInfo);
