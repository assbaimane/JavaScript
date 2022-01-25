// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

// let moi = {
//     prenom: "Imane",
//     age: "23",
//     taille: "158"
// }

// console.log(moi.age)


//________________________________________________________

// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let mari ={
//     prenom: "Yassin",
//     age: "25",
//     taille: "178"
// }

// let jsp = {

// }
//________________________________________________________

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

// jsp.prenom = moi.prenom;
// jsp.age = mari.age;
// jsp.taille = "160";

// console.log(jsp)

//________________________________________________________

// 4. Exo 4
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let personne ={
    //     prenom: "Yassin",
    //     nom: "Oumah",
    //     sePresenter: function(){
        //         console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`)
        //     }
        // }
        
        // personne.sePresenter();

// let objet ={
    
//     methode: function(){
        
//     }
// }

// objet.methode();

//________________________________________________________

// 5. Exo 5
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

// let personne ={
//     nom: "Bobby",
//     alertPersonne: function(){
//         this.age = +prompt("Quelle est son age?");
//         alert(`${this.nom} a ${this.age} ans !`)
//     }
// }

// personne.alertPersonne();
// console.log(personne);

// let exemple ={
//     prenom: "Mona",
//     nom: "Lisa",
//     alertExemple: function(){
//         age = +prompt(`Quel age a ${this.prenom} ?`)
//         alert(`${this.nom} ${this.prenom} a ${age} ans !`)
//     }
// }

// exemple.alertExemple();

//_______________________________________________________

// Exercice 6
// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

// let banqueNationale ={
//     richesse : ["or","lingot","diamant","pierres précieuses","perles","bijoux","billets"],
// }

// let elProfessor ={
//     derober : function(){
//         // this.richesse += banqueNationale.richesse.slice(0,2);
//         this.richesse = banqueNationale.richesse.splice(0,2);
//     }
// }

// elProfessor.derober();
// console.log(banqueNationale);
// console.log(elProfessor);
        
//_______________________________________________________

// 7. Exo 07

// - Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne
     
// - une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.
     
// - Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".
     
// - Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

let vieille ={
    nom: {
        prenom: "Genevievre",
        nomFamille: "De Fontenay",
    },
    age: 89,
    moral: "mal",
    objet: "chapeau",
    parler: function(){
        if(this.moral == "mal"){
            console.log(`Vous me dérangez et le frappe avec son ${this.objet}`);
        }
        else{
            console.log(`Bonjour ${vieux.nom}`);
        }
    }
}

let vieux ={
    nom: "Betrand",
    adoucir : function(){
        vieille.moral = "bien";
    }
}

vieille.parler();
vieux.adoucir();
vieille.parler();

