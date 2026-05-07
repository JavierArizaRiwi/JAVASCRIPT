/*
  ejemplo_ordenamiento.js

  Ejemplo de algoritmos de ordenamiento básicos en JavaScript.
  Incluye bubble sort e insertion sort con explicaciones paso a paso.

  Cómo ejecutar:
    cd algoritmos
    node ejemplo_ordenamiento.js

  Salida esperada:
    - Muestra el arreglo original.
    - Muestra el resultado ordenado con bubble sort.
    - Muestra el resultado ordenado con insertion sort.
*/

console.log("--- EJEMPLO ORDENAMIENTO ---");

const arregloOriginal = [5, 2, 9, 1, 5, 6];
console.log("Arreglo original:", arregloOriginal);

function bubbleSort(arr) {
  const resultado = [...arr]; // copiamos el arreglo para no modificar el original.
  const n = resultado.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (resultado[j] > resultado[j + 1]) {
        const temp = resultado[j];
        resultado[j] = resultado[j + 1];
        resultado[j + 1] = temp;
      }
    }
  }

  return resultado;
}

function insertionSort(arr) {
  const resultado = [...arr];

  for (let i = 1; i < resultado.length; i++) {
    let valorActual = resultado[i];
    let j = i - 1;

    while (j >= 0 && resultado[j] > valorActual) {
      resultado[j + 1] = resultado[j];
      j -= 1;
    }

    resultado[j + 1] = valorActual;
  }

  return resultado;
}

console.log("Bubble sort:", bubbleSort(arregloOriginal));
console.log("Insertion sort:", insertionSort(arregloOriginal));

/*
  Explicación:
  - Bubble sort recorre el arreglo varias veces intercambiando vecinos.
  - Insertion sort construye el arreglo ordenado tomando cada elemento y colocándolo en su lugar.
  - Ambos son algoritmos de ordenamiento simples, útiles para aprender cómo funcionan las comparaciones y los intercambios.
*/