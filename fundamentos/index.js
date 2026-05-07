/*
  Calculadora simple en Node.js

  Esta aplicación pide al usuario dos números y una operación matemática.
  Luego muestra el resultado en la consola.
  Está pensada para que la use alguien que está aprendiendo JavaScript.

  Cómo ejecutar:
    cd fundamentos
    node index.js

  Salida esperada:
    - Se solicita el primer número.
    - Se solicita el segundo número.
    - Se solicita la operación (+, -, *, /).
    - Se muestra el resultado o un mensaje de error si hay división entre cero.
*/

// Importamos el módulo 'readline' para leer datos desde la consola.
const readline = require("readline");

// Creamos una interfaz para entrada y salida estándar.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Esta función muestra una pregunta en pantalla y espera la respuesta del usuario.
// Devuelve una Promise para poder usar 'await' y escribir código más legible.
function preguntar(pregunta) {

  return new Promise((resolve) => {
    rl.question(pregunta, resolve);
  });
}

// Función principal de la calculadora.
async function calculadora() {
  console.log("=== CALCULADORA ===");

  // Pedimos al usuario el primer número y lo convertimos a número decimal.
  const num1 = parseFloat(await preguntar("Ingrese el primer número: "));
  

  // Pedimos el segundo número y también lo convertimos.
  const num2 = parseFloat(await preguntar("Ingrese el segundo número: "));

  // Pedimos al usuario qué operación quiere realizar.
  const operacion = await preguntar("Operación (+, -, *, /): ");

  let resultado;

  // Dependiendo de la operación escogida, hacemos el cálculo correspondiente.
  if (operacion === "+") {
    resultado = num1 + num2;
  } else if (operacion === "-") {
    resultado = num1 - num2;
  } else if (operacion === "*") {
    resultado = num1 * num2;
  } else if (operacion === "/") {
    // Antes de dividir, verificamos que el divisor no sea cero.
    if (num2 === 0) {
      console.log("Error: no se puede dividir entre 0");
      rl.close();
      return;
    }

    resultado = num1 / num2;
  } else {
    // Si el usuario escribió una operación que no conocemos, mostramos un mensaje de error.
    console.log("Operación no válida");
    rl.close();
    return;
  }

  // Mostramos el resultado final en la consola.
  console.log(`Resultado: ${resultado}`);

  // Cerramos la interfaz de lectura para terminar el programa correctamente.
  rl.close();
}

// Ejecutamos la función principal.
calculadora();