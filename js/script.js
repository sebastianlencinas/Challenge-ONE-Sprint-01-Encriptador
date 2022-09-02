const textoIngresado = document.querySelector("#text");
const textoResultado = document.querySelector("#text_result");

const btnEncriptar = document.querySelector("#left_button");
const btnDesencriptar = document.querySelector("#right_button");
const btnCopiar = document.querySelector("#copy");

function encriptar() {
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copy").style.visibility = "visible";

  textoResultado.value = textoEncriptado;

  document.getElementById("texto").value = "";
}

function desencriptar() {
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copy").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = "";
}

function copiar() {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;
