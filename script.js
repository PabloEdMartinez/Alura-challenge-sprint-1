const entradaTexto = document.querySelector(".entradaTexto");
const salidaTexto = document.querySelector(".salidaTexto");
let mensaje = document.querySelector("#mensaje");
let reemplazos = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
function btnEncriptar() {
  if (entradaTexto.value == 0) {
    campoVacio();
  } else {
    devolverID();
    const textoEncriptado = encriptar(entradaTexto.value);
    salidaTexto.textContent = textoEncriptado;
  }
  function encriptar(textoE) {
    textoE = textoE.toLowerCase();
    for (let i = 0; i < reemplazos.length; i++) {
      if (textoE.includes(reemplazos[i][0])) {
        textoE = textoE.replaceAll(reemplazos[i][0], reemplazos[i][1]);
      }
    }
    return textoE;
  }
}

function btnDesencriptar() {
  if (entradaTexto.value == 0) {
    campoVacio();
  } else {
    devolverID();
    const textoDesencriptado = desencriptar(entradaTexto.value);
    salidaTexto.textContent = textoDesencriptado;
  }

  function desencriptar(textoD) {
    textoD = textoD.toLowerCase();
    for (let i = 0; i < reemplazos.length; i++) {
      if (textoD.includes(reemplazos[i][1])) {
        textoD = textoD.replaceAll(reemplazos[i][1], reemplazos[i][0]);
      }
    }
    return textoD;
  }
}
function copiarTexto() {
  var contenidoTexto = salidaTexto.value;
  navigator.clipboard.writeText(contenidoTexto);
}

function campoVacio() {
  salidaTexto.textContent = "";
  salidaTexto.removeAttribute("id");
  mensaje.removeAttribute("id");
}
function devolverID() {
  salidaTexto.setAttribute("id", "st");
  mensaje.setAttribute("id", "mensaje");
}
