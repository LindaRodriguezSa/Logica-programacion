
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
function verificarIntento() {
  let numerosDeUsuario = parseInt(
    document.getElementById("valorUsuario").value
  );
  console.log(typeof numerosDeUsuario);
  console.log(numeroSecreto === numerosDeUsuario);

  return;
}
function generarNumeroSecreto() {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  return numeroSecreto;
}

asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", "Indica un numero del 1 al 100");

/* PRACTICAS

function sumaDosNumeros() {
  let primerNumero = parseInt(prompt("Digite el primer numero"));
  let segunNumero = parseInt(prompt("Digite el segundo numero"));
  let respuesta = primerNumero + segunNumero;
  /*  alert({ primerNumero } + { segunNumero } == { respuesta }); 
  alert(respuesta);
} 
sumaDosNumeros(3,6);

function verificarNumber(number) {
  if (number > 0) {
    console.log("el numero es positivo");
  } else if (number < 0) {
    console.log("el numero es negativo");
  } else {
    console.log("el numero es cero");
  }
}

verificarNumber(0);

function hello(texto) {
  console.log(texto);
}
hello("hola mundo");

function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre("maria");

function dobleNumber(number) {
  let resultadoDoble = number * 2;
  console.log("doble del numero : " + resultadoDoble);
  return resultadoDoble;
}
dobleNumber(3);

function promedio(num1, num2, num3) {
  console.log("promedio : " + num1 + num2 + num3 / 3);
}
promedio(4, 5, 9);

function mayorNumber(num1, num2) {
  let numeroMayor = num1 > num2 ? num1 : num2;
  console.log("numeroMayor : " + numeroMayor);
}
mayorNumber(6, 9);

*/
