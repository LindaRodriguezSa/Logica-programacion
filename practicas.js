//PRACTICAS
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

/* calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros. */

function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
/* 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro. */
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

/* 3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.*/
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.8;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

/* 4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros. */

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}

let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

/* 5.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
let numeroo = 2;
mostrarTablaDeMultiplicar(numeroo);

function sortearLibro() {
  let libroElegido = parseInt(Math.random() * numeroLimite + 1);
  let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
  if (cantidadDeLibrosSorteados == numeroLimite) {
    listaDeLibrosSorteados = [];
  }
}

//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    const lenguajes = lenguagesDeProgramacion[i];
    console.log(lenguajes);
  }
}
mostrarLenguagesSeparadamente();
//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesSeparadamenteReverso() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    const lenguajes = lenguagesDeProgramacion[i];
    console.log("reverso:" + lenguajes);
  }
}
mostrarLenguagesSeparadamenteReverso();

//Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log("Média:", media);

/* Crea una función que muestre en la consola el número mayor y menor en una lista. */
function encontrarMayorMenor(lista) {
  let numMayor = lista[0];
  let numMenor = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > numMayor) {
      numMayor = lista[i];
    }
    if (lista[i] < numMenor) {
      numMenor = lista[i];
    }
  }
  console.log(`Numero Mayor ${numMayor}`);
  console.log("Numero Menor", numMenor);
}
encontrarMayorMenor(numeros);
/* Crea una función que retorne la suma de todos los elementos en una lista. */

function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}
let suma = calcularSuma(numeros);
console.log("Suma:", suma);
/* Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1. */

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1;
}
let ind = encontrarIndiceElemento(numeros, 20);
console.log("ind:", ind);
