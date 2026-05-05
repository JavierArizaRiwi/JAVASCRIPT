/*
  ejemplo_switch.js

  Ejemplo de la estructura switch para manejar múltiples opciones.
  Es útil cuando se debe comparar una misma variable con varios valores.
*/

const dia = 3;

console.log("--- EJEMPLO SWITCH ---");
console.log(`Valor de día: ${dia}`);

switch (dia) {
  case 1:
    console.log("Hoy es lunes.");
    break;
  case 2:
    console.log("Hoy es martes.");
    break;
  case 3:
    console.log("Hoy es miércoles.");
    break;
  case 4:
    console.log("Hoy es jueves.");
    break;
  case 5:
    console.log("Hoy es viernes.");
    break;
  default:
    console.log("Fin de semana o valor no válido.");
}

/*
  Explicación:
  - switch compara el valor de 'dia' con cada case.
  - break evita que las instrucciones siguientes se ejecuten.
  - default actúa como "si ninguna opción coincide".
*/