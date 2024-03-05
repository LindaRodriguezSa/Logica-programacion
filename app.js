let numeroSecreto = 0;
let intentos = 0;

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
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;
  console.log(numeroSecreto);
  return numeroSecreto;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  //desabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", "Indica un numero del 1 al 100");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
condicionesIniciales();
/* PRACTICAS
function sumaDosNumeros() {
  let primerNumero = parseInt(prompt("Digite el primer numero"));
  let segunNumero = parseInt(prompt("Digite el segundo numero"));
  let respuesta = primerNumero + segunNumero;
  alert(`${primerNumero} + ${segunNumero} = ${respuesta}`);
}
sumaDosNumeros(3, 6);

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

function calcularPromedio(nota1, nota2, nota3, nota4) {
  let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
  console.log("promedio" + promedio);
  return promedio;
}
function verificarAprobacion(promedio) {
  //return promedio >= 5 ? "Aprovado" : "Reprovado";
  if (promedio >= 5) {
    console.log("aprovado");
  }
}

calcularPromedio(7, 6, 3, 5);
verificarAprobacion(8);

const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.

calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}

let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);


5.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
let numero = 2;
mostrarTablaDeMultiplicar(numero);
