/*
  ejemplo_debug.js

  Ejemplo para practicar debugging en JavaScript.
  Este archivo contiene una función con un error intencional para que puedas practicar
  el uso de breakpoints y el depurador paso a paso.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_debug.js

  Cómo depurar:
    1. Abre este archivo en VS Code.
    2. Haz clic en el margen izquierdo (cerca del número de línea) para colocar breakpoints.
    3. Ejecuta con F5 o desde el menú "Run > Start Debugging".
    4. Selecciona "Node.js" si es la primera vez.
    5. El depurador se detendrá en los breakpoints y podrás inspeccionar variables.

  Salida esperada:
    - Si no hay error, muestra el resultado de la función.
    - Si hay error, el depurador te ayudará a encontrar dónde ocurre.
*/

function calcularFactorial(n) {
  // Esta función calcula el factorial de un número.
  // Tiene un error intencional: no maneja el caso base correctamente para n=0.

  if (n === 0) {
    return 1; // Caso base: factorial de 0 es 1.
  }

  // Aquí hay un breakpoint sugerido: coloca uno aquí para ver el valor de n.
  console.log(`Calculando factorial de ${n}`);

  // Llamada recursiva: n * factorial(n-1)
  return n * calcularFactorial(n - 1);
}

function main() {
  const numero = 5; // Cambia este valor para probar diferentes casos.

  console.log("--- EJEMPLO DEBUGGING ---");
  console.log(`Calculando factorial de ${numero}...`);

  try {
    const resultado = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${resultado}`);
  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

// Ejecutamos la función principal.
main();

/*
  Explicación del debugging:
  - Breakpoints: Pausan la ejecución en una línea específica para inspeccionar variables.
  - Paso a paso: Usa F10 para avanzar línea por línea, F11 para entrar en funciones.
  - Variables: En la pestaña "Variables" del depurador, puedes ver el valor de n, resultado, etc.
  - Call Stack: Muestra la pila de llamadas para entender la recursión.
  - Console: Puedes ejecutar código JavaScript en tiempo real desde la consola del depurador.

  Prueba:
    1. Coloca un breakpoint en la línea "console.log(`Calculando factorial de ${n}`);"
    2. Ejecuta el programa en modo debug.
    3. Observa cómo cambia el valor de n en cada llamada recursiva.
    4. Si cambias numero a 0, verifica que el caso base funcione.
*/