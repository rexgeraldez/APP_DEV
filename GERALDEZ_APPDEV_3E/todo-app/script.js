const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function updateDateTime() {
    const now = new Date();

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        });

    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

setInterval(updateDateTime, 1000);
updateDateTime();

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `
        <div class="task-left">
            <i class="fa-regular fa-circle check-btn"></i>
            <span>${taskText}</span>
        </div>

        <button class="delete-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;

    const checkBtn = li.querySelector(".check-btn");
    const taskSpan = li.querySelector("span");

    checkBtn.addEventListener("click", () => {

        taskSpan.classList.toggle("completed");

        checkBtn.classList.toggle("fa-circle");
        checkBtn.classList.toggle("fa-circle-check");
        checkBtn.classList.toggle("completed-icon");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
});