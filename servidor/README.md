# Carpeta servidor

Esta carpeta contiene ejemplos de servidor en JavaScript y una base de datos para JSON Server.

## Ejemplo con Node.js

Archivo: `ejemplo_server.js`

- Usa el módulo `http` de Node para crear un servidor.
- Controla rutas GET y POST.
- Permite agregar usuarios y tareas mediante JSON.
- Incluye soporte para CORS, lo que permite que un cliente web haga peticiones desde otro origen.

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

### Ejemplo de POST con curl

```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Carlos","ciudad":"Bogotá"}'
```

```bash
curl -X POST http://localhost:3000/api/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Crear UI","completada":false}'
```

## Ejemplo con JSON Server

Archivo de datos: `db.json`

JSON Server crea una API REST automáticamente a partir de este archivo.

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

JSON Server es ideal para practicar APIs REST sin tener que crear una base de datos real.
