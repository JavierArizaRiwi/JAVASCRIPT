# Carpeta servidor

Esta carpeta contiene ejemplos de servidor en JavaScript y una base de datos para JSON Server.

## Ejemplo con Node.js

Archivo: `ejemplo_server.js`

- Usa el módulo `http` de Node para crear un servidor.
- Responde a `GET /api/usuarios` con datos JSON.
- Se ejecuta con:

```bash
node ejemplo_server.js
```

Luego visita:

```bash
http://localhost:3000/api/usuarios
```

## Ejemplo con JSON Server

Archivo de datos: `db.json`

JSON Server crea una API REST automáticamente a partir de este archivo.

### Pasos:

1. Instala JSON Server globalmente (si aún no lo tienes):

```bash
npm install -g json-server
```

2. Entra en la carpeta `servidor` y arranca el servidor:

```bash
json-server --watch db.json --port 3001
```

3. Prueba estas rutas en tu navegador o con `curl`:

```bash
http://localhost:3001/usuarios
http://localhost:3001/tareas
```

### Qué puedes hacer con JSON Server

- `GET /usuarios` para leer todos los usuarios.
- `GET /usuarios/1` para leer un usuario.
- `POST /usuarios` para crear un nuevo usuario.
- `PUT /usuarios/1` para actualizar un usuario.
- `DELETE /usuarios/1` para borrar un usuario.

JSON Server es ideal para practicar APIs REST sin tener que programar una base de datos completa.
