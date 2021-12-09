//_______________________ EXO 1 _________________________________

let monTab = ['pomme', 'fraise', 'melon', 'citron']

// Exo 1 Supprimer le dernier élément de l'array
monTab.pop();
console.log(monTab);

// Exo 2 Supprimer le premier élément de l'array
monTab.shift();
console.log(monTab);

// Exo 3 Ajouter un élément a la fin de l'array
monTab.push("orange");
console.log(monTab);

// Exo 4 Ajouter un élément au debut de l'array
monTab.unshift("pastèque");
console.log(monTab);

// Exo 5 Mettre le deuxième élément en majuscule 
monTab[1].toUpperCase();
console.log(monTab[1]);

// Exo 6 Changer l'ordre de l'array
monTab.reverse();
console.log(monTab);


//_______________________ EXO 2 _________________________________

let chiffres = [4, 5, 2, 1, 3]

// Exo 1 Première methode (Ordonner) *Resultat : 1, 2, 3, 4, 5*
chiffres.sort();
console.log(chiffres);

// Exo 2 Deuxième methode (Concaténer les chiffres en un string) *Resultat : 1-2-3-4-5*
chiffres.sort();
chiffres.join("-");
console.log(chiffres);

// Exo 4 Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
chiffres.split("-");

// Exo 5 Afficher l'array avec les chiffres ordonnées
console.log(chiffres);


//_______________________ EXO 3 _________________________________

let tableauvide = []

// Exo 1 Ajouez 10 élément dans votre array
let i = 0;
do{
    tableauvide.push(i);
} while (i<10)

// Exo 2 Affichez le contenu de l'array et sa taille
console.log(tableauvide);
console.log(tableauvide.length);

// Exo 3 Touvez l'index de chaque éléments
i = 0;
do{
    console.log(indexOf(tableauvide[i])+" "+tableauvide[i]+", ");
} while (i<10);

// CORRECTION
// tableauvide.forEach(element -> console.log(tableauvide.indexOf(element)));

// Exo 4 Utiliser une methode qui permet de supprimer un element grâce à l'index
tableauvide.splice(1,tableauvide.length);
console.log(tableauvide);

// Exo 5 Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
let girlpower = [Amanda, Isma, Jade, Imane];
let hasardindex = Math.random()* 4;
console.log(girlpower[hasardindex]);

// Exo 6 En une ligne supprimer 'Amanda' du tableau
tableauvide.splice(0,1);