# Guía de Clase – JavaScript Intermedio

## Objetivo General

Comprender cómo JavaScript organiza información, controla el alcance de variables, reutiliza funciones, maneja procesos asíncronos y estructura aplicaciones modernas utilizando objetos, callbacks, closures, promesas, clases y modularidad.

---

# Lección 1 – Estructuras de Datos: Objetos

## Objetivo de la lección

Entender cómo representar información del mundo real utilizando objetos en JavaScript.

---

# ¿Qué es un objeto?

Un objeto es una estructura que permite guardar información relacionada dentro de una misma entidad.

Ejemplo de la vida real:

Una persona tiene:
- nombre
- edad
- correo
- teléfono

En JavaScript:

```javascript
const persona = {
  nombre: "Carlos",
  edad: 25,
  correo: "carlos@gmail.com"
};
```

---

# Propiedades

Las propiedades son los datos que guarda el objeto.

```javascript
console.log(persona.nombre);
console.log(persona.edad);
```

---

# Métodos

Los métodos son funciones dentro de un objeto.

```javascript
const carro = {
  marca: "Toyota",

  encender: function () {
    console.log("El carro encendió");
  }
};

carro.encender();
```

---

# Arrays de objetos

```javascript
const estudiantes = [
  {
    nombre: "Laura",
    nota: 4.5
  },
  {
    nombre: "Pedro",
    nota: 2.8
  }
];
```

---

# Lección 2 – Scope

## ¿Qué es Scope?

Scope significa alcance.

Determina desde dónde puede ser utilizada una variable.

---

# Scope Global

```javascript
let nombre = "Laura";

function saludar() {
  console.log(nombre);
}

saludar();
```

---

# Scope Local

```javascript
function mostrarEdad() {
  let edad = 20;
  console.log(edad);
}

mostrarEdad();
```

---

# Lección 3 – Hoisting

## ¿Qué es Hoisting?

JavaScript mueve ciertas declaraciones al inicio internamente antes de ejecutar el programa.

---

# Ejemplo con var

```javascript
console.log(nombre);

var nombre = "Carlos";
```

Resultado:

```text
undefined
```

---

# Ejemplo con let

```javascript
console.log(nombre);

let nombre = "Carlos";
```

Resultado:

```text
Error
```

---

# Lección 4 – Callbacks

## ¿Qué es un Callback?

Un callback es una función enviada como parámetro a otra función.

---

# Ejemplo Básico

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

---

# Lección 5 – Closures

## ¿Qué es un Closure?

Un closure ocurre cuando una función recuerda variables incluso después de terminar su ejecución.

---

# Ejemplo

```javascript
function crearContador() {
  let contador = 0;

  return function () {
    contador++;

    console.log(contador);
  };
}

const contar = crearContador();

contar();
contar();
contar();
```

---

# Lección 6 – This

## ¿Qué es This?

`this` representa el objeto que está ejecutando la función.

---

# Ejemplo

```javascript
const usuario = {
  nombre: "María",

  saludar: function () {
    console.log(this.nombre);
  }
};

usuario.saludar();
```

---

# Lección 7 – Promesas

## ¿Qué es una Promesa?

Una promesa representa un valor que llegará en el futuro.

---

# Ejemplo

```javascript
const promesa = new Promise((resolve, reject) => {

  let exito = true;

  if (exito) {
    resolve("Proceso exitoso");
  } else {
    reject("Ocurrió un error");
  }
});

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# Lección 8 – Async / Await

## Ejemplo

```javascript
function obtenerUsuario() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve("Usuario encontrado");
    }, 2000);

  });
}

async function mostrarUsuario() {

  console.log("Buscando usuario...");

  const resultado = await obtenerUsuario();

  console.log(resultado);
}

mostrarUsuario();
```

---

# Lección 9 – Prototipos

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

---

# Lección 10 – Clases

## Ejemplo

```javascript
class Estudiante {

  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  mostrarResultado() {

    if (this.nota >= 3) {
      console.log(this.nombre + " aprobó");
    } else {
      console.log(this.nombre + " reprobó");
    }

  }
}

const estudiante1 = new Estudiante("Laura", 4.5);

estudiante1.mostrarResultado();
```

---

# Lección 11 – Modularidad

## archivo: operaciones.js

```javascript
export function sumar(a, b) {
  return a + b;
}
```

---

## archivo: app.js

```javascript
import { sumar } from "./operaciones.js";

console.log(sumar(5, 3));
```

---

# Proyecto Integrador

## Sistema de Gestión de Estudiantes

El sistema debe permitir:

- crear estudiantes
- guardar estudiantes en arrays
- usar objetos
- usar callbacks
- usar promesas
- usar async/await
- usar clases
- separar archivos en módulos

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