let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*
// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
let elements = document.querySelectorAll("div#liste-soft-skills > h2");


// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
let i = 0;

for (const key in softSkills) {
    elements.forEach(element => {
        console.log("On cherche la correspondance de : " + key);
        if (key == element.textContent){
            element.textContent += " : " + softSkills[key];
            console.log("Trouvé ! : " + element.textContent)
        }
        else{
            // console.log("Something went wrong");
        }
    });
}
console.log("______________________________");
// console.log("Résultat de la valeur de mes titres maintenant :) : " + elements[0].textContent + elements[1].textContent + elements[2].textContent + elements[3].textContent)

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir
console.log("EXERCICE 3");
// let ola = "Bonjour";
// console.log(ola.length);
// ola = ola.substring(ola.length-3,ola.length-1);
// console.log(ola);

elements.forEach(element => {
    let pourcentage = Number(element.textContent.substring(element.textContent.length-3,element.textContent.length-1));
    if (pourcentage > 50){
        element.style.backgroundColor = "green";
        element.style.color = "white";
    }
    else if (pourcentage == 100){
        element.style.backgroundColor = "gold";
    }
    else if (pourcentage < 50 ){
        element.style.backgroundColor = "red";
    }
    else{}
});






