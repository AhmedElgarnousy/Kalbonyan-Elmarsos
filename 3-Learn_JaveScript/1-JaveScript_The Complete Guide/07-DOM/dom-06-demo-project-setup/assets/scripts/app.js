// const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
const addMovieModal = document.body.children[1];
// console.log(addMovieModal);
// const startAddMovieButton = document.querySelector("header").lastElementChild;
const startAddMovieButton = document.querySelector("header button");
// const backdrop = document.body.firstElementChild;
const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// const userInputs = addMovieModal.getElementsByTagName("input");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModel = document.getElementById("delete-modal");

movies = [];

const updateUI = () => {
  if (movies.lenght === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModel.classList.remove("visible");
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModel.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModel.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModel.querySelector(".btn--danger ");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModel.querySelector(".btn--danger "); /*
  confirmDeletionButton.removeEventListener(
    "click",
    deleteMovieHandler.bind(movieId)
    );
    */

  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, raing) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class = "movie-element_image"> 
    </div>
    <img src="${imageUrl} alt="${title}">
    <div class="movie-element_info">
    <h2>${title}</h2>
    <p> ${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInputs.value = "";
  }
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please Enter valid values (rating between 1 and 5)");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
