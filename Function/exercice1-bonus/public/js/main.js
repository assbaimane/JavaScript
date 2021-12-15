// Exercice 1:
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
// Exemple:
// addition(1, 2) ➞ 3
// addition(-2, -4) ➞ -6

 //deja fait dans exercice 1

//________________________________________________________

// Exercice 2:
// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
// Exemple:
// minuteToSecond(4) ➞ 240
// minuteToSecond(3) ➞ 180

const minuteToSecond = (minute) =>{
    let second = minute *60;
    return second;
}
console.log(minuteToSecond(2));

//________________________________________________________

// Exercice 3:
// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.

// Exemple:
// increment(1) ➞ 2
// increment(4) ➞ 5

const incrementation = (nb) =>{
    nb ++;
    return nb;
}
console.log(incrementation(2));

//________________________________________________________

// Exercice 4:
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2

// Exemple:
// getSurface(8, 2) ➞ 8
// getSurface(7, 3) ➞ 10.5

const getSurface = (base,hauteur) =>{
    let surface = (base * hauteur)/2;
    return surface;
}
console.log(getSurface(4,3));

//________________________________________________________

// Exercice 5:
// Écrivez un programme JavaScript pour inverser une chaîne de caractères.

// Exemple:
// strReverse(‘WayToLearnX’) ➞ XnraeLoTyaW
// strReverse(‘Hello’) ➞ olleH

const strReverse = (str) =>{
    str = str.split("");
    str = str.reverse().join("");
    return str;
}
console.log(strReverse("Hello"));

//________________________________________________________

// Exercice 6:
// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
// Exemple:
// getMax(5, 9, 1) ➞ 9
// getMax(2, 3, 10) ➞ 10


//________________________________________________________



//________________________________________________________



//________________________________________________________


//________________________________________________________


//________________________________________________________
