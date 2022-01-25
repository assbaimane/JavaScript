// Exo copy images
let parentMignon = document.querySelector("#mignon-container");
let buttonDbl = parentMignon.previousElementSibling;
function addImage(){
    let newImg = document.createElement("img");
    newImg.src = parentMignon.children[0].src;
    newImg.width = parentMignon.children[0].width;
    parentMignon.appendChild(newImg);
}
buttonDbl.addEventListener("click",addImage);


// Exo rm images
let manyMignons = document.getElementById("mignon2-container");
let newMignons = [];
manyMignons.addEventListener("click",(event) => {
    newMignons.push(event.target);
    manyMignons.removeChild(event.target);
    if (manyMignons.children.length == 0){
        setTimeout(() => {
            newMignons.forEach(element => {
                let newElement = document.createElement("img");
                newElement.src = element.src;
                newElement.width = element.width;
                manyMignons.appendChild(newElement);
                newMignons = [];
            });
        }, 1000);
    }
    else{}
});


//Exo creation d'une balise li
let newli2 = document.createElement("li");
newli2.textContent = "li num 2";
let list = document.querySelector("ul");
list.appendChild(newli2);
list.insertBefore(newli2, list.childNodes[2]);


// Exo ajout une tache
let taskList = document.querySelectorAll("ul")[1];
let submitBtn = document.querySelectorAll("button")[1];
let newTask = () => {
    let newLi = document.createElement("li");
    let task = document.querySelector("input");
    newLi.textContent = task.value;
    taskList.appendChild(newLi);
    taskList.insertBefore(newLi, taskList.childNodes[0]);
    task.value = "";
};
submitBtn.addEventListener("click", newTask);

let editBtn = document.querySelectorAll("button")[2];
