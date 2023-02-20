/*
class Person {
  name = "Ahmed";

  // this is a special method called a constructor
  constructor() {
    this.age = 30;
  }
  greet() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
  }
}

const person = new Person();
person.greet();
*/

function Person() {
  // this function is called a constructor function
  // new keyword do is the that create an empty object called this and return it

  // this = {};
  this.name = "Ahmed";
  this.age = 30;
  this.greet = function () {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
  };
  // return this ;
}

const person = new Person();
person.greet();

// console.log(person.toString());
console.log(person);
console.log(person.__proto__.__proto__);
