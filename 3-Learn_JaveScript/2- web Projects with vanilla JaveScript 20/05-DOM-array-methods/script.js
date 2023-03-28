const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("adouble");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];
getRandomUser();
getRandomUser();
getRandomUser();
// feteh random user and add money
/*
function getRandomUser() {
  // fetch("https://randomuser.me/api").then((response) => response.json()).then(data => );
  // but with async func u don't have to chain with then method
}
*/
async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json(); // that return a promise as well so u have to await that

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// add new object to data array
function addData(obj) {
  data.push(obj);
}
// Event Listerners
// addUser.addEventListener("click", addUser);
