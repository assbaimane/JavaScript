// Exo 1, 2
let phrase = "Bonjour tout le monde         ";
console.log(phrase.length);

// Exo 3, 4
let correctphrase = phrase.trim();
console.log(correctphrase.length);

// Exo 5
let lastchar = correctphrase.charAt(correctphrase.length-1);
console.log(lastchar);

// Exo 6
let deletebonjour = correctphrase.replace("Bonjour", "");
console.log("Ma phrase sans le debut -> "+ deletebonjour);

// Exo7
let bonjour = "Bonjour";
let rebonjour = bonjour.concat(deletebonjour);
console.log(rebonjour);

// Exo 8
console.log(rebonjour.slice(0,7));

// Exo 9
let newphrase = phrase.replace("Bonjour","Hello");

// Exo 10
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(10));

// Exo 11
let minus = correctphrase.toLowerCase();
var first = minus.charAt(4).toUpperCase();
var second = minus.charAt(6).toUpperCase();
let maxi = minus.substr(0, 4) + first + minus.substr(5,minus.length);
maxi = maxi.substr(0,6) + second + maxi.substr(7, maxi.length);
console.log(maxi);

// Exo 12
let firstoccurence = correctphrase.indexOf("o");
let secondoccurence = correctphrase.indexOf("o", firstoccurence+1);
let thirdoccurence = correctphrase.indexOf("o", secondoccurence +1);
console.log(secondoccurence);
console.log(thirdoccurence);

// Exo 13
let nom = "imane";
var first = nom.charAt(0).toUpperCase();
var last = nom.charAt(nom.length-1).toUpperCase();
var newnom = first + nom.substr(1, (nom.length-2)) + last;
console.log(newnom);
