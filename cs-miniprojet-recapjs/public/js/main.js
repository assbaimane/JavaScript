
// EXERCICE 1 ______________ JAVASCRIPT 
let firstH2 = document.querySelector("h2");
firstH2.innerText = "Le titre modifié";
firstH2.style.color = "blue"
firstH2.classList.add("bg-light");


// EXERCICE 2 ______________ JAVASCRIPT 
let navBar = document.querySelector("nav");
let navButtons = document.querySelectorAll(".nav");
let allSection = document.querySelectorAll("section");
let section1 = document.querySelector("#Exo1");
let section2 = document.querySelector("#Exo2");
let section3 = document.querySelector("#Exo3");
let section4 = document.querySelector("#Exo4");
let section5 = document.querySelector("#Exo5");
let section6 = document.querySelector("#Exo6");
allSection.forEach(element => {
    element.style.display = "none";
});
navBar.addEventListener("click",(event)=>{
    if (event.target == navButtons[0]){
        allSection.forEach(element => {
            element.style.display = "none";
        });
        section1.style.display = "block";
    }
    else if (event.target == navButtons[1]){
        allSection.forEach(element => {
            element.style.display = "none";
        });
        section2.style.display = "block";
    }
    else if (event.target == navButtons[2]){
        allSection.forEach(element => {
            element.style.display = "none";
        });
        section3.style.display = "block";
    }
    else if (event.target == navButtons[3]){
        allSection.forEach(element => {
            element.style.display = "none";
        });
        section4.style.display = "block";
    }
    else if (event.target == navButtons[4]){
        allSection.forEach(element => {
            element.style.display = "none";
        });
        section5.style.display = "block";
    }
    else if (event.target == navButtons[5]){
        allSection.forEach(element => {
            element.style.display = "none";
        });
        section6.style.display = "block";
    }else{}
})


// EXERCICE 3 ______________ JAVASCRIPT 
let firstInput = document.querySelector("input");
let firstSpan = document.querySelector("span");
let goButton = document.querySelector(".go")
goButton.addEventListener("click",()=>{
    firstSpan.textContent = firstInput.value;
    firstInput.value = "";
})


// EXERCICE 4 ______________ JAVASCRIPT 
let changeButton = document.querySelector("#changePlace");
let nbClick = document.querySelectorAll("span")[1];
let boxMobile = document.querySelector(".rouge");
let box1 = document.querySelector("#source")
let box2 = document.querySelector("#destination");
let counter = 0;
changeButton.addEventListener("click",()=>{
    if (boxMobile.parentElement == box1){
        box2.appendChild(boxMobile);
    }
    else if(boxMobile.parentElement == box2){
        box1.appendChild(boxMobile);
    }else{}
    counter++;
    nbClick.innerText = counter;
});


// EXERCICE 5 ______________ JAVASCRIPT 
let addEgg = document.querySelector(".add")
addEgg.addEventListener("click",()=>{
    let newEgg = document.createElement("img");
    newEgg.src = "./public/img/oeuf.png";
    newEgg.style.width = "20px";
    addEgg.parentElement.appendChild(newEgg);
})

// EXERCICE 6 ______________ JAVASCRIPT 

//Niveau 1
let firstLevelInput1 = document.querySelector("#Exo6 input");
let firstLevelInput2 = document.querySelectorAll("#Exo6 input")[1];
let firstResult =document.querySelector("#addResult");
let equalButton = document.querySelector(".equal");
equalButton.addEventListener("click",()=>{
    firstResult.innerText = Number(firstLevelInput1.value) + Number(firstLevelInput2.value);
})

//Niveau 2________________________________________________________________________________________
let secondInput = document.querySelectorAll("#Exo6 input")[2];
let secondResult = document.querySelector("#calculResult");
let finalResult = document.querySelector("#calculResult span");
let calculator = document.querySelector(".calculette");
let equalCalculator = document.querySelector(".equ");
let inputValues = ""
function operationTrim(operator){
    inputValues = secondInput.value.split(operator);
    console.log(secondInput)
    inputValues[1] = inputValues[1].substring(0,inputValues[1].length-1);
    finalResult.textContent = Number(inputValues[0]) + Number(inputValues[1]);
}
calculator.addEventListener("click",(event)=>{
    // If an operation nutton is pressed
    secondInput.value = secondInput.value + event.target.textContent;
    console.log(secondInput.value);

    // If equal button is pressed
    if (event.target.classList.contains("equ")){
        console.log("etape1");
        // Trim wich kinda of operation it is 
        if(secondInput.value.includes("+")){
            console.log("C'est une addition");
            operationTrim("+");
            finalResult.textContent = Number(inputValues[0]) + Number(inputValues[1]);
        }else if(secondInput.value.includes("*")){
            operationTrim("*");
            finalResult.textContent = Number(inputValues[0]) * Number(inputValues[1]);
        }
        else if(secondInput.value.includes("-")){
            operationTrim("-");
            finalResult.textContent = Number(inputValues[0]) - Number(inputValues[1]);
        }
        else if(secondInput.value.includes("/")){
            operationTrim("/");
            finalResult.textContent = Number(inputValues[0]) / Number(inputValues[1]);
        }


        // Display result and clean input 
        console.log(finalResult.textContent)
        secondResult.textContent = secondInput.value + finalResult.textContent;
        secondInput.value = "";

    }
    // If deletion button is pressed
    else if(event.target.classList.contains("del")){
        secondInput.value = "";
        secondResult.textContent = "";
    }else{}
})