import{Malade,Docteur,Lieu, Pharmacie} from "./class.js"

// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront se faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.

// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 

let malade1 = new Malade("Marcus","mal indenté",100);
let malade2 = new Malade("Optimus","unsave",200);
let malade3 = new Malade("Sangoku","404",80);
let malade4 = new Malade("DarthVader","azmatique",110);
let malade5 = new Malade("Semicolon","syntaxError",60);

let medecin = new Docteur("Dr Debugger",0,[malade1.nom,malade2.nom,malade3.nom,malade4.nom,malade5.nom]);

// console.log(`Dans la salle d'attente du ${medecin.nom}, il y a ${medecin.salleAttente}.`)


// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus : fonction asynchrone). La consultation coûte 50€. Les patients sont dans un état de traitement avant de sortir du cabinet.

let monMalade = malade4; // ---> change le malade ici pour voir son évolution

medecin.patientIn(monMalade);
console.log(`${monMalade.nom} vient de rentrer dans le cabinet du ${medecin.nom}`);
console.log(`dans le cabinet du medecin il y a ${medecin.cabinet}`)

console.log(`${medecin.nom} est en train de diagnostiqué ${monMalade.nom}`);
medecin.diagnostique(monMalade);

medecin.patientOut(monMalade);
console.log(`${monMalade.nom} vient de sortir du cabinet du ${medecin.nom}`);
console.log(`Du coup, dans le cabinet du medecin il reste : ${medecin.cabinet}`)

// |nom|argent|cabinet(tableau avec un chat dedans)|salle d'attente(tous les malades de salle d'attente)|diagnostique(est ce qu'ils ont assez d'argent pour payer, etat malade vers en traitement)|patienTIn(quand le patient doit rentrer dans le cabinet)|patientOut(on fait sortir le client (du cabinet a la salle d'attente)) 

let multiPharma = new Pharmacie("Pharmacien Paul",[],0);
monMalade.goTo(medecin.salleAttente, multiPharma.personnes);
console.log(`Dans la salle d'attente, qui attendent ${medecin.nom} il y a ${medecin.salleAttente}`);
console.log(`Dans la pharmacie, il y a ${multiPharma.personnes}`);

// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière. Si ils ont assez d'argent, ils achetent le médicament, ils rentrent à la maison et leur état de santé passe de malade à guéris.

let maMaison = new Lieu("maison",[]);
let cimetiere = new Lieu("Cimetière de Jette", ["Michael Jackson"]);

multiPharma.vendre(monMalade);

monMalade.goTo(multiPharma.personnes,maMaison.personnes);
if (monMalade.poche == []){
    monMalade.etatSante = "mort";
    monMalade.goTo(maMaison.personnes,cimetiere.personnes);
    console.log(`R.I.P ${monMalade.nom}`);
}
else{
    monMalade.takeCare();
    console.log(monMalade.poche)
    console.log(`${monMalade.nom} est ${monMalade.etatSante} !`)
}

// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.