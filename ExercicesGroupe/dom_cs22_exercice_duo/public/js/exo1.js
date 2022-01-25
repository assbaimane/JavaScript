// Exo Counter
let btnCounter = document.getElementsByClassName("btn")[0];
let spanCounter = document.getElementsByTagName("span")[0];

btnCounter.addEventListener("click", () =>{
    spanCounter.textContent = Number(spanCounter.textContent) + 1;
}); 

//Exo Move Square
let parentSquare = document.querySelector("#parent-square");
let square = document.querySelector("#square");
square.addEventListener("click",()=>{
        square.classList.toggle("on");
        square.classList.toggle("off");
        square.style.color = "white";
        square.style.fontWeight = "bolder";
        square.style.fontStyle = "italic";
        if (square.classList == "on") {
            square.textContent = "ON"
        }
        else{
            square.textContent = "OFF"
        }
});


// Exo Number Titles
let titres = document.querySelectorAll("h2");
let chiffre = 1
let flag = true;
function numeroter () {
    if (flag){
        titres.forEach(element => {
            element.innerText = chiffre + ". " + element.innerText;
            chiffre++
            flag = false;
        })
        chiffre = 1;
    }
    else{
        titres.forEach(element => {
            element.innerText = element.innerText.split(".")[1];
            flag = true;
        })
    }
};

document.addEventListener("keydown", (event) => {
    if (event.key === "6") {
        numeroter();
    }
})


//Exo Multi Click
let multiSquare = document.querySelector("#multi-click");
let click = 1;
function squareToCircle(){
    if (click == 1){
        multiSquare.style.borderRadius = "50%";
        click ++;
    }
    else if(click == 2){
        multiSquare.style.backgroundColor = "red";
        click ++;
    }
    else{
        multiSquare.style.borderRadius = "0%";
        multiSquare.style.backgroundColor = "white";
        click = 1;
    }
}
multiSquare.addEventListener("click",squareToCircle);


// Exo Set Color
let inputColor = document.getElementById("pick-color");
let paragraphe = document.getElementById("para");
function updateFirst() {
    inputColor.defaultColor = inputColor.value;
};
inputColor.addEventListener("click", updateFirst);
inputColor.addEventListener("change", () => {
    paragraphe.style.color = inputColor.value;
});