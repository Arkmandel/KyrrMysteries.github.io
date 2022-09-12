function ChangeClass(el) {
  var selected_IClass = el.options[el.selectedIndex].text;
  document.getElementById("primaryClass").innerHTML = selected_IClass;
}

function ChangeClassII(el) {
  var selected_IIClass = el.options[el.selectedIndex].text;
  document.getElementById("secondaryClass").innerHTML = selected_IIClass;
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
}

function ProfBonus() {
  var Primary = parseInt(document.getElementById("levelClass").value);
  var Secondary = parseInt(document.getElementById("levelClassII").value);
  var Total = Primary + Secondary;
  parseInt(
    (document.getElementById("profValue").value = Math.floor((Total + 7) / 4))
  );

  SavingThrows();
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
    document.getElementById("langtext").innerHTML =
      "Você sabe falar: " + choices;
    document.getElementById("langp").style.display = "none";
  }
}