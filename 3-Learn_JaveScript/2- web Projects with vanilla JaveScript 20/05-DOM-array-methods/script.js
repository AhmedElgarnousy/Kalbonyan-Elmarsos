const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
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

  updateDOM();
}

function doubleMoney() {
  //Map loops over the array and run a function on each element like forEach does and returns an array from it
  data = data.map((user) => {
    return {
      ...user,
      money: user.money * 2,
    };
  });
  updateDOM();
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// filter return an array doesn't change the main array
function showMillionaires() {
  data = data.filter((user) => {
    return user.money > 1000000;
  });
  updateDOM();
}
function calculateWealth() {
  const wealth = data.reduce(
    (accumulator, currentUser) => accumulator + currentUser.money,
    0
  );
  // console.log(wealth);
  const wealthEle = document.createElement("div");
  wealthEle.classList.add("wealth");
  wealthEle.innerHTML = `<span>Total Wealth</span> ${formatMoney(wealth)}`;
  main.appendChild(wealthEle);
  // updateDOM();
}

function updateDOM(providedData = data) {
  //  set default val in ES6
  //Clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person"); // class name to style it in css
    element.innerHTML = `<strong> ${item.name} </strong> ${formatMoney(
      item.money
    )}`;

    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

function formatMoney(num) {
  return "$ " + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67;
}

// Event Listerners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
