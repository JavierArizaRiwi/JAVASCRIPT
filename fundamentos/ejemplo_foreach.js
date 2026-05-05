/*
  ejemplo_foreach.js

  Demuestra cómo recorrer un arreglo usando forEach.
  forEach ejecuta una función para cada elemento del arreglo.
*/

const frutas = ["Manzana", "Banana", "Cereza", "Durazno"];

console.log("--- EJEMPLO forEach ---");
console.log("Lista de frutas:");

frutas.forEach((fruta, indice) => {
  console.log(`${indice + 1}. ${fruta}`);
});

/*
  Explicación:
  - frutas es un arreglo con varios elementos.
  - forEach recibe una función que se ejecuta para cada elemento.
  - La función recibe el elemento y el índice.
*/