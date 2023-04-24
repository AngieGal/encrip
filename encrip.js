var Desplazamiento;
var resultado = document.getElementById("resultado");
var muneco = document.getElementById("muc");
var ingresar= document.getElementById("ing")
var nin = document.getElementById("nin");
var btnCopiar = document.getElementById("copiar");

function resolver(id){
	var text = document.getElementById("text").value;
	document.getElementById("text").value = "";

	if (id == 1){
		var encrypt = text.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u", "ufat")
	}

	if (id == 0) {
		var encrypt = text.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat", "u");
	}

	if (text.length > 0 ){
		ocultarError();
		resultado.innerHTML = encrypt;
	} else {
		mostrarError();
	}
}


function copiar(){
	var text = document.getElementById("resultado").innerHTML;
	navigator.clipboard.writeText(text);
}

function ocultarError(){//desaparezco los textos y la imagen
	muneco.style.display = "none";
	ingresar.style.display = "none";
	nin.style.display = "none";
	btnCopiar.style.display = "block";
	resultado.style.display="block";
}

function mostrarError(){// si le dan a algun boton pero no hay nada
	muneco.style.display = "block";
	ingresar.style.display = "block";
	nin.style.display = "block";
	btnCopiar.style.display = "none";
	resultado.style.display= "none";
	resultado.innerText="";
}
