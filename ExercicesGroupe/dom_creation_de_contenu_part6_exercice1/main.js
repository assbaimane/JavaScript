// # 1. 
// - Récupère la div dont l'id est #content
// - Ajoute un h2 dedans
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 
let div = document.querySelector("#content");
let h2 = document.createElement("h2");

div.appendChild(h2);
h2.innerText = "Part 6 - Exercice 1";

// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2
let p = document.createElement("p");
let textp = "Lorem ipsum dolor sit amet"
div.appendChild(p).before;

// # 3.
// - Créer un h1 
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
// - Place le en premier enfant de la div #content
let h1 = document.createElement("h1");
h1.innerText = "Le DOM - Création de HTML";
div.prepend(h1);

// # 4.
// - Prend le contenu de la div #content
// - Copie le dans la div #secondaire
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire
let second = document.getElementById("secondaire")
second.innerHTML = div.innerHTML

let replaceText = document.getElementsByTagName("h2")[1].textContent = "Part 6 - Exercice 2"

// # 5.
// - Créer une nouvelle div #matiere
// - Créer une liste ordonnée des 3 dernières choses que tu as appris
let matiere = document.createElement("div")
matiere.setAttribute("id", "matiere")

let newM = document.createElement("ol")
let elem1 = document.createElement("li")
let elem2 = document.createElement("li")
let elem3 = document.createElement("li")
let body = document.body
elem1.textContent = "createElement"
elem2.textContent = "foreach"
elem3.textContent = "eventListener"

newM.appendChild(elem1)
newM.appendChild(elem2)
newM.appendChild(elem3)

body.appendChild(newM)