// ---------------------- Exercice 1 ------------------------------

// let nb1 = prompt("Donne moi un nombre");
// let nb2 = prompt("Donne moi un deuxième nombre");
// alert("Le nombre "+nb1+" et le "+nb2+" sont-ils égaux? Réponse : "+ (nb1==nb2) )


// ---------------------- Exercice 2 ------------------------------

// let nb1 = prompt("Donne moi un nombre");
// let nb2 = prompt("Donne moi un deuxième nombre");
// alert("Le nombre "+nb1+" et le "+nb2+" sont-ils égaux? Réponse : "+ (nb1<nb2) )

// ---------------------- Exercice 3 ------------------------------

// let nb1 = prompt("Donne moi un nombre");
// let nb2 = prompt("Donne moi un deuxième nombre");
// let nb3 = prompt("Donne moi un troisème nombre");
// alert("La somme du nombre "+ nb1 +" et le nombre "+ nb2 +" est-elle plus grande que le nombre "+ nb3 + "? Réponse : "+ ((nb1+nb2)>nb3) )

// ---------------------- Exercice 4 ------------------------------

// let phrase = prompt("Ecris une phrase");
// let estimation = prompt("Estime la longueur de ta phrase");
// if (estimation == phrase.length){
//     alert("Correct");
// }
// else{
//     let diff = Math.abs(estimation-phrase.length);
//     alert("T'étais à "+ diff + " unités de la bonne réponse")
// }

// ---------------------- Exercice 5 ------------------------------

// let prenom = prompt("Ecris ton prénom stp");
// if (prenom.length > 0){   // je sais pas pq !== null fonctionne pas, meme vide c'est un string
//     alert("Bienvenue " + prenom + typeof(prenom));
// }
// else{
//     prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
// }

// ---------------------- Exercice 6 ------------------------------

// let reponse = "";
// let abo = confirm("Voulez-vous vous abonnez?")
// if (abo){
//     let formule = prompt("Desirez vous la formule 'Luxe' ou 'Normal'?");
//     if (formule == "Luxe" || formule == "luxe"){
//         alert("Félicitation, vous avez choisis la formule 'Luxe'");
//     }
//     else if (formule == "Normal" || formule == "normal"){
//         alert("Merci pour votre abonnement");
//     }
// }
// else{
//     let sur = confirm("Vous êtes sur de ne pas vouloir vous abonner?")
//     if (sur){
//         alert("Dommage ! Bonne journée quand même !");
//     }
//     else{
//         formule = prompt("Desirez vous la formule 'Luxe' ou 'Normal'?");
//         if (formule == "Luxe" || formule == "luxe"){
//             alert("Félicitation, vous avez choisis la formule 'Luxe'");
//         }
//         else if (formule == "Normal" || formule == "normal"){
//             alert("Merci pour votre abonnement");
//         }
//     }
// }

// ---------------------- Exercice 7 ------------------------------
// let question1 = prompt("Après A, B et C, vient le :");
// let rep1 = "D";
// let question2 = prompt("Après 1, 2, 3 vient le :");
// let rep2 = "4";
// if ((question1 == rep1) && (question2 == rep2)){
//     alert("Les deux réponses sont correctes");
// }
// else if ((question1 !== rep1) && (question2 == rep2)){
//     alert("La réponse a la première question est incorrecte");
// }
// else if ((question1 == rep1) && (question2 !== rep2)){
//     alert("La réponse a la deuxième question est incorrecte");
// }
// else{
//     alert("Les deux réponses sont incorrectes");
// }


// ---------------------- Exercice 8 ------------------------------
// let age = prompt("Quel est ton âge?")
// if (age<=0){
//     alert("Vous n’êtes même pas nés, n’essayez pas de tricher");
// }
// else if (age<18){
//     alert("Vous êtes mineur, l’accès est réservé aux grands");
// }
// else if (age==18){
//     alert("Pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant");
// }
// else if (age>18){
//     alert("Vous êtes majeur, vous pouvez réserver");
// }
// else if (age>100){
//     alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester");
// }
// else{}




// ---------------------- Exercice 9 ------------------------------
let riche = confirm("Est ce que vous êtes riches?");
let vacance = confirm("Est ce que vous voulez partir en vacances?");
let chat = confirm("Est ce que vous avez un chat?");

if (!vacance){
     alert("Pas de problème, n'allez pas en vacances");
}
else if ((!riche) || chat){
    alert("Même si tu le voulais, tu pourrais pas partir en vacances !");
}
else if (riche && (!chat) ){
     alert("Vous pourriez partir en vacances si vous le vouliez !");
}
else if (riche && (!chat) && vacance){
     alert("Tout est parfait ! Partez en vacances !")
}
else if (vacance){
     if (!chat){
         if (riche){
            alert("Tout est parfait ! Partez en vacances !")
         }
     }
}
