// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

let moi = {
    prenom: "Imane",
    age: "23",
    taille: "158"
}

console.log(moi.age)


//________________________________________________________

// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let mari ={
    prenom: "Yassin",
    age: "25",
    taille: "178"
}

let jsp = {

}
//________________________________________________________

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

jsp.prenom = moi.prenom;
jsp.age = mari.age;
jsp.taille = "160";

console.log(jsp)

//________________________________________________________

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let personne ={
    prenom: "Yassin",
    nom: "Oumah",
    const sePresenter{
        
    }
}

//________________________________________________________

// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

