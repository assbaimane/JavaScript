import { Todo_Class } from "./class.js"

//------------ GLOBAL VALUES DECLARATION --------------
let taskInput = document.querySelector("#taskInput"); //needed in class.js
let addTaskButton = document.querySelector("#addTaskButton");

let finishCategory = document.querySelector("#finishCategory");

let toDoCategory = document.querySelector("#toDoCategory");
let allCategory = document.querySelector("#allCategory");

let clearButton = document.querySelector(".clearButton");
let taskList = document.querySelector("#taskList");
let myTodoList = new Todo_Class(taskList);

// Add Task event (add button || enter key)
addTaskButton.addEventListener("click", () => { myTodoList.createNewTask() });
document.querySelector("body").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myTodoList.createNewTask();
    }
});

// Task buttons management (done/rename/delete)
document.querySelector("body").addEventListener("click", (event) => { myTodoList.manageTaskButton(event.target) })

// Remove task by dblClick
let taskChild = Array.prototype.slice.call(taskList.children);;
taskChild.forEach(element => {
    element.addEventListener("dblclick",myTodoList.removeOneTask(element))
});

//Remove AllTask
clearButton.addEventListener("click", () => { myTodoList.removeAllTasks() })

// Trim and display by category
finishCategory.addEventListener("click", () => {
    console.log("hello j'essaye de trier les elements finis")
    let liList = document.querySelectorAll("li")
    liList.forEach(element => {
        if (element.classList.contains("checked") === false) {
            element.classList.replace("d-flex", "d-none");
            // element.style.display = "none"
        } else {
            element.classList.replace("d-none", "d-flex");

        }
    })
});
toDoCategory.addEventListener("click", () => {
    let liList = document.querySelectorAll("li");
    liList.forEach(element => {
        if (element.classList.contains("checked")) {
            element.classList.replace("d-flex", "d-none");
            // element.style.display = "none"
        } else {
            element.classList.replace("d-none", "d-flex");
        }
    })
});
allCategory.addEventListener("click", () => {
    let liList = document.querySelectorAll("li");
    liList.forEach(element => {
        element.classList.replace("d-none", "d-flex");
    })
});