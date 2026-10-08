const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

const clearBtn = document.getElementById("clearBtn");


// Add a new task
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    li.className = "task";

    li.innerHTML = `
        <div class="task-left">

            <input type="checkbox" class="task-checkbox">

            <span class="task-text">
                ${taskText}
            </span>

        </div>

        <button class="delete-btn">
            Delete
        </button>
    `;

    // Add task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    updateTaskCount();
}


// Handle checkbox and delete button
taskList.addEventListener("click", function(event) {

    // Checkbox clicked
    if (event.target.classList.contains("task-checkbox")) {

        const taskText =
            event.target.nextElementSibling;

        taskText.classList.toggle("completed");

        updateTaskCount();
    }


    // Delete button clicked
    if (event.target.classList.contains("delete-btn")) {

        const task = event.target.parentElement;

        task.remove();

        updateTaskCount();
    }

});


// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);


// Add task when Enter is pressed
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Clear all tasks
clearBtn.addEventListener("click", function() {

    taskList.innerHTML = "";

    updateTaskCount();

});


// Update task statistics
function updateTaskCount() {

    const tasks =
        document.querySelectorAll(".task");

    const completed =
        document.querySelectorAll(".task-checkbox:checked");

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completed.length;
}