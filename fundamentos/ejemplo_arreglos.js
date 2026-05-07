/*
  ejemplo_arreglos.js

  Muestra operaciones útiles de arreglos: map, filter y reduce.
  Estos son métodos muy usados en JavaScript moderno.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_arreglos.js

  Salida esperada:
    - Arreglo original.
    - Arreglo con valores dobles.
    - Arreglo con valores pares.
    - Suma total de los números.
*/

console.log("--- EJEMPLO ARREGLOS ---");

const numeros = [1, 2, 3, 4, 5];

// map: crea un nuevo arreglo transformando cada elemento.
const dobles = numeros.map((n) => n * 2);
console.log("Números dobles:", dobles);

// filter: crea un nuevo arreglo con elementos que cumplen una condición.
const pares = numeros.filter((n) => n % 2 === 0);
console.log("Números pares:", pares);

// reduce: aplica una función acumuladora para obtener un solo valor.
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log("Suma de todos los números:", suma);

// includes: verifica si un elemento existe en el arreglo.
console.log("¿El número 3 está en el arreglo?", numeros.includes(3));

/*
  Explicación:
  - map transforma cada elemento y devuelve un nuevo arreglo.
  - filter selecciona solo los elementos que mantienen la condición.
  - reduce combina todos los valores en uno solo.
  - includes devuelve true si el arreglo contiene el elemento.
*/