
// Il existe plusieurs maniières de créer des événements : 

//  document.getElementById('div1').onclick = div1; // Evénement sur l'objet, la fonction est déclarée en bas

// OU

 document.getElementById('div1').onclick = function(){
     alert('div1 - Vous avez cliqué sur div1 - Event: click');
 }; // Evenement sur l'objet, fonction déclarée ici

 // OU

// sur HTML = <div id="div1" onclick="alert('div1 - Vous avez cliqué sur div1 - Event: click');"> div1 </div> // méthode initiale/ancienne

// OU

// document.getElementById('div1').addEventListener('click', div1); // Evénement ajouté sur l'objet via addEventListener, fonction déclarée plus bas

// OU

// document.getElementById('div1').addEventListener('click', function(){alert('div1 - Vous avez cliqué sur div1 - Event: click')}); // Evénement ajouté sur l'objet via addEventListener, fonction déclarée ici

// ------------------------------------

// LEs événements se produisent sur des éléments de la page : clic, double-clic, survol, touche de clavier

// Dire à l'élément "d'écouter" si un événement se produit : event Listener

// Dans le cas où un événement est capté, il faut savoir quoi exécuter 

//  addEventlistener(TYPE EVENT, CALLBACK FUNCTION)

// DOM fournit une fonction : addEventlistener()

// La fonction attend 2 arguments (paramètres) : 
// - le type d'événement à capter (clic, double-clic...)

// - le nom de la fonction CALLBACK : fonction à éxécuter)

// Une fonction de rappel (appelée aussi callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour exécuter une action.

// ------------------------------------

// ---------------DIV------------------
document.getElementById('div1').addEventListener('click', div1);
document.getElementById('div2').addEventListener('dblclick', div2);
document.getElementById('div3').addEventListener('mouseover', div3);
document.getElementById('div4').addEventListener('mouseout', div4);
document.getElementById('div5').addEventListener('mousedown', div5);
document.getElementById('div6').addEventListener('mouseup', div6);

// ----------------FORM----------------
document.getElementById('div7').addEventListener('blur', div7);
document.getElementById('div8').addEventListener('focus', div8);
document.getElementById('div9').addEventListener('change', div9);
document.getElementById('div13').addEventListener('select', div13);
document.getElementById('div14').addEventListener('input', div14);
document.getElementById('div15').addEventListener('submit', function(e){
    e.preventDefault();
    alert('div15 - Vous avez soumis le formulaire. Event : Submit');
});


//-----------------Touche CLAVIER------
document.getElementById('div10').addEventListener('keydown', div10);
document.getElementById('div11').addEventListener('keypress', div11);
document.getElementById('div12').addEventListener('keyup', div12);

 

// ------------------------------------


// Les fonctions

        // Click
        function div1() {
            alert('div1 - Vous avez cliqué sur div1 - Event: click');
        }

        // Dblclick
        function div2() {
            alert('div2 - Vous avez double cliqué sur div2 - Event: dblclick');
        }

        // Mouseover
        function div3() {
            alert('div3 - Vous avez passé le curseur sur div3 - Event: Mouseover');
        }

        // Mouseout
        function div4() {
            alert('div4 - Vous avez sorti le curseur de div4 - Event: Mouseout');
        }

        // Mousedown
        function div5() {
            alert('div5 - Vous avez appuyé sur le bouton gauche de la souris dans div5 - Event: Mousedown');
        }

        // Mouseup
        function div6() {
            alert('div6 - Vous avez relaché le bouton gauche de la souris dans div6 - Event: Mouseup');
        }

        // Blur
        function div7() {
            alert('div7 - Le focus n\'est plus actif // Blur');
        }

        // Focus
        function div8() {
            console.log('div8 - Le focus est actif');
        }

        // Change
        function div9(event) {
            alert('Vous avez choisi : ' + event.target.value);
        }

        // Keydown
        function div10() {
            alert('div 10 - Vous avez appuyé sur une touche de clavier sur l\'élément input');
        }

        // Keypress
        function div11() {
            alert('div 11 - Vous avez appuyé puis relaché une touche du clavier sur l\'élément input');
        }

        // Keyup
        function div12() {
            alert('div 12 - Vous avez relaché une touche du clavier sur l\'élément input');
        }

        // Select
        function div13() {
            alert("Vous avez sélectionner le texte dans le champ !");
        }

        // Input
        function div14() {
            var x = document.getElementById("div14").value;
            document.getElementById("output").innerHTML = "Vous tapez : " + x;
        }
        