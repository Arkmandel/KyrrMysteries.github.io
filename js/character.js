var mold = document.querySelector("#moldura");
const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("img").src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
	reader.onload = function (e) {
  //Initiate the JavaScript Image object.
  var image = new Image();

  //Set the Base64 string return from FileReader as source.
  image.src = e.target.result;

  //Validate the File Height and Width.
  image.onload = function () {
    var height = this.height;
    var width = this.width;
    if (height > 650 || width > 500) {
     document.querySelector("img").style.width = width;
			document.querySelector("img").style.height = height;
    }
  };
	};
});

mold.onclick = function () {
	document.querySelector("#estilo").style.display = "inline-block";
	document.querySelector("#moldura").style.display = "none";
}

const apply = document.querySelector("#conValue");
apply.onclick = function() {
	document.querySelector("#conValue").style.display = "none";
	document.querySelector("#notLike").style.display = "none";
	document.querySelector("#myRangeRdCont").style.display = "none";
	document.querySelector("#myRangeOvCont").style.display = "none";
	document.getElementById("estilo").style.display = "none";
	image_input.style.display = "none";
}


function imagem_design () {
	const type = document.getElementById("estilo").value;
	const imagem = document.getElementById("imageHoder");
	let texto = prompt("Descrição da Imagem");
	document.getElementById("descricao").innerHTML = texto;
		if (type == "polaroid") {
			imagem.classList.toggle("polaroid");
			document.querySelector("#notLike").style.display = "block";
			document.querySelector("#conValue").style.display = "inline-block";
		} else if (type == "redondo") {
			document.querySelector("#estilo").style.display = "none";
			document.querySelector("#myRangeRdCont").style.display = "block";
			document.querySelector("#conValue").style.display = "inline-block";
			document.querySelector("#notLike").style.display = "block";
		} else if (type == "oval") {
			document.querySelector("#estilo").style.display = "none";
			document.querySelector("#myRangeOvCont").style.display = "block";
			document.querySelector("#conValue").style.display = "inline-block";
			document.querySelector("#notLike").style.display = "block";
		} else if (type == "molduraAR") {
			imagem.classList.toggle("molduraAR");
			document.querySelector("#estilo").style.display = "none";
			document.querySelector("#notLike").style.display = "block";
			document.querySelector("#conValue").style.display = "inline-block";
		} else if (type == "molduraBR") {
			imagem.classList.toggle("molduraBR");
			document.querySelector("#estilo").style.display = "none";
			document.querySelector("#notLike").style.display = "block";
			document.querySelector("#conValue").style.display = "inline-block";
		}
}

let retornar = document.querySelector("#notLike");
retornar.onclick = function() {
	const imagem = document.getElementById("imageHoder");
	document.querySelector("#notLike").style.display = "none";
	document.querySelector("#moldura").style.display = "block";
	imagem.classList.remove("polaroid");
	document.querySelector("#myRangeRdCont").style.display = "none";
	document.querySelector("#myRangeOvCont").style.display = "none";
	document.querySelector("#conValue").style.display = "none";
}

var sliderBOv = document.getElementById("myRangeOv");
var output = document.querySelector("img");
var outputTxt = document.querySelector("#valorOv");
output.style.borderRadius = sliderBOv.value;
outputTxt.innerHTML = sliderBOv.value;
sliderBOv.oninput = function() {
	output.style.borderRadius = `${this.value}%`;
	outputTxt.innerHTML = this.value;
};
		
var sliderBRd = document.getElementById("myRangeRd");
var outputTxt = document.querySelector("#valorRd");
output.style.borderRadius = sliderBRd.value;
outputTxt.innerHTML = sliderBRd.value;
sliderBRd.oninput = function() {
	output.style.borderRadius = `${this.value}px`;
	outputTxt.innerHTML = this.value;
};