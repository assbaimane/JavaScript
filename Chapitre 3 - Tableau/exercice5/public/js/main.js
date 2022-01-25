//------------------------- EXO 1 -------------------------

// Exo 1.1 Créez une variable contenant un tableau du nom de tabExo avec 5 valeurs, une de type string, une variable, deux de type int et une de type booléenne
var mavariable = "Je suis variable";
let tabExo = ["phrase", mavariable, 1, 2, true];

// Exo 1.2 Affichez le contenu du tableau dans un console.log()
console.log(tabExo);

//------------------------- EXO 2 -------------------------
console.log(tabExo.length);

//------------------------- EXO 3 -------------------------
tabExo = tabExo.splice(0,tabExo.length-1);
console.log(tabExo);

//------------------------- EXO 4 -------------------------
tabExo = tabExo.splice(1,tabExo.length-1);
console.log(tabExo);

//------------------------- EXO 5 -------------------------
tabExo.push(3,4);
console.log(tabExo);

//------------------------- EXO 6 -------------------------
tabExo.unshift("ola","como","esta");
console.log(tabExo);

//------------------------- EXO 7 -------------------------
console.log(tabExo.reverse());

//------------------------- EXO 8 -------------------------
// 1- Elias mettra son premier objet normalement dans la boite

let boiteElias = ["objet1"];

// 1- Il veut pouvoir repeter cette action une seconde fois.

boiteElias.push("objet2");

// 1-Elias observe sa boite avec une alert

alert(boiteElias);

// 1-Pour son troisieme objet il aimerait le mettre avant les autres

boiteElias.unshift("objet3");

// 1-Elias observe sa boite avec une alert

alert(boiteElias);

// 1-Il attrape 3 objets et décidera de les mettre tout au fond de la boite

boiteElias.push("objet4", "objet5", "objet6");

// 1-Je pense qu'une alert serait la bienvenue pour aider Elias à savoir ce que contient sa boite car il est un peu perdu entre toutes ces choses.

alert(boiteElias);

// 1-N'étant pas satisfait de son rangement il décide de retirer les trois premiers objets

boiteElias.splice(0, 3);

// 1-D'en rajouter un

boiteElias.push("objet7");

// 1-Elias à un petit problème il ne sait pas compter je me demande comment on pourrait afficher le nombre d'objet contenu par sa boite dans une alert...

alert(boiteElias.length);

// 1-Trouvant que c'est un peu trop chargé il décide de retirer les 2 derniers objets de sa boîte

boiteElias.splice(2, 2);

// 1-Et pourquoi pas retirer les 2 premier...

boiteElias.splice(0, 2);

// 1-Elias observe sa boite via une alert

alert(boiteElias);

// 1-Desespéré de voir qu'il à fini par tout y retirer Elias range sa boite et s'en va.