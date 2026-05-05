/*
  ejemplo_tipos_parseos.js

  Muestra los tipos de datos básicos de JavaScript
  y cómo convertir (parsear) valores entre ellos.
*/

console.log("--- EJEMPLO TIPOS DE DATOS Y PARSEOS ---");

// Tipos de datos primitivos.
const texto = "Hola"; // string
const numero = 42; // number
const booleano = true; // boolean
const valorNulo = null; // null
let valorIndefinido; // undefined
const objeto = { nombre: "Ana" }; // object
const arreglo = [1, 2, 3]; // object (arreglo)
const simbolo = Symbol("id"); // symbol
const bigInt = 9007199254740991n; // bigint

console.log("Tipo texto:", typeof texto, texto);
console.log("Tipo numero:", typeof numero, numero);
console.log("Tipo booleano:", typeof booleano, booleano);
console.log("Tipo null:", typeof valorNulo, valorNulo);
console.log("Tipo undefined:", typeof valorIndefinido, valorIndefinido);
console.log("Tipo objeto:", typeof objeto, objeto);
console.log("Tipo arreglo:", typeof arreglo, arreglo);
console.log("Tipo symbol:", typeof simbolo, simbolo.toString());
console.log("Tipo bigint:", typeof bigInt, bigInt);

// Valores especiales.
console.log("NaN es de tipo:", typeof NaN, NaN);
console.log("Infinity es de tipo:", typeof Infinity, Infinity);

// Parseos / conversiones explícitas.
const numeroComoTexto = String(123);
const textoComoNumero = Number("123");
const decimalComoNumero = parseFloat("3.14");
const enteroComoNumero = parseInt("10", 10);
const booleanoDesdeTexto = Boolean("Hola");
const booleanoDesdeCadenaVacia = Boolean("");

console.log("String(123):", numeroComoTexto, typeof numeroComoTexto);
console.log("Number('123'):", textoComoNumero, typeof textoComoNumero);
console.log("parseFloat('3.14'):", decimalComoNumero, typeof decimalComoNumero);
console.log("parseInt('10', 10):", enteroComoNumero, typeof enteroComoNumero);
console.log("Boolean('Hola'):", booleanoDesdeTexto, typeof booleanoDesdeTexto);
console.log("Boolean(''):", booleanoDesdeCadenaVacia, typeof booleanoDesdeCadenaVacia);

// Conversión implícita y reglas de coerción.
console.log("'5' + 3:", "5" + 3);
console.log("'5' - 3:", "5" - 3);
console.log("'5' * '2':", "5" * "2");
console.log("'5' / 0:", "5" / 0);
console.log("true + 1:", true + 1);
console.log("false + 1:", false + 1);

// Valores truthy y falsy.
const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];
const truthy = ["0", "false", 1, -1, {}, []];
console.log("Valores falsy:", falsy.map((v) => Boolean(v)));
console.log("Valores truthy:", truthy.map((v) => Boolean(v)));

// Ejemplo útil de validación de número.
const valor = "123abc";
const numeroParseado = Number(valor);
console.log(`Number('${valor}') ->`, numeroParseado);
console.log(`isNaN(Number('${valor}')) ->`, isNaN(numeroParseado));

// Template strings permiten interpolar valores fácilmente.
const nombre = "Luis";
console.log(`Hola, ${nombre}. La suma es ${2 + 3}.`);

/*
  Explicación:
  - typeof indica el tipo de un valor.
  - String, Number, Boolean convierten explícitamente datos.
  - parseInt y parseFloat extraen números de texto.
  - La coerción de tipos ocurre automáticamente en operaciones mixtas.
  - JavaScript tiene valores falsy que se consideran false en condiciones.
  - isNaN ayuda a detectar si una conversión numérica produjo un valor no numérico.
  - Las template strings usan backticks y ${} para insertar valores.
*/