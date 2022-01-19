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
            // const todoObject ={
            //     taskName: taskInput.value,
            //     isDone: false
            // }
            this.display();
            taskInput.value = "";
        }
    }

    manageTaskButton(target){
        if (target.classList.contains("done")){
            this.done(target);
        }
        else if(target.classList.contains("save")){
            this.renameTask();
        }
        else if(target.classList.contains("del")){
            this.removeOneTask();
        }
    }

    renameTask(){
        console.log("renomme une tache")
    }
    removeOneTask(target){
        console.log("supprime une tache")
        this.ulElement.removeChild(target);
        this.display();
    }
    done(target){
        console.log("tache classé comme faite ")
        target.parentElement.parentElement.classList.add("checked")
        console.log(target.parentElement)
    }

    removeAllTasks(){
        console.log("en train deffacer toutes les taches")
        let children = Array.prototype.slice.call(this.ulElement.children);
        children.forEach(element => {
            this.ulElement.removeChild(element);
        });
    }
    display(){
        // Create element to display
        let newTask = document.createElement("li");
        let span = document.createElement("span");
        let doneButton = document.createElement("i");
        let saveButton = document.createElement("i");
        let delButton = document.createElement("i");

        // Set attribute to these elements
        newTask.textContent = taskInput.value;
        newTask.classList.add("d-flex","justify-content-between");
        doneButton.classList.add("fas","fa-check-circle","done");
        saveButton.classList.add("fas","fa-save","save");
        delButton.classList.add("fas","fa-trash","del");

        // Give them a position and make them appear
        span.appendChild(doneButton);
        span.appendChild(saveButton);
        span.appendChild(delButton);
        newTask.appendChild(span);
        this.ulElement.appendChild(newTask);
    }
}


export {Todo_Class}