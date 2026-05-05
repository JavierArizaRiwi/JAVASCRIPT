/*
  ejemplo_if.js

  Ejemplo sencillo de cómo usar una instrucción if / else if / else.
  Esta estructura de control permite tomar decisiones según condiciones.
*/

const numero = 5;

console.log("--- EJEMPLO IF ---");
console.log(`Número: ${numero}`);

// Aquí evaluamos varias condiciones con if, else if y else.
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

/*
  Explicación:
  - if comprueba la primera condición (numero > 0).
  - else if se usa cuando la primera condición no se cumple.
  - else se ejecuta si ninguna condición anterior es verdadera.
*/