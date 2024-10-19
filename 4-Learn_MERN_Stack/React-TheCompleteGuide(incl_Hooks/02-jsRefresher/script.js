// class Human {
//   constructor() {
//     this.gender = "male";
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// // const human = new Human();
// // human.printGender();

// class Person extends Human {
//   constructor() {
//     super();
//     this.name = "Ahmed";
//     this.gender = "female";
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// const ahmed = new Person();
// ahmed.printGender();
// ahmed.printMyName();

/* another js generartion*/
// class Human {
//   constructor() {
//     this.gender = "male";
//   }
//   printGender = () => {
//     console.log(this.gender);
//   };
// }

// class Person extends Human {
//   name = "Ahmed";
//   gender = "female";

//   printMyName = () => {
//     console.log(this.name);
//   };
// }

// const ahmed = new Person();
// ahmed.printGender();
// ahmed.printMyName();

/* Spread & rest operators  */

// rest operator

// const nums = [1, 2, 3];
// const newNumbers = [...nums, 4];

// console.log(newNumbers);

// spread split between the object properites
// const person = {
//   name: "Ahmed",
//   country: "Egypt",
//   printName: () => {
//     console.log("hELLO");
//   },
// };

// const newPerson = {
//   ...person,
//   age: 21,
// };

// console.log(person.printName);
// console.log(newPerson);

// const filter = (...args) => {
//   return args.filter((el) => el === 1);
// };
// console.log(filter(1, 2, 3));

/*Destructuring: Easily extract array elements or objects properites and store them in variables */
/*
const numbers = [1, 2, 3, 4];
// [num1, num2] = numbers;
// console.log(num1, num2);
[num1, , num3] = numbers;
console.log(num1, num3);
console.log(numbers);
*/

/*Reference and primative types  */
// variables
// let var1 = 5;
// let var2 = var1;
// console.log(`var2 before change var1 is ${var2}`);
// var1 = 6;
// console.log(`var2 after change var1 is ${var2}`);

// // array
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(typeof arr1);
// console.log(`arr2 before change arr1 is ${arr2}`);

// arr1 = [1, 8];
// console.log(`arr2 after change arr1 is ${arr2}`);

// const person = {
//   name: "Ahmed",
// };
// const anotherPerson = person; // this is as apointer
// const anotherPerson = { ...person }; // this takes a copy

// console.log(`object before change ${anotherPerson.name}`);
// person.name = "Ahmed Kamal";
// console.log(`object After change ${anotherPerson.name}`);

// Todo: Add your logic
// should return an array of objects
let objectArray = [0];

function transformToObjects(numberArray) {
  objectArray = numberArray.map((num) => {
    return { val: num };
  });
}

transformToObjects([1, 2, 3]);
console.log(objectArray);
