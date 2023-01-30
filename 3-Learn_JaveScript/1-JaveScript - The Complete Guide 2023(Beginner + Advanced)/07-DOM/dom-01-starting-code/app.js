const h1 = document.querySelector("#main-title");

h1.textContent = "some new title";
h1.style.color = "white";
h1.style.backgroundColor = "black";

// const listItemElements = document.querySelectorAll("li");
const listItemElements = document.getElementsByTagName("li");

const body = document.body;

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
