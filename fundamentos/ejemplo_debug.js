/*
  ejemplo_debug.js

  Ejemplo para practicar debugging en JavaScript con casos reales.
  Incluye:
    - cálculo de factorial con recursión.
    - cálculo de total de un carrito de compras.
    - validaciones de datos y manejo de errores.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_debug.js

  Cómo depurar en VS Code:
    1. Abre este archivo en VS Code.
    2. Coloca breakpoints en el margen izquierdo.
    3. Ejecuta con F5 o desde el menú "Run > Start Debugging".
    4. Elige "Node.js" si te lo pide.
    5. Usa F10 para avanzar línea por línea o F11 para entrar en funciones.

  Qué aprenderás:
    - cómo inspeccionar valores en cada paso.
    - cómo ver la pila de llamadas (call stack).
    - cómo encontrar errores en funciones recursivas y bucles.

  Casos de uso ideales:
    - cuando quieres practicar debugging de funciones recursivas.
    - cuando necesitas ver cómo se comporta un bucle en un carrito de compras.
    - cuando quieres aprender a validar datos y manejar errores.
    - cuando quieres entender mejor el stack de llamadas y la inspección de variables.
*/

function calcularFactorial(n) {
  // Valida que n sea un número entero.
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("El número debe ser un entero.");
  }

  if (n < 0) {
    throw new Error("No se puede calcular el factorial de un número negativo.");
  }

  // Coloca un breakpoint aquí para ver el valor de n en cada llamada.
  console.log("Entrando en calcularFactorial", { n });

  if (n === 0 || n === 1) {
    return 1;
  }

  const resultado = n * calcularFactorial(n - 1);
  console.log("Resultado parcial", { n, resultado });
  return resultado;
}

function calcularTotalCarrito(carrito) {
  // Este ejemplo simula un carrito de compras real.
  let total = 0;

  for (let i = 0; i < carrito.length; i += 1) {
    const producto = carrito[i];
    const precio = parseFloat(producto.precio);
    const cantidad = Number(producto.cantidad);

    // Coloca un breakpoint aquí para inspeccionar cada producto.
    console.log("Procesando producto", { producto, precio, cantidad, total });

    if (Number.isNaN(precio) || Number.isNaN(cantidad)) {
      throw new Error(`Datos inválidos en el producto "${producto.nombre}"`);
    }

    total += precio * cantidad;
  }

  return total;
}

function main() {
  console.log("--- EJEMPLO DEBUGGING ---");

  console.log("\n1) Ejemplo real: factorial recursivo");
  const numero = 5;
  console.log(`Calculando factorial de ${numero}...`);

  try {
    const resultadoFactorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
  } catch (error) {
    console.log("Error en factorial:", error.message);
  }

  console.log("\n2) Ejemplo real: total de carrito de compras");
  const carrito = [
    { nombre: "Camiseta", precio: "15.99", cantidad: 2 },
    { nombre: "Pantalón", precio: "28.50", cantidad: 1 },
    { nombre: "Calcetines", precio: "5.00", cantidad: 3 }
  ];

  try {
    const total = calcularTotalCarrito(carrito);
    console.log("Total del carrito:", total.toFixed(2));
  } catch (error) {
    console.log("Error en carrito:", error.message);
  }

  console.log("\nConsejo de debugging:");
  console.log(" - Usa breakpoints en funciones y en el bucle del carrito.");
  console.log(" - Revisa los valores de las variables en cada iteración.");
  console.log(" - Si quieres probar un error, cambia precio a 'abc' o cantidad a 'dos'.");
}

main();

/*
  Explicación detallada:
    1. calcularFactorial(n): función recursiva que multiplica n por el factorial de n-1.
       - Verifica que n sea un número entero.
       - Lanza un error si n es negativo o no es entero.
       - Usa un caso base para n=0 y n=1.
       - Cada llamada recursiva aparece en el call stack.

    2. calcularTotalCarrito(carrito): ejemplo real de un carrito de compras.
       - Convierte el precio a número con parseFloat.
       - Convierte cantidad a número con Number.
       - Valida que los datos sean correctos.
       - Suma precio * cantidad para cada producto.

    3. Debugging en VS Code:
       - Breakpoints te permiten detener la ejecución en línea específica.
       - Inspecta variables como n, resultado, producto, precio y cantidad.
       - Observa la pestaña "Call Stack" para ver cómo se llaman las funciones.
       - Usa la consola del depurador para ejecutar expresiones en tiempo real.

  Ejemplos de pruebas:
    - Cambia `numero` a 0 para verificar el caso base.
    - Cambia `numero` a -1 para ver cómo se maneja un error.
    - Cambia `precio` de un producto a "abc" para forzar un error de validación.
*/