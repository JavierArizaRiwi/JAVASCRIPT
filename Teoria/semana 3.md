# Guía de Clase – DOM, Eventos y Persistencia de Datos

## Objetivo General

Comprender cómo JavaScript interactúa con el HTML mediante el DOM, manipula elementos, responde a eventos del usuario y almacena información en el navegador usando LocalStorage y SessionStorage.

---

# Lección 1 – ¿Qué es el DOM?

## Objetivo de la lección

Entender cómo el navegador interpreta una página web y cómo acceder a los elementos HTML desde JavaScript.

## ¿Qué es el DOM?

El DOM (Document Object Model) es la estructura en memoria que crea el navegador a partir del HTML. Cada etiqueta se convierte en un objeto que JavaScript puede manipular.

### Analogía

Imagina que el HTML es el plano de una casa. El DOM es la casa ya construida, con habitaciones (divs), puertas (botones), ventanas (inputs), etc. JavaScript puede entrar y cambiar colores, mover muebles, abrir puertas, etc.

### Visualización

```text
document
 └── html
               ├── head
               └── body
                          ├── h1
                          ├── p
                          └── div
```

---

# Lección 2 – Manipulación del DOM

## Objetivo de la lección

Aprender a seleccionar, modificar, crear y eliminar elementos HTML usando JavaScript.


## Seleccionar elementos del DOM

JavaScript ofrece varias formas de seleccionar elementos HTML. Es fundamental conocerlas para manipular cualquier parte de la página.

### Por ID
```javascript
const titulo = document.getElementById('titulo'); // Un solo elemento
```

### Por clase
```javascript
const destacados = document.getElementsByClassName('destacado'); // HTMLCollection
// Recorrer todos los elementos con esa clase
for (const el of destacados) {
     el.style.fontWeight = 'bold';
}
```

### Por etiqueta
```javascript
const parrafos = document.getElementsByTagName('p'); // HTMLCollection
```

### Selectores avanzados (CSS)
```javascript
const primerParrafo = document.querySelector('p'); // Primer <p>
const todosLosParrafos = document.querySelectorAll('p'); // NodeList de todos los <p>
const itemsActivos = document.querySelectorAll('ul li.activo');
```

### Caso real
Seleccionar todos los botones de una lista y agregarles un evento:
```javascript
const botones = document.querySelectorAll('.btn-eliminar');
botones.forEach(btn => {
     btn.addEventListener('click', function() {
          // ...
     });
});
```


## Modificar contenido, atributos y estilos

### Cambiar texto y HTML
```javascript
titulo.textContent = 'Nuevo título'; // Solo texto
parrafo.innerHTML = '<strong>Texto en negrita</strong>'; // Permite HTML
```

### Cambiar atributos
```javascript
const imagen = document.getElementById('foto');
imagen.setAttribute('alt', 'Foto de perfil');
imagen.src = 'nueva-imagen.jpg';
```

### Cambiar clases
```javascript
parrafo.classList.add('importante');
parrafo.classList.remove('oculto');
parrafo.classList.toggle('resaltado');
```

### Cambiar estilos
```javascript
parrafo.style.color = 'blue';
parrafo.style.backgroundColor = 'yellow';
```

### Cambiar valores de inputs
```javascript
const input = document.getElementById('nombre');
input.value = 'Ana';
```


## Crear, insertar y eliminar elementos

### Crear un elemento
```javascript
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un div nuevo';
```

### Insertar elementos
```javascript
// Al final de un contenedor
document.body.appendChild(nuevoDiv);
// Antes de otro elemento
const referencia = document.getElementById('referencia');
document.body.insertBefore(nuevoDiv, referencia);
```

### Eliminar elementos
```javascript
parrafo.remove(); // Elimina el elemento del DOM
// O desde el padre
document.body.removeChild(nuevoDiv);
```

### Reemplazar elementos
```javascript
const nuevoTitulo = document.createElement('h2');
nuevoTitulo.textContent = 'Título nuevo';
document.body.replaceChild(nuevoTitulo, titulo);
```


### Caso real
En una lista de tareas, puedes crear un nuevo `<li>` cada vez que el usuario agrega una tarea y eliminarlo cuando la completa:
```javascript
const lista = document.getElementById('tareas');
const nuevaTarea = document.createElement('li');
nuevaTarea.textContent = 'Aprender DOM';
lista.appendChild(nuevaTarea);
// Para eliminar:
lista.removeChild(nuevaTarea);
```

---


# Lección 3 – Eventos del DOM

## ¿Qué es un evento?

Un evento es cualquier acción que ocurre en la página: un clic, escribir en un input, mover el mouse, etc.

### Analogía
Un evento es como un timbre: cuando alguien lo toca (clic), ocurre algo (suena o se ejecuta una función).

## Tipos de eventos comunes
- click: cuando se hace clic en un elemento
- input: cuando el usuario escribe en un input
- change: cuando cambia el valor de un input/select
- submit: cuando se envía un formulario
- mouseover/mouseout: cuando el mouse entra/sale de un elemento
- keydown/keyup: cuando se presiona/levanta una tecla

## Escuchar eventos
```javascript
const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
     alert('¡Hiciste clic!');
});
```

## Delegación de eventos
Permite escuchar eventos en elementos dinámicos usando el padre:
```javascript
document.getElementById('lista').addEventListener('click', function(e) {
     if (e.target.tagName === 'LI') {
          alert('Clic en: ' + e.target.textContent);
     }
});
```

## Modificar propiedades desde eventos
```javascript
const input = document.getElementById('nombre');
input.addEventListener('input', function() {
     input.style.backgroundColor = 'yellow';
});
```

## Ejemplo real
```html
<button id="sumar">Sumar</button>
<span id="resultado">0</span>
<script>
let contador = 0;
document.getElementById('sumar').addEventListener('click', function() {
     contador++;
     document.getElementById('resultado').textContent = contador;
});
</script>
```

---


# Lección 4 – Recorrido y navegación del DOM

## Objetivo
Aprender a navegar entre los nodos del DOM (padre, hijos, hermanos, etc).

## Propiedades útiles
- parentElement: padre
- children: hijos
- firstElementChild / lastElementChild
- nextElementSibling / previousElementSibling

## Ejemplo
```html
<ul id="lista">
     <li>Uno</li>
     <li>Dos</li>
     <li>Tres</li>
</ul>
<script>
const lista = document.getElementById('lista');
// Primer hijo
console.log(lista.firstElementChild.textContent); // Uno
// Último hijo
console.log(lista.lastElementChild.textContent); // Tres
// Todos los hijos
for (const item of lista.children) {
     console.log(item.textContent);
}
// Hermano siguiente
console.log(lista.children[0].nextElementSibling.textContent); // Dos
// Padre
console.log(lista.parentElement.tagName); // BODY
</script>
```

---


# Lección 5 – Persistencia de datos: localStorage y sessionStorage

## ¿Qué es la persistencia en el navegador?

Permite guardar información en el navegador para que no se pierda al recargar la página (localStorage) o mientras la pestaña esté abierta (sessionStorage).

### Analogía

localStorage es como una caja fuerte: lo que guardas ahí sigue aunque cierres el navegador.
sessionStorage es como una mochila: solo dura mientras la pestaña está abierta.

## Ejemplo básico

```javascript
// Guardar un dato
localStorage.setItem('usuario', 'Ana');
// Leer un dato
const usuario = localStorage.getItem('usuario');
console.log(usuario); // Ana
// Eliminar un dato
localStorage.removeItem('usuario');
```

## Caso real

Guardar el carrito de compras de un usuario para que no se pierda si recarga la página:

```javascript
const carrito = [
     { producto: 'Zapatos', cantidad: 2 },
     { producto: 'Camisa', cantidad: 1 }
];
localStorage.setItem('carrito', JSON.stringify(carrito));

// Al recargar la página
const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
console.log(carritoGuardado);
```

---

# Buenas prácticas

- Usa selectores específicos para evitar errores (id, clases).
- Limpia los listeners de eventos si ya no se usan.
- No guardes datos sensibles en localStorage.
- Usa JSON.stringify y JSON.parse para guardar/leer objetos.

---

# Resumen

El DOM es la estructura viva de tu página. JavaScript te permite modificarla, responder a eventos y guardar información para mejorar la experiencia del usuario. Dominar estos conceptos es clave para crear aplicaciones web interactivas y modernas.