import {Todo_Class} from "./class.js"

//------------ GLOBAL VALUES DECLARATION --------------
let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");

let finishCategory = document.querySelector("#finishCategory");
let toDoCategory = document.querySelector("#toDoCategory");
let allCategory = document.querySelector("#allCategory");

let clearButton = document.querySelector(".clearButton");
let taskList = document.querySelector("#taskList");
let myTodoList = new Todo_Class(taskList);



// Add Task event management
addTaskButton.addEventListener("click",()=>{myTodoList.createNewTask()});
document.querySelector("body").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      myTodoList.createNewTask();
    }
});

// Remove task by dblClick
taskList.addEventListener("dblclick",(event)=>{
    myTodoList.removeOneTask(event.target)
});

//Remove AllTask
clearButton.addEventListener("click",()=>{myTodoList.removeAllTasks()})

// Change state in done when first task button is pressed
document.querySelector("body").addEventListener("click",(event)=>{myTodoList.manageTaskButton(event.target)})
// doneButton.addEventListener("click",()=>{myTodoList.done(event)});

// Save button when second task button is pressed

// Delete button when third task button is pressed