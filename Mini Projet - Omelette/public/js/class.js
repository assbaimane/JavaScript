class Personne{
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    }
    seDeplacer(origine,lieu){
        origine.personnes.splice(origine.personnes.indexOf(lieu),1);
        this.lieu = lieu.nom;
        lieu.personnes.push(this);
    }
    payerArticle(article){
        this.argent -= article.prix;
    }
    couper(ingredient,outil){
        if (ingredient.etat === "entier") {
            ingredient.etat = "coupé";
        }
    }
}

class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
        this.contenu = [];
        this.paniers = [
            {
                nom: "Panier 1",
                contenu: []
            },
            {
                nom: "Panier 2",
                contenu: []
            },
            {
                nom: "Panier 3",
                contenu: []
            }
        ]
    }
}

class Outil{
    constructor(nom,action){
        this.nom = nom;
        this.action = action;
        this.contenu = [];
    }
    cuir(){
        setTimeout(()=> {
            this.contenu.etat = "cuite";
            console.log(`Mon ${this.contenu.nom} est passé dans ma ${this.nom} pendant 4 minutes. Elle est maintenant ${this.contenu.etat}. Bon appétit ! :) `)
        }, 4000);
    }
    melanger(nomMelange){
        this.newMelange = {
            nom : nomMelange,
            etat : "pas cuite"
        }
        this.contenu = this.newMelange;
    }
}

class Produit{
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export {Personne,Lieu,Outil,Produit}