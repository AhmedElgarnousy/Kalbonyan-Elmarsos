/*
const movieList = document.getElementById("movie-list");

movieList.style.backgroundColor = "red";
// movieList.style[backgroundColor] = "red";
movieList.style.display = "block";

let person = {
  name: "Ahmed",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there");
  },
  1.5: "hello",
};

// if you accessed a property doesn't exist u will get undefined NOT Error
// undefined is a default value for uninitialized variables

// person.greet();
// person.isAdmin = undefined;

person.age = 21;
delete person.age;

let KeyName = "first name";

console.log(person[KeyName]);

console.log(person.age);
console.log(person[1.5]);

*/

// start of the demo  //
"use strict";
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  // means that when you don't pass any thing by default will be empty string
  const movieList = document.getElementById("movie-list");

  // which means there is no movie
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filterdMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filterdMovies.forEach((movie) => {
    const movieEl = document.createElement("li");

    const { info, ...otherProps } = movie; // destructuring the argument movie object
    console.log(otherProps);

    // const { title } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // let text = getFormattedTitle.call(movie) + " - "; // you could use a movie.getFormattedTitle()
    let text = getFormattedTitle.apply(movie) + " - "; // you could use a movie.getFormattedTitle()

    // let text = movie.getFormattedTitle() + " - ";
    // let text = info.title + " - ";
    // let text = movie.info.title + " - ";

    for (const key in info) {
      // for (const key in movie.info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
        // text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    // movieEl.textContent = movie.info.title + " - " + movie.info[extraName];
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      // title,
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    /* 
    // a shorter syntax
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },*/
    getFormattedTitle: function () {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  // console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
