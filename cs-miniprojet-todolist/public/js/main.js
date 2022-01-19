import {Todo_Class} from "./class.js"

//------------ GLOBAL VALUES DECLARATION --------------
let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");

let finishCategory = document.querySelector("#finishCategory");
let toDoCategory = document.querySelector("#toDoCategory");
let allCategory = document.querySelector("#allCategory");

let clearButton = document.querySelector(".clearButton");
// let listeTache = document.querySelector(".listeTache");
// let p = document.querySelector("p");
// let doneButton = document.querySelector("button .done");
// let saveButton = document.querySelector("button  .save");
// let delButton = document.querySelector("button .del");


let taskList = document.querySelector("#taskList");

let myTodoList = new Todo_Class(taskList);
addTaskButton.addEventListener("click",()=>{myTodoList.createNewTask()});