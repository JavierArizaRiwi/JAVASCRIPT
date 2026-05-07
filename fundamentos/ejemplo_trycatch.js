/*
  ejemplo_trycatch.js

  Enseña cómo manejar errores con try / catch.
  Útil para evitar que un error detenga todo el programa.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_trycatch.js

  Salida esperada:
    - Se intenta dividir por cero.
    - Se captura el error y se muestra un mensaje.
    - El bloque finally se ejecuta siempre.
*/

console.log("--- EJEMPLO TRY/CATCH ---");

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log(`Resultado: ${resultado}`)
} catch (error) {
  console.log("Ocurrió un error:", error.message);
} finally {
  console.log("Este bloque se ejecuta siempre, haya o no error.");
}

/*
  Explicación:
  - throw permite lanzar un error cuando algo no está bien.
  - try contiene el código que podría fallar.
  - catch captura el error y evita que el programa termine abruptamente.
  - finally se ejecuta siempre, incluso si hay error.
*/