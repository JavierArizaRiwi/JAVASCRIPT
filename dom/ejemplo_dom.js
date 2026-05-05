/*
  ejemplo_dom.js

  Ejemplo de manipulación del DOM en el navegador.
  Muestra cómo seleccionar elementos, cambiar contenido y responder a eventos.
*/

const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

console.log("--- EJEMPLO DOM ---");

// Cambiar texto y estilo de un elemento.
titulo.textContent = "DOM con JavaScript";
titulo.style.color = "#2a7ae2";

descripcion.textContent = "Este ejemplo muestra cómo interactuar con la página web.";

// Escuchar el clic sobre un botón.
boton.addEventListener("click", () => {
  const nuevoItem = document.createElement("li");
  const cantidad = lista.children.length + 1;
  nuevoItem.textContent = `Elemento ${cantidad}`;
  lista.appendChild(nuevoItem);

  descripcion.textContent = `Has agregado ${cantidad} elementos a la lista.`;
});

/*
  Explicación:
  - document.getElementById obtiene un elemento usando su ID.
  - textContent cambia el texto interno del elemento.
  - style modifica estilos CSS desde JavaScript.
  - addEventListener escucha eventos, como click.
  - createElement crea un nuevo nodo HTML.
  - appendChild agrega ese nodo a otro elemento.
*/