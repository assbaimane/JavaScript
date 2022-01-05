let myBody = document.getElementsByTagName("body");

console.log(myBody[0].firstElementChild);

console.log(myBody[0].lastElementChild);

let exo4 = document.getElementsByTagName("div")[0].children; //nodeChild donne tous les enfants, textes et balises compris alors que children donne uniquement les balises
console.log(exo4);

let firstLi = document.getElementsByTagName("li")[0];
console.log(firstLi.nextElementSibling);

let secondLi = document.getElementsByTagName("li")[1];
console.log(secondLi.previousElementSibling)

