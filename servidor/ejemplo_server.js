/*
  ejemplo_server.js

  Ejemplo básico de servidor HTTP con Node.js.
  Responde a peticiones GET y sirve datos JSON.
*/

const http = require("http");

const datos = [
  { id: 1, nombre: "Ana", ciudad: "Madrid" },
  { id: 2, nombre: "Luis", ciudad: "Mexico" },
  { id: 3, nombre: "Marta", ciudad: "Lima" }
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/usuarios") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(datos));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página no encontrada");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log("Visita http://localhost:3000/api/usuarios");
});

/*
  Explicación:
  - require('http') carga el módulo de servidor de Node.
  - createServer recibe una función que maneja cada petición.
  - res.writeHead define el código de estado y los encabezados.
  - JSON.stringify convierte objetos en texto JSON.
  - server.listen pone al servidor a escuchar en un puerto.
*/