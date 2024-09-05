// const task = document.getElementById("task");
// const listOfTask = document.getElementsByClassName("list-container")[0];

// function submitTask() {
//   if (task.value.trim() == "") {
//     window.alert("Please! Enter the Task...");
//     return;
//   }

//   const newTask = document.createElement("div");
//   newTask.classList.add("task-item");

//   const isComplete = document.createElement("span");
//   isComplete.classList.add("task-checkbox");
//   const taskDes = document.createElement("span");
//   taskDes.classList.add("task-description");
//   const removeTask = document.createElement("span");
//   removeTask.classList.add("remove-task");

//   const isProgress = document.createElement("input");
//   isProgress.setAttribute("type", "checkbox");

//   isComplete.appendChild(isProgress);

//   taskDes.appendChild(document.createTextNode(task.value));

//   const remButton = document.createElement("button");
//   remButton.textContent = "Delete";
//   removeTask.appendChild(remButton);

//   newTask.appendChild(isComplete);
//   newTask.appendChild(taskDes);
//   newTask.appendChild(removeTask);

//   listOfTask.appendChild(newTask);

//   task.value = "";
// }

// listOfTask.addEventListener("click", function (e) {
//   const taskItem = e.target.closest(".task-item");

//   if (!taskItem) {
//     return;
//   }

//   if (e.target.classList.contains("task-description")) {
//     const checkbox = taskItem.querySelector(".task-checkbox input");
//     checkbox.checked = !checkbox.checked;

//     const taskDescription = taskItem.querySelector(".task-description");

//     if (checkbox.checked) {
//       taskDescription.classList.add("checked");
//     } else {
//       taskDescription.classList.remove("checked");
//     }
//   } else if (e.target.querySelector("input") && e.target.classList.contains("task-checkbox")) {
//     const checkbox = e.target.querySelector("input");
//     const taskDescription = taskItem.querySelector(".task-description");

//     if (checkbox.checked) {
//       taskDescription.classList.add("checked");
//     } else {
//       taskDescription.classList.add("checked");
//     }
//   } else if (
//     e.target.classList.contains("remove-task") ||
//     e.target.tagName === "BUTTON"
//   ) {
//     taskItem.remove();
//   }
// });



const task = document.getElementById("task");
const listOfTask = document.getElementsByClassName("list-container")[0];

function submitTask() {
  if (task.value.trim() === "") {
    window.alert("Please! Enter the Task...");
    return;
  }

  const newTask = document.createElement("div");
  newTask.classList.add("task-item");

  const isComplete = document.createElement("span");
  isComplete.classList.add("task-checkbox");
  const taskDes = document.createElement("span");
  taskDes.classList.add("task-description");
  const removeTask = document.createElement("span");
  removeTask.classList.add("remove-task");

  const isProgress = document.createElement("input");
  isProgress.setAttribute("type", "checkbox");

  isComplete.appendChild(isProgress);

  taskDes.appendChild(document.createTextNode(task.value));

  const remButton = document.createElement("button");
  remButton.textContent = "Delete";
  removeTask.appendChild(remButton);

  newTask.appendChild(isComplete);
  newTask.appendChild(taskDes);
  newTask.appendChild(removeTask);

  listOfTask.appendChild(newTask);

  task.value = "";
}

function updateTaskCompletion(taskItem, isChecked) {
  const taskDescription = taskItem.querySelector(".task-description");
  taskDescription.classList.toggle("checked", isChecked);
}

listOfTask.addEventListener("click", function (e) {
  const taskItem = e.target.closest(".task-item");

  if (!taskItem) {
    return;
  }

  const checkbox = e.target.closest("input[type='checkbox']");
  const taskDescription = e.target.closest(".task-description");

  if (checkbox) {
    const isChecked = checkbox.checked;
    updateTaskCompletion(taskItem, isChecked);
  } else if (taskDescription) {
    const checkbox = taskItem.querySelector(".task-checkbox input");
    checkbox.checked = !checkbox.checked;
    updateTaskCompletion(taskItem, checkbox.checked);
  } else if (
    e.target.classList.contains("remove-task") || 
    e.target.tagName === "BUTTON"
  ) {
    taskItem.remove();
  }
});
