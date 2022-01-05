// ### 1. Récupère et affiche le premier enfant de la dernière div
console.log(document.getElementsByTagName("div")[2].firstElementChild);

// ### 2. Récupère et affiche le dernier enfant de la dernière div
console.log(document.getElementsByTagName("div")[2].lastElementChild);

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
let i = document.getElementsByTagName("div")[2].children[1].children[0]
console.log(i);

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
let b = document.getElementsByTagName("div")[2].children[2].children[0]
console.log(b);

// ### 5. Affiche l'élément parent de l'élément i
console.log(i.parentElement);

// ### 6. affiche l'élément parent de l'élément b
console.log(b.parentElement);

// ### 7. affiche l'élément suivant le premier enfant de la dernière div

let lastChild =
console.log(document.getElementsByTagName("div")[2].firstElementChild.nextElementSibling);

