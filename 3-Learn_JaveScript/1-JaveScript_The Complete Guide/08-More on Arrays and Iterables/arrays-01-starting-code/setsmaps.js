// const ids = new Set([1, 2, 3]);
const ids = new Set(["Hi", "from", "set!"]);

// ids.add(2);
// if (ids.has("Hi")) {
//   ids.delete("Hi");
// }
// // for (const entry of ids.entries()) {
// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: "Ahmed" };
// const person2 = { name: "Mohaned" };

// const personData = new Map([[person1, [{ data: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ data: "two weeks ago", price: 100 }]);
// console.log(personData);
// console.log(personData.get(person1));

// // for (const entry of personData.entries()) {
// for (const [key, value] of personData.entries()) {
//   // console.log(entry);
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

let person = { name: "Max" };

const persons = new WeakSet();
persons.add(person);
