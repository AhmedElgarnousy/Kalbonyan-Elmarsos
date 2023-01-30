/* 
Select this task (in two different ways at least!) 
and change the background-color to black, text-color to white.
*/

// const task1 = document.getElementById("task-1");
const task1 = document.querySelector("#task-1");

task1.style.backgroundColor = "Black";
task1.style.color = "white";

/*Change the document title (in <head></head>) to 
"Assignment - Solved!". Use two different ways for 
getting access to the <title> element: Via querySelector 
on document 
and via querySelector on the certain property you find in document. */

const docTitle1 = document.querySelector("title");
// docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector("title");

/*
Select the <h1> element on this page and change 
its text to "Assignment - Solved!". */

const h1 = document.getElementsByTagName("h1");
h1[0].textContent = "Assignment - Solved!";
