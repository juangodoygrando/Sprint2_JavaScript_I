// =========================================================
// 🧠 EJERCICIOS DE JAVASCRIPT - FUNCIONES FLECHA, CALLBACKS, PROMESAS, ETC.
// =========================================================


// =========================================================
// 🏹 Ejercicio 1.1: Funciones de Flecha
// =========================================================

// Nivel 1 
// Ejercicio 1: Conversión de funciones
// Tienes una función add que acepta dos parámetros y devuelve su suma. 
// Conviértela en una función de flecha. 
// Ejemplo: function add(a, b) { return a + b; }

// Ejercicio 2: Función de flecha sin parámetros
// Crea una función de flecha llamada randomNumber que no necesite parámetros 
// y que devuelva un número aleatorio entre 0 y 100.

// Ejercicio 3: Uso de 'this' en funciones de flecha
// Crea una clase Person que tenga una propiedad name y una función greet que utilice una función de flecha. 
// La función debe imprimir un saludo que incluya el nombre de la persona. 
// Ejemplo: console.log(`Hola, ${this.name}`);

// Nivel 2 
// Ejercicio 4: Función de flecha dentro de un bucle
// Crea una función llamada printNumbers que acepte un array de números 
// y use un bucle for para imprimir cada número en la consola usando una función de flecha.

// Nivel 3 
// Ejercicio 5: Función de flecha con 'setTimeout'
// Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.


// =========================================================
// ❓ Ejercicio 1.2: Operador Ternario
// =========================================================

// Nivel 1 
// Ejercicio 1: Operador ternario básico
// Escribe una función puedeConducir que acepte la edad como parámetro 
// y use el operador ternario para determinar si el usuario puede conducir.

// Ejercicio 2: Uso con operadores de comparación
// Escribe una expresión que use el operador ternario para determinar 
// cuál de los dos números dados (num1 y num2) es mayor.

// Nivel 2 
// Ejercicio 3: Uso encadenado de operadores ternarios
// Escribe una expresión que use operadores ternarios encadenados 
// para determinar si un número es positivo, negativo o cero.

// Ejercicio 4: Operador ternario con funciones
// Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) 
// y use el operador ternario para determinar el valor máximo.

// Nivel 3 
// Ejercicio 5: Operador ternario dentro de un bucle
// Escribe una función parOImpar que acepte un array de números y use un bucle para recorrerlo. 
// Dentro del bucle, usa el operador ternario para determinar si cada número es par o impar.


// =========================================================
// 🔁 Ejercicio 1.3: Callbacks
// =========================================================

// Nivel 1 
// Ejercicio 1: Callback básico
// Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback. 
// La función procesar debe invocar el callback pasando el número como parámetro.

// Ejercicio 2: Callbacks con operaciones matemáticas
// Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback. 
// calculadora debe invocar el callback con los dos números como parámetros. 
// Luego, llama calculadora con una función que sume los dos números.

// Nivel 2 
// Ejercicio 3: Uso de callbacks en funciones asíncronas
// Escribe una función esperarYSaludar que acepte dos parámetros: un nombre y una función de callback. 
// La función debe esperar 2 segundos y luego invocar la función de callback, pasando el nombre como parámetro.

// Ejercicio 4: Callbacks con arrays
// Escribe una función procesarElementos que acepte dos parámetros: un array y una función de callback. 
// La función procesarElementos debe invocar el callback para cada elemento del array.

// Nivel 3 
// Ejercicio 5: 
// Escribe una función procesarCadena que acepte dos parámetros: una cadena de texto y una función de callback. 
// La función procesarCadena debe convertir la cadena a mayúsculas y luego invocar la función de callback con la cadena transformada.


// =========================================================
// 🌈 Ejercicio 1.4: Rest & Spread Operators
// =========================================================

// Nivel 1 
// Ejercicio 1: Operador Spread en Arrays
// Crea dos arrays, array1 y array2. 
// Usa el operador spread para crear una tercera array que contenga todos los elementos de ambas.

// Ejercicio 2: Operador Rest en Funciones
// Crea una función suma que use el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.

// Nivel 2 
// Ejercicio 3: Copiar objetos con Spread
// Crea un objeto objeto1. Luego crea un segundo objeto, objeto2, que sea una copia de objeto1 utilizando el operador spread. 
// Cambia una propiedad de objeto2 y comprueba que objeto1 no haya cambiado.

// Ejercicio 4: Rest en Destructuring
// Crea una array con varios elementos. 
// Usa destructuring y el operador rest para asignar los dos primeros elementos a variables, 
// y el resto de los elementos a una tercera variable.

// Nivel 3 
// Ejercicio 5: Spread en Funciones
// Crea una función que acepte tres argumentos. 
// Luego, crea una array con tres elementos y llama la función usando el operador spread con esa array.

// Ejercicio 6: Fusionar Objetos con Spread
// Crea dos objetos con propiedades diferentes. 
// Usa el operador spread para fusionar esos dos objetos en uno nuevo.


// =========================================================
// 🔄 Ejercicio 1.5: Transformaciones de Arrays
// =========================================================

// Nivel 1 
// Ejercicio 1: Map
// Dado un array de números [1, 2, 3, 4], crea un nuevo array que contenga el cuadrado de cada número.

// Ejercicio 2: Filter
// Dado un array de números [1, 2, 3, 4], crea un nuevo array que solo contenga los números pares.

// Ejercicio 3: Find
// Dado un array de números [1, 10, 8, 11], usa find para encontrar el primer número mayor que 10.

// Ejercicio 4: Reduce
// Dado un array de números [13, 7, 8, 21], usa reduce para calcular la suma total de los números.

// Nivel 2 
// Ejercicio 5:
// Dado un array [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9], crea una función en una sola línea que:
// - Filtre los números mayores o iguales a 10.
// - Multiplique cada número filtrado por 2.
// - Calcule la suma de los números filtrados y multiplicados por 2.
// - Devuelva el resultado.

// Nivel 3 
// Ejercicio 6: Every / Some
// Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son mayores que 10, respectivamente.


// =========================================================
// 🔁 Ejercicio 1.6: Bucles con Arrays
// =========================================================

// Nivel 1 
// Ejercicio 1: forEach
// Dado un array de nombres, usa forEach para imprimir cada nombre en la consola.

// Ejercicio 2: for-of
// Dado un array de nombres, usa un bucle for-of para imprimir cada nombre en la consola.

// Ejercicio 3: filter
// Dado un array de números, usa filter para crear una nueva array que solo contenga los números pares.

// Nivel 2 
// Ejercicio 4: for-in
// Dado un objeto con pares clave-valor, usa un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.

// Ejercicio 5: for-of con break
// Dado un array de números, usa un bucle for-of para imprimir los números hasta encontrar el número 5, luego detén el bucle.

// Nivel 3 
// Ejercicio 6: for-of con índice
// Usa un bucle for-of para imprimir en la consola cada elemento del array y su posición (índice).


// =========================================================
// ⚡ Ejercicio 1.7: Promesas y Async/Await
// =========================================================

// Nivel 1 
// Ejercicio 1: Creación de una Promesa
// Crea una promesa que se resuelva después de 2 segundos y que devuelva la cadena de texto 'Hola, mundo'.

// Ejercicio 2: Uso de una Promesa
// Usa la promesa creada en el ejercicio anterior. 
// Crea un .then que imprima el resultado en la consola.

// Ejercicio 3: Promesa con reject
// Crea una promesa que se resuelva después de 2 segundos si el input es igual a 'Hola', 
// y que la rechace si el input es cualquier otra cosa.

// Ejercicio 4: Uso de async/await
// Escribe una función asíncrona que utilice la función await para esperar el resultado 
// de la promesa creada en el ejercicio 1, y luego imprima ese resultado en la consola.

// Nivel 2 
// Ejercicio 5: Gestión de errores con async/await
// Modifica la función del ejercicio anterior para capturar cualquier posible error utilizando un bloque try/catch.

// Nivel 3 
// Ejercicio 6: Promise.all
// Crea dos promesas que se resuelvan después de 2 y 3 segundos, respectivamente. 
// Usa Promise.all para esperar que ambas promesas se resuelvan y luego imprime los resultados en la consola.


// =========================================================
// ✅ FIN DE LOS EJERCICIOS
// =========================================================
