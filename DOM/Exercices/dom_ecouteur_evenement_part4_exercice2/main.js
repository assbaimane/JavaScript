// # Exercice :
// >*En utilisant l'attribut style*
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let h1 = document.querySelector("h1");
function transformH1 (){
    h1.style.backgroundColor = "red"
    h1.style.color = "white"
}
h1.addEventListener("dblclick",transformH1);

// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let h3 = document.querySelector("h3");
function transformH3 (){
    h3.style.fontSize = "1em"
}
h3.addEventListener("mouseover",transformH3);

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let flag = false;
let p = document.querySelector("p");
function transformP (){
    if(flag){
        p.style.color = "black";
    }
    else{
        p.style.color = "gold";
        p.style.backgroundColor = "blue";
    }
    flag = !flag;
}

p.addEventListener("click",transformP,false);
p.removeEventListener("click",transformP,false);
