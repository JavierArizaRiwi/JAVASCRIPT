/*
  ejemplo_server.js

  Servidor HTTP completo en Node.js para aprender a crear una API básica.
  - Responde rutas GET y POST.
  - Permite leer JSON desde el cuerpo de la petición.
  - Incluye soporte CORS para que un navegador pueda consumir la API.

  Cómo ejecutar:
    cd servidor
    node ejemplo_server.js

  Luego abre `servidor/cliente.html` en el navegador o usa curl para probar las rutas.

  Rutas disponibles:
    GET  /api/usuarios
    GET  /api/tareas
    POST /api/usuarios
    POST /api/tareas
*/


// Importamos el módulo 'http' de Node.js para crear el servidor web.
const http = require("http");

// Importamos 'StringDecoder' para decodificar los datos recibidos en el cuerpo de las peticiones HTTP.
const { StringDecoder } = require("string_decoder");


// Definimos un arreglo de usuarios simulando una base de datos en memoria.
let usuarios = [
  { id: 1, nombre: "Ana", ciudad: "Madrid" }, // Usuario de ejemplo
  { id: 2, nombre: "Luis", ciudad: "Mexico" },
  { id: 3, nombre: "Marta", ciudad: "Lima" }
];

// Definimos un arreglo de tareas simulando otra tabla de datos.
let tareas = [
  { id: 1, titulo: "Aprender JavaScript", completada: false }, // Tarea pendiente
  { id: 2, titulo: "Crear servidor básico", completada: true } // Tarea completada
];


// Puerto donde se ejecutará el servidor (localhost:3000)
const PORT = 3000;

// Encabezados HTTP comunes para todas las respuestas:
// - Content-Type: indica que la respuesta es JSON
// - Access-Control-Allow-Origin: permite peticiones desde cualquier origen (CORS)
// - Access-Control-Allow-Methods: métodos HTTP permitidos
// - Access-Control-Allow-Headers: cabeceras permitidas en las peticiones
const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};


/**
 * Función para enviar una respuesta JSON al cliente.
 * Centraliza el envío de respuestas para evitar repetir código.
 * @param {http.ServerResponse} res - El objeto de respuesta HTTP.
 * @param {number} status - Código de estado HTTP (ej: 200, 404, 201).
 * @param {object} data - Objeto que se enviará como JSON.
 */
function enviarJSON(res, status, data) {
  // Escribimos los encabezados y el código de estado.
  res.writeHead(status, HEADERS);
  // Convertimos el objeto 'data' a JSON y lo enviamos al cliente.
  res.end(JSON.stringify(data));
}


/**
 * Lee el cuerpo de una petición HTTP (por ejemplo, en un POST) y lo convierte a objeto JSON.
 * Devuelve una promesa que se resuelve cuando se ha recibido todo el cuerpo.
 * @param {http.IncomingMessage} req - La petición HTTP entrante.
 * @returns {Promise<object>} - Promesa que resuelve el objeto JSON recibido.
 */
function leerBody(req) {
  // Creamos un decodificador para convertir los datos binarios a texto UTF-8.
  return new Promise((resolve) => {
    const decoder = new StringDecoder("utf-8");
    let body = ""; // Acumulador para los datos recibidos.

    // Evento 'data': se dispara cada vez que llega un fragmento de datos.
    req.on("data", (chunk) => {
      body += decoder.write(chunk); // Añadimos el fragmento decodificado.
    });

    // Evento 'end': se dispara cuando ya no hay más datos por recibir.
    req.on("end", () => {
      body += decoder.end(); // Finalizamos la decodificación.
      // Si hay datos, los parseamos como JSON; si no, devolvemos un objeto vacío.
      resolve(body ? JSON.parse(body) : {});
    });
  });
}


// Creamos el servidor HTTP. Esta función se ejecuta cada vez que llega una petición.
const server = http.createServer(async (req, res) => {
  // Obtenemos la URL completa de la petición (incluye ruta y parámetros).
  const url = new URL(req.url, `http://localhost:${PORT}`);
  // Extraemos solo la ruta (por ejemplo, '/api/usuarios').
  const pathname = url.pathname;

  // --- Manejo de CORS y preflight ---
  // Si el método es OPTIONS, significa que el navegador está comprobando permisos CORS.
  if (req.method === "OPTIONS") {
    // Respondemos con 204 (sin contenido) y los encabezados CORS.
    res.writeHead(204, HEADERS);
    res.end();
    return; // Terminamos la función aquí.
  }

  // --- Rutas GET ---
  // Si la petición es GET y la ruta es '/api/usuarios', devolvemos la lista de usuarios.
  if (req.method === "GET" && pathname === "/api/usuarios") {
    enviarJSON(res, 200, usuarios); // 200 OK
    return;
  }

  // Si la petición es GET y la ruta es '/api/tareas', devolvemos la lista de tareas.
  if (req.method === "GET" && pathname === "/api/tareas") {
    enviarJSON(res, 200, tareas); // 200 OK
    return;
  }

  // --- Rutas POST ---
  // Si la petición es POST y la ruta es '/api/usuarios', creamos un nuevo usuario.
  if (req.method === "POST" && pathname === "/api/usuarios") {
    // Esperamos a leer el cuerpo de la petición (JSON con los datos del usuario).
    const datos = await leerBody(req);
    // Creamos el nuevo usuario con un id autoincremental.
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: datos.nombre || "Sin nombre", // Si no se envía nombre, usamos un valor por defecto.
      ciudad: datos.ciudad || "Desconocida"
    };
    usuarios.push(nuevoUsuario); // Añadimos el usuario al arreglo.
    enviarJSON(res, 201, nuevoUsuario); // 201 Created
    return;
  }

  // Si la petición es POST y la ruta es '/api/tareas', creamos una nueva tarea.
  if (req.method === "POST" && pathname === "/api/tareas") {
    // Esperamos a leer el cuerpo de la petición (JSON con los datos de la tarea).
    const datos = await leerBody(req);
    // Creamos la nueva tarea con un id autoincremental.
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo: datos.titulo || "Tarea sin título", // Si no se envía título, usamos un valor por defecto.
      completada: Boolean(datos.completada) // Convertimos a booleano por si viene como string o número.
    };
    tareas.push(nuevaTarea); // Añadimos la tarea al arreglo.
    enviarJSON(res, 201, nuevaTarea); // 201 Created
    return;
  }

  // --- Ruta no encontrada ---
  // Si ninguna de las rutas anteriores coincide, devolvemos un error 404.
  enviarJSON(res, 404, { mensaje: "Ruta no encontrada" });
});


// Iniciamos el servidor y escuchamos en el puerto definido.
server.listen(PORT, () => {
  // Mostramos en consola la URL y las rutas disponibles para que el usuario sepa cómo probar la API.
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log("Rutas disponibles:");
  console.log("GET  /api/usuarios");
  console.log("GET  /api/tareas");
  console.log("POST /api/usuarios");
  console.log("POST /api/tareas");
});


/*
  Explicación detallada:
  - Este archivo implementa un servidor HTTP básico usando Node.js, ideal para aprender cómo funcionan las APIs REST.
  - Se usan arreglos en memoria para simular una base de datos de usuarios y tareas.
  - El servidor responde a rutas GET y POST, permitiendo consultar y agregar datos.
  - Incluye soporte CORS para que puedas consumir la API desde el navegador (por ejemplo, usando fetch en cliente.html).
  - La función leerBody permite recibir datos en formato JSON en las peticiones POST.
  - enviarJSON centraliza el envío de respuestas, asegurando que siempre se usen los mismos encabezados y formato.
  - Cada bloque y línea tiene comentarios para que puedas entender el propósito de cada parte del código.
  - Puedes probar la API con herramientas como Postman, curl o desde el navegador usando el archivo cliente.html.
  - Este ejemplo es ideal para practicar depuración: pon breakpoints, inspecciona variables y sigue el flujo de ejecución paso a paso.
*/