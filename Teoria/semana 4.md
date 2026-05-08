# Guía de Clase – APIs, Fetch, Errores y CORS

## Objetivo General

Comprender cómo funcionan los servidores, las APIs y las peticiones HTTP, aprender a consumir información desde JavaScript utilizando Fetch API, manejar errores correctamente, entender CORS y depurar aplicaciones web modernas.

---

# Lección 1 – ¿Qué es un servidor? ¿Qué es una API?

## Objetivo de la lección

Entender cómo se comunican frontend y backend, y el rol de las APIs.

## ¿Qué es un servidor?

Un servidor es una computadora (o programa) que responde a solicitudes de otros programas (clientes), enviando datos o realizando acciones.

### Analogía

Imagina un restaurante:
- El cliente (frontend) pide comida.
- El mesero (API) lleva la orden a la cocina.
- La cocina (backend) prepara la comida y el mesero la lleva de vuelta al cliente.

## ¿Qué es una API?

Una API (Interfaz de Programación de Aplicaciones) es el "mesero" que permite que dos programas se comuniquen. En la web, una API suele ser un conjunto de URLs que puedes consultar para obtener o enviar datos.

---

# Lección 2 – Node.js y JSON Server

## Node.js

Node.js permite ejecutar JavaScript fuera del navegador, por ejemplo, para crear servidores.

## JSON Server

JSON Server es una herramienta que simula una API REST usando un archivo JSON. Ideal para practicar sin un backend real.

### Ejemplo básico

```bash
npx json-server --watch db.json --port 3000
```

Esto crea una API en http://localhost:3000 con rutas como /usuarios y /tareas.

---

# Lección 3 – Fetch API y manejo de errores


## ¿Qué es Fetch? ¿Usa promesas?

Fetch es una función moderna de JavaScript para hacer peticiones HTTP (GET, POST, etc.) a servidores o APIs. **Siempre devuelve una promesa**.

### ¿Qué es una promesa?
Una promesa es un objeto que representa un valor que estará disponible en el futuro (cuando termine la petición). Puedes usar `.then()` y `.catch()`, o `async/await`.

### Ejemplo GET con then/catch
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		if (!response.ok) throw new Error('Error HTTP: ' + response.status);
		return response.json();
	})
	.then(data => {
		console.log(data); // Muestra la lista de usuarios
	})
	.catch(error => {
		console.error('Error al obtener usuarios:', error);
	});
```

### Ejemplo GET con async/await
```javascript
async function obtenerUsuarios() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		if (!response.ok) throw new Error('Error HTTP: ' + response.status);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Error al obtener usuarios:', error);
	}
}
obtenerUsuarios();
```

### Ejemplo POST
```javascript
fetch('https://jsonplaceholder.typicode.com/users', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ nombre: 'Ana', ciudad: 'Madrid' })
})
.then(response => response.json())
.then(data => {
	console.log('Usuario creado:', data);
})
.catch(error => {
	console.error('Error al crear usuario:', error);
});
```

## Manejo de errores

Siempre usa `.catch` o try/catch para capturar errores de red o de la API. Además, revisa el status HTTP con `response.ok`.

### Ejemplo de error de red vs error HTTP
```javascript
fetch('https://url-inexistente.com')
	.then(res => {
		if (!res.ok) throw new Error('Error HTTP: ' + res.status);
		return res.json();
	})
	.catch(err => {
		// Puede ser error de red (no hay internet) o error HTTP
		console.error('Error en la petición:', err);
	});
```

---

# Lección 4 – CORS (Cross-Origin Resource Sharing)

## ¿Qué es CORS?

CORS es una política de seguridad del navegador que restringe las peticiones a dominios diferentes al de tu página.

### Analogía

Es como si solo pudieras pedir comida a restaurantes que te reconocen como cliente autorizado.

### Ejemplo de error CORS

Si intentas hacer fetch a una API que no permite tu origen, verás un error como:

```
Access to fetch at 'https://api.otrodominio.com' from origin 'http://localhost:3000' has been blocked by CORS policy
```

## Solución

El servidor debe permitir tu origen usando encabezados CORS.

---

# Lección 5 – Depuración en JavaScript

## Herramientas

- `console.log()`: para imprimir valores y seguir el flujo.
- Breakpoints: puedes pausar la ejecución en el navegador (F12 > Sources > click en el número de línea).

## Ejemplo

```javascript
function sumar(a, b) {
	console.log('a:', a, 'b:', b); // Verifica los valores
	return a + b;
}
sumar(2, 3);
```

---

# Lección 6 – Status Codes HTTP

## ¿Qué son?

Son códigos numéricos que indican el resultado de una petición HTTP.

| Código | Significado         |
|--------|---------------------|
| 200    | OK                  |
| 201    | Creado              |
| 400    | Solicitud incorrecta|
| 401    | No autorizado       |
| 404    | No encontrado       |
| 500    | Error del servidor  |

## Ejemplo

```javascript
fetch('/api/usuarios')
	.then(res => {
		if (!res.ok) {
			throw new Error('Error HTTP: ' + res.status);
		}
		return res.json();
	})
	.then(data => console.log(data))
	.catch(err => console.error(err));
```

---

# Lección 7 – CRUD con APIs

## ¿Qué es CRUD?

CRUD son las operaciones básicas sobre datos: Crear, Leer, Actualizar y Eliminar.

## Ejemplo completo

```javascript
// Crear (POST)
fetch('/api/usuarios', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ nombre: 'Luis' })
});

// Leer (GET)
fetch('/api/usuarios')
	.then(res => res.json())
	.then(data => console.log(data));

// Actualizar (PUT)
fetch('/api/usuarios/1', {
	method: 'PUT',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ nombre: 'Luis Actualizado' })
});

// Eliminar (DELETE)
fetch('/api/usuarios/1', { method: 'DELETE' });
```

---


# Buenas prácticas

- Siempre maneja los errores de fetch (usa catch o try/catch y revisa response.ok).
- Usa status codes para saber si la petición fue exitosa.
- No envíes datos sensibles por GET ni por URL.
- Usa async/await para código más legible cuando hay varias peticiones.
- Usa herramientas como Postman o Insomnia para probar APIs antes de programar.
- Documenta las rutas y los datos esperados de la API.

---

# Resumen

Las APIs y el manejo de peticiones HTTP son la base de las aplicaciones web modernas. Aprender a consumir APIs, manejar errores y entender CORS te permitirá crear aplicaciones robustas y profesionales.