/*
  ejemplo_while.js

  Ejemplo de la estructura while.
  while repite un bloque de código mientras la condición sea verdadera.
*/

let contador = 1;

console.log("--- EJEMPLO WHILE ---");

while (contador <= 5) {
  console.log(`Cuenta: ${contador}`);
  contador += 1; // Aumentamos el contador en 1 en cada vuelta.
}

console.log("El bucle while ha terminado.");

/*
  Explicación:
  - La condición contador <= 5 se comprueba antes de cada repetición.
  - Si es verdadera, el bloque se ejecuta.
  - Si es falsa, el bucle termina.
*/