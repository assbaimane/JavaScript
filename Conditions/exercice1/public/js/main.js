// Exo 1 Via un console.log() vérifie l'egalité entre 1 et "1"
// console.log(1==-1);

// Exo 2 Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
//  console.log(1 === "1");

// Exo 3 Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
// let prenom = prompt("Quel est ton prénom stp?");
// if (prenom.length < 5){
//     alert("Ton nom est trop court !")
// } 
// else{
//     alert("Merci !")
// }

// Exo 4 Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
// let reponse = prompt("Combien font 1+1?");
// if (reponse == 2){
//     alert("It's right !")
// } 
// else{
//     alert("Revois tes maths")
// }

// Exo 5 Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

// let reponse = prompt("Combien font 2x2?");
// if (reponse == 4){
//     alert("La réponse était bien 4");
// } 
// else{
//     let diff = Math.abs(4-reponse);
//     alert("C'est dommage, tu n'étais qu'a " + diff + " unitée(s) de la bonne réponse");
// }

// 6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
// let table = [];
// let newdata = "";
// if (table.length < 1){
//     newdata = prompt("Entre 3 prénoms !");
//     table.push(newdata);
//     if (table.length < 2){
//         newdata = prompt("Entre 3 prénoms !");
//         table.push(newdata);
//     }
//     else if (table.length < 3){
//         newdata = prompt("Entre 3 prénoms !");
//         table.push(newdata);
//     }
//     console.log(table);
//     else if (table.length == 3){
//         alert("Le tableau est plein !");
//         alert(table);
//     }
// } 
// else{}

// 7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs
// let i = 0;
// let petitNombres = [];
// let grandNombres = [];
// do{
//     let nombre = +prompt("Donne moi un nombre");
//     i += 1;
//     if (nombre < 12){
//         petitNombres.push(nombre);
//     }
//     else{
//         grandNombres.push(nombre);
//     }
// }while (i<6);
// alert("Bac petit NB : " + petitNombres + "    |     Bac grand NB : " + grandNombres);

// 8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions
let listefruit = ["pomme", "orange", "poire", "mangue"]
let ok = confirm("Choisis un fruit dans la liste et laisse moi le deviner ! "+listefruit+" Clique sur ok quand c'est fait ! ");
if (ok){
    let vert = confirm("Est ce que ton fruit peut être vert?");
    if (vert){
        let rond = confirm("Est ce que ton fruit est plus ou moins de forme ronde?");
        if (rond){
            alert("Le fruit auquel tu penses est une pomme !")
        }
        else{
            alert("Le fruit auquel tu penses est une poire !")
        }
    }
    else{
        let orange = true;
        rond = confirm("Est ce que ton fruit est plus ou moins de forme ronde?");
        if (rond){
            alert("Le fruit auquel tu penses est une orange !")
        }
        else{
            alert("Le fruit auquel tu penses est une mangue !")
        }
    }
}
else {
    alert("Tu ne veux pas jouer aujourd'hui ? Au revoir !");
}