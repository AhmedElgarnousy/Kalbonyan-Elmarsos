const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const counter = document.getElementById("counter");
const totalPrice = document.getElementById("tot-price");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;
// const ticketPrice = parseInt(movieSelect.value);

console.log(ticketPrice);
// console.log(typeof ticketPrice);

populateUI();

// save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//  Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // copy selected seats into arr
  // Map through array
  // return a new array indexes
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  counter.innerText = selectedSeatsCount;
  totalPrice.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localStorage and populate UI
function populateUI() {
  // pull out these selected seats from local storage
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats);

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    // means that is not in the localstorage
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// movie select event
movieSelect.addEventListener("change", (e) => {
  console.log(e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  ticketPrice = +e.target.value;
});

// container event listener
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
