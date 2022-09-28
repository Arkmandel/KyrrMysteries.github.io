window.onload = UpdateTotal;

function ChangeClass(el) {
	var selected_IClass = el.options[el.selectedIndex].text;
	document.getElementById("primaryClass").innerHTML = " " + selected_IClass;
	var Primary = parseInt(document.getElementById("levelClass").value);
	if (selected_IClass == "Bárbaro" || selected_IClass == "Homeopata") {
		document.getElementById("die").value = "d12";
	} else if (
		selected_IClass == "Guerreiro" ||
		selected_IClass == "Paladino" ||
		selected_IClass == "Ranger"
	) {
		document.getElementById("die").value = "d10";
	} else if (
		selected_IClass == "Bruxo" ||
		selected_IClass == "Bardo" ||
		selected_IClass == "Clérigo" ||
		selected_IClass == "Druida" ||
		selected_IClass == "Monge" ||
		selected_IClass == "Artifice" ||
		selected_IClass == "Ladino"
	) {
		document.getElementById("die").value = "d8";
	} else if (selected_IClass == "Mago" || selected_IClass == "Feiticeiro") {
		document.getElementById("die").value = "d6";
	}

	var profBonus = parseInt(document.getElementById("profValue").value);
	let Charisma_Casters = parseInt(document.getElementById("chaMod").value);
	let Wisdom_Casters = parseInt(document.getElementById("wisMod").value);
	let Intelligence_Casters = parseInt(document.getElementById("intMod").value);

	if (
		selected_IClass == "Bruxo" ||
		selected_IClass == "Bardo" ||
		selected_IClass == "Paladino" ||
		selected_IClass == "Homeopata" ||
		selected_IClass == "Feiticeiro"
	) {
		parseInt(
			(document.getElementById("SpDc").value = Charisma_Casters + profBonus + 8)
		);
	} else if (
		selected_IClass == "Ranger" ||
		selected_IClass == "Clérigo" ||
		selected_IClass == "Druida" ||
		selected_IClass == "Monge"
	) {
		parseInt(
			(document.getElementById("SpDc").value = Wisdom_Casters + profBonus + 8)
		);
	} else if (selected_IClass == "Artifice" || selected_IClass == "Mago") {
		parseInt(
			(document.getElementById("SpDc").value =
				Intelligence_Casters + profBonus + 8)
		);
	}
	ViadaAuto();
}

function ChangeClassII(el) {
	var selected_IIClass = el.options[el.selectedIndex].text;
	document.getElementById("secondaryClass").innerHTML = " " + selected_IIClass;
}

function DarkMode() {
	var element = document.body;
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
	Skills();
	Passive_Perception();
	ViadaAuto();
	equipArmor(equippedArmor);
	shieldEquip(shieldEquip);
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
	Skills();
	Passive_Perception();
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
	ViadaAuto();
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
	Passive_Perception();
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

function specialCaseA() {
	modal.style.display = "block";
	document.querySelector("#One").style.display = "block";
	document.querySelector("#Onee").style.display = "block";
	confirnm.style.display = "block";
	document.getElementById("choice").style.display = "none";
}

function specialCaseAl() {
	modal.style.display = "block";
	document.querySelector("#OnenTwo").style.display = "block";
	conf.style.display = "block";
	document.getElementById("choice").style.display = "none";
}

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
		confirnm.style.display = "block";
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
	if (choiceT1 == "Carisma") {
		document.getElementById("chaScr").value =
			parseInt(document.getElementById("chaScr").value) + 1;
	} else if (choiceT1 == "Constituição") {
		document.getElementById("conScr").value =
			parseInt(document.getElementById("conScr").value) + 1;
	} else if (choiceT1 == "Destreza") {
		document.getElementById("dexScr").value =
			parseInt(document.getElementById("dexScr").value) + 1;
	} else if (choiceT1 == "Força") {
		document.getElementById("strScr").value =
			parseInt(document.getElementById("strScr").value) + 1;
	} else if (choiceT1 == "Inteligência") {
		document.getElementById("intScr").value =
			parseInt(document.getElementById("intScr").value) + 1;
	} else if (choiceT1 == "Sabedoria") {
		document.getElementById("wisScr").value =
			parseInt(document.getElementById("wisScr").value) + 1;
	} else if (choiceT1 == "Sanidade") {
		document.getElementById("sanScr").value =
			parseInt(document.getElementById("sanScr").value) + 1;
	}
	if (choiceT2 == "Carisma") {
		document.getElementById("chaScr").value =
			parseInt(document.getElementById("chaScr").value) + 1;
	} else if (choiceT2 == "Constituição") {
		document.getElementById("conScr").value =
			parseInt(document.getElementById("conScr").value) + 1;
	} else if (choiceT2 == "Destreza") {
		document.getElementById("dexScr").value =
			parseInt(document.getElementById("dexScr").value) + 1;
	} else if (choiceT2 == "Força") {
		document.getElementById("strScr").value =
			parseInt(document.getElementById("strScr").value) + 1;
	} else if (choiceT2 == "Inteligência") {
		document.getElementById("intScr").value =
			parseInt(document.getElementById("intScr").value) + 1;
	} else if (choiceT2 == "Sabedoria") {
		document.getElementById("wisScr").value =
			parseInt(document.getElementById("wisScr").value) + 1;
	} else if (choiceT2 == "Sanidade") {
		document.getElementById("sanScr").value =
			parseInt(document.getElementById("sanScr").value) + 1;
	}
	if (choiceT3 == "Carisma") {
		document.getElementById("chaScr").value =
			parseInt(document.getElementById("chaScr").value) + 1;
	} else if (choiceT3 == "Constituição") {
		document.getElementById("conScr").value =
			parseInt(document.getElementById("conScr").value) + 1;
	} else if (choiceT3 == "Destreza") {
		document.getElementById("dexScr").value =
			parseInt(document.getElementById("dexScr").value) + 1;
	} else if (choiceT3 == "Força") {
		document.getElementById("strScr").value =
			parseInt(document.getElementById("strScr").value) + 1;
	} else if (choiceT3 == "Inteligência") {
		document.getElementById("intScr").value =
			parseInt(document.getElementById("intScr").value) + 1;
	} else if (choiceT3 == "Sabedoria") {
		document.getElementById("wisScr").value =
			parseInt(document.getElementById("wisScr").value) + 1;
	} else if (choiceT3 == "Sanidade") {
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
	const Timer = setTimeout(applyRMod, 12000);
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
			specialCaseA();
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
			document.getElementById("sanScr").max = 18;
			specialCaseAl();
		}
	}

	if (race == "aarakocra") {
		document.getElementById("fly").innerHTML = "15";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "caido") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "flagelador") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "protetor") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "colina") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "duegar") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "montanha") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "bugbear") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "centauro") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "12";
		document.getElementById("speed").value = "12 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "azul") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "branco") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "bronze") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "cobre") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "latao") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "negro") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "ouro") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "prata") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "verde") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "vermelho") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "sol") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "lua") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "drow") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "floresta") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "10.5";
		document.getElementById("speed").value = "10.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "inverno") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "outono") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "primavera") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "verao") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "shadarkai") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "sea") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "9";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "firbolg") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "ar") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "agua") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "fogo") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "terra") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "githyanki") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "githzerai") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "gfloresta") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "grochas") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "gprofunezas") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "goblin") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "golias") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "fanstasma") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "pesleves") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "valente") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "7.5";
		document.getElementById("speed").value = "7.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "hobogoblin") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "human") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "kenku") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "kobold") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "meioelfo") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "meioorc") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "minotauro") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "povolagarto") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "9";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "tabaxi") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "6";
	} else if (race == "asmodeus") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "baalzebul") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "dispater") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "fierna") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "glasya") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "levistus") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "mammon") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "mephistopheles") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "zariel") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "tritao") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "9";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "yuanti") {
		document.getElementById("fly").innerHTML = "0";
		document.getElementById("walk").innerHTML = "9";
		document.getElementById("speed").value = "9 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	} else if (race == "alfy") {
		document.getElementById("fly").innerHTML = "15";
		document.getElementById("walk").innerHTML = "4.5";
		document.getElementById("speed").value = "4.5 m";
		document.getElementById("swim").innerHTML = "0";
		document.getElementById("climb").innerHTML = "0";
	}

	btn.style.display = "block";
	setTimeout(ButtonTime, 10000);
}

function ButtonTime() {
	btn.style.display = "none";
}

// Get the modal
var modalSpeed = document.getElementById("mySpeedModal");

// Get the button that opens the modal
var deslocamento = document.getElementById("speed");

// When the user clicks the button, open the modal
deslocamento.onmouseenter = function () {
	modalSpeed.style.visibility = "visible";
};

deslocamento.onmouseleave = function () {
	modalSpeed.style.visibility = "hidden";
};

function openNavlt() {
	document.getElementById("mySidenav-light").style.width = "250px";
}

function closeNavlt() {
	document.getElementById("mySidenav-light").style.width = "0";
}

function openNavdk() {
	document.getElementById("mySidenav-dark").style.width = "250px";
}

function closeNavdk() {
	document.getElementById("mySidenav-dark").style.width = "0";
}

let manPVdk = document.getElementById("slider-dk");
let manPVlt = document.getElementById("slider-lt");
var manLabelLP = document.querySelector("#Manual");
var LP = document.getElementById("lifeTotal");
var manLP = document.getElementById("lifeTotalMan");
var labelLP = document.getElementById("PAuto");

function disablt() {
	confirm(
		"Você tem certeza que quer desativar o calculo de vida automatico?\n Você não poderá desfazer está escolha."
	);
	if (manPVlt.checked == true) {
		manLP.style.display = "inline-block";
		manLabelLP.style.display = "inline-block";
		LP.style.display = "none";
		labelLP.style.display = "none";
		document.getElementById("PVAtual").style.display = "none";
		document.getElementById("PVAtuallabel").style.display = "none";
		manPVlt.disabled = true;
		manPVdk.disabled = true;
	}
}

function disabdk() {
	confirm(
		"Você tem certeza que quer desativar o calculo de vida automatico?\n Você não poderá desfazer está escolha."
	);
	if (manPVdk.checked == true) {
		manLP.style.display = "inline-block";
		manLabelLP.style.display = "inline-block";
		LP.style.display = "none";
		labelLP.style.display = "none";
		document.getElementById("PVAtual").style.display = "none";
		document.getElementById("PVAtuallabel").style.display = "none";
		manPVlt.disabled = true;
		manPVdk.disabled = true;
	}
}

function Passive_Perception() {
	let perception = parseInt(document.getElementById("totPerc").value);
	let P_passive = perception + 10;
	document.getElementById("pasP").value = P_passive;
}

function Skills() {
	let Prof_acrobatics = document.getElementById("profAcro");
	let Prof_animal_handling = document.getElementById("profAdes");
	let Prof_arcana = document.getElementById("profArcan");
	let Prof_athletics = document.getElementById("profAthe");
	let Prof_performance = document.getElementById("profPerf");
	let Prof_concentration = document.getElementById("profConc");
	let Prof_deception = document.getElementById("profDec");
	let Prof_mental_fortitude = document.getElementById("profMF");
	let Prof_stealth = document.getElementById("profSte");
	let Prof_history = document.getElementById("profHis");
	let Prof_intimidation = document.getElementById("profInt");
	let Prof_insight = document.getElementById("profIns");
	let Prof_investigation = document.getElementById("profInv");
	let Prof_medicine = document.getElementById("profMed");
	let Prof_nature = document.getElementById("profNat");
	let Prof_perception = document.getElementById("profPerc");
	let Prof_persuassion = document.getElementById("profPers");
	let Prof_sleightOfhand = document.getElementById("profSlei");
	let Prof_resistTorture = document.getElementById("profRTD");
	let Prof_resistMental = document.getElementById("profRCm");
	let Prof_religion = document.getElementById("profReli");
	let Prof_survival = document.getElementById("profSurv");

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

	if (Prof_acrobatics.checked == true) {
		parseInt((document.getElementById("totAcro").value = Save3));
	} else {
		parseInt((document.getElementById("totAcro").value = dexMod));
	}
	if (Prof_animal_handling.checked == true) {
		parseInt((document.getElementById("totAdes").value = Save6));
	} else {
		parseInt((document.getElementById("totAdes").value = wisMod));
	}
	if (Prof_arcana.checked == true) {
		parseInt((document.getElementById("totArcan").value = Save5));
	} else {
		parseInt((document.getElementById("totArcan").value = intMod));
	}
	if (Prof_athletics.checked == true) {
		parseInt((document.getElementById("totAthe").value = Save4));
	} else {
		parseInt((document.getElementById("totAthe").value = strMod));
	}
	if (Prof_performance.checked == true) {
		parseInt((document.getElementById("totPerf").value = Save1));
	} else {
		parseInt((document.getElementById("totPerf").value = chaMod));
	}
	if (Prof_concentration.checked == true) {
		parseInt((document.getElementById("totConc").value = Save7));
	} else {
		parseInt((document.getElementById("totConc").value = sanMod));
	}
	if (Prof_deception.checked == true) {
		parseInt((document.getElementById("totDec").value = Save1));
	} else {
		parseInt((document.getElementById("totDec").value = chaMod));
	}
	if (Prof_mental_fortitude.checked == true) {
		parseInt((document.getElementById("totMF").value = Save7));
	} else {
		parseInt((document.getElementById("totMF").value = sanMod));
	}
	if (Prof_stealth.checked == true) {
		parseInt((document.getElementById("totSte").value = Save3));
	} else {
		parseInt((document.getElementById("totSte").value = dexMod));
	}
	if (Prof_history.checked == true) {
		parseInt((document.getElementById("totHis").value = Save5));
	} else {
		parseInt((document.getElementById("totHis").value = intMod));
	}
	if (Prof_intimidation.checked == true) {
		parseInt((document.getElementById("totInt").value = Save1));
	} else {
		parseInt((document.getElementById("totInt").value = chaMod));
	}
	if (Prof_insight.checked == true) {
		parseInt((document.getElementById("totIns").value = Save6));
	} else {
		parseInt((document.getElementById("totIns").value = wisMod));
	}
	if (Prof_investigation.checked == true) {
		parseInt((document.getElementById("totInv").value = Save5));
	} else {
		parseInt((document.getElementById("totInv").value = intMod));
	}
	if (Prof_medicine.checked == true) {
		parseInt((document.getElementById("totMed").value = Save6));
	} else {
		parseInt((document.getElementById("totMed").value = wisMod));
	}
	if (Prof_nature.checked == true) {
		parseInt((document.getElementById("totNat").value = Save5));
	} else {
		parseInt((document.getElementById("totNat").value = intMod));
	}
	if (Prof_perception.checked == true) {
		parseInt((document.getElementById("totPerc").value = Save6));
	} else {
		parseInt((document.getElementById("totPerc").value = wisMod));
	}
	if (Prof_persuassion.checked == true) {
		parseInt((document.getElementById("totPers").value = Save1));
	} else {
		parseInt((document.getElementById("totPers").value = chaMod));
	}
	if (Prof_sleightOfhand.checked == true) {
		parseInt((document.getElementById("totSlei").value = Save3));
	} else {
		parseInt((document.getElementById("totSlei").value = dexMod));
	}
	if (Prof_resistTorture.checked == true) {
		parseInt((document.getElementById("totRTD").value = Save7));
	} else {
		parseInt((document.getElementById("totRTD").value = sanMod));
	}
	if (Prof_resistMental.checked == true) {
		parseInt((document.getElementById("totRCm").value = Save7));
	} else {
		parseInt((document.getElementById("totRCm").value = sanMod));
	}
	if (Prof_religion.checked == true) {
		parseInt((document.getElementById("totReli").value = Save5));
	} else {
		parseInt((document.getElementById("totReli").value = intMod));
	}
	if (Prof_survival.checked == true) {
		parseInt((document.getElementById("totSurv").value = Save6));
	} else {
		parseInt((document.getElementById("totSurv").value = wisMod));
	}
}

function ViadaAuto() {
	var Primary = parseInt(document.getElementById("levelClass").value);
	var LP = document.getElementById("lifeTotal").value;
	var conMod = parseInt(document.getElementById("conMod").value);
	let manPVdk = document.getElementById("slider-dk");
	let manPVlt = document.getElementById("slider-lt");
	if (manPVdk.checked == false || manPVlt.checked == false) {
		if (document.getElementById("die").value == "d6" && Primary == "1") {
			parseInt((document.getElementById("lifeTotal").value = conMod + 6));
		} else if (document.getElementById("die").value == "d6" && Primary > "1") {
			parseInt(
				(document.getElementById("lifeTotal").value =
					(conMod + 4) * (Primary - 1) + (conMod + 6))
			);
		}
		if (document.getElementById("die").value == "d8" && Primary == "1") {
			parseInt((document.getElementById("lifeTotal").value = conMod + 8));
		} else if (document.getElementById("die").value == "d8" && Primary > "1") {
			parseInt(
				(document.getElementById("lifeTotal").value =
					(conMod + 5) * (Primary - 1) + (conMod + 8))
			);
		}
		if (document.getElementById("die").value == "d10" && Primary == "1") {
			parseInt((document.getElementById("lifeTotal").value = conMod + 10));
		} else if (document.getElementById("die").value == "d10" && Primary > "1") {
			parseInt(
				(document.getElementById("lifeTotal").value =
					(conMod + 6) * (Primary - 1) + (conMod + 10))
			);
		}
		if (document.getElementById("die").value == "d12" && Primary == "1") {
			parseInt((document.getElementById("lifeTotal").value = conMod + 12));
		} else if (document.getElementById("die").value == "d12" && Primary > "1") {
			parseInt(
				(document.getElementById("lifeTotal").value =
					(conMod + 7) * (Primary - 1) + (conMod + 12))
			);
		}
		parseInt((document.getElementById("PVAtual").value = LP));
		parseInt((document.getElementById("PVAtual").max = LP));
	}
}

function equipArmor(equippedArmor) {
	var armor = equippedArmor.value;
	if (armor == "padded") {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("dexMod").value) + 11;
	} else if (armor == "monge") {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("dexMod").value) +
			parseInt(document.getElementById("wisMod").value) +
			10;
	} else if (armor == "barbaro") {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("dexMod").value) +
			parseInt(document.getElementById("conMod").value) +
			10;
	} else if (armor == "leather") {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("dexMod").value) + 11;
	} else if (armor == "studded leather") {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("dexMod").value) + 12;
	} else if (armor == "hide") {
		var tempArmor = parseInt(document.getElementById("dexMod").value) + 12;
		if (tempArmor > 14) {
			document.getElementById("Ac").value = 14;
		} else {
			document.getElementById("Ac").value = tempArmor;
		}
	} else if (armor == "chain") {
		var tempArmor = parseInt(document.getElementById("dexMod").value) + 13;
		if (tempArmor > 15) {
			document.getElementById("Ac").value = 15;
		} else {
			document.getElementById("Ac").value = tempArmor;
		}
	} else if (armor == "scale") {
		var tempArmor = parseInt(document.getElementById("dexMod").value) + 14;
		if (tempArmor > 16) {
			document.getElementById("Ac").value = 16;
		} else {
			document.getElementById("Ac").value = tempArmor;
		}
	} else if (armor == "breast") {
		var tempArmor = parseInt(document.getElementById("dexMod").value) + 14;
		if (tempArmor > 16) {
			document.getElementById("Ac").value = 16;
		} else {
			document.getElementById("Ac").value = tempArmor;
		}
	} else if (armor == "half") {
		var tempArmor = parseInt(document.getElementById("dexMod").value) + 15;
		if (tempArmor > 17) {
			document.getElementById("Ac").value = 17;
		} else {
			document.getElementById("Ac").value = tempArmor;
		}
	} else if (armor == "ringmail") {
		document.getElementById("Ac").value = 14;
	} else if (armor == "chainmail") {
		document.getElementById("Ac").value = 16;
	} else if (armor == "splint") {
		document.getElementById("Ac").value = 17;
	} else if (armor == "plate") {
		document.getElementById("Ac").value = 18;
	} else {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("dexMod").value) + 10;
	}
}

function shieldEquip(shieldEquip) {
	var shield = shieldEquip.value;
	if (shield == "shield") {
		document.getElementById("Ac").value =
			parseInt(document.getElementById("Ac").value) + 2;
	} else {
		equipArmor(equippedArmor);
	}
}

function enableArmor() {
	var strScore = document.getElementById("strScr").value;
	if (strScore > 14) {
		document.getElementById("plateArmor").disabled = false;
		document.getElementById("splintArmor").disabled = false;
		document.getElementById("chainmailArmor").disabled = false;
	} else if (strScore > 12) {
		document.getElementById("plateArmor").disabled = true;
		document.getElementById("splintArmor").disabled = true;
		document.getElementById("chainmailArmor").disabled = false;
	} else {
		document.getElementById("plateArmor").disabled = true;
		document.getElementById("splintArmor").disabled = true;
		document.getElementById("chainmailArmor").disabled = true;
	}
}