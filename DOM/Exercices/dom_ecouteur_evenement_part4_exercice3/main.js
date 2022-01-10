// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
let h1 = document.querySelector("h1");
function textblue(){
    h1.className = "text-blue";
}

h1.addEventListener("click",textblue);


// ### 2. Au double clique du h3, rajoute la class text-error
let h3 = document.querySelector("h3");
function texterror(){
    h3.className = "text-error";
}

h3.addEventListener("click",texterror);

// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
let flag = false;
let p = document.querySelector("p");
function textstyle(){
    if (flag){
        p.classList = "";
    }else{
        p.className = "text-style";
    }
    flag = !flag;
}

p.addEventListener("click",textstyle);

// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let span = document.querySelectorAll("p")[1];
function bolder(){
    if (EventTarget.tagName === "span")
        EventTarget.className = "bolder";
    else{

    }
}
span.addEventListener("click",bolder);


// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !
let tag = true;
let span = document.querySelectorAll("p")[2];
function bolderR(){
    if (EventTarget.tagName === "span" && tag)
        EventTarget.className = "bolder-red";
    else{
        EventTarget.removeEventListener();
    }
    tag = !tag;
}
span.addEventListener("click",bolderR);
