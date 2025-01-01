const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPPER = "PAPPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PALYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK},${PAPPER} or ${SCISSORS}?`,
    " "
  ).toUpperCase(); // '' empty string as a deflaut value
  // May be can use . operator for a primitive data type for a temporary time
  if (selection !== ROCK && selection !== PAPPER && selection !== SCISSORS) {
    alert(`Invalid choice, we chose ${ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

// const start = function () {
//   console.log("starting the game...");
// };

// direct execution
//startGame();
// console.log(typeof start);

// indirect execution

// const getComputerChoice =  () =>{
const getComputerChoice = function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPPER;
  } else {
    return SCISSORS;
  }
};

// ANother implementation for getWinner routine(function) with arrow function method and ternary operator
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPPER) ||
      (cChoice === PAPPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
};

/*
const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPPER) ||
    (cChoice === PAPPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};
*/
/* start of application as a main function*/
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting... ");
  const PlayerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, PlayerChoice);
  let message = `you picked ${
    PlayerChoice || DEFAULT_USER_CHOICE
  }, PC Picked ${computerChoice},therefore you had `;
  if (winner === RESULT_DRAW) {
    message += " a draw!";
  } else if (winner == RESULT_PLAYER_WINS) {
    message += " won!";
  } else {
    message += "lost!";
  }
  // console.log(message);
  alert(message);
  gameIsRunning = false;
});
// console.log(`Player choice is ${PlayerChoice}`);
// console.log(computerChoice);
// console.log(winner);
// console.log("GAME OVER");
// startGameBtn.addEventListener("click", start);

// not related to our game

/*
const sumUp = (a, b, c, d) => {};

sumUp(1, 5, 10, -3, 6, 10);
sumUp(1, 5, 10, -3, 6, 10, 25, 88);
*/

/*
// Sol1: forcing the user to pass parameter list into array 
const sumUp = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp([1, 5, 10, -3, 6, 10]));
*/

/*
// Sol1: Rest operators feature*/

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum, "Result after adding all numbers is ");
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

/*
 */
const subtractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  // return sum;
  resultHandler(sum);
};

// Alternative methos to the rest operators with arguments keyword

/*
const subtractUp = function (resultHandler) {
  let sum = 0;
  for (const num of arguments) {
    //don't use  that
    sum -= num;
  }
  resultHandler(sum);
};
 */

console.log(
  combine(
    showResult.bind(this, "Result after adding all numbers is:"),
    "ADD",
    1,
    5,
    10,
    -3,
    6,
    10
  )
);
console.log(
  combine(
    showResult.bind(this, "Result after adding all numbers is:"),
    "ADD",
    1,
    5,
    10,
    -3,
    6,
    10,
    25,
    88
  )
);
console.log(
  combine(
    showResult.bind(this, "Result after adding all numbers is:"),
    "SUBTRACT",
    1,
    10,
    15,
    20
  )
);
