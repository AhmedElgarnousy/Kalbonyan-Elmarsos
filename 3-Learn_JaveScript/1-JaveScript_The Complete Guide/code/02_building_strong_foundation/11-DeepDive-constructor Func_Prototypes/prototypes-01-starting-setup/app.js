/*
class AgedPerson {
  constructor() {
    console.log(this.name);
  }
  printAge() {
    console.log(this.age);
  }
}


class Person extends AgedPerson {
  name = "Ahmed";
  
  // this is a special method called a constructor
  constructor() {
    super();
    this.age = 30;
  }
  greet() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
  }
}
*/

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p);
// console.log(p.__proto__);

// p.describe = function () {
//   console.log("creating a person ");
// };
/*
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
Person.prototype = {
  printAge() {
    console.log(this.age);
  },
};

const p = new Person();
p.greet();

// console.log(person.toString());
console.log(p);
console.log(p.__proto__.__proto__);
console.log(p.__proto__ == Person.prototype); // true

 */

// console.log(Object);
// console.dir(p);
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// console.log(p);

const course = {
  // anew Object
  title: "javeScript - the complete guide ",
  rating: 5,
};

// console.log(course.__proto__);
// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course), // if u want to keep the original prototype and add something new u can use the spread operator
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

// const student = Object.create();

course.printRating();

const student = new Object({
  printProgress: function () {
    console.log(this.progress);
  },
});
console.log(student);
