// 1. Exo 1 Boucles WHILE
//     - Créez une variable classe avec un array
//     - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//     - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//     - Après avoir rempli la classe, affichez tous les etudiants


// let classe = ["Ma","Mi","Mo","Mu","La","Lo","Li","Lu","Sa","So","Si","Su","Ta","To","Ti"];
// let nbexo = +prompt("Chaque élève corrige un exercice. Combien d'exercices y a t-il?");
// let selection = [];
// let i = 0;

// while(i<nbexo){
//     selection.push(classe[i]);
//     i++;
// }
// console.log(selection);


//________________________________________________________

// 2. Exo 02
//     - Créer un tableau de 9 prénoms 
//     - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     - Astuce : let i = 0;
//     - Astuce 2 : (i < 9)

// let classe = ["Ma","Mi","Mo","La","Lo","Li","Sa","So","Si"];
// let i = 0;

// while(i<9){
//     console.log("Bonjour "+classe[i]);
//     i++;
// }


//________________________________________________________

// 3. Exo 03
//     - Créer un tableau de 6 fruits
//     - Avec l'aide d'une boucle while vider le tableau.
//     - Utilisez fruits.length

// let fruits = ["Pomme","Poire","Banane","Mangue","Ananas","Orange"];
// let i = 6;

// while(i>fruits.length){
//     console.log(fruits[i]);
//     fruits.shift();
//     i--;
// }
// console.log(fruits);

//________________________________________________________

// 4. Exo 04
//     - Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     - Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

// let panierLegumes = ["Concombre","Radis","Haricot","Poivron"];
// let longueur = panierLegumes.length; //4
// let caisseLegumes = [];

// while(longueur >= panierLegumes.length){
//     caisseLegumes.push(panierLegumes[longueur-1]);
//     panierLegumes.splice(-1);
//     longueur --;
// }
// console.log("Liste vide : "+ panierLegumes);
// console.log("Liste remplie "+ caisseLegumes);

//________________________________________________________

// 5. Exo 05
//     - Préparez une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

// let response = prompt("Qu'est ce qui est jaune et qui attends?");
// response = response.toLowerCase();

// while (response != "johnatan"){
//     response = prompt("Pas encore trouvé, je répète ! Qu'est ce qui est jaune et qui attends?");
// }
// alert("GG, tu as trouvé !")


//________________________________________________________

// 6. Exo 06
//     - Re faire l'exo 4 avec DO WHILE

// let panierLegumes = ["Concombre","Radis","Haricot","Poivron"];
// let longueur = panierLegumes.length; //4
// let caisseLegumes = [];

// do{
//     caisseLegumes.push(panierLegumes[longueur-1]);
//     panierLegumes.splice(-1);
//     longueur --;
// }while(longueur >= panierLegumes.length);
// console.log("Liste vide : "+ panierLegumes);
// console.log("Liste remplie "+ caisseLegumes);

//________________________________________________________

// 7. Exo 07
//     - Créer une variable avec l'année actuelle
//     - Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
//     - : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
//     - L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
//     - Finir avec un affichage.

// let actualYear = new Date();
// actualYear = actualYear.getFullYear();
// let randomYear = Math.floor(Math.random() * (2018 - 1970)) + 1970;
// let i = 0;

// while(i<3){
//     let response = +prompt("Combien d'années y a t-il entre "+actualYear+" et "+randomYear+" ?");
//     if (response == (Math.abs(actualYear-randomYear))){
//         alert("GG, tu as trouvé !");
//         break;
//     }
//     i++;
// }

//________________________________________________________

// 8. Exo 08
//     - Demandez a l'utilisateur de remplir un panier de fruit jusqu'a en obtenir 4
//     - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//     - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     - Lui montrer son panier avec la première lettre en majuscule

// let i = 0;
// let monpanier = [];

// while (i<4){
//     let response = prompt("Entrez le nom d'un fruit !");
//     response = response.charAt(0).toUpperCase() + response.slice(1).toLowerCase();
//     monpanier.push(response);
//     i ++;
// }

// response = prompt("Voici les fruits de votre panier, est ce que vous voulez en retirer un ? " + monpanier);
// response = response.charAt(0).toUpperCase() + response.slice(1).toLowerCase();

// while (monpanier.includes(response) == true && monpanier.length>1){
//     let supp = monpanier.indexOf(response);
//     console.log(monpanier[supp]);
//     monpanier.splice(supp, 1);
//     console.log(monpanier);
//     response = prompt("Voici les fruits de votre panier, est ce que vous voulez en retirer un ? " + monpanier);
//     response = response.charAt(0).toUpperCase() + response.slice(1).toLowerCase();
// }
// alert("Merci bon appetit");
// console.log(monpanier);
