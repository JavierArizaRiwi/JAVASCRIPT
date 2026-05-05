/*
  ejemplo_objetos.js

  Explica cómo usar objetos en JavaScript.
  Un objeto agrupa propiedades y métodos relacionados.
*/

console.log("--- EJEMPLO OBJETOS ---");

const persona = {
  nombre: "Ana",
  edad: 28,
  profesion: "Desarrolladora",
  presentarse() {
    return `Hola, soy ${this.nombre} y trabajo como ${this.profesion}.`;
  }
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(persona.presentarse());

// Agregar una nueva propiedad dinámicamente.
persona.pais = "Chile";
console.log(`País: ${persona.pais}`);

/*
  Explicación:
  - Un objeto es una colección de parejas clave-valor.
  - Las propiedades se acceden con persona.propiedad.
  - Los métodos son funciones dentro del objeto.
  - this se refiere al propio objeto dentro de un método.
*/