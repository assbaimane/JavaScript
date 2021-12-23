import {Personne,Lieu,Outil,Produit} from "./class.js"

/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/
let maison = new Lieu("maison",[]);

/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/
let chef = new Personne("Imane",maison.nom,100,[],[]);
const chefBudget = chef.argent;


/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/
let couteau = new Outil("couteau","coupé");

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etat ( entier,coupé, moulu), prix
 */
let oeuf = new Produit("oeuf","entier",5);
let lait = new Produit("lait","liquide",1);
let oignon = new Produit("oignons","entier",1);
let tomates = new Produit("tomates","entier",1);
let poivron = new Produit("poivron","entier",3);
let fromage = new Produit("fromage","coupé",2);
let epices = new Produit("epices","moulu",3);

// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
let epicerie = new Lieu("epicerie",[]);
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
let ingredients = [oeuf,lait,oignon,tomates,poivron,fromage,epices];

/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */
let poele = new Outil("poele","cuire");

// Créer un bol avec un tableau comme contenu
let bol = new Outil("bol","melanger");

// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]



/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
chef.seDeplacer(maison,maison);
console.log(chef.nom + " est actuellement à la " + chef.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
chef.seDeplacer(maison,epicerie);
console.log(chef.nom + " est aller acheter ses ingrédients à l'" + chef.lieu);

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
chef.mainDroite.push(epicerie.paniers[0])
epicerie.paniers.shift(); // On retire la panier 1 de epicerie puisque maintenant il est dans la main du chef

// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 
console.log(chef.nom + " a dans sa main droite le " + chef.mainDroite[0].nom);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
epicerie.contenu = ingredients;
ingredients.forEach(element => {
    chef.mainDroite[0].contenu.push(element);
    // Afficher un message à chaque ingrédient pris
    console.log(`${chef.nom} vient de mettre ${element.nom} dans son ${chef.mainDroite[0].nom}`)
});

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
chef.mainDroite[0].contenu.forEach(element => {
    chef.payerArticle(element);
});


// Afficher un message de ce qu'il reste d'argent sur le personnage.
console.log(`Il reste ${chef.argent}€ sur le compte de ${chef.nom} après ses courses. Avant d'aller à l'${epicerie.nom}, ${chef.nom} avait ${chefBudget}€`);

// rentrer à la maison (comme ça on pourra cuisiner)
chef.seDeplacer(epicerie,maison);
console.log(`${chef.nom} est partie de l'${epicerie.nom} pour aller à la ${maison.nom}`);

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
chef.mainDroite[0].contenu.forEach(element => {
    bol.contenu.push(element);
    // console.log(chef.mainDroite[0].contenu.indexOf(element)) ligne de contrôle
    chef.mainDroite[0].contenu = chef.mainDroite[0].contenu.slice((chef.mainDroite[0].contenu.indexOf(element))+1,chef.mainDroite[0].contenu.length);
    // Afficher un petit message de chaque ingrédient qu'on met dans le bol.
    console.log(`${chef.nom} vient de mettre ${element.nom} dans le ${bol.nom}`)
});

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
if (chef.mainDroite[0].contenu == ""){
    var etatPanier = "rien";
}
else{
    var etatPanier = chef.mainDroite[0].contenu;
}
console.log (`Dans ${chef.mainDroite[0].nom} il reste : ${etatPanier}`)

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
chef.seDeplacer(maison,epicerie);
epicerie.paniers.unshift(chef.mainDroite[0]); //Je remet mon panier dans l'epicerie
chef.mainDroite[0] = "";  //Ma main est vide  parce que j'ai redéposer la panier dans l'epicerie

// Afficher un petit message
if (chef.mainDroite[0] == ""){
    var etatMainDroite = "rien";
}
else{
    var etatMainDroite = chef.mainDroite[0];
}
console.log(`Après avoir déposer le panier, dans la main droite d'${chef.nom}, il y a : ${etatMainDroite}`)

// Retourner à la maison pour continuer l'omelette
chef.seDeplacer(epicerie,maison);

// Afficher un petit message
console.log(`${chef.nom} était à l'${epicerie.nom} et elle vient de revenir à la ${maison.nom}`);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
bol.contenu.forEach(element => {
    chef.couper(element,couteau);
});
// console.log(bol.contenu);

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
bol.melanger("omelette");

// Afficher un message avec le nouveau mélange
console.log(`Je viens de mettre tous mes ingrédients dans mon bol, je les ai mélangé pour avoir mon ${bol.newMelange.nom}`)

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
// console.log(bol.contenu.nom) ligne de controle
poele.contenu = bol.contenu;
bol.contenu = null;
console.log("Dans la poele, tu pourras trouver une " + poele.contenu.nom);

// Cuire l'omelette avec la méthode de la poele 
poele.cuir();

// Afficher un message final, notre omelette est cuite :)
// Cf ./class.js dans la méthode cuir().setTimeout()