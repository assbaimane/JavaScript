class Todo_Class{
    constructor(parentList){
        this.ulElement = parentList;
    }

    createNewTask(){
        console.log("en train de créer une nouvelle tache")
        if(taskInput.value == ""){
            alert("You didn't enter anything ! Try again !")
        }
        else{
            let todoObject ={
                taskName: taskInput.value,
                isDone: false
            }
            this.display();
            taskInput.value = "";
        }
    }
    removeOneTask(e){
        console.log("hey")
        this.ulElement.removeChild(e.target);
        this.display();
    }
    removeAllTasks(){
        console.log("en train deffacer")
        let children = Array.prototype.slice.call(this.ulElement.children);
        children.forEach(element => {
            this.ulElement.removeChild(element);
        });
    }
    done(){

    }
    display(){
        console.log("en train d'afficher")
        // Create element to display
        let newTask = document.createElement("li");
        let span = document.createElement("span");
        let doneButton = document.createElement("i");
        let saveButton = document.createElement("i");
        let delButton = document.createElement("i");

        // Set attribute to these elements
        newTask.textContent = taskInput.value;
        newTask.classList.add("d-flex","justify-content-between");
        doneButton.classList.add("fas","fa-check-circle");
        saveButton.classList.add("fas","fa-save");
        delButton.classList.add("fas","fa-trash");

        // Give them a position and make them appear
        span.appendChild(doneButton);
        span.appendChild(saveButton);
        span.appendChild(delButton);
        newTask.appendChild(span);
        this.ulElement.appendChild(newTask);
    }
}


export {Todo_Class}