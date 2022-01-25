// Afficher le changement des variables
let a = 1; 
let b = 2;
let c = 3;

// Exo 1 -----------------------------
// let a = 1; -> 2
// let b = 2; -> 3
// let c = 3; -> 1
let tempo = a;
a = b;
b = c;
c = tempo;
console.log(a,b,c);

// Exo 2 ------------------------------
 a = 1; 
 b = 2; 
 c = 3; 
 d = 4; 
//  a = 1; -> 4
//  b = 2; -> 3
//  c = 3; -> 2
//  d = 4; -> 1
tempo = a; // tempo = 1
a = d; // a = 4
d = tempo; // d = 1
tempo = b; // tempo = 2
b = c; // b =3
c = tempo; // c = 2
console.log(a,b,c,d);

// Exo 3 -----------------------------
// - ## let a = 1; -> 2
// - ## let b = 2; -> 3
// - ## let c = 3; -> 4
// - ## let d = 4; -> 1
a = 1;
b = 2; 
c = 3; 
d = 4; 
tempo = a; // temp = 1
a = b; // a = 2
b = c; // b = 3
c = d; // c = 4
d = tempo; // d = 1
console.log(a,b,c,d);


// Exo 4 -----------------------------
// - ## Afficher 4, 3, 2, 1 avec une variable temporaire

let tableau = [1, 2, 3, 4];
tempo = tableau[0]; // tempo = 1
tableau[0] = tableau[3]; // 1 devient 4
tableau[3] = tempo; // 4 devient 1
tempo = tableau[1]; // tempo = 2
tableau[1] = tableau[2] // 2 devient 3
tableau[2] = tempo; // 3 devient 2
console.log(tableau);

// Exo 5 -----------------------------
// - ## let a = 1 -> 4
// - ## let b = 2 -> 5
// - ## let c = 3 -> 1
// - ## let d = 4 -> 2
// - ## let e = 5 -> 6
// - ## let f = 6 -> 3

a = 1 
b = 2 
c = 3 
d = 4 
e = 5 
f = 6

//----------------------
tempo = 1;
a = d; // a = 4
d = b; // d = 2
b = e; // b = 5
e = f; // e = 6
f = c; // f = 3
c = tempo; // c = 1 CQFD
console.log(a,b,c,d,e,f)

