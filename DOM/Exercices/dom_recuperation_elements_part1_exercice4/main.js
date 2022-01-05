// ### 1. Affiche le contenu textuel du second h1
let h1 = document.getElementsByTagName("h1")[1].textContent;
console.log(h1);


// ### 2. Affiche le contenu textuel du dernier li
let lastLi = document.getElementsByTagName("li")[3].textContent;
console.log(lastLi);


// ### 3. Affiche le contenu textuel du premier p en majuscule
let firstP = document.getElementsByTagName("p")[0].textContent;
console.log(firstP.toUpperCase());


// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule
let liste = document.getElementsByTagName("li");

let li = Array.from(liste);

li.forEach(element => {
    console.log(element.textContent.toUpperCase());
});