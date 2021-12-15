// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

const somme = (nbr1, nbr2) => {
    let somme = nbr1 + nbr2;
    return(somme);
}
console.log(somme(1,2));

//________________________________________________________

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

const soustraction = (nbr1, nbr2) => {
    let soustraction = nbr1 - nbr2;
    return(soustraction);
}
console.log(soustraction(1,2));


//________________________________________________________

// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

const multiplication = (nbr1, nbr2) => {
    let multiplication = nbr1 * nbr2;
    return(multiplication);
}
console.log(multiplication(1,2));


//________________________________________________________

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

const Division = (nbr1, nbr2) => {
    let Division = nbr1 / nbr2;
    return(Division);
}
console.log(Division(1,2));

//________________________________________________________

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

const Modulo = (nbr1, nbr2) => {
    let Modulo = nbr1 % nbr2;
    return(Modulo);
}
console.log(Modulo(1,2));

//________________________________________________________

// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

const racine = (nbr) => {
    let racine = Math.sqrt(nbr);
    return(racine);
}
console.log(racine(25));

//________________________________________________________

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

const Exposant = (base,exposant) => {
    let Exposant = Math.pow(base,exposant);
    return(Exposant);
}
console.log(Exposant(2,3));

//________________________________________________________

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

const capitalize = (mystring) => {
    let capitalize = mystring.charAt(0).toUpperCase() + mystring.slice(1).toLowerCase();
    return(capitalize);
}
console.log(capitalize("bonjour Imane"));

//________________________________________________________

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
let result = ""
const calcul = (nbr1, operator, nbr2) => {
    switch (operator){
        case ("+"):
            result = nbr1 + nbr2;
        case ("-"):
            result = nbr1 - nbr2;
        case ("*"):
            result = nbr1 * nbr2;
    }
    return(result);
}
console.log(calcul(2,"*",4));

//________________________________________________________

// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

const reverseNumber = (mynumber) => {
    let reverseNumber = mynumber.toString();
    reverseNumber = reverseNumber.split("");
    reverseNumber = reverseNumber.reverse().join("");
    reverseNumber = parseInt(reverseNumber); //pour avoir le return en number
    console.log(typeof(reverseNumber));
    return(reverseNumber);
}
console.log(reverseNumber(123));


//________________________________________________________

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

let divisible = "";
let dividant = ""
const divPar2 = (mynumber) => {
    switch (mynumber % 2){
        case 0:
            dividant = mynumber / 2
            divisible = `Le numéro ${mynumber} est divisible par 2 | ${mynumber}:2 = ${dividant}`
            break;
        default:
            dividant = mynumber / 2
            divisible = `Le numéro ${mynumber} n'est pas divisible par 2 | ${mynumber}:2 = ${dividant}`
    }
    return(divisible);
}
console.log(divPar2(10));

//________________________________________________________

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"


// const logIn = () => {
//     let monmdp = prompt("Veuillez entrer votre mot de passe s'il vous plait !");
//     while (monmdp !== "mdp"){
//         monmdp = prompt("Un peu d'effort, tu peux t'en rappeller ! Réessaye !");
//     }
//     alert("SUCCES ! Vous êtes connectés !");
//     return(divisible);
// }
// logIn();