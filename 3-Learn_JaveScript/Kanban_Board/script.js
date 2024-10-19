/*
<div class="task">
        <input type="text" id="task" placeholder="Task 01" />
      </div> */

const notStartedBtn = document.getElementById("not-startedBtn");
const inProgressBtn = document.getElementById("in-progressBtn");
let completedBtn = document.getElementById("completedBtn");

const notStartedList = document.getElementById("not-started");

function addTask() {
  let taskEl = document.createElement("div");

  taskEl.innerHTML = `<div class="task">
  <input type="text" id="task" placeholder="Task 01" />
  </div> `;
  notStartedList.append(taskEl);
  // notStartedList.appendChild(taskEl);
}

notStartedBtn.addEventListener("click", addTask);
inProgressBtn.addEventListener("click", addTask);
completedBtn.addEventListener("click", addTask);
