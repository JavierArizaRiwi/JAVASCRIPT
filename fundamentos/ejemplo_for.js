/*
  ejemplo_for.js

  Demuestra cómo usar un bucle for clásico.
  También muestra cómo usar break y continue.

  Cómo ejecutar:
    cd fundamentos
    node ejemplo_for.js
*/

console.log("--- EJEMPLO FOR ---");

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("Saltando el número 3 con continue");
    continue; // Salta al siguiente ciclo sin ejecutar el resto del bloque.
  }

  if (i === 4) {
    console.log("Llegamos al número 4, este es el último caso antes de terminar el bucle");
  } else {
    console.log(`Número ${i} es menor que 4`);
  }
}

/*  console.log(`Valor de i: ${i}`);

  Explicación:
  - for(inicio; condición; paso) define el contador, la condición y el cambio.
  - continue salta la iteración actual y sigue con la siguiente.
  - break sale completamente del bucle.
*/