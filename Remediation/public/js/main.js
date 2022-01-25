// # Conditions
// 1. Verifie si "5" est strictement égale à 5

// console.log(("5"===5))

// 2. Posez une question à l'utilisateur qui doit repondre avec un chiffre, et stockez un nombre aleatoire entre 1 et 20. Si la personne devine au premier coup, vous lui dites comme quoi elle a réussi, sinon vous lui dites qu'elle a raté

// let hasard = Math.floor((Math.random()*(20-1))+1);
// let nb = prompt("J'ai un nombre entre 1 et 20, essaye de le deviner ! Indice : " + hasard)
// if (nb == hasard){
//     alert("GG! Tu as trouvé");
// }
// else{
//     alert("Pas très fûté je vois");
// }

// 3. Créez une devinette (Un tableau avec des fruits, et vous devez deviner un fruit qui se trouve dans le tableau, si vous le trouvez, vous avez reussi, sinon vous avez raté)

// let mesfruits = ["Pomme","Poire","Abricot","Ananas"];
// let devine = prompt("Devine ce qu'il y a dans mon panier de fruits!");
// if (mesfruits.includes(devine)){
//     alert("GG! Tu as trouvé");
// }
// else{
//     alert("Game over");
// }

// 4. Posez une question à l'utilisateur sur le jour qu'on se trouve, si il reponde "lundi", "mardi", "mercredi" ou "jeudi" on lui dit "je suis fatigué", et le reste de la semaine "ouaaaaai c'est le weekend"

// let jour = prompt("Quel jour on est?");
// jour = jour.toLowerCase();
// if(jour == "lundi" || jour =="mardi" || jour =="mercredi" || jour =="jeudi" ){
//     alert("Flemme je suis fatiguée");
// }
// else{
//     alert("C'est le week-end")
// }


// 5. Créer une variable qui affiche quel âge avez vous ? si l'âge de la personne de la personne est égal à 18 ou plus et que la personne à 30 ou moins elle rejoint la section des 18-30 ans sinon si la personne à 50 ans ou moins et plus de 30 ans elle rejoint la section des 30-50ans sinon si la personne à plus de 50 ans elle rejoint la section des plus de 50 ans sinon la personne est trop jeune pour rejoindre le site.

// let age = prompt("Entrez votre age s'il vous plait");
// if (18<=age && age<=30){
//     alert("Tu rejoins la section des 18-30 ans !");
// }
// else if (30<age && age<=50){
//     alert("Tu rejoins la section des 30-50 ans !");
// }
// else if (age>50){
//     alert("Tu fais parti de la section des plus de 50 ans");
// }
// else{
//     alert("T'es trop jeune !");
// }

// 6. Créez 3 questions, si la personne repond bien à une seule question, elle a un message comme quoi elle a réussi

// let question1 = prompt("Réponds A stp");
// let reponse1 = "A";
// let question2 = prompt("Réponds B stp");
// let reponse2 = "B";
// let question3 = prompt("Réponds C stp");
// let reponse3 = "C";

// if (question1 === reponse1 || question2 === reponse2 ||question3 === reponse3){
//     alert("GG! ");
// }
// else{
//     alert("t nul");
// }


// 7. La même chose que le 6 mais la personne doit repondre bien aux trois questions

// let question1 = prompt("Réponds A stp");
// let reponse1 = "A";
// let question2 = prompt("Réponds B stp");
// let reponse2 = "B";
// let question3 = prompt("Réponds C stp");
// let reponse3 = "C";

// if (question1 === reponse1 && question2 === reponse2 &&question3 === reponse3){
//     alert("GG! ");
// }
// else{
//     alert("t nul");
// }

//________________________________________________________


// # Tableaux
// 1. Créez un tableau avec 5 éléments et supprimez le premier et le dernier

// let montab = ["1","2","3","4"];
// montab.shift();
// montab.pop();
// console.log(montab);

// 2. Puis, ajoutez un élément à la fin et un au début

// let montab = ["1","2","3","4"];
// montab.push("100");
// montab.unshift("-2");
// console.log(montab);

// 3. Grâce à une boucle, mettez tous les éléments du tableau en majuscule

// let montab = ["ola","bonjour","shalom","salam"];

// for (let i = 0; i < montab.length; i++ ){
//     montab[i] = montab[i].toUpperCase();
// }
// console.log(montab);

// 4. Trouvez une méthode qui permet de supprimer le 3ème élément sans connaitre sa position

// let montab = ["ola","bonjour","shalom","salam"];

// if (montab.includes("shalom")){
//     let index = montab.indexOf("shalom");
//     montab.splice(index,1);
// }
// console.log(montab);

// 5. Transformez un tableau en chaine de caractères avec 2 méthodes

// let tab = ["ola","que","tal"];
// // tab = tab.toString();
// // console.log(typeof(tab));
// tab = tab.join(' ');
// console.log(typeof(tab));

// 6. Transformez une chaine de caractères en array avec 2 méthodes

// let str = "Ola como esta?"
// let array = str.split(' ');
// console.log(array);

// let str = "Ola como esta?"
// let array = Array.from(str);
// console.log(array);

//________________________________________________________


// # Functions
// 1. Créez une fonction qui permet de retourner la taille d'une chaine de caractères

// const length = (str) =>{
//     let length = str.length;
//     return length;
// }
// console.log(length("Imane assbai"))

// 2. Créez une fonction qui permet de verifier quel est le type du parametre

// const typeCheck = (str) =>{
//     switch (typeof(str)){
//         case "array":
//             return ("It's an array");
//         case "string":
//             return ("It's a string");
//         case "number":
//             return ("It's a number");
//         case "bool":
//             return ("It's a boolean");
//         case "object":
//             return ("It's an object");
//     }
// }
// console.log(typeCheck(23));

// 3. Créez une fonction qui permet de vérifier si le chiffre est plus grand ou égale à 50


// const overFifty = (nb) =>{
//     if (nb>=50){
//         return ("The number that you entered is superior or equal to fifty");
//     }
//     else {
//         return ("Your number is inferior to 50");
//     }
// }
// console.log(overFifty(53));


// 4. Créez une fonction qui permet de renvoyer la racine cubique du parametre

// const racineCubique = (nb) =>{
//     let racineCubique = Math.cbrt(nb);
//     return (racineCubique);
// }
// console.log(racineCubique(8));

// 5. Créez une fonction qui met en majuscule qu'à partir de la 5ème lettre

// const forceLow = (str) =>{
//     let forcee = str.substring(5,str.length);
//     str = str.substring(0,5) + forcee.toUpperCase();
//     return (str);
// }
// console.log(forceLow("lalalalalala"));

// 6. Créez une fonction qui met en miniscule qu'à partir de la 9ème lettre

// const forceLow = (str) =>{
//     let forcee = str.substring(9,str.length);
//     str = str.substring(0,9) + forcee.toLowerCase();
//     return (str);
// }
// console.log(forceLow("ALOALOALOALOALOALOA"));

// 7. Fusionnez les deux fonctions

// const forceLow = (str) =>{
//     let forcee = str.substring(9,str.length);
//     str = str.substring(0,5) + str.substring(5,9).toUpperCase() + forcee.toLowerCase();
//     return (str);
// }
// console.log(forceLow("papapapalalalaLALALA"));


//________________________________________________________


// Boucles
// let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?" +" Réponse : le nain ______") + "ATTENTION, tant que tu ne répond pas a la question, la question réaparait";

// if (question.includes("prend")){
//     alert("Bonne imagination !")
// }
// else{
//     alert("Réponds de manière complète stp")
// }

// 2. Créez un tableau avec les élèves de la classe, et faites les passer dans un autre tableau

// let girlpwr = ["Jade","Isma","Amanda","Imane"];
// let classe = [];

// for (let i = 0; i<girlpwr.length; i++){
//     classe.push(girlpwr[i]);
// }
// console.log(classe);

// 3. Créez un tableau avec des fruits, et tant que la personne veut supprimer un fruit, vous lui demandez lequel et il se supprime

// let fruits = ["Pomme","Poire","Orange","Ananas"];
// let efface;

// do{
//     efface = confirm("Souhaites-tu supprimer un fruit?");
//     let fruitSupp = prompt(`Voici la liste de fruits : ${fruits}. Lequel voudrais-tu supprimer?`);

//     if (fruits.includes(fruitSupp)){
//         let index = fruits.indexOf(fruitSupp);
//         fruits.splice(index,1);
//     }
//     else{}
// } while(efface && fruits.length>0);

// console.log(fruits)

// 4. Faites la même chose que l'exercice 2 avec une boucle foreach

// let girlpwr = ["Jade","Isma","Amanda","Imane"];
// let classe = [];

// girlpwr.forEach(element => {
//     classe.push(element);
//     girlpwr = girlpwr.slice(0,-1);
// });
// console.log(classe);
// console.log(girlpwr);