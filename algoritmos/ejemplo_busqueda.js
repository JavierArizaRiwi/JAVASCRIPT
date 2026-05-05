/*
  ejemplo_busqueda.js

  Ejemplo de búsqueda lineal y búsqueda binaria en JavaScript.
  La búsqueda binaria requiere un arreglo ordenado.
*/

console.log("--- EJEMPLO BÚSQUEDA ---");

const numeros = [1, 3, 4, 6, 8, 12, 15, 18];
console.log("Arreglo ordenado:", numeros);

function busquedaLineal(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i;
    }
  }
  return -1;
}

function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === valor) {
      return medio;
    }

    if (arr[medio] < valor) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

const valorBuscado = 12;
console.log(`Búsqueda lineal de ${valorBuscado}:`, busquedaLineal(numeros, valorBuscado));
console.log(`Búsqueda binaria de ${valorBuscado}:`, busquedaBinaria(numeros, valorBuscado));

/*
  Explicación:
  - La búsqueda lineal revisa cada elemento uno por uno.
  - La búsqueda binaria divide el espacio de búsqueda por la mitad en cada paso.
  - La búsqueda binaria es más rápida en arreglos ordenados que la búsqueda lineal.
*/