---
title: 'TypeScript 101'
date: '2023-02-12'
post_description: 'Una introducción práctica a TypeScript: qué es, por qué existe, y cómo usarlo con librerías de JavaScript como Express. El blog que me hubiera gustado leer al empezar.'
post_image_header: '/blogs/typescript-101/typescript.jpg'
og_image: '/blogs/typescript-101/og.png'
post_image_alt: 'Logo de TypeScript'
---

# TypeScript 101

Hey, entraste al blog, ¡qué genial!

Estoy seguro de que ya sabes qué es TypeScript, o por lo menos alguna vez has escuchado hablar de este lenguaje. Yo también había escuchado hablar de él — y mucho — pero no tenía claros algunos conceptos, así que escribiré el blog que me hubiera gustado leer sobre las bases de TypeScript. Como dijo un sabio: `¡iniciemos por el principio!`

TypeScript, en simples palabras, es una versión mejorada y más avanzada de JavaScript. Esto es porque es un `superset` de JavaScript: le agrega características adicionales, algunas de ellas son:

- Tipado estático
- Tipos de datos
- Interfaces
- Argumentos con tipos
- Tipos de retorno en las funciones
- Y mucho, pero mucho más… (hablaré de ello en los siguientes posts)

Fue creado por Microsoft en 2012 y salió como proyecto open source. Desde entonces su popularidad ha ido en aumento, y con claras razones: fue creado con el objetivo principal de hacernos la vida más sencilla a los programadores, mejorando la productividad y la calidad del código. Gracias a sus características podemos escribir código más legible, confiable y mantenible, ya que detectamos errores desde el momento en que escribimos, gracias a su tipado estático.

Otro motivo por el que se ha vuelto tan popular es que JavaScript ya era popular, y TypeScript nos da la ventaja de poder usar todas las herramientas y librerías que ya existen en JavaScript.

Pero basta de tanta plática y mejor miremos un ejemplo de por qué TypeScript aumenta la productividad de los programadores 🧑‍💻

# Práctica

Imaginemos que estamos desarrollando una calculadora para nuestro teléfono y necesitamos una función que sume números. Si lo hiciéramos con JavaScript, nos quedaría algo así:

```js
function sumTwoNumbers(a, b) {
    return a + b;
}

sumTwoNumbers(1, 3) // Return -> 4
```

Genial 🙌, ya tenemos una función para nuestra calculadora. Si le pasamos 1 y 3 nos retorna 4, ¡funciona tal cual lo imaginamos! ¿O no?…

¿Pero qué tal si un usuario decide pasarle cosas que no son números? ¿Qué pasaría si le pasaran un `"Hello"` y un `" World"`? La función se llama sumTwoNumbers 🤔

```js
function sumTwoNumbers(a, b) {
    return a + b;
}

sumTwoNumbers("Hello", " World") // Return -> "Hello World"
```

Si la función se llama `sumTwoNumbers`, no tiene sentido que le pasemos dos strings, ¿no? Pues esto no lo puede validar JavaScript mientras desarrollamos. Aquí es cuando entra en acción TypeScript.

Si quisiéramos hacer la misma función pero en TypeScript, con validación de datos, nos quedaría así:

```typescript
function sumTwoNumbers(a: number, b: number): number {
    return a + b;
}
```

Muy similar, pero empezamos a ver ciertas diferencias, ¿no? Si te fijas, al lado de los parámetros estamos poniendo dos puntos `:` y `number`. Esto, amigos, es el tipado estático. Es un poquito más de código, y te preguntarás ¿para qué sirve ese pedazo de código extra?

Pues sirve para lo siguiente:

![Error de tipos en TypeScript](/blogs/typescript-101/stringTs.gif)

Si te fijas, en este caso estamos intentando pasar de nuevo el `"Hello World"` y nos da un error: nos dice que no podemos ejecutar la función porque espera explícitamente dos parámetros de tipo `number`. Bueno, cambiemos los tipos para tener nuestro "hello world":

![Error en el tipo de retorno](/blogs/typescript-101/stringTs%201.gif)

Oh oh, ¿qué hicimos mal? 👎

Pues resulta que, si nos fijamos bien, al final del último paréntesis hay otros dos puntos: en TypeScript también podemos declarar explícitamente de qué tipo será el retorno de la función. En este caso le estamos diciendo que el retorno es un `number`, pero al sumar dos strings nos dará otro string.

En la parte de TypeScript escribimos un poquito más de código que en JavaScript, pero eso extra nos ayuda muchísimo a encontrar este tipo de errores que vimos en los gifs — errores que muchas veces cometemos y de los que nos damos cuenta cuando ya es muy tarde.

Este tipo de cosas son las que vuelven a TypeScript una gran herramienta: nos ayuda a que cosas tan simples como estas no se rompan. Al decirle a TypeScript que los dos parámetros son de tipo `number` y que el resultado también es `number`, estamos siendo claros con lo que esperamos. Cuando TypeScript detecta que lo que le pasamos no logrará ese resultado, nos da el error en la etapa de desarrollo — no cuando ya está en producción.

![Gif de celebración](/blogs/typescript-101/giphy.gif)

## ¿En dónde puedo usar TypeScript?

Hoy en día puedes usar TypeScript en todos los casos donde puedes usar JavaScript. Hay librerías y frameworks que ya fueron desarrollados con TypeScript y con TypeScript en mente, por ejemplo:

- **Nest.js** — [Nest.js](https://nestjs.com/) brinda una estructura clara y una serie de herramientas para construir aplicaciones web/backend con TypeScript de manera más eficiente y sencilla.
- **Angular** — [Angular](https://angular.io/) es un framework muy famoso de frontend, desarrollado por Google, que hace un gran uso de TypeScript.

En otros casos te tocará integrar TypeScript de una manera más manual, pero estoy seguro de que encontrarás mil guías para usarlo con tu framework de preferencia, ya que la comunidad se ha encargado de crear los tipados de estos frameworks y librerías.

Por ejemplo, el framework por "excelencia" de Node.js, `Express`, no fue desarrollado con TypeScript — a diferencia de `Nest.js`, que sí. Pero que no esté desarrollado en TypeScript no significa que no podamos usarlo con él.

## Para usar Express con TypeScript podríamos hacer lo siguiente:

### 1. Instalar las dependencias necesarias

```bash
npm install express
```

```bash
npm install typescript ts-node @types/express -D
```

Si has desarrollado antes con Node.js, tal vez algunos paquetes te resulten conocidos, pero si eres nuevo en TypeScript puede que dos no lo sean: `ts-node` y `@types/express`.

- **ts-node** — Es una herramienta que nos permite ejecutar código de TypeScript directamente en Node.js sin tener que compilarlo. Para desarrollo es muy útil, pero hay que tener en cuenta que no es recomendable para entornos reales y producción, ya que usa mucha memoria al compilar el código en tiempo real (más abajo te enseño cómo se compila el código para producción).
- **@types/express** — Este paquete proporciona los tipos de datos para Express. Este patrón es muy común en librerías que no fueron desarrolladas con TypeScript; muchas veces el mismo editor de código te recomienda descargar estos paquetes para poder usar tipado en librerías que no fueron escritas con TypeScript.

### 2. Crear un archivo `tsconfig.json`

En este archivo configuramos cómo se compilarán los archivos de TypeScript a JavaScript:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "./dist",
    "esModuleInterop": true
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

Se pueden configurar muchas cosas en este archivo, pero en este caso solo usamos algunas propiedades:

- **module**: el tipo de módulo que se usará en la compilación, en este caso CommonJS.
- **target**: la versión de JavaScript a la que se compilará el código, en este caso ES6.
- **outDir**: la carpeta donde irá el código compilado, en este caso `./dist`.
- **esModuleInterop**: controla cómo se importan y exportan los módulos. Al establecerlo en `true`, permite que los módulos declarados con `export =` se importen con `import ... from ...`, en lugar de tener que usar una importación por defecto.

Esas son las opciones de `compilerOptions` 🤓, pero también tenemos dos propiedades más: `include`, donde se especifican los archivos que se tomarán en cuenta para la compilación (en este caso todo lo que esté dentro de `src`), y `exclude`, que se usa para excluir 🤓 (en este caso todo lo que esté en `node_modules`).

### 3. Crear un archivo `app.ts` dentro de una carpeta `src`

Aquí empezamos a escribir nuestra aplicación con todas las ventajas de TypeScript:

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

Si te fijas, además de `express` estamos importando `{ Request, Response }` y los asignamos como tipos de los parámetros. No son tipos de datos primitivos — es decir, `res` no es un `number` o un `string`, sino de tipo `Response`. Estos tipos más complejos pueden crearse mediante interfaces o clases; en este caso `Request` y `Response` son interfaces que nos da la librería. La ventaja de usar TypeScript en frameworks como Express, que no fueron creados con TypeScript, es que tenemos mayor claridad de qué podemos hacer con cada parte del código, pues vemos de manera más sencilla a qué métodos podemos acceder con cada tipo de variable.

Por ejemplo:

![Autocompletado con Express y TypeScript](/blogs/typescript-101/express.gif)

En este caso tenemos un server escrito con TS y otro con JS. Si te fijas, la versión de TS nos indica que `enviar` no es una propiedad de `Response` y nos marca un error — algo que no sucede en la versión de JS. 🤯

### 4. Correr con TypeScript

```bash
npx ts-node app.ts
```

### 5. Compilar el código a JS

Ya que estamos usando Node.js, necesitamos compilar nuestro código a JavaScript (existen otros entornos donde no es necesario, pero en Node sí). Para compilarlo solo agregamos al `package.json` el siguiente script:

```json
{
  "scripts": {
    "build": "npx tsc"
  }
}
```

Con eso se lee la configuración que escribimos en `tsconfig.json` y se compila el código. Si vemos nuestros archivos, notaremos que la carpeta `dist` ya tiene los archivos compilados. Ahora ya podríamos correrlo de manera nativa con Node, sin usar `ts-node`, simplemente con:

```bash
node dist/app.js
```

Lo puedes correr en puro JS 🚀

Espero que te haya gustado este blog. Seguiré subiendo más cosas de TypeScript, así que quédate pendiente 👀

## Links de ayuda

- [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
