// ### 1. Affiche le h3 qui est le premier enfant de la div content
let exo1 = document.getElementsByTagName("div")[0].firstElementChild;
console.log(exo1);


// ### 2. Affiche le titreNiv3
let exo2 = document.getElementsByTagName("div")[0].children[5];
console.log(exo2);


// ### 3. Affiche l'élément qui précède le titreNiv3
let exo3 = exo2.previousElementSibling;
console.log(exo3);


// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
let exo4 = document.getElementsByTagName("div")[0].children[2].nextElementSibling;
console.log(exo4);


// ### 5. Affiche le parent des éléments ayant comme class "important" 
// let exo5 = document.getElementsByClassName("important");
// let tab = Array.from(exo5)

// tab.forEach(element => {
//     let response = element.parentElement;
//     console.log(response);
// });

//ou

let exo5 = document.getElementsByTagName("li")[0,1,2,3].parentElement;
console.log(exo5)


// ### 6. Affiche le premier enfant, du parent de "listElements"
let exo6 = document.getElementsByTagName("ul")[0].parentElement.firstElementChild;
console.log(exo6)


// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let exo7 = document.getElementsByTagName("li")[3].nextElementSibling;
console.log(exo7);


// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let exo8 = document.getElementsByTagName("p")[3].nextElementSibling.nextElementSibling;


// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let recupPrenom = document.getElementsByTagName("div")[0].children[10].children[1].children[0].parentElement.nextElementSibling;
console.log(recupPrenom);

// ### 10. En partant de Nicolas, affiche Primo


// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
let recupClass = document.querySelector(".grandParagraphe");
console.log(recupClass);


// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle
let mesLi = document.querySelectorAll("li");

mesLi.forEach(element => {
    console.log(element);
});