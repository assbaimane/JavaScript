// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.
let e = document.querySelector("#content");
e.addEventListener("click",(event)=>{
    event.target.style.border = "5px dashed green";
    switch (event.target.tagName) {
        case "P":
            event.target.style.fontWeight = "bold";
            event.target.style.color = "red";
            break;
        case "H1":
            event.target.style.textDecoration = "underline";
            break;
        case "H2":
            event.target.innerText=event.target.innerText.substring(0,event.target.innerText.length-1);
            break;
        default:
            break;
    }
})


// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 

let troplong = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let mysec = document.querySelector("section");
let para = document.querySelectorAll("P")[1];
mysec.addEventListener("mouseover",()=>{
    para.innerHTML = troplong;
});