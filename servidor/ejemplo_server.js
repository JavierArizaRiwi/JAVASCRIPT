/*
  ejemplo_server.js

  Servidor HTTP más completo en Node.js.
  Maneja GET/POST, CORS y rutas JSON para usuarios y tareas.
*/

const http = require("http");
const { StringDecoder } = require("string_decoder");

let usuarios = [
  { id: 1, nombre: "Ana", ciudad: "Madrid" },
  { id: 2, nombre: "Luis", ciudad: "Mexico" },
  { id: 3, nombre: "Marta", ciudad: "Lima" }
];

let tareas = [
  { id: 1, titulo: "Aprender JavaScript", completada: false },
  { id: 2, titulo: "Crear servidor básico", completada: true }
];

const PORT = 3000;
const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function enviarJSON(res, status, data) {
  res.writeHead(status, HEADERS);
  res.end(JSON.stringify(data));
}

function leerBody(req) {
  return new Promise((resolve) => {
    const decoder = new StringDecoder("utf-8");
    let body = "";

    req.on("data", (chunk) => {
      body += decoder.write(chunk);
    });

    req.on("end", () => {
      body += decoder.end();
      resolve(body ? JSON.parse(body) : {});
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  if (req.method === "OPTIONS") {
    res.writeHead(204, HEADERS);
    res.end();
    return;
  }

  if (req.method === "GET" && pathname === "/api/usuarios") {
    enviarJSON(res, 200, usuarios);
    return;
  }

  if (req.method === "GET" && pathname === "/api/tareas") {
    enviarJSON(res, 200, tareas);
    return;
  }

  if (req.method === "POST" && pathname === "/api/usuarios") {
    const datos = await leerBody(req);
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: datos.nombre || "Sin nombre",
      ciudad: datos.ciudad || "Desconocida"
    };
    usuarios.push(nuevoUsuario);
    enviarJSON(res, 201, nuevoUsuario);
    return;
  }

  if (req.method === "POST" && pathname === "/api/tareas") {
    const datos = await leerBody(req);
    const nuevaTarea = {
      id: tareas.length + 1,
      titulo: datos.titulo || "Tarea sin título",
      completada: Boolean(datos.completada)
    };
    tareas.push(nuevaTarea);
    enviarJSON(res, 201, nuevaTarea);
    return;
  }

  enviarJSON(res, 404, { mensaje: "Ruta no encontrada" });
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log("Rutas disponibles:");
  console.log("GET  /api/usuarios");
  console.log("GET  /api/tareas");
  console.log("POST /api/usuarios");
  console.log("POST /api/tareas");
});

/*
  Explicación:
  - El servidor ahora maneja CORS para que un cliente web pueda llamar la API.
  - readBody lee un cuerpo JSON entrante y devuelve el objeto.
  - GET muestra listas de usuarios y tareas.
  - POST permite agregar nuevos usuarios y tareas.
  - enviarJSON centraliza el formato de la respuesta.
*/