/*
  ejemplo_async_await.js

  Muestra cómo trabajar con código asíncrono en JavaScript.
  Usa Promise y async / await para escribir un flujo más claro.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_async_await.js

  Salida esperada:
    - Muestra un mensaje antes de esperar.
    - Espera 2 segundos.
    - Muestra un mensaje después de la espera.
*/

console.log("--- EJEMPLO ASYNC/AWAIT ---");

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function mostrarMensaje() {
  console.log("Esperando 2 segundos...");
  await esperar(2000); // Pausa la ejecución hasta que la promesa se resuelva.
  console.log("¡Ya pasaron 2 segundos!");
}

mostrarMensaje();

/*
  Explicación:
  - Una Promise representa una operación que puede completarse en el futuro.
  - async convierte una función en asíncrona y permite usar await dentro.
  - await detiene temporalmente la ejecución de la función hasta que la promesa termine.
*/