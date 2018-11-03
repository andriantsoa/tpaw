
function validation () {
  let nomElement = document.getElementById("nom");
  let prenomElement = document.getElementById("prenom");
  let dateElement = document.getElementById("date");

  let addressElement = document.getElementById("address");
  let emailElement = document.getElementById("email");
  let elements = [
    {elem:emailElement, min:5 , max: 35},
    {elem:addressElement, min: 5, max: 50},
    {elem:dateElement, min:10, max: 10},
    {elem:prenomElement, min:5, max: 20},
    {elem:nomElement, min:5, max: 20}
  ];
  var a = 0;
  for (let e of elements) {
    a += testLong(e.elem, e.min, e.max); 
  }
  if (a == "0") {
    let selected = "#" + "prenom";
    let message = "Bienvenue " + document.querySelector(selected).value;
    afficher("resultat", message);
  }
}

function afficher(id, message) {
  let idHidden = "";
  if (id == "error") {
    idHidden = "resultat";
  } else {
    idHidden = "error";
  }
  cacher(idHidden);
  document.getElementById(id).style.display = "block";
  document.getElementById(id).innerHTML = message;
}

function cacher(id) {
  document.getElementById(id).style.display = "none";
}

function testLong(element, min, max) {
  if (element) {
    let elementVal = element.value;
    let elementName = element.name;
    if (!elementVal) {
      afficher("error", "La saisie du champ " + elementName +" est obligatoire");
      return 1;
    } else if (elementVal && elementVal.length < min) {
      afficher("error", "Le champ " + elementName +" fait au moins " + min + " caractères");
      return 1;
    } else if (elementVal && elementVal.length > max) {
      afficher("error", "Le champ " + elementName +" fait au plus " + max + " caractères");
      return 1;
    } else {
      return 0;
    }
  }
}