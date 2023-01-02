const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");

const textoIngresado = document.querySelector("#ingrese");
const textoResultado = document.querySelector("#resultado");

function encriptar() {
  // alert(recuperarTexto());
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

  document.getElementById("precontenido").style.visibility = "hidden";
  document.getElementById("muneco").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = textoEncriptado;

  document.getElementById("ingrese").value = "";
}

function desencriptar() {
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("precontenido").style.visibility = "hidden";
  document.getElementById("muneco").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("ingrese").value = "";
}

function copiar() {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
