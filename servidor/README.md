# Carpeta servidor

Esta carpeta contiene ejemplos para aprender a crear y consumir una API con JavaScript.

## Contenido

- `ejemplo_server.js`: servidor básico en Node.js con rutas `GET` y `POST`.
- `cliente.html`: cliente web que consume la API usando `fetch`.
- `cliente.js`: código del cliente que muestra y crea usuarios y tareas.
- `db.json`: datos de ejemplo que puedes usar con JSON Server.

## Servidor Node.js

### Cómo ejecutar

```bash
cd servidor
node ejemplo_server.js
```

### Rutas disponibles

- `GET /api/usuarios`
- `GET /api/tareas`
- `POST /api/usuarios`
- `POST /api/tareas`

### Probar el cliente web

Después de iniciar el servidor, abre `servidor/cliente.html` en el navegador y prueba las opciones:

- Cargar usuarios
- Cargar tareas
- Crear un usuario
- Crear una tarea

## Ejemplo con JSON Server

Si quieres practicar una API REST sin escribir el servidor, usa `db.json` con JSON Server.

### Instalación

```bash
npm install -g json-server
```

### Cómo ejecutar

```bash
cd servidor
json-server --watch db.json --port 3001
```

### Rutas de JSON Server

- `GET /usuarios`
- `GET /usuarios/1`
- `POST /usuarios`
- `PUT /usuarios/1`
- `DELETE /usuarios/1`
- `GET /tareas`
- `GET /tareas/1`
- `POST /tareas`
- `PUT /tareas/1`
- `DELETE /tareas/1`

JSON Server es útil para practicar APIs REST sin configurar bases de datos complejas.

