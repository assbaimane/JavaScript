// > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// > Avec la methode removeChild()
// ## 1. 
// - Utilise le second bouton pour supprimer le premier enfant
let butn1 = document.getElementsByTagName("input")[0];
let btn2 = document.getElementsByTagName("input")[1];
let btn3 = document.getElementsByTagName("input")[2];
let div1 = document.getElementsByTagName("div")[0];
let ul1 = document.getElementsByTagName("ul")[0];

function deletefirstchild(){
    ul1
}
// ## 2. 
// - Utilise le second bouton pour supprimer le dernier enfant 
// ## 3 .
// - Utilise le dernier bouton pour supprimer un enfant au hasard


// > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// > Avec la methode replaceChild()


// ## 4 . Dans la partie Remplacement de ton HTML
// - Créer un élément li dans ton fichier JS
// - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4
function replace(){
    ul2.replaceChild(newli, ul2.children[1])
}
btn4.addEventListener("click",replace)

// ## 5. 
// - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5
let btn5 = document.getElementsByTagName("input")[4];
let newli2 = document.createElement("li");
let replaceValue = document.getElementById("replaceValue")
