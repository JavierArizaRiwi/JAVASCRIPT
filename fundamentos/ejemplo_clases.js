/*
  ejemplo_clases.js

  Muestra cómo crear clases y objetos con programación orientada a objetos.
*/

console.log("--- EJEMPLO CLASES ---");

class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  presentarse() {
    console.log(`Soy ${this.nombre} y soy un ${this.especie}.`);
  }
}

const gato = new Animal("Michi", "gato");
gato.presentarse();

/*
  Explicación:
  - class define una plantilla para objetos.
  - constructor se ejecuta al crear una nueva instancia.
  - this se usa para acceder a las propiedades del objeto.
  - new Animal(...) crea un objeto a partir de la clase.
*/