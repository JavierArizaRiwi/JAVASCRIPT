# Guía de Clase – JavaScript Intermedio

## Objetivo General

Comprender cómo JavaScript organiza información, controla el alcance de variables, reutiliza funciones, maneja procesos asíncronos y estructura aplicaciones modernas utilizando objetos, callbacks, closures, promesas, clases y modularidad.

---

# Lección 1 – Estructuras de Datos: Objetos

## Objetivo de la lección

Entender cómo representar información del mundo real utilizando objetos en JavaScript.

## ¿Qué es un objeto?

Un objeto es una colección de valores relacionados bajo una misma entidad. Es como una ficha de información donde guardas datos de algo concreto.

### Analogía

Imagina la ficha de un estudiante:
- nombre
- edad
- curso
- notas
- método para calcular promedio

Ese conjunto de datos es exactamente lo que representa un objeto.

```javascript
const estudiante = {
  nombre: "Laura",
  edad: 20,
  curso: "JavaScript",
  notas: [4.5, 3.8, 4.9],
  calcularPromedio: function () {
    const total = this.notas.reduce((suma, nota) => suma + nota, 0);
    return total / this.notas.length;
  }
};

console.log(estudiante.nombre); // Laura
console.log(estudiante.calcularPromedio()); // 4.4
```

## Propiedades

Las propiedades son los datos que tiene el objeto.

```javascript
console.log(estudiante.nombre);
console.log(estudiante.edad);
```

## Métodos

Los métodos son funciones dentro de un objeto. Actúan sobre los datos del objeto.

```javascript
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar: function () {
    console.log("El carro encendió");
  }
};

carro.arrancar();
```

## Caso real

En una tienda en línea, un producto puede ser un objeto:

```javascript
const producto = {
  nombre: "Camiseta",
  precio: 20,
  stock: 15,
  aplicarDescuento: function (porcentaje) {
    return this.precio * (1 - porcentaje / 100);
  }
};

console.log(producto.aplicarDescuento(10)); // 18
```

## Arrays de objetos

Un arreglo de objetos reúne varias entidades del mismo tipo.

```javascript
const estudiantes = [
  { nombre: "Laura", nota: 4.5 },
  { nombre: "Pedro", nota: 2.8 }
];

const aprobados = estudiantes.filter((e) => e.nota >= 3);
console.log(aprobados);
```

### Caso real

En una aplicación escolar, `estudiantes` permite buscar alumnos, ordenar por nota y calcular promedios.

---

# Lección 2 – Scope

## ¿Qué es Scope?

Scope significa alcance. Determina desde dónde puede usarse una variable o función.

### Analogía

Imagina una casa:
- Las variables globales son las llaves de la puerta principal: cualquiera que entra puede usarlas.
- Las variables locales son una llave dentro de un cajón de una habitación: solo quien está en esa habitación puede abrirla.

## Scope Global

Una variable global se declara fuera de funciones y bloques. Es visible en todo el archivo.

```javascript
const MONEDA = "COP";
const IMPUESTO = 0.19;

function calcularPrecio(precio) {
  return precio + precio * IMPUESTO;
}

function mostrarPrecio(precio) {
  console.log(`Precio en ${MONEDA}: ${calcularPrecio(precio)}`);
}

mostrarPrecio(10000); // Precio en COP: 11900
```

### Caso real

Usa variables globales para datos de configuración comunes, como un porcentaje de impuesto, la moneda del sistema o un nombre de empresa.

## Scope Local

Una variable local solo existe dentro de la función o bloque donde se declara.

```javascript
function calcularTotal(carrito) {
  let total = 0;

  for (const producto of carrito) {
    total += producto.precio * producto.cantidad;
  }

  return total;
}

console.log(calcularTotal([{ nombre: "Zapatos", precio: 50, cantidad: 2 }])); // 100
```

### Caso real

En un carrito de compras, `total` debe ser local para que otros cálculos no lo modifiquen accidentalmente.

## Scope de bloque

`let` y `const` tienen scope de bloque. Un bloque es el código dentro de `{ ... }`.

```javascript
if (true) {
  let mensaje = "Hola desde el bloque";
  console.log(mensaje);
}

// console.log(mensaje); // Error: mensaje no existe fuera del bloque
```

## `var`, `let` y `const`

- `var` tiene scope de función.
- `let` y `const` tienen scope de bloque.

```javascript
function ejemploVar() {
  if (true) {
    var valor = 10;
  }
  console.log(valor); // 10
}

function ejemploLet() {
  if (true) {
    let valor = 10;
  }
  // console.log(valor); // Error
}
```

### Buenas prácticas

- Usa `const` cuando no planeas cambiar el valor.
- Usa `let` cuando el valor cambia.
- Evita variables globales innecesarias.
- Declara variables lo más cerca posible de su uso.

---

# Lección 3 – Hoisting

## ¿Qué es Hoisting?

Hoisting es el comportamiento de JavaScript que mueve las declaraciones al inicio antes de ejecutar el código.

### Analogía

Es como si JavaScript preparara los ingredientes antes de cocinar, dejando el valor para más tarde.

## Ejemplo con `var`

```javascript
console.log(nombre);
var nombre = "Carlos";
```

Resultado:

```text
undefined
```

La declaración se eleva, pero la asignación no.

## Ejemplo con `let` y `const`

```javascript
console.log(nombre);
let nombre = "Carlos";
```

Resultado:

```text
ReferenceError
```

Con `let` y `const`, la variable no se puede usar antes de la línea donde se declara.

## Hoisting de funciones

```javascript
greet();
function greet() {
  console.log("Hola");
}
```

Esto funciona porque la función completa se eleva.

### Error común

Creer que `var` es seguro dentro de bloques. Puede provocar valores inesperados cuando el código crece.

---

# Lección 4 – Callbacks

## ¿Qué es un Callback?

Un callback es una función que se pasa como argumento a otra función para que se ejecute después.

### Analogía

Es como pedirle a alguien que te llame cuando termine una tarea: la llamada es el callback.

## Ejemplo básico

```javascript
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedirse() {
  console.log("Adiós");
}

saludar("Carlos", despedirse);
```

## Caso real

Leer datos de un servidor o esperar un evento.

```javascript
function cargarDatos(callback) {
  setTimeout(() => {
    const datos = ["Producto A", "Producto B"];
    callback(datos);
  }, 1500);
}

function mostrarProductos(productos) {
  console.log("Productos cargados:", productos);
}

cargarDatos(mostrarProductos);
```

### Problema común

Si anidas muchos callbacks, el código puede quedar difícil de leer y mantener.

---

# Lección 5 – Closures

## ¿Qué es un Closure?

Un closure ocurre cuando una función recuerda variables de su contexto exterior, incluso después de que ese contexto termine.

### Analogía

Es como una caja cerrada con notas dentro. Aunque cierres la caja, la función interior sigue teniendo acceso a las notas.

## Ejemplo

```javascript
function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    console.log(contador);
  };
}

const contar = crearContador();
contar(); // 1
contar(); // 2
contar(); // 3
```

## Caso real

Crear funciones con datos privados.

```javascript
function crearSaludo(nombre) {
  return function () {
    console.log(`Hola, ${nombre}`);
  };
}

const saludarLaura = crearSaludo("Laura");
saludarLaura(); // Hola, Laura
```

### Error común

Creer que la variable se reinicia cada vez. En realidad, el closure conserva su estado.

---

# Lección 6 – This

## ¿Qué es `this`?

`this` es una referencia al objeto que ejecuta una función.

### Analogía

Es como el "yo" de una persona: depende de quién hable.

## Ejemplo en un objeto

```javascript
const usuario = {
  nombre: "María",
  saludar: function () {
    console.log(this.nombre);
  }
};

usuario.saludar(); // María
```

## Cuando `this` cambia

```javascript
const saludar = usuario.saludar;
saludar(); // undefined o contexto global
```

## Arrow functions y `this`

Las arrow functions no tienen su propio `this`. Usan el `this` del contexto donde fueron definidas.

```javascript
const persona = {
  nombre: "Luis",
  mostrar: function () {
    const decirNombre = () => {
      console.log(this.nombre);
    };
    decirNombre();
  }
};

persona.mostrar(); // Luis
```

## Caso real

En eventos de botones, `this` puede apuntar al elemento HTML que disparó el evento.

---

# Lección 7 – Promesas

## ¿Qué es una promesa?

Una promesa representa un valor que puede llegar ahora, en el futuro o nunca.

Estados:
- pendiente (pending)
- resuelta (fulfilled)
- rechazada (rejected)

## Ejemplo

```javascript
const promesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("Proceso exitoso");
  } else {
    reject("Ocurrió un error");
  }
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
```

## Caso real

Simular una llamada a una API:

```javascript
function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Camiseta", "Pantalón"]);
    }, 1000);
  });
}

obtenerProductos()
  .then((productos) => console.log(productos))
  .catch((error) => console.log(error));
```

### Por qué usar promesas

Permiten encadenar operaciones asíncronas sin anidar demasiadas funciones.

---

# Lección 8 – Async / Await

## ¿Por qué usar async/await?

`async/await` permite escribir código asíncrono de forma más clara y parecida al código síncrono.

## Ejemplo real

```javascript
function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: "Ana" });
    }, 2000);
  });
}

async function mostrarUsuario() {
  try {
    console.log("Buscando usuario...");
    const usuario = await obtenerUsuario();
    console.log("Usuario:", usuario);
  } catch (error) {
    console.log("Error al obtener usuario:", error);
  }
}

mostrarUsuario();
```

## Comparación con promesas

```javascript
obtenerUsuario()
  .then((usuario) => console.log(usuario))
  .catch((error) => console.log(error));
```

`async/await` hace el flujo más fácil de seguir.

## Caso real

Usa `async/await` para esperar datos antes de mostrar una pantalla o continuar un cálculo.

---

# Lección 9 – Prototipos

## ¿Qué es un prototipo?

Los prototipos permiten que objetos compartan propiedades y métodos. Es la base de la herencia en JavaScript.

## Ejemplo

```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  console.log("Hola " + this.nombre);
};

const persona1 = new Persona("Carlos");
persona1.saludar();
```

## Caso real

Usa prototipos cuando quieras compartir funciones entre muchos objetos sin duplicar el código.

```javascript
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

Producto.prototype.mostrar = function () {
  console.log(`${this.nombre}: $${this.precio}`);
};
```

---

# Lección 10 – Clases

## ¿Qué es una clase?

Una clase es una forma moderna de crear objetos y herencia en JavaScript.

## Ejemplo real

```javascript
class Estudiante {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  mostrarResultado() {
    if (this.nota >= 3) {
      console.log(`${this.nombre} aprobó`);
    } else {
      console.log(`${this.nombre} reprobó`);
    }
  }
}

const estudiante1 = new Estudiante("Laura", 4.5);
estudiante1.mostrarResultado();
```

## Herencia básica

```javascript
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}

class Admin extends Usuario {
  mostrarPermiso() {
    console.log("Tiene acceso de administrador");
  }
}

const admin = new Admin("Sofía");
admin.saludar();
admin.mostrarPermiso();
```

---

# Lección 11 – Modularidad

## ¿Por qué separar en módulos?

Los módulos organizan el código en archivos pequeños y reutilizables.

## archivo: operaciones.js

```javascript
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}
```

## archivo: app.js

```javascript
import { sumar, restar } from "./operaciones.js";

console.log(sumar(5, 3));
console.log(restar(5, 3));
```

### Caso real

En un proyecto puedes tener módulos para productos, usuarios, facturación y utilidades.

---

# Proyecto Integrador

## Sistema de Gestión de Estudiantes

El sistema debe permitir:

- crear estudiantes
- guardar estudiantes en arrays
- usar objetos para representar datos
- usar callbacks para operaciones con eventos
- usar promesas para procesos asíncronos
- usar async/await para código más claro
- usar clases para definir entidades
- separar archivos en módulos para organizar el proyecto

### Funcionalidades sugeridas

- agregar un estudiante con nombre, edad y notas.
- calcular el promedio de notas.
- mostrar estudiantes aprobados y reprobados.
- buscar un estudiante por nombre.
- agrupar la lógica en archivos distintos.

---

# Recomendaciones Pedagógicas

Para cada tema seguir este orden:

1. Problema real
2. Explicación sencilla
3. Analogía
4. Código pequeño
5. Ejecución paso a paso
6. Error común
7. Ejercicio guiado
8. Mini reto