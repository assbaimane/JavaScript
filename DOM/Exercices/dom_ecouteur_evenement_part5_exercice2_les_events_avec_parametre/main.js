// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"
// > Event Target
// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !
let div = document.querySelector("#content");
div.addEventListener("click",(e)=>{
    console.log(e.EventTarget)
});

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;
let go = document.querySelector("button");
function hasard(){

}
