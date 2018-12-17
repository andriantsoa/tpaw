$(document).ready(function () {
  // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
  // voir plus : https://www.w3schools.com/js/js_htmldom.asp
  console.log("DOM ready!");
  let contactList = [];
  

  $("#submit").on("click", function () {
    var apiKey = "AIzaSyCsl2Fj9E0wX8Iz05thANxqakxGnAFieXg";

    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var date = $('#date').val();
    var adresse = $('#adresse').val();
    var email = $('#email').val();
    if (nom.length < 5 || prenom.length < 5 || date.length < 9 || adresse.length < 5 || email.length < 5) {
      $(".modal-title").html('<h3>Avertissement</h3>');
      $(".modal-body").html('<p><img src="worry.png" width="30"/> Veuillez remplir tous les champs svp.</p>');
    } else {
      var map = "https://maps.googleapis.com/maps/api/staticmap?center="+ adresse + "&zoom=14&size=400x400&key="+ apiKey;
      var message = "Bienvenue " + prenom;
      var anniv = new Date(date).toLocaleDateString();
      var lien = '<a href="http://maps.google.com/maps?q=' + adresse + '" target="_blank"><img src="'+ map + '"></a>';

      contactList = [...contactStore.add(nom, prenom, date, adresse, email)];
      console.log(contactList);
      for(var index in contactList){
        var table = document.querySelector("table tbody");
        table.innerHTML = table.innerHTML +
        '<tr><td>'+ contactList[index].nom + '</td>'+
        '<td>'+ contactList[index].prenom + '</td>'+
        '<td>'+ contactList[index].date + '</td>'+
        '<td>'+ contactList[index].adresse + '</td>'+
        '<td>'+ contactList[index].email + '</td></tr>';
      }

      $(".modal-title").html('<h3>' + message + '</h3>');
      $(".modal-body").html('<p>Vous êtes nés le '+ anniv + ' et vous habitez à <br> <div id="map"></div>'+ lien);
    }
    $('#myModal').modal("show");
  });

  $("#gps").on("click", function () {
    var position = getLocation();
    if(position) {
      showPosition(position);
    }
  });

  $("#nom").keyup(function() {
    var nom = $('#nom').val();
    $("#nbNom").html('<p>' + nom.length + ' car.</p>');
  });

  $("#prenom").keyup(function() {
    var prenom = $('#prenom').val();
    $("#nbPre").html('<p>' + prenom.length + ' car.</p>');
  });

});
