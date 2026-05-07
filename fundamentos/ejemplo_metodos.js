/*
  ejemplo_metodos.js

  Explica los métodos más usados de JavaScript para arreglos, cadenas y objetos.
  También muestra cómo comparar valores correctamente.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_metodos.js

  Salida esperada:
    - Muestra diferentes operaciones con arreglos.
    - Muestra métodos de cadenas.
    - Muestra operaciones con objetos.
*/

console.log("--- EJEMPLO MÉTODOS DE JAVASCRIPT ---");

// ======== MÉTODOS DE ARREGLOS ========
const frutas = ["Manzana", "Banana"]; 
const verduras = ["Lechuga", "Tomate"];
console.log("Arreglo original:", frutas);

// push agrega un elemento al final del arreglo.
frutas.push("Cereza");
console.log("Después de push:", frutas);

// pop quita el último elemento y lo devuelve.
const frutaQuitada = frutas.pop();
console.log("Elemento quitado con pop:", frutaQuitada);
console.log("Después de pop:", frutas);

// unshift agrega un elemento al inicio.
frutas.unshift("Fresa");
console.log("Después de unshift:", frutas);

// shift quita el primer elemento.
const primeraFruta = frutas.shift();
console.log("Elemento quitado con shift:", primeraFruta);
console.log("Después de shift:", frutas);

// indexOf devuelve la posición de un valor o -1 si no existe.
console.log("Índice de Banana:", frutas.indexOf("Banana"));

// includes devuelve true si el arreglo contiene el valor.
console.log("¿Contiene 'Manzana'?", frutas.includes("Manzana"));

// concat une arreglos sin modificar los originales.
const masFrutas = frutas.concat(verduras);
console.log("Concat resultados:", masFrutas);

// join convierte un arreglo en una cadena usando un separador.
console.log("join con coma:", masFrutas.join(", "));

// slice crea una copia de una parte del arreglo.
console.log("slice(1, 3):", masFrutas.slice(1, 3));

// splice puede eliminar, reemplazar o insertar elementos.
const arregloParaSplice = ["A", "B", "C", "D"];
console.log("Antes de splice:", arregloParaSplice);
arregloParaSplice.splice(1, 2, "X", "Y");
console.log("Después de splice:", arregloParaSplice);

// find devuelve el primer elemento que cumple la condición.
const numero = [10, 20, 30, 40];
const numeroMayorViente = numero.find((n) => n > 20);
console.log("Primer número mayor a 20:", numeroMayorViente);

// findIndex devuelve la posición del elemento que cumple la condición.
console.log("Posición del primer número mayor a 20:", numero.findIndex((n) => n > 20));

// some devuelve true si al menos un elemento cumple la condición.
console.log("¿Algún número par?", numero.some((n) => n % 2 === 0));

// every devuelve true solo si todos cumplen la condición.
console.log("¿Todos los números son mayores que 5?", numero.every((n) => n > 5));

// forEach recorre cada elemento sin devolver un nuevo arreglo.
console.log("Recorriendo con forEach:");
numero.forEach((n, i) => {
  console.log(`Índice ${i}: ${n}`);
});

// map genera un nuevo arreglo transformando cada elemento.
const dobles = numero.map((n) => n * 2);
console.log("Dobles con map:", dobles);

// filter crea un nuevo arreglo con los elementos que pasan la condición.
const pares = numero.filter((n) => n % 2 === 0);
console.log("Pares con filter:", pares);

// reduce combina elementos en un solo valor.
const sumaTotal = numero.reduce((acum, n) => acum + n, 0);
console.log("Suma total con reduce:", sumaTotal);

// ======== MÉTODOS DE CADENAS ========
const texto = "  Hola JavaScript  ";
console.log("Texto original:", JSON.stringify(texto));

console.log("longitud:", texto.length);
console.log("trim:", JSON.stringify(texto.trim()));
console.log("toUpperCase:", texto.toUpperCase());
console.log("toLowerCase:", texto.toLowerCase());
console.log("includes('Java'):", texto.includes("Java"));
console.log("startsWith('  Hola'):", texto.startsWith("  Hola"));
console.log("endsWith('Script  '):", texto.endsWith("Script  "));
console.log("replace('JavaScript', 'JS'):", texto.replace("JavaScript", "JS"));
console.log("split(''):", texto.trim().split(" "));

// ======== MÉTODOS DE OBJETOS ========
const usuario = {
  nombre: "Luis",
  edad: 30,
  pais: "México"
};

console.log("Objeto usuario:", usuario);
console.log("Claves con Object.keys:", Object.keys(usuario));
console.log("Valores con Object.values:", Object.values(usuario));
console.log("Entradas con Object.entries:", Object.entries(usuario));
console.log("Tiene propiedad 'edad'?", usuario.hasOwnProperty("edad"));

// ======== IGUALDAD EN JAVASCRIPT ========
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("Object.is(0, -0):", Object.is(0, -0));
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));

// Comparar arreglos requiere comparar contenido, no usar === directamente.
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log("arr1 === arr2:", arr1 === arr2);
const igualesPorContenido = arr1.length === arr2.length && arr1.every((valor, indice) => valor === arr2[indice]);
console.log("Comparar arreglos por contenido:", igualesPorContenido);

/*
  Explicación general:
  - push, pop, shift, unshift modifican el arreglo.
  - slice copia una parte del arreglo sin cambiarlo.
  - splice modifica el arreglo en la posición indicada.
  - map, filter y reduce crean nuevos resultados a partir de los datos.
  - includes, indexOf y find ayudan a buscar valores.
  - forEach recorre cada elemento sin devolver un nuevo arreglo.
  - Las cadenas también tienen métodos útiles para transformar y buscar texto.
  - Object.keys/values/entries ayudan a trabajar con las propiedades de un objeto.
  - == compara valores con conversión de tipo; === compara sin conversión.
  - Para comparar arreglos por contenido hay que revisar cada elemento.
*/