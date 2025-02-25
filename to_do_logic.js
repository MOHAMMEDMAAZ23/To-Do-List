const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

// Function to update task counters
function updateCounters() {
    const totalTasks = listContainer.getElementsByTagName("li").length;
    const completedTasks = listContainer.querySelectorAll(".completed").length;
    
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = totalTasks - completedTasks;
}

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add task content with edit and delete buttons
    li.innerHTML = `
        <label>
            <input type="checkbox" class="task-checkbox">
            <span>${task}</span>
        </label>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    // Append to list
    listContainer.appendChild(li);

    // Clear input box
    inputBox.value = "";

    // Update counters
    updateCounters();

    // Handle checkbox click to mark as completed
    const checkbox = li.querySelector(".task-checkbox");
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("completed"); // Just apply the class now
        } else {
            li.classList.remove("completed");
        }
        updateCounters();
    });
    

    // Handle delete button
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        updateCounters();
    });

    // Handle edit button
    li.querySelector(".edit-btn").addEventListener("click", function () {
        const newTask = prompt("Edit your task:", task);
        if (newTask) {
            li.querySelector("span").textContent = newTask;
        }
    });
    
}
