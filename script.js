let addButton = document.querySelector(".add-button");

let addTask = document.querySelector(".add-task");

let addTaskAddButton = document.querySelector(".add-task-add-button");

let input = document.querySelector(".input");

let todoList = document.querySelector(".todo-list");

addButton.addEventListener("click", () => {
    addTask.classList.add("flex");
})

let todos;

addTaskAddButton.addEventListener("click", () => {
    if (localStorage.getItem("to-dos") == null) {
       todos = "";
    } else {
        todos = localStorage.getItem("to-dos")  + ",";
    }
    todoList.innerHTML += "<p>" + input.value + "</p>";
    localStorage.setItem("to-dos", todos + input.value);
    input.value = "";
    addTask.classList.remove("flex");
})