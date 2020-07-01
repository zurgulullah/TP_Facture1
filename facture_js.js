document.

function form1nom() {
    var x = document.getElementById("nom").value;
    document.getElementById("outputnom").innerHTML =
     "<p>Veuille rédiger tous les chèques à l'ordre de </p>" + x;
}

function form1tel() {
    var y = document.getElementById("tel").value;
    document.getElementById("outputtelephone").innerHTML =
     "        <p>Pour toute question concernant cette facture , veuillez contacter : DUPONT au " + y;
}

function form1adresse() {
    var z = document.getElementById("adresse").value;
    document.getElementById("outputadresse").innerHTML =
     "</p>  <p>ou à l'adresse" + z;
}