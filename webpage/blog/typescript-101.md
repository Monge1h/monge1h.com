---
title: 'TypeScript 101'
date: '2023-02-12'
post_description: 'En este blog te hablare sobre TypeScript, el superset de JavaScript. Aprende las bases, explora el ecosistema y descubre cómo utilizar TypeScript con librerías de JavaScript. ¡Hazte con el control de TypeScript con este blog!'
post_image_header: '/blogs/typescript-101/typescript.jpg'
og_image: '/blogs/typescript-101/og.png'
post_image_alt: 'typescript logo'
---
# TypeScript 101


Hey, entraste al blog que genial!

Estoy seguro que ya sabes que es TypeScript o por lo menos alguna vez haz escuchado hablar de el, yo también había escuchado hablar de ello; y mucho, pero no tenia claro algunos conceptos, así que escribiré el blog que me hubiera gustado sobre las cosas básicas de TypeScript, así que como dijo un sabio `iniciemos por el principio!` 

TypeScript en simples palabras es una versión mejorada y más avanzada de JavaScript, esto es porque es un `superset` de JavaScript, ya que le agrega características adicionales algunas de ellas son:

- Tipado estático
- Tipos de datos
- Interfaces
- Argumentos con tipos
- Tipos de retorno en las funciones
- Y mucho, pero mucho más… (hablaré de ello en los siguientes posts)

Fue creado por Microsoft en el 2012 y salió como un proyecto open source desde entonces su popularidad ha ido en aumento y con claras razones, pues fue creado con el objetivo principal de hacer la vida de nosotros, los programadores más sencilla, ya que mejora la productividad y la calidad del código esto gracias a las características que se le agrego, esto hace que podamos escribir código más legible, confiable y mantenible, ya que podemos detectar errores desde el momento en que lo escribimos gracias a su tipado estático.

Otro motivo por el que se ha vuelto muy popular es porque JavaScript ya era popular, y TypeScript nos da la ventaja de que podemos usar todas las herramientas y librerías que ya existen en JavaScript.

Pero basta de tanta platica y mejor miremos un ejemplo de porque TypeScript aumenta la productividad de los programadores 🧑‍💻

# Práctica

Imaginemos que estamos desarrollando una calculadora para nuestro teléfono y necesitamos crear una función que nos permita sumar números, si lo hiciéramos con JavaScript nos quedaría algo así:

```jsx
function sumTwoNumbers(a, b) {
    return a + b;
}

sumTwoNumbers(1,3) // Return -> 4
```

Genial 🙌, ya tenemos una función para nuestra calculadora, si le pasamos como parámetro 1 y 3 nos retorna 4, funciona tal cual lo imaginamos! o no?…

Pero que tal si un usuario decide pasarles cosas que no son números? qué pasaría si le pasaran un “Hello”, “ World”, la función se llama sumTwoNumbers 🤔

```js
function sumTwoNumbers(a, b) {
    return a + b;
}

sumTwoNumbers("Hello"," World") // Return -> "Hello World"
```

Si la función se llama `sumTwoNumbers` no tiene sentido que le pasemos dos strings, no? Pues esto no lo puede validar JavaScript cuando lo estamos desarrollando, es aquí cuando entra en acción TypeScript.

Si quisiéramos hacer la misma función pero en TypeScript con validación de datos nos quedaría algo así:

```typescript
function sumTwoNumbers(a: number, b: number): number {
    return a + b;
}
```

Muy similar pero empezamos a ver ciertas diferencias, no? Si te fijas en este caso al lado de los parámetros estamos poniendo dos puntos “:” y *_`number`_*, esto amigos, es el tipado de estático, es un poquito más de código, y te preguntarás para qué sirve ese pedazo de código extra?

Pues sirve para lo siguiente:

![stringTs.gif](/blogs/typescript-101/stringTs.gif)

Si te fijas en este caso estamos intentando poner de nuevo el “Hello World” y nos da un error, nos dice que no podríamos ejecutar la función porque la función está esperando explícitamente dos parámetros de tipo `number` , bueno cambiemos los tipos para que tengamos nuestro “hello world”

![stringTs.gif](/blogs/typescript-101/stringTs%201.gif)

Oh oh, qué hicimos mal? 👎 

Pues resulta que si nos fijamos bien al final del último paréntesis hay otros dos puntos, y esto es que en TypeScript también podemos declarar explícitamente de qué tipo será el return que se hará, en este caso le estamos diciendo que el return de la función es un `number` pero al sumar dos strings nos dará otro string.

Si te fijas en la parte de TypeScript escribimos un poquito más de código que en JavaScript, pero esto que escribimos extra nos ayuda mucho a encontrar este tipo de errores que vimos reflejados en los gifs, que muchas veces cometemos y nos damos cuenta hasta que ya es muy tarde.

Este tipo de cosas son las que vuelven a TypeScript una gran herramienta para los desarrolladores pues nos ayuda a que cosas tan simples como estas no se rompan, pues siendo claros todo se entiende, en este caso siendo claro con TypeScript al decirle que los dos parámetros son de tipo `number` que el resultado de la función también es de tipo `number` estamos siendo claro con lo que esperamos, y al darse cuenta TypeScript que lo que le estamos pasando no lograra ese resultado nos dará ese tipo de errores, haciéndolos notar en etapas de desarrollo y no hasta que esté en producción.

![giphy.gif](/blogs/typescript-101/giphy.gif)

## ¿En dónde puedo usar TypeScript?

Pues hoy en día puedes hacer uso de TypeScript en todos los casos en los que puedes usar JavaScript, hay algunas librerías y frameworks que ya fueron desarrollados con TypeScript y con el uso de TypeScript en mente, algunos de estos frameworks son:

- Nest js
    - [Nest.js](https://nestjs.com/) brinda una estructura clara y una serie de herramientas para ayudarte a construir aplicaciones web/backend con TypeScript de manera más eficiente y sencilla.
- Angular
    - [Angular](https://angular.io/) es un framework muy famoso de frontend, fue desarrollado por Google y hace un gran uso de TypeScript

En otros casos te tocará implementar  TypeScript de una manera más manual, pero estoy seguro que si deseas hacerlo encontrarás mil guías para usarlo con tu framework de preferencia, ya que la comunidad se ha encargado de hacer los tipados de estos frameworks y librerías.

Por ejemplo el framework por “excelencia” de node js `Express Js` no fue desarrollado con TypeScript, a diferencia de `Nest Js` que sí fue desarrollado con TypeScript, pero que no esté desarrollado en TypeScript no hace que no lo podamos usar con el.

## Para usar `Express Js` con TypeScript podríamos hacer lo siguiente:

### 1. Instalar las dependencias necesarias

```bash
npm install express
```

```bash
npm install typescript ts-node @types/express -D
```

Si has desarrollado anteriormente con node js tal vez se te hacen muy conocidos algunos paquetes pero si eres nuevo en TypeScript puede ser que dos no sean tan conocidos para ti me refiero a `ts-node` y `@types/express`

- ts-node
    - Es una herramienta que nos permite ejecutar código de Typescript directamente en node js, sin tener que compilarlo, para el desarrollo es muy útil, pero tenemos que tener en cuenta que no es recomendado usarlo para entornos reales y producción ya que esta herramienta usa mucha memoria debido a que compila en tiempo real el código (después te enseño como se compila el código para usarlo a producción)
- @types/express
    - Este paquete proporciona tipos de datos para el framework Express js, es muy común este patrón en librerías que no fueron desarrolladas con TypeScript, muchas veces el mismo editor de código te recomienda que descargues estos paquetes para poder hacer uso de tipado de datos en aplicaciones que no fueron desarrolladas con TypeScript

### 2. Crear un archivo `tsconfig.json` en este archivo lo que hacemos es configurar como se compilaran los archivos de TypeScript a JavaScript

```jsx
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "./dist",
	"esModuleInterop": true,
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

Se puede configurar muchas cosas en este archivo, pero en este caso solo estamos haciendo uso de algunas propiedades:

- module: le indicamos el tipo de módulo que se usará para la compilación, en este caso Common Js
- target: Esta es la versión a la que se compilara el código, ya que como mostramos arriba el código al final se compila a JavaScript, en este caso se compilara a JavaScript ES^
- outDir: Este parámetro se usa para indicar en qué carpeta se irá el código que se compile, en este caso se ira para “./dist”
- esModuleInterop: es una opción de configuración de TypeScript que se usa para controlar cómo se importan y exportan los módulos, cuando se establece en true, permite que los módulos que están declarados con export = se importen como si fueran módulos normales con import ... from ..., en lugar de tener que usar una importación por defecto..

Esas son las opciones de `compilerOptions` que son las opciones de compilación 🤓, pero también tenemos dos propiedades más, `include` que en esta parte se especifica los archivos que se tomarán en cuenta para la compilación, en este caso todas las subcarpetas de “src”; también esta el `exclude` que se usa para excluir 🤓, en este caso todo lo que esté en `node_modules`

### 3. Crear un archivo `app.ts` dentro de una carpeta `src` para empezar a escribir nuestra aplicación con todas las ventajas de TypeScript

```ts
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

Si te fijas en este caso además de `express` estamos importando `{ Request, Response }` y luego se lo asignamos como tipos los parámetros, si te fijas no son tipos de datos primitivos, es decir `"res"` no es un `"number"` o un `"string"` si no que es de tipo `"Response"` estos tipos son tipos más complejos, pueden ser creados mediante interfaces o clases, en este caso `"Request"` y `"Response"` son interfaces que nos da la librería, la ventaja de usar TypeScript en frameworks como `Express js` que no fueron creados con TypeScript, es que tenemos mayor claridad de que podemos hacer con ciertas partes del código, pues podemos ver de una manera más sencilla a qué métodos podemos acceder con cada tipo de variable:

Por ejemplo:

![stringTs.gif](/blogs/typescript-101/express.gif)

En este caso tenemos un server que lo estamos escribiendo con Ts y otro con Js, si te fijas en la versión de Ts nos indica que `"enviar"` no es una propiedad de Response y nos marca un error, eso es algo que no sucede en la versión de Js. 🤯

### 4. Correr con TypeScript

```bash
npx ts-node app.ts
```

### 5. Compilar el código a JS

Ya que estamos usando Node js necesitamos compilar nuestro código a JavaScript, existen otros entornos donde no es necesario compilar el códigos de TypeScript a JavaScript, pero en node es necesario, para compilarlo solo agregamos a el package json el siguiente script:

```jsx
{
  "scripts": {
    "build": "npx tsc"
  }
}
```

Con eso hacemos que se lea la configuración que escribimos en `tsconfig.json` y nos compile el código, ahora si vemos nuestros archivos notaremos que ya la carpeta .dist tiene los archivos compilados, ahora ya podríamos correrlo de manera nativa con node sin tener que usar `ts-node`

simplemente con un 

```bash
node dist/app.js
```

Lo puedes correr en puro Js 🚀

Espero que te haya gustado este blog, seguiré subiendo sobre más cosas de TypeScript, así que quédate pendiente 👀

## Links de ayuda:

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)
