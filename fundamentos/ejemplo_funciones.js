/*
  ejemplo_funciones.js

  Muestra cómo definir y usar funciones en JavaScript.
  Incluye función tradicional, función anónima y arrow function.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_funciones.js

  Salida esperada:
    - Suma, resta y multiplicación de números.
    - Saludo desde una función sin parámetros.
*/

console.log("--- EJEMPLO FUNCIONES ---");

// Función tradicional declarada con function.
function sumar(a, b) {
  return a + b;
}

console.log(`sumar(2, 3) = ${sumar(2, 3)}`);

// Función anónima guardada en una variable.
const restar = function(a, b) {
  return a - b;
};

console.log(`restar(5, 2) = ${restar(5, 2)}`);

// Arrow function: sintaxis moderna y más concisa.
const multiplicar = (a, b) => a * b;
console.log(`multiplicar(4, 3) = ${multiplicar(4, 3)}`);

// Función que no recibe parámetros.
function saludar() {
  console.log("¡Hola! Esta es una función sin parámetros.");
}

saludar();

/*
  Explicación:
  - Las funciones reciben datos, los procesan y devuelven un resultado.
  - return cierra la función y devuelve un valor.
  - Las arrow functions son útiles para escribir funciones cortas.
*/