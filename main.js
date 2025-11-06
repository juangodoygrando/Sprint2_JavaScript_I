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
