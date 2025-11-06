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
