// Exercice1
let input1 = document.getElementsByTagName("input")[0];
input1.addEventListener("focus",()=>{
    input1.style.backgroundColor = "blue";
})

//Exercice2
let input2 = document.getElementsByTagName("input")[1];
input2.addEventListener("focus",()=>{
    input2.style.backgroundColor = "blue";
})
input2.addEventListener("focusout",()=>{
    input2.style.backgroundColor = "white";
})

//Exercice3
let para1 = document.getElementsByClassName("premierParagraphe")[0];
let para2 = document.getElementsByClassName("secondParagraphe")[0];
let para3 = document.getElementsByClassName("dernierParagraphe")[0];
let btn = document.getElementsByClassName("buttonExo")[0];

btn.addEventListener("click",()=>{
    para1.innerText = para2.innerText;
    para3.innerText = para2.innerText;
})

//Exercice4
let btnRename = document.getElementsByClassName("btn")[1];
let nicolas = document.querySelector("#exo4");

btnRename.addEventListener("click",()=>{
    let recup = document.querySelectorAll("input")[2];
    nicolas.innerText = recup.value;
})






// // EXERCICE 1

// let exo1 = document.getElementsByTagName("input");
// exo1[0].addEventListener("focus",() =>{
//     exo1[0].style.backgroundColor = "blue";
// })


// //EXERCICE 2
// exo1[1].addEventListener("focus",()=>{
//     exo1[1].style.backgroundColor = "blue";
// })
// exo1[1].addEventListener("focusout",()=>{
//     exo1[1].style.backgroundColor = "white";
// })

// //EXERCICE 3
// let exo3para1 = document.getElementsByClassName("premierParagraphe")[0];
// let exo3para2 = document.getElementsByClassName("secondParagraphe")[0];
// let exo3para3 = document.getElementsByClassName("dernierParagraphe")[0];
// let exo3btn = document.getElementsByClassName("buttonExo")[0];
// exo3btn.addEventListener("click",()=>{
//     exo3para1.innerText = exo3para2.textContent; //innerHTML fonctionne aussi
//     exo3para3.textContent = exo3para2.textContent; //innerText et textContent
// });


// //EXERCICE 4
// let bool = true;
// let nicolas = document.getElementById("exo4")
// // console.log(nicolas.textContent);
// let btnexo4 = document.getElementsByTagName("button")[1];
// btnexo4.addEventListener("click",()=>{
//     let entree3 = document.getElementsByTagName("input")[2];
//     nicolas.textContent = entree3.value;
// });


//EXERCICE5
let btn5 = document.getElementsByTagName("button")[2];
let source = document.querySelector("img").previousElementSibling;
let monImg = document.querySelector("img");
btn5.addEventListener("click",()=>{
    let mytab = source.innerText.split(":");
    console.log(mytab[1])
    monImg.src = mytab[1];
});

//EXERCICE6
let img6 = document.querySelectorAll("img")[1];
let img62 = document.querySelectorAll("img")[2];
let lasource = "";
img6.addEventListener("click",()=>{
    lasource = img6.src;
})
img62.addEventListener("click",()=>{
    img62.src= lasource;
})

//EXERCICE7
let text1 = document.querySelectorAll(".btn")[3].previousElementSibling;
let text2 = document.querySelectorAll(".btn")[3].nextElementSibling;
let inverse = document.querySelectorAll(".btn")[3];
inverse.addEventListener("click",()=>{
    let tempo = text1.innerText;
    text1.innerText = text2.innerText;
    text2.innerText = tempo;
});