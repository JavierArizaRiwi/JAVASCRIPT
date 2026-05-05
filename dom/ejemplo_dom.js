/*
  ejemplo_dom.js

  Ejemplo avanzado de manipulación del DOM en el navegador.
  Incluye creación de elementos, eventos, temas y almacenamiento local/session.
*/

const formulario = document.getElementById("formulario");
const entradaTarea = document.getElementById("entradaTarea");
const listaTareas = document.getElementById("lista-tareas");
const estado = document.getElementById("estado");
const btnGuardarLocal = document.getElementById("guardar-local");
const btnCargarLocal = document.getElementById("cargar-local");
const btnBorrarLocal = document.getElementById("borrar-local");
const btnGuardarSesion = document.getElementById("guardar-sesion");
const btnCargarSesion = document.getElementById("cargar-sesion");
const btnBorrarSesion = document.getElementById("borrar-sesion");
const btnToggleTema = document.getElementById("toggle-tema");
const app = document.getElementById("app");

const STORAGE_KEY = "misTareas";
const SESSION_KEY = "misTareasSesion";

let tareas = [];

function mostrarEstado(mensaje) {
  estado.textContent = mensaje;
}

function crearTareaElemento(tarea, indice) {
  const elemento = document.createElement("li");
  elemento.textContent = tarea;
  elemento.dataset.indice = indice;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.type = "button";
  botonEliminar.addEventListener("click", () => {
    eliminarTarea(indice);
  });

  elemento.appendChild(botonEliminar);
  return elemento;
}

function renderizarTareas() {
  listaTareas.innerHTML = "";

  if (tareas.length === 0) {
    listaTareas.innerHTML = "<li>No hay tareas aún.</li>";
    return;
  }

  tareas.forEach((tarea, indice) => {
    listaTareas.appendChild(crearTareaElemento(tarea, indice));
  });
}

function guardarEnStorage(key, datos) {
  localStorage.setItem(key, JSON.stringify(datos));
}

function cargarDeStorage(key) {
  const datos = localStorage.getItem(key);
  return datos ? JSON.parse(datos) : null;
}

function guardarEnSesion(key, datos) {
  sessionStorage.setItem(key, JSON.stringify(datos));
}

function cargarDeSesion(key) {
  const datos = sessionStorage.getItem(key);
  return datos ? JSON.parse(datos) : null;
}

function agregarTarea(tarea) {
  if (!tarea.trim()) {
    mostrarEstado("Escribe una tarea válida antes de agregarla.");
    return;
  }

  tareas.push(tarea.trim());
  renderizarTareas();
  entradaTarea.value = "";
  mostrarEstado(`Tarea agregada: ${tarea}`);
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  renderizarTareas();
  mostrarEstado("Tarea eliminada.");
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarTarea(entradaTarea.value);
});

btnGuardarLocal.addEventListener("click", () => {
  guardarEnStorage(STORAGE_KEY, tareas);
  mostrarEstado("Tareas guardadas en localStorage.");
});

btnCargarLocal.addEventListener("click", () => {
  const datos = cargarDeStorage(STORAGE_KEY);
  if (datos) {
    tareas = datos;
    renderizarTareas();
    mostrarEstado("Tareas cargadas desde localStorage.");
  } else {
    mostrarEstado("No hay tareas guardadas en localStorage.");
  }
});

btnBorrarLocal.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  mostrarEstado("localStorage borrado.");
});

btnGuardarSesion.addEventListener("click", () => {
  guardarEnSesion(SESSION_KEY, tareas);
  mostrarEstado("Tareas guardadas en sessionStorage.");
});

btnCargarSesion.addEventListener("click", () => {
  const datos = cargarDeSesion(SESSION_KEY);
  if (datos) {
    tareas = datos;
    renderizarTareas();
    mostrarEstado("Tareas cargadas desde sessionStorage.");
  } else {
    mostrarEstado("No hay tareas guardadas en sessionStorage.");
  }
});

btnBorrarSesion.addEventListener("click", () => {
  sessionStorage.removeItem(SESSION_KEY);
  mostrarEstado("sessionStorage borrado.");
});

btnToggleTema.addEventListener("click", () => {
  app.classList.toggle("dark-mode");
  mostrarEstado("Tema cambiado.");
});

// Smart load: intenta cargar primero desde localStorage.
const tareasGuardadas = cargarDeStorage(STORAGE_KEY);
if (tareasGuardadas) {
  tareas = tareasGuardadas;
  mostrarEstado("Tareas cargadas desde localStorage al iniciar.");
} else {
  tareas = ["Aprender DOM", "Guardar datos en localStorage"];
  mostrarEstado("Tareas por defecto cargadas.");
}

renderizarTareas();

/*
  Explicación:
  - querySelector y getElementById seleccionan elementos del DOM.
  - form.addEventListener('submit') evita recarga de la página.
  - createElement crea entradas nuevas.
  - classList.toggle cambia clases CSS dinámicamente.
  - localStorage guarda datos persistentes entre sesiones.
  - sessionStorage guarda datos temporales en la pestaña actual.
  - JSON.stringify convierte arreglos u objetos en texto.
  - JSON.parse convierte ese texto de vuelta en datos.
*/