// =========================================================
// 🏹 Ejercicio 1.1: Funciones de Flecha
// =========================================================

// Nivel 1
// Ejercicio 1: Conversión de funciones
// Tienes una función add que acepta dos parámetros y devuelve su suma.
// Conviértela en una función de flecha.
// Ejemplo: function add(a, b) { return a + b; }

function add1(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

// Ejercicio 2: Función de flecha sin parámetros
// Crea una función de flecha llamada randomNumber que no necesite parámetros
// y que devuelva un número aleatorio entre 0 y 100.

const randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber());

// Ejercicio 3: Uso de 'this' en funciones de flecha
// Crea una clase Person que tenga una propiedad name y una función greet que utilice una función de flecha.
// La función debe imprimir un saludo que incluya el nombre de la persona.
// Ejemplo: console.log(`Hola, ${this.name}`);

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}

const person1 = new Person("Pepe");

person1.greet();

// Nivel 2
// Ejercicio 4: Función de flecha dentro de un bucle
// Crea una función llamada printNumbers que acepte un array de números
// y use un bucle for para imprimir cada número en la consola usando una función de flecha.

/* const printNumbers = (array) =>
  array.forEach((element) => {
    console.log(element);
  });

let arrayNumeros = [1, 2, 3, 4, 5];

printNumbers(arrayNumeros); */

let arrayNumeros = [1, 2, 3, 4, 5];

const printNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printNumbers(arrayNumeros);

// Nivel 3
// Ejercicio 5: Función de flecha con 'setTimeout'
// Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.

const printMessage = () => {
  setTimeout(() => {
    console.log("Imprimiendo mensaje");
  }, 3000);
};

printMessage();

// =========================================================
// ❓ Ejercicio 1.2: Operador Ternario
// =========================================================

// Nivel 1
// Ejercicio 1: Operador ternario básico
// Escribe una función puedeConducir que acepte la edad como parámetro
// y use el operador ternario para determinar si el usuario puede conducir.

function puedeConducir(edad) {
  edad >= 18 ? console.log("Puede conducir") : console.log("NO puede conducir");
}

puedeConducir(18);

// Ejercicio 2: Uso con operadores de comparación
// Escribe una expresión que use el operador ternario para determinar
// cuál de los dos números dados (num1 y num2) es mayor.
let num1 = 12;
let num2 = 10;

num1 > num2
  ? console.log(`El numero mayor es ${num1}`)
  : console.log(`El numero mayor es ${num2}`);

// Nivel 2
// Ejercicio 3: Uso encadenado de operadores ternarios
// Escribe una expresión que use operadores ternarios encadenados
// para determinar si un número es positivo, negativo o cero.

let numero = 0;

numero > 0
  ? console.log("El número es POSITIVO")
  : numero === 0
  ? console.log("El número es CERO")
  : console.log("El número es NEGATIVO");

// Ejercicio 4: Operador ternario con funciones
// Crea una función encontrarMaximo que acepte tres parámetros (a, b, c)
// y use el operador ternario para determinar el valor máximo.

function encontrarMaximo(num1, num2, num3) {
  num1 > num2 && num1 > num3
    ? console.log(`El valor maximo es ${num1}`)
    : num2 > num1 && num2 > num3
    ? console.log(`El valor maximo es ${num2}`)
    : console.log(`El valor maximo es ${num3}`);
}

encontrarMaximo(20, 15, 45);

// Nivel 3
// Ejercicio 5: Operador ternario dentro de un bucle
// Escribe una función parOImpar que acepte un array de números y use un bucle para recorrerlo.
// Dentro del bucle, usa el operador ternario para determinar si cada número es par o impar.

function parOImpar(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0
      ? console.log(`El numero ${array[i]} es PAR`)
      : console.log(`El numero ${array[i]} es IMPAR`);
  }
}

let arrayNum = [12, 3, 8, 14, 19, 36, 22, 11, 5, 40];
parOImpar(arrayNum);

// =========================================================
// 🔁 Ejercicio 1.3: Callbacks
// =========================================================

// Nivel 1
// Ejercicio 1: Callback básico
// Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback.
// La función procesar debe invocar el callback pasando el número como parámetro.

let procesar = (num, callback) => callback(num);

function invocarNumero(numero) {
  console.log(`El numero pasado por parametro es: ${numero}`);
}

procesar(14, invocarNumero);

// Ejercicio 2: Callbacks con operaciones matemáticas
// Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback.
// calculadora debe invocar el callback con los dos números como parámetros.
// Luego, llama calculadora con una función que sume los dos números.

const calculadora = (num1, num2, operacion) => {
  return operacion(num1, num2);
};

function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}
function resta(numero1, numero2) {
  console.log(numero1 - numero2);
}

calculadora(5, 50, sumar);
calculadora(20, 40, resta);

// Nivel 2
// Ejercicio 3: Uso de callbacks en funciones asíncronas
// Escribe una función esperarYSaludar que acepte dos parámetros: un nombre y una función de callback.
// La función debe esperar 2 segundos y luego invocar la función de callback, pasando el nombre como parámetro.

function esperarYSaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function saludarConDelay(saludo) {
  console.log(`Hola ${saludo}`);
}

esperarYSaludar("Pepe", saludarConDelay);
esperarYSaludar("Juan", saludarConDelay);

// Ejercicio 4: Callbacks con arrays
// Escribe una función procesarElementos que acepte dos parámetros: un array y una función de callback.
// La función procesarElementos debe invocar el callback para cada elemento del array.

function procesarElementos(array, callback) {
  array.forEach((element) => {
    callback(element);
  });
}

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
function esParoImpar(numero) {
  numero % 2 === 0
    ? console.log(`El numero ${numero} es par`)
    : console.log(`El numero ${numero} es impar`);
}

let arrayNombres = ["pepe", "juan", "maria", "ana"];
let arrayNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

procesarElementos(arrayNumeros2, esParoImpar);
procesarElementos(arrayNombres, saludar);

// Nivel 3
// Ejercicio 5:
// Escribe una función procesarCadena que acepte dos parámetros: una cadena de texto y una función de callback.
// La función procesarCadena debe convertir la cadena a mayúsculas y luego invocar la función de callback con la cadena transformada.

function procesarCadena(cadenaTexto, callback) {
  let cadenaEnMayuscula = cadenaTexto.toUpperCase();

  callback(cadenaEnMayuscula);
}

function imprimirEnConsola(texto) {
  console.log(texto);
}

procesarCadena("Hola mi nombre es Juan Ignacio", imprimirEnConsola);

// =========================================================
// 🌈 Ejercicio 1.4: Rest & Spread Operators
// =========================================================

// Nivel 1
// Ejercicio 1: Operador Spread en Arrays
// Crea dos arrays, array1 y array2.
// Usa el operador spread para crear una tercera array que contenga todos los elementos de ambas.

let array1 = [2, 8, 14, 21, 28, 32, 35];
let array2 = [1, 3, 5, 7, 9, 11, 13];

let nuevoArray = [...array1, ...array2];

console.log(nuevoArray);

// Ejercicio 2: Operador Rest en Funciones
// Crea una función suma que use el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.

function suma(...numeros) {
  let total = 0;
  numeros.forEach((element) => {
    total += element;
  });
  console.log(total);
}

suma(2, 5, 4, 9);

// Nivel 2
// Ejercicio 3: Copiar objetos con Spread
// Crea un objeto objeto1. Luego crea un segundo objeto, objeto2, que sea una copia de objeto1 utilizando el operador spread.
// Cambia una propiedad de objeto2 y comprueba que objeto1 no haya cambiado.

let objeto1 = {
  persona: "Pedro",
  edad: 29,
  sexo: "Masculino",
};

let objeto2 = { ...objeto1, edad: 25, fumador: "SI" };

console.log(objeto2);

console.log(objeto1);

// Ejercicio 4: Rest en Destructuring
// Crea una array con varios elementos.
// Usa destructuring y el operador rest para asignar los dos primeros elementos a variables,
// y el resto de los elementos a una tercera variable.

let arrayElementos = [
  "Futbol",
  "Tenis",
  "Paddle",
  "Powerlifting",
  "Rugby",
  "Crossfit",
];

let [primerVariable, segundaVariable, ...resto] = arrayElementos;

console.log(primerVariable);
console.log(segundaVariable);
console.log(resto);

// Nivel 3
// Ejercicio 5: Spread en Funciones
// Crea una función que acepte tres argumentos.
// Luego, crea una array con tres elementos y llama la función usando el operador spread con esa array.

function sumar(a, b, c) {
  console.log(a + b + c);
}

let array3elementos = [1, 5, 6];

sumar(...array3elementos);

// Ejercicio 6: Fusionar Objetos con Spread
// Crea dos objetos con propiedades diferentes.
// Usa el operador spread para fusionar esos dos objetos en uno nuevo.

let datosIniciales = {
  nombre: "Juan Ignacio",
  edad: 32,
  fumador: "NO",
  estudiante: "SI",
};
let datosExtra = {
  apellido: "Godoy",
  apostador: "NO",
  desemplado: "SI",
};

let fichaPersonal = { ...datosIniciales, ...datosExtra };

console.log(fichaPersonal);

// =========================================================
// 🔄 Ejercicio 1.5: Transformaciones de Arrays
// =========================================================

// Nivel 1
// Ejercicio 1: Map
// Dado un array de números [1, 2, 3, 4], crea un nuevo array que contenga el cuadrado de cada número.

let arrayNumeros3 = [1, 2, 3, 4];

let arrayCuadrado = arrayNumeros3.map((numero) => numero ** 2);

console.log(arrayCuadrado);

// Ejercicio 2: Filter
// Dado un array de números [1, 2, 3, 4], crea un nuevo array que solo contenga los números pares.
let arrayNumeros4 = [1, 2, 3, 4];

let arrayPares = arrayNumeros4.filter((numero) => numero % 2 === 0);

console.log(arrayPares);

// Ejercicio 3: Find
// Dado un array de números [1, 10, 8, 11], usa find para encontrar el primer número mayor que 10.

let arrayNumeros5 = [1, 9, 8, 1, 15, 20];

let mayor10 = arrayNumeros5.find((numero) => numero > 10);

console.log(mayor10);

// Ejercicio 4: Reduce
// Dado un array de números [13, 7, 8, 21], usa reduce para calcular la suma total de los números.

let arrayNumeros6 = [13, 7, 8, 21];

let sumaTotal = arrayNumeros6.reduce((acc, num) => acc + num, 0);

console.log(sumaTotal);

// Nivel 2
// Ejercicio 5:
// Dado un array [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9], crea una función en una sola línea que:
// - Filtre los números mayores o iguales a 10.
// - Multiplique cada número filtrado por 2.
// - Calcule la suma de los números filtrados y multiplicados por 2.
// - Devuelva el resultado.

const arrayNumeros7 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const calculoFinal = (array) =>
  array
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0);

console.log(calculoFinal(arrayNumeros7));

// Nivel 3
// Ejercicio 6: Every / Some
// Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son mayores que 10, respectivamente.

let arrayNumeros8 = [11, 12, 13, 14];

let todosMayores10 = arrayNumeros8.every((num) => num > 10);

let algunMenores10 = arrayNumeros8.some((num) => num > 10);

console.log(todosMayores10);
console.log(algunMenores10);

// =========================================================
// 🔁 Ejercicio 1.6: Bucles con Arrays
// =========================================================

// Nivel 1
// Ejercicio 1: forEach
// Dado un array de nombres, usa forEach para imprimir cada nombre en la consola.

let arrayNombres2 = ["Pepe", "Juan", "Ana", "Maria", "Lucia", "Sofia"];

arrayNombres2.forEach((nombre) => {
  console.log(nombre);
});

// Ejercicio 2: for-of
// Dado un array de nombres, usa un bucle for-of para imprimir cada nombre en la consola.
let arrayNombres3 = ["Pepe", "Juan", "Ana", "Maria", "Lucia", "Sofia"];

for (let nombres of arrayNombres3) {
  console.log(nombres);
}

// Ejercicio 3: filter
// Dado un array de números, usa filter para crear una nueva array que solo contenga los números pares.

let numeros = [1, 2, 3, 4, 5, 6];

let nuevoArrayNum = numeros.filter((num) => num % 2 === 0);

console.log(nuevoArrayNum);

// Nivel 2
// Ejercicio 4: for-in
// Dado un objeto con pares clave-valor, usa un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.

let persona2 = {
  Nombre: "Juan",
  Apellido: "Godoy",
  Edad: 32,
  Nacionalidad: "Argentina",
};

for (let datos in persona2) {
  console.log(`${datos}: ${persona2[datos]}`);
}

// Ejercicio 5: for-of con break
// Dado un array de números, usa un bucle for-of para imprimir los números hasta encontrar el número 5, luego detén el bucle.

let arrayNumeros9 = [20, 10, 58, 96, 2, 5, 9, 4, 8];

for (let numeros of arrayNumeros9) {
  console.log(numeros);
  if (numeros === 5) {
    break;
  }
}

// Nivel 3
// Ejercicio 6: for-of con índice
// Usa un bucle for-of para imprimir en la consola cada elemento del array y su posición (índice).

let arrayNumeros10 = [20, 10, 58, 96, 2, 5, 9, 4, 8];

let indice = 0;
for (numeros of arrayNumeros10) {
  console.log(`Numero: ${numeros}, Indice: ${indice}`);
  indice++;
}
// =========================================================
// ⚡ Ejercicio 1.7: Promesas y Async/Await
// =========================================================

// Nivel 1
// Ejercicio 1: Creación de una Promesa
// Crea una promesa que se resuelva después de 2 segundos y que devuelva la cadena de texto 'Hola, mundo'.

const promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, mundo");
  }, 2000);
})

  // Ejercicio 2: Uso de una Promesa
  // Usa la promesa creada en el ejercicio anterior. Crea un .then que imprima el resultado en la consola.

  .then((resultado) => console.log(resultado));

// Ejercicio 3: Promesa con reject
// Crea una promesa que se resuelva después de 2 segundos si el input es igual a 'Hola',
// y que la rechace si el input es cualquier otra cosa.

function comprobarTexto(texto) {
  const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      texto === "Hola"
        ? resolve(`El texto "${texto}" es igual a "Hola"`)
        : reject(`El texto "${texto}" no es igual "Hola"`);
    }, 2000);
  });
  promesa2
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}

comprobarTexto("pepe");
comprobarTexto("Hola");

// Ejercicio 4: Uso de async/await
// Escribe una función asíncrona que utilice la función await para esperar el resultado de la promesa creada en el ejercicio 1, y luego imprima ese resultado en la consola.

function repetirSaludo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, mundo");
    }, 2000);
  });
}

async function mostrarSaludo() {
  console.log(await repetirSaludo());
}

mostrarSaludo();

// Nivel 2
// Ejercicio 5: Gestión de errores con async/await
// Modifica la función del ejercicio anterior para capturar cualquier posible error utilizando un bloque try/catch.

function saludo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let respuesta = true;
      if (respuesta) {
        resolve("Hola, pepe");
      } else {
        reject("Ocurrio un error");
      }
    }, 2000);
  });
}

async function saludar() {
  try {
    console.log(await saludo());
  } catch (error) {
    console.log(error);
  }
}

saludar();

// Nivel 3
// Ejercicio 6: Promise.all
// Crea dos promesas que se resuelvan después de 2 y 3 segundos, respectivamente.
// Usa Promise.all para esperar que ambas promesas se resuelvan y luego imprime los resultados en la consola.

const promesa3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa resuelta en dos segundos");
  }, 2000);
});

const promesa4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa resuelta en tres segundos");
  }, 3000);
});

Promise.all([promesa3, promesa4])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
