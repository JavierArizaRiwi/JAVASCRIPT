/*
  cliente.js

  Cliente web para consumir el servidor Node.js definido en `servidor/ejemplo_server.js`.
  Este archivo usa fetch para hacer peticiones GET y POST, mostrar resultados en pantalla
  y validar los datos ingresados por el usuario.

  Cómo usar:
    1. Inicia el servidor:
       cd servidor && node ejemplo_server.js
    2. Abre `servidor/cliente.html` en el navegador.
    3. Prueba los botones para cargar usuarios, cargar tareas o crear nuevos registros.

  Nota:
    Si el servidor no está ejecutándose, el área de salida mostrará un error.
*/

const btnUsuarios = document.getElementById("btnUsuarios");
const btnTareas = document.getElementById("btnTareas");
const btnCrearUsuario = document.getElementById("btnCrearUsuario");
const btnCrearTarea = document.getElementById("btnCrearTarea");
const nombreInput = document.getElementById("usuarioNombre");
const ciudadInput = document.getElementById("usuarioCiudad");
const tareaInput = document.getElementById("tareaTitulo");
const salida = document.getElementById("salida");

const API = "http://localhost:3000/api"; // URL del servidor local.

function mostrarRespuesta(data) {
  // Convierte el objeto en texto bonito para mostrarlo en pantalla.
  salida.textContent = JSON.stringify(data, null, 2);
}

async function fetchGET(ruta) {
  // Realiza una petición GET a la ruta indicada en la API.
  try {
    const respuesta = await fetch(`${API}/${ruta}`);
    const datos = await respuesta.json();
    mostrarRespuesta(datos);
  } catch (error) {
    mostrarRespuesta({ error: error.message });
  }
}

async function fetchPOST(ruta, body) {
  // Envía datos en formato JSON a la API usando POST.
  try {
    const respuesta = await fetch(`${API}/${ruta}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const datos = await respuesta.json();
    mostrarRespuesta(datos);
  } catch (error) {
    mostrarRespuesta({ error: error.message });
  }
}

btnUsuarios.addEventListener("click", () => {
  // Al hacer clic, solicitamos al servidor la lista de usuarios.
  fetchGET("usuarios");
});

btnTareas.addEventListener("click", () => {
  // Al hacer clic, solicitamos al servidor la lista de tareas.
  fetchGET("tareas");
});

btnCrearUsuario.addEventListener("click", () => {
  // Validamos los datos antes de enviar el POST.
  const nombre = nombreInput.value.trim();
  const ciudad = ciudadInput.value.trim();

  if (!nombre || !ciudad) {
    mostrarRespuesta({ error: "Nombre y ciudad son obligatorios." });
    return;
  }

  fetchPOST("usuarios", { nombre, ciudad });
});

btnCrearTarea.addEventListener("click", () => {
  // Validamos el título antes de enviar el POST.
  const titulo = tareaInput.value.trim();

  if (!titulo) {
    mostrarRespuesta({ error: "Título de tarea requerido." });
    return;
  }

  fetchPOST("tareas", { titulo, completada: false });
});
