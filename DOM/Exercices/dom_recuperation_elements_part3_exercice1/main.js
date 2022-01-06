// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// > Fais des console.log pour chaque exercice afin de montrer le résultat!
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let exo1 = document.querySelectorAll("h2");
exo1.forEach(element => { //j'aurais pu utiliser array.find aussi
    if (element.textContent == "Exercice"){
        console.log("Voici ma balise h2 contenant exercice "+ element.textContent)
    }
    else{
        console.log("Je n'ai pas trouvé de h2 avec exercice comme valeur")
    }
});

// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
let exo2 = exo1[0];
exo2.innerHTML= "Exercice 1";
console.log(exo2.textContent);

// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
let exo3 = exo2.nextElementSibling;
exo3.innerHTML = "Exercice 1";
console.log(exo3.textContent);


// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let exo4 = document.querySelector("section");
console.log(exo4.id)


// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let exo5 = document.querySelector("h1");
console.log(exo5.className, exo5.classList);


// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let exo6 = document.querySelectorAll("h1");
exo6.forEach(element => {
    console.log(element.className)
});

// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
let exo7 = document.querySelector("input");
console.log(exo7.attributes)

// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
let exo8 = exo7.attributes[0].value;
console.log(exo8);

// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
let exo9 = document.querySelector("input#inputPassword3");
exo9.type = "password";
console.log(exo9.type);


// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
let exo10 = document.querySelector("input");
console.log(exo10);
exo10.type = "color";
console.log(exo10.type);