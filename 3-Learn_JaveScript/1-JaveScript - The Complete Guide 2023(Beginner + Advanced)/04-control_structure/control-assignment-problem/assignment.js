const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

/*
Assignment1: Write code that shows an alert (with any message) when that number is greater than 0.7
if (randomNumber > 0.7) {
  alert("Num is greater than 0.7");
}
*/
const arrayOfnums = [0, 2, 4, 6, 8, 10];
/*
Assignment2:Create an array of numbers (any numbers of your choice) and loop through
the array in two different ways - outputting the numbers inside of the loop.

// way 1
for (let i = 0; i < arrayOfnums.length; i++) {
  console.log(arrayOfnums[i]);
}

// way 2
for (const element of arrayOfnums) {
  console.log(element);
}
*/

/* 
Assignment3: Adjust one of the loops from the last task 
such that it actually starts at the end (last element) 
of the array and loops to the first element.

for (let i = arrayOfnums.length; i > 0; i--) {
  console.log(arrayOfnums[i]);
}
*/

/*
Assignment1: Create another random number (in a separate constant) 
and show an alert in two different scenarios: 
Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
*/
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (
  (randomNumber > 0.7 && randomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber <= 0.2
) {
  alert(" ur condions are achieved ");
}
