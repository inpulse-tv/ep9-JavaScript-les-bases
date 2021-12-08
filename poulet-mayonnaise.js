console.log("POULET-MAYONNAISE.JS vient de démarrer");

//////////////////////////////////////////////////
/////////// GLOBALS
//////////////////////////////////////////////////

var optionVegan = document.getElementById("option-vegan");
var optionViandardSensible = document.getElementById("option-viandard-sensible");
var optionPasVeganDuTout = document.getElementById("option-pas-vegan-du-tout");
var optionPetiteFaim = document.getElementById("option-petite-faim");
var optionGrosseDalle = document.getElementById("option-grosse-dalle");
var optionAbonnes = document.getElementById("option-abonnes");
var optionMilitaires = document.getElementById("option-militaires");
var optionAutres = document.getElementById("option-autres");

//////////////////////////////////////////////////
/////////// HELPERS
//////////////////////////////////////////////////

function changePrix( nouveauPrix ) {
	var lesTagsPrix = document.getElementsByTagName("itv-prix");
	
	for ( var n=0 ; n < lesTagsPrix.length ; n++){
		
		var lesTagsPDansLesTagsPrix = lesTagsPrix[n].getElementsByTagName("p");
		
		lesTagsPDansLesTagsPrix[0].innerHTML = nouveauPrix;
	}
}

function nouvelleOption ( itvOptionChoisie ) {
	var optionsPossibles = Array.prototype.slice.call(
		itvOptionChoisie.parentElement.getElementsByTagName("itv-option")
	);
	
	optionsPossibles.forEach ( (optionAnalysee) => {
			
			if ( optionAnalysee == itvOptionChoisie ) {
				optionAnalysee.classList.add("option-choisie");
			}
			else {
				optionAnalysee.classList.remove("option-choisie");
			}
						
		}
	);
	
}


function contenuVegan ( vegan ) {
	
	var aEnlever;
	var aAjouter;
	
	if (vegan) {
		aEnlever = document.getElementsByTagName("itv-viandard");
		aAjouter = document.getElementsByTagName("itv-vegan");
	} else {
		aEnlever = document.getElementsByTagName("itv-vegan");
		aAjouter = document.getElementsByTagName("itv-viandard");
	}
	
	for (var i = 0; i < aEnlever.length; i++) {
		aEnlever[i].style.display = "none";
	}
	for (var j = 0; j < aAjouter.length; j++) {
		aAjouter[j].style.display = "inline";
	}
}

function contenuGrosseDalle ( grosseDalle ) {
	
	var elementsGrosseDalle = document.getElementsByClassName("grosse-dalle");;
	
	for (var i = 0; i < elementsGrosseDalle.length; i++) {
		
		if (grosseDalle) {
			
			elementsGrosseDalle[i].style.display = "block";
			
		} else {
			
			elementsGrosseDalle[i].style.display = "none";
			
		}
	}
}


function photoBackground ( sensibilite ) {
	
	var elementsAvecPhotoBackground = document.getElementsByClassName("bg");;
	
	for (var i = 0; i < elementsAvecPhotoBackground.length; i++) {
		
		elementsAvecPhotoBackground[i].classList.remove("bg-vegan");
		elementsAvecPhotoBackground[i].classList.remove("bg-viandard-sensible");
		elementsAvecPhotoBackground[i].classList.remove("bg-pas-vegan");
		
		if (sensibilite == "vegan") {			
			elementsAvecPhotoBackground[i].classList.add("bg-vegan");
		} else if (sensibilite == "viandard sensible"){		
			elementsAvecPhotoBackground[i].classList.add("bg-viandard-sensible");
		}
		else if (sensibilite == "pas vegan"){
			elementsAvecPhotoBackground[i].classList.add("bg-pas-vegan");
		}
	}
}


//////////////////////////////////////////////////
/////////// EVENTS
//////////////////////////////////////////////////


function utilisateurChoisitVegan() {
	console.log('On a choisit VEGAN');
	nouvelleOption ( optionVegan );
	contenuVegan ( true );
	photoBackground ( "vegan" );
}

function utilisateurChoisitViandardSensible() {
	console.log('On a choisit VIANDARD SENSIBLE');
	nouvelleOption ( optionViandardSensible );
	contenuVegan ( false );
	photoBackground ( "viandard sensible" );
}

function utilisateurChoisitPasVeganDuTout() {
	console.log('On a choisit PAS VEGAN DU TOUT');
	nouvelleOption ( optionPasVeganDuTout );
	contenuVegan ( false );
	photoBackground ( "pas vegan" );
}

function utilisateurChoisitPetiteFaim() {
	console.log('On a choisit PETITE FAIM');
	nouvelleOption ( optionPetiteFaim );
	contenuGrosseDalle ( false );
}

function utilisateurChoisitGrosseDalle() {
	console.log('On a choisit GROSSE DALLE');
	nouvelleOption ( optionGrosseDalle );
	contenuGrosseDalle ( true );
}

function utilisateurChoisitAbonnes() {
	console.log('On a choisit ABONNES');
	changePrix( "7€" );
	nouvelleOption ( optionAbonnes );
}

function utilisateurChoisitMilitaires() {
	console.log('On a choisit MILITAIRES');
	changePrix( "3€" );
	nouvelleOption ( optionMilitaires );
}

function utilisateurChoisitAutres() {
	console.log('On a choisit AUTRES');
	changePrix( "Abonnez-vous!!" );
	nouvelleOption (optionAutres);
}


//////////////////////////////////////////////////
/////////// INIT
//////////////////////////////////////////////////

optionVegan.onclick = utilisateurChoisitVegan;
optionViandardSensible.onclick = utilisateurChoisitViandardSensible;
optionPasVeganDuTout.onclick = utilisateurChoisitPasVeganDuTout;
optionPetiteFaim.onclick = utilisateurChoisitPetiteFaim;
optionGrosseDalle.onclick = utilisateurChoisitGrosseDalle;
optionAbonnes.onclick = utilisateurChoisitAbonnes;
optionMilitaires.onclick = utilisateurChoisitMilitaires;
optionAutres.onclick = utilisateurChoisitAutres;

contenuVegan ( false );
photoBackground ( "pas vegan" );


console.log("POULET-MAYONNAISE.JS a fini!");
