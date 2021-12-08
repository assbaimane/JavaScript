//_______________________ EXO 1 _________________________________

// Exo 1 Créer une variable qui reçois un array avec 3 éléments
let codingschool = ["coding20", "coding21", "coding22"];

// Exo 2 Afficher les éléments de l'array
console.log(codingschool);

// Exo 3 Afficher le nombre d'éléments de l'array
console.log(codingschool.length);

// Exo 4 Afficher les éléments de l'array 1 par 1 
let i = 0;
do{
    console.log(codingschool[i]);
    i += 1;
} while (i<codingschool.length);

//_______________________ EXO 2 _________________________________

// Exo 2.3 Ajouter et afficher votre prénom a l'array
codingschool.push("Imane");
console.log(codingschool[codingschool.length-1]);

//_______________________ EXO 3 _________________________________

// Exo 3.4 Remplacer et afficher un élément de l'array par autre chose
codingschool[codingschool.length-1] = "codingschool23"
console.log(codingschool[codingschool.length-1]);

//_______________________ EXO 4 _________________________________

// Exo 4.5 Effacer un élément de l'array
delete codingschool[codingschool.length-1];

// Exo 4.6 Afficher le contenu le d'array
i = 0;
do{
    console.log(codingschool[i]);
    i += 1;
} while (i<codingschool.length); // ça efface le dernier élement mais sans supprimer l'index de celui -ci (qui prends la valeur undefined)