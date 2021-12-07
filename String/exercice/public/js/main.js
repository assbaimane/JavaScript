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
var first = minus.charAt(4).toUpperCase()
var second = minus.charAt(6).toUpperCase()
console.log(first, second)
let maxi = minus.substr(0, 4) + first + minus.substr(4,minus.length)
console.log(maxi)