function ChangeClass(el) {
	var selected_IClass = el.options[el.selectedIndex].text;
	document.getElementById("primaryClass").innerHTML = " " + selected_IClass;
}

function ChangeClassII(el) {
	var selected_IIClass = el.options[el.selectedIndex].text;
	document.getElementById("secondaryClass").innerHTML = " " + selected_IIClass;
}

function DarkMode() {
	var element = document.body;
	if (document.getElementById("icon").innerHTML == "&#9763") {
		document.getElementById("icon").innerHTML = "&#9771;";
	} else {
		document.getElementById("icon").innerHTML = "&#9763;";
	}
	element.classList.toggle("dark-mode");
}

function Modifiers() {
	var StrScore = document.getElementById("strScr").value;
	var DexScore = document.getElementById("dexScr").value;
	var ConScore = document.getElementById("conScr").value;
	var IntScore = document.getElementById("intScr").value;
	var WisScore = document.getElementById("wisScr").value;
	var SanScore = document.getElementById("sanScr").value;
	var ChaScore = document.getElementById("chaScr").value;

	document.getElementById("strMod").value = Math.floor((StrScore - 10) / 2);
	document.getElementById("dexMod").value = Math.floor((DexScore - 10) / 2);
	document.getElementById("conMod").value = Math.floor((ConScore - 10) / 2);
	document.getElementById("intMod").value = Math.floor((IntScore - 10) / 2);
	document.getElementById("wisMod").value = Math.floor((WisScore - 10) / 2);
	document.getElementById("sanMod").value = Math.floor((SanScore - 10) / 2);
	document.getElementById("chaMod").value = Math.floor((ChaScore - 10) / 2);

	Initiative();
}

function ProfBonus() {
	var Primary = parseInt(document.getElementById("levelClass").value);
	var Secondary = parseInt(document.getElementById("levelClassII").value);
	var Total = Primary + Secondary;
	parseInt(
		(document.getElementById("profValue").value = Math.floor((Total + 7) / 4))
	);

	SavingThrows();
	Initiative();
}

function UpdateTotal() {
	var Primary = parseInt(document.getElementById("levelClass").value);
	var Secondary = parseInt(document.getElementById("levelClassII").value);
	var Total = Primary + Secondary;
	if (document.getElementById("multClass").checked == true) {
		parseInt((document.getElementById("totalLevel").value = Total));
	} else {
		parseInt(
			(document.getElementById("totalLevel").value = parseInt(
				document.getElementById("levelClass").value
			))
		);
	}

	ProfBonus();
	SavingThrows();
}

function SavingThrows() {
	var profBonus = parseInt(document.getElementById("profValue").value);
	var chaMod = parseInt(document.getElementById("chaMod").value);
	var Save1 = chaMod + profBonus;
	var conMod = parseInt(document.getElementById("conMod").value);
	var Save2 = conMod + profBonus;
	var dexMod = parseInt(document.getElementById("dexMod").value);
	var Save3 = dexMod + profBonus;
	var strMod = parseInt(document.getElementById("strMod").value);
	var Save4 = strMod + profBonus;
	var intMod = parseInt(document.getElementById("intMod").value);
	var Save5 = intMod + profBonus;
	var wisMod = parseInt(document.getElementById("wisMod").value);
	var Save6 = wisMod + profBonus;
	var sanMod = parseInt(document.getElementById("sanMod").value);
	var Save7 = sanMod + profBonus;

	if (document.getElementById("chaProf").checked == true) {
		parseInt((document.getElementById("saveValueCha").value = Save1));
	} else {
		parseInt((document.getElementById("saveValueCha").value = chaMod));
	}
	if (document.getElementById("conProf").checked == true) {
		parseInt((document.getElementById("saveValueCon").value = Save2));
	} else {
		parseInt((document.getElementById("saveValueCon").value = conMod));
	}
	if (document.getElementById("dexProf").checked == true) {
		parseInt((document.getElementById("saveValueDex").value = Save3));
	} else {
		parseInt((document.getElementById("saveValueDex").value = dexMod));
	}
	if (document.getElementById("strProf").checked == true) {
		parseInt((document.getElementById("saveValueStr").value = Save4));
	} else {
		parseInt((document.getElementById("saveValueStr").value = strMod));
	}
	if (document.getElementById("intProf").checked == true) {
		parseInt((document.getElementById("saveValueInt").value = Save5));
	} else {
		parseInt((document.getElementById("saveValueInt").value = intMod));
	}
	if (document.getElementById("wisProf").checked == true) {
		parseInt((document.getElementById("saveValueWis").value = Save6));
	} else {
		parseInt((document.getElementById("saveValueWis").value = wisMod));
	}
	if (document.getElementById("sanProf").checked == true) {
		parseInt((document.getElementById("saveValueSan").value = Save7));
	} else {
		parseInt((document.getElementById("saveValueSan").value = sanMod));
	}
}

function Initiative() {
	var Feat = document.getElementById("feats").innerHTML;
	var InitFeat = parseInt(document.getElementById("dexMod").value) + 5;
	var dexMod = parseInt(document.getElementById("dexMod").value);

	if (Feat == "Alerta") {
		parseInt((document.getElementById("Initiative").value = InitFeat));
	} else {
		parseInt((document.getElementById("Initiative").value = dexMod));
	}
}

function Hidden() {
	if (document.getElementById("multClass").checked == false) {
		document.querySelector(".multiClass").style.display = "none";
	} else {
		document.querySelector(".multiClass").style.display = "flex";
	}
}

if (document.getElementById("multClass").checked) {
	document.querySelector(".info").style.width = "32%";
}

function Tools() {
	var toolChoices = prompt("Quais ferramentas você conhece?");
	if (toolChoices != null) {
		document.getElementById("tooltext").innerHTML =
			"Você sabe usar: " + toolChoices;
		document.getElementById("toolp").style.display = "none";
	}
}

function Transpose() {
	var choices = prompt("Quais idiomas você conhece?");
	if (choices != null) {
		document.getElementById("langtext").innerHTML = "Você sabe falar: " + choices;
		document.getElementById("langp").style.display = "none";
	}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var conf = document.getElementById("confir");
var confirnm = document.getElementById("confirTriple");

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function attributeDistrib(DistribSelect) {
	var distribuition = DistribSelect.value;
	if (distribuition == "TwoOne") {
		document.querySelector(".TwonOne").style.display = "block";
		document.querySelector("#OnenTwo").style.display = "block";
		conf.style.display = "block";
		document.getElementById("choice").style.display = "none";
	} else if (distribuition == "triple") {
		document.querySelector("#One").style.display = "block";
		document.querySelector("#Onee").style.display = "block";
		document.querySelector("#Oneee").style.display = "block";
		confirm.style.display = "block";
		document.getElementById("choice").style.display = "none";
	}
}

conf.onclick = function () {
	var choice2 = document.querySelector(".TwonOne").value;
	var choice1 = document.querySelector("#OnenTwo").value;
	if (choice2 == "Carisma") {
		document.getElementById("chaScr").value =
			parseInt(document.getElementById("chaScr").value) + 2;
	} else if (choice2 == "Constituição") {
		document.getElementById("conScr").value =
			parseInt(document.getElementById("conScr").value) + 2;
	} else if (choice2 == "Destreza") {
		document.getElementById("dexScr").value =
			parseInt(document.getElementById("dexScr").value) + 2;
	} else if (choice2 == "Força") {
		document.getElementById("strScr").value =
			parseInt(document.getElementById("strScr").value) + 2;
	} else if (choice2 == "Inteligência") {
		document.getElementById("intScr").value =
			parseInt(document.getElementById("intScr").value) + 2;
	} else if (choice2 == "Sabedoria") {
		document.getElementById("wisScr").value =
			parseInt(document.getElementById("wisScr").value) + 2;
	} else if (choice2 == "Sanidade") {
		document.getElementById("sanScr").value =
			parseInt(document.getElementById("sanScr").value) + 2;
	}
	if (choice1 == "Carisma") {
		document.getElementById("chaScr").value =
			parseInt(document.getElementById("chaScr").value) + 1;
	} else if (choice1 == "Constituição") {
		document.getElementById("conScr").value =
			parseInt(document.getElementById("conScr").value) + 1;
	} else if (choice1 == "Destreza") {
		document.getElementById("dexScr").value =
			parseInt(document.getElementById("dexScr").value) + 1;
	} else if (choice1 == "Força") {
		document.getElementById("strScr").value =
			parseInt(document.getElementById("strScr").value) + 1;
	} else if (choice1 == "Inteligência") {
		document.getElementById("intScr").value =
			parseInt(document.getElementById("intScr").value) + 1;
	} else if (choice1 == "Sabedoria") {
		document.getElementById("wisScr").value =
			parseInt(document.getElementById("wisScr").value) + 1;
	} else if (choice1 == "Sanidade") {
		document.getElementById("sanScr").value =
			parseInt(document.getElementById("sanScr").value) + 1;
	}
	modal.style.display = "none";
};

confirnm.onclick = function () {
	var choiceT3 = document.querySelector("#Oneee").value;
	var choiceT2 = document.querySelector("#Onee").value;
	var choiceT1 = document.querySelector("#One").value;
	if (choiceT1 || choiceT2 || choiceT3 == "Carisma") {
		document.getElementById("chaScr").value =
			parseInt(document.getElementById("chaScr").value) + 1;
	} else if (choiceT1 || choiceT2 || choiceT3 == "Constituição") {
		document.getElementById("conScr").value =
			parseInt(document.getElementById("conScr").value) + 1;
	} else if (choiceT1 || choiceT2 || choiceT3 == "Destreza") {
		document.getElementById("dexScr").value =
			parseInt(document.getElementById("dexScr").value) + 1;
	} else if (choiceT1 || choiceT2 || choiceT3 == "Força") {
		document.getElementById("strScr").value =
			parseInt(document.getElementById("strScr").value) + 1;
	} else if (choiceT1 || choiceT2 || choiceT3 == "Inteligência") {
		document.getElementById("intScr").value =
			parseInt(document.getElementById("intScr").value) + 1;
	} else if (choiceT1 || choiceT2 || choiceT3 == "Sabedoria") {
		document.getElementById("wisScr").value =
			parseInt(document.getElementById("wisScr").value) + 1;
	} else if (choiceT1 || choiceT2 || choiceT3 == "Sanidade") {
		document.getElementById("sanScr").value =
			parseInt(document.getElementById("sanScr").value) + 1;
	}
	modal.style.display = "none";
};

function raceSelect(raceSelect) {
	const btn = document.getElementById("myBtn");
	const botao = btn.addEventListener("click", () => {
		clearTimeout(Timer);
	});
	var race = raceSelect.value;
	const Timer = setTimeout(applyRMod, 25000);
	function applyRMod() {
		if (race == "aarakocra") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "caido") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 1;
		} else if (race == "flagelador") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "protetor") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "colina") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "duegar") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 1;
		} else if (race == "montanha") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
		} else if (race == "antari") {
			document.getElementById("sanScr").value =
				parseInt(document.getElementById("sanScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 2;
		} else if (race == "bugbear") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
		} else if (race == "centauro") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "azul") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "branco") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "bronze") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "cobre") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "latao") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "negro") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "ouro") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "prata") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "verde") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "vermelho") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "sol") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "lua") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "drow") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "floresta") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "inverno") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "outono") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "primavera") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "verao") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "shadarkai") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "sea") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "firbolg") {
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 2;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 1;
		} else if (race == "ar") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
		} else if (race == "agua") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 1;
		} else if (race == "fogo") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "terra") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "githyanki") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "githzerai") {
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "gfloresta") {
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
		} else if (race == "grochas") {
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "gprofunezas") {
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
		} else if (race == "goblin") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "golias") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "fanstasma") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "pesleves") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "valente") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "hobogoblin") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "human") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 1;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
			document.getElementById("sanScr").value =
				parseInt(document.getElementById("sanScr").value) + 1;
		} else if (race == "kenku") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "kobold") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) - 2;
		} else if (race == "meioelfo") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("airSpeed").value = 0;
		} else if (race == "meioorc") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "minotauro") {
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "povolagarto") {
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "tabaxi") {
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
		} else if (race == "asmodeus") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "baalzebul") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "dispater") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
		} else if (race == "fierna") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
		} else if (race == "glasya") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 1;
		} else if (race == "levistus") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "mammon") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "mephistopheles") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "zariel") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 1;
			document.getElementById("strScr").value =
				parseInt(document.getElementById("strScr").value) + 1;
		} else if (race == "tritao") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 1;
			document.getElementById("conScr").value =
				parseInt(document.getElementById("conScr").value) + 1;
		} else if (race == "yuanti") {
			document.getElementById("chaScr").value =
				parseInt(document.getElementById("chaScr").value) + 2;
			document.getElementById("intScr").value =
				parseInt(document.getElementById("intScr").value) + 1;
		} else if (race == "alfy") {
			document.getElementById("wisScr").value =
				parseInt(document.getElementById("wisScr").value) + 2;
			document.getElementById("dexScr").value =
				parseInt(document.getElementById("dexScr").value) + 2;
		}
	}
	btn.style.display = "block";
	setTimeout(ButtonTime, 10000);
}

function ButtonTime() {
	btn.style.display = "none";
}