let myObject = {
    nom: 'nicolas',
    age: 18,
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
let exo1 = document.querySelector("div#object");
let exo1_h1 = exo1.children[0];
let exo1_h2 = exo1_h1.nextElementSibling;
let myElements = [exo1_h1,exo1_h2];
console.log(myElements)

// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet
let exo2 = Object.keys(myObject);
console.log(exo2);

// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété
let exo3 = exo2;
exo3.forEach(element => {
    console.log(element);
});


// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
let exo4 = Object.values(myObject);
exo4.forEach(element => {
    console.log(element);
});

// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
let i = 0;
let exo5 = Object.values(myObject);
exo5.forEach(element => {
    console.log(i+"."+element);
    i++;
});

// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4
