class Personne{
    constructor(nom,prenom,age,argent,sac){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.argent = argent;
        this.sac = sac;
    }
    prendre = (produit) =>{
        this.sac.push(produit);
    }
    acheter(produit){
        this.argent = this.argent - produit.prix;
        produit.acheter = true;
        this.sac.push(produit);
    }
    deposer(piece){
        piece.armoire = [...this.sac];
        this.sac = [];
    }
}

class Produit{
    constructor(nom,prix,taille,acheter){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.acheter = acheter;
    }
}

class Appartement{
    constructor(nom,armoire,personnes){
        this.nom = nom;
        this.armoire = armoire;
        this.personnes = personnes;
    }
}

export {Personne,Produit,Appartement}