class Malade{
    constructor(nom,maladie,argent){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.traitement = "";
        this.poche = [];
        this.etatSante = "malade";
    }
    goTo(origine,lieu){
        origine.splice((origine.indexOf(this.nom)),1);
        lieu.push(this.nom);
    }
    paye(prixAPayer){
        this.argent -= prixAPayer;
        console.log(`${this.nom} vient de dépenser ${prixAPayer} `)
    }
    takeCare(){ //passer de l'état malade à guéris
       this.etatSante = "guéris";
    }
}


class Docteur{
    constructor(nom,argent,salleAttente){
        this.nom = nom;
        this.argent = argent;
        this.salleAttente = salleAttente;
        this.cabinet = ["chat"];
    }
    diagnostique(patient){
        if(patient.argent >= 50){
            patient.paye(50);
            switch (patient.maladie){
                case 'mal indenté':
                    patient.traitement = "ctrl+maj+f";
                    break;
                case 'unsave':
                    patient.traitement = "saveOnFocusChange";
                    break;
                case '404':
                    patient.traitement = "CheckLinkRelation";
                    break;
                case 'azmatique':
                    patient.traitement = "Ventoline";
                    break;
                case 'syntaxError':
                    patient.traitement = "f12+doc";
                    break;
            }
            patient.etatSante = "en traitement"; 
            console.log(`${patient.nom}, tu viens d'être diagnostiqué ! Tu peux sortir à la pharmacie pour acheter ton traitement, demande au pharmacien du ${patient.traitement}`)        
        }
        else{
            console.log(`Désolé, pas de bras pas de chocolat, pas d'argent pas de traitement. Tu peux rentrer chez toi`);
        }
    }
    patientIn(patient){
        this.salleAttente.splice((this.salleAttente.indexOf(patient.nom)),1);
        this.cabinet.push(patient.nom);
    }
    patientOut(patient){
        this.cabinet.splice(this.cabinet.indexOf(patient.nom),1);
        this.salleAttente.push(patient.nom);
    }
}

class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Pharmacie extends Lieu{
    constructor(nom,personnes,caisse){
        super(nom, personnes);
        this.caisse = caisse;
        this.stock = [
            {
                traitement : "ctrl+maj+f",
                prix : 60,
            },
            {
                traitement : "saveOnFocusChange",
                prix : 100,
            },
            {
                traitement : "CheckLinkRelation",
                prix : 35,
            },
            {
                traitement : "Ventoline",
                prix : 40,
            },
            {
                traitement : "f12+doc",
                prix : 20,
            }
        ]
    }
    vendre(malade){
        let prixTraitement = null;
        switch(malade.traitement){
            case 'ctrl+maj+f':
                prixTraitement = 60;
                break;
            case 'saveOnFocusChange':
                prixTraitement = 100;
                break;
            case 'CheckLinkRelation':
                prixTraitement = 35;
                break;
            case 'Ventoline':
                prixTraitement = 40;
                break;
            case 'f12+doc':
                prixTraitement = 20;
                break;
        }
        if (malade.argent >= prixTraitement){
            malade.paye(prixTraitement);
            malade.poche.push(malade.traitement);
            console.log(`Dans la poche de ${malade.nom}, il y a ${malade.poche}`)
            this.caisse += prixTraitement;
            //on met dans la poche, on retire de notre argent et on met dans la caisse de la pharmacie
        }
        else{
            console.log(`Désolé, tu n'as pas de quoi te payer le médicament. Rentre mourir chez toi`);
        }
    }
}


export{Malade,Docteur,Lieu, Pharmacie};