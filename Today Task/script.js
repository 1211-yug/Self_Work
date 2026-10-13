const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.done ? "done" : ""}`;

    li.innerHTML = `
      <span class="task-text" onclick="toggleTask(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})" title="Delete">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text: text, done: false });
  taskInput.value = "";
  renderTasks();
}

window.toggleTask = function(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
};

window.deleteTask = function(index) {
  tasks.splice(index, 1);
  renderTasks();
};

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
