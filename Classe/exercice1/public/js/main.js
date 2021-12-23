// 1. EXO1
//   - Traduire le code suivant en 3 class et en instances
// // lieux
// let maison = {
//    nom: "maison",
//       contenu: [],
//  };
//  let epicerie = {
//    nom: "epicerie",
//    contenu: [],
//    ingredients: [],
//  };
//  let cuisine = {
//    nom: "cuisine",
//    contenu: [],
//    ingredients: [],
//  };

// class Lieux {
//     constructor(nom, contenu, ingredients){
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingredients = ingredients;
//     }
// }

// let maison = new Lieux("maison",[],[]);
// let epicerie = new Lieux("epicerie",[],[]);
// let cuisine = new Lieux("cuisine",[],[]);
// console.log(maison);

//___________________________________________________

// ingredients
//  let poivron = {
//    nom: 'poivron',
//    etat: 'entier',
//    prix:  1 ,
//   };
//   let oignon = {
//    nom: 'oignon',
//    etat: 'entier',
//    prix:  2 ,
//   };
//   let oeuf = {
//    nom: 'oeuf',
//    etat: 'entier',
//    prix:  4 ,
//   };
//   let epice = {
//    nom: 'epice',
//    etat: 'moulu',
//    prix:  3.25 ,
//   };
//   let paprika = {
//    nom: 'paprika',
//    etat: 'moulu',
//    prix:  1.5 ,
//   };
//   let fromage = {
//    nom: 'fromage',
//    etat: 'coupé',
//    prix:  1.6 ,
//   };

// class Ingredients {
//     constructor(nom, etat, prix){
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }
// }

// let poivron = new Lieux("poivron","entier",1);
// let oignon = new Lieux("epicerie",[],[]);
// let oeuf = new Lieux("cuisine",[],[]);
// console.log(poivron);

//___________________________________________________
// Personne
//  let personnage = {
//   nom: "Maxime",
//   lieu: "néant",
//   argent: 100,
//   panier: [],
//   se_deplacer(x){
//   },

//   payer(x){
//   },
//   couper(x,y){
//   }
//  }

// class Personne {
//     constructor(nom, lieu, argent, panier, x, y){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//         this.x = x;
//         this.y = y;
//     }
//     se_deplacer = function(x){
//     }
//     payer = function(x){
//     }
//     couper = function(x,y){
//     }
// }

// let personnage = new Personne("Maxime","néant",100, [], 2, 3);
// console.log(personnage);

//________________________________________________________________

// 2. EXO02
//   - Créer une class Personnage avec comme propriétés : 
//   - age , nom , ville
//   - Faire 2 instances de cette class.
// 3. EXO03
//   - Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
//   - Lancer cette méthode sur les deux instances de l'exo1

// class Personnage {
//     constructor(age, nom, ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;
//     }
//     sePresenter = function(){
//         console.log(`Bonjour, je m'appelle ${this.nom} !`);
//     }
// }
            
// let imane = new Personnage(23, "Assbai", "Bruxelles");
// let yassin = new Personnage(25, "Oumah", "Mons");
// // console.log(imane);
// // console.log(yassin);
// imane.sePresenter();
// yassin.sePresenter();



//________________________________________________________________


// 4. Exo04
//    - Créer une class Objet
//      - _Propriétés : nom, prix

//    - Créer deux instances d'objets avec un nom et un prix
//    - Créer une boite (tableau) et mettre les deux objets dedans.

//    - Créer une class Personnage
//     - _Propriétés : nom(string), sac(tableau), argent(number)
//     - _Méthode : prendre(objet)
//     - _Méthode : acheter(vendeur, objet)

// - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// - Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// class Objet {
//     constructor(nom, prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }
            
// let collier = new Objet("collier Swarovski", "150 €");
// let ordinateur = new Objet("ordinateur Asus", "1200 €");
// let boite = [collier, ordinateur];

// class Personnage {
//     constructor(nom, sac, argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//     }
//     prendre = function(objet){
//         this.objet = objet;
//     }
//     acheter = function(vendeur,objet){
//         this.achat = vendeur.objet;
//         vendeur.objet = null;
//     }
// }
            
// let vendeur = new Personnage("Imane", [], 100);
// let acheteur = new Personnage("Siham", [], 200);

// vendeur.prendre(collier);
// acheteur.prendre(ordinateur);
// console.log(vendeur,acheteur);

// acheteur.acheter(vendeur, collier);
// console.log(vendeur,acheteur);

//_________________________________________________
// //  EXO 5
// // Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// // Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// // Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// // Puis créez une instance de votre personnage.
// // Créez une class [Transport] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// class Personne {
//     constructor(nom, prenom, argent){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//     }
//     se_deplacer = function(){
//         if (this.argent >= 2.80){
//             bus.embarquer(this.argent);
//         }
//         else{
//             console.log(`Fais de l'argent, tu sais même plus te payer un ticket`)
//         }
//     }
// }
// let Moi = new Personne("Ayaleya","Imane", 100);
// console.log(`Mon portefeuille contient initialement ${Moi.argent}€`)

// class Lieu {
//     constructor(nom, personnes){
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }
// let MolenGeek = new Lieu("Molengeek", []);
// let Snack = new Lieu("Snack", []);
// let Maison = new Lieu("Maison", []);

// class Transport {
//     constructor(personnes, caisse){
//         this.personnes = personnes;
//         this.caisse = caisse;
//     }
//     embarquer = function(argent){
//         argent = argent - 2.80;
//         this.caisse += 2.80;
//         return argent;
//     }
// }
// let bus = new Transport(Moi, 0);
// console.log(`La caisse initiale du bus est à ${bus.caisse}`)

// // Créez une instance de Transport (Bus). 
// // 8h00 Vous êtes à la maison.
// // 8h30 Vous prennez le bus vers MolenGeek.
// // 8h45 Vous êtes à MolenGeek.
// // 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// // 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// // 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
// // Faites un console.log() de votre argent, ainsi que l'argent du Bus

// Maison.personnes.push(Moi);
// console.log(`A 8H00, je suis à ${Maison.nom}`)
// Maison.personnes.pop(Moi);
// Moi.se_deplacer();
// console.log(`Après un allée en bus vers ${MolenGeek.nom}, mon portefeuille contient ${Moi.argent}€`);
// MolenGeek.personnes.push(Moi);
// console.log(`A 8H45, je suis à ${MolenGeek.nom}`);
// MolenGeek.personnes.pop(Moi);
// Moi.se_deplacer();
// console.log(`Après un allée en bus vers le ${Snack.nom}, mon portefeuille contient ${Moi.argent}€`);
// Snack.personnes.push(Moi);
// console.log(`A 13H, je suis au ${Snack.nom}`);
// Snack.personnes.pop(Moi);;
// MolenGeek.personnes.push(Moi);
// console.log(`A 13H30, je suis sortie du ${Snack.nom} en marchant pour aller à ${MolenGeek.nom}`);
// MolenGeek.personnes.pop(Moi);
// Moi.se_deplacer();
// Maison.personnes.push(Moi);
// console.log(`A 17H10, je suis rentrée en bus de ${MolenGeek.nom} pour aller à la ${Maison.nom}. Il me reste ${Moi.argent}€ pour le mois à la fin de la journée. La stib a gagné ${bus.caisse}€ aujourd'hui parce qu'on avait cours en présentiel`)

// // EXO5 CORRREEEEEEEEEEECTION

// // Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// class Lieu {
//     constructor(nom, personnes) {
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// // Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// let molengeek = new Lieu("MolenGeek", []);
// let snack = new Lieu("Snack", []);
// let maison = new Lieu("Maison", []);

// // Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// class Personne {
//     constructor(nom, prenom, argent) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//         this.seDeplacer = (depart, arrivee, transport) => {
//             depart.personnes.splice(depart.personnes.indexOf(this), 1);
//             if (transport !== "pied") {
//                 transport.embarquer(this)
//             } else {
//                 console.log(`${this.prenom} va aller à pied`);
//             }
//             arrivee.personnes.push(this);
//             console.log(`${this.prenom} est actuellement à ${arrivee.nom}`);
//         }
//     }
// }

// // Puis créez une instance de votre personnage.
// let elias = new Personne("Aboutaharan", "Elias", 100);
// let michael = new Personne("Test", "Michael", 100)

// // Créez une class [Transport] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.
// class Transport {
//     constructor(personnes, caisse) {
//         this.personnes = personnes;
//         this.caisse = caisse;
//         this.embarquer = (x) => {
//             if (x.argent >= 2.80) {
//                 x.argent -= 2.80;
//                 x.argent = Number(x.argent.toFixed(2))
//                 this.caisse += 2.80;
//                 this.caisse = Number(this.caisse.toFixed(2));
//                 this.personnes.push(x)
//                 console.log(`${x.prenom} est dans le bus`);
//                 console.log(`${x.prenom} vient de descendre du bus`);
//                 this.personnes.splice(this.personnes.indexOf(x), 1);
//             } else {
//                 console.log(`${x.prenom} n'a pas assez d'argent pour payer le bus`);
//                 console.log(`${x.prenom} va continuer à pied`);
//             }
//         }
//     }
// }

// // Créez une instance de Transport (Bus). 
// let bus = new Transport([], 0);

// // 8h00 Vous êtes à la maison.
// maison.personnes.push(elias)
// console.log(`${elias.prenom} est actuellement à la ${maison.nom}`);


// // 8h30 Vous prennez le bus vers MolenGeek.
// elias.seDeplacer(maison, molengeek, bus);
// // 8h45 Vous êtes à MolenGeek.
// // 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// elias.seDeplacer(molengeek, snack, bus);
// // 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// elias.seDeplacer(snack, molengeek, "pied")
// // 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
// elias.seDeplacer(molengeek, maison, bus)
// // Faites un console.log() de votre argent, ainsi que l'argent du Bus
// console.log(bus.caisse);

//_________________________________________________________

// EXO 6
// - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
// - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille (XS, S, M, L, XL)

// - Vous allez créer 3 instances de Personne et 5 instance de Produit
// - Avez la méthode prendre, vous allez mettre les produits dans votre sac
// Exo 6 SUITE
// Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
// Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit

import {Personne,Produit,Appartement} from "./class.js"
let imane = new Personne("ayaleya","imane",23,100,[]);
let marwa = new Personne("belfol","marwa",25,150,[])


let pc = new Produit("macbook",1000,"S",false);
let pantalon = new Produit("jeans",40,"M",false);

imane.prendre(pc);
imane.acheter(pantalon);
console.log(imane);

// _______________________________________________________________
// Exercice 6 SUITE
// - Vous allez créer une classe appelé Appartement avec un nom, une armoire (tableau vide), et personnes (tableau vide)
// - Vous allez créer une instance d'Appartement appelé chambre et vous allez push la parsonne à l'interieur de la chambre
// - Tous les éléments qui se trouvent dans le sac vont aller dans l'armoire grâce à une méthode deposer() qui va se trouver dans la personne


let chambre = new Appartement("chambre",[],[]);

chambre.personnes.push(imane);
imane.deposer(chambre);
console.log(imane);
console.log(chambre);