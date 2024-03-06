let numeroSecreto = 0;
let intentos = 0;
let listNumberSorteados = [];
let numberMaxi = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
function verificarIntento() {
  let numerosDeUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );
  /* console.log(numerosDeUsuario);
  console.log(typeof numerosDeUsuario); */

  if (numeroSecreto === numerosDeUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos}${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuario no acerto
    if (numerosDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numberMaxi) + 1;
  console.log("numero generado: " + numeroGenerado);
  console.log("lista: " + listNumberSorteados);
  //si ya sorteamos todos los numeros
  if (listNumberSorteados.length == numberMaxi) {
    asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
  } else {
    //si el numero secreto esta incluido en la lista
    if (listNumberSorteados.includes(numeroGenerado)) {
      generarNumeroSecreto();
    } else {
      listNumberSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  //desabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numberMaxi} `);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
condicionesIniciales();
