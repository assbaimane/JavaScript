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
firstInput.value