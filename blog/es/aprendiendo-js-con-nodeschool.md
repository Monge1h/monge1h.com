---
title: 'Aprendiendo JS con NodeSchool'
date: '2021-11-02'
post_description: '¿Conoces NodeSchool? Te explico cómo aprender JavaScript desde tu terminal con los workshoppers de NodeSchool, paso a paso.'
post_image_header: '/blogs/nodeschool/nodeschool.png'
og_image: '/blogs/nodeschool/og.png'
post_image_alt: 'Logo de NodeSchool'
---

# Aprendiendo JS con NodeSchool

## ¿Qué es NodeSchool?

NodeSchool es un proyecto open source llevado a cabo por voluntarios con dos objetivos: crear planes de estudio de programación de alta calidad y organizar eventos de aprendizaje comunitario.

En NodeSchool San Miguel hemos estado haciendo eventos de aprendizaje comunitario, pero la otra parte de NodeSchool también hace workshops... ¡en tu terminal! Sí, en tu terminal. Se llaman **workshoppers** y son talleres interactivos que puedes correr desde la consola. No hablemos tanto y vamos a probarlo: lo primero que necesitamos es tener instalados Node.js y npm.

NodeSchool mantiene diferentes **workshoppers**, desde aprender **JavaScript o Node** hasta Markdown y Electron. Aquí te dejo un [link](https://nodeschool.io/es/) para que los vayas a ver 👀.

En este artículo vamos a usar el workshopper de *javascripting*, que es perfecto si estás iniciando en programación. Para instalarlo usamos npm y ejecutamos el siguiente comando:

```bash
# El flag -g es para instalarlo de manera global y poder llamarlo desde la consola
npm install -g javascripting
```

Una vez instalado lo podemos llamar desde nuestra consola 😉:

```bash
javascripting
```

Y nos aparecerá lo siguiente:

![Menú de javascripting](/blogs/nodeschool/espanol.gif)

Aquí ya podemos ver los temas que abarca este **workshopper**, ¡y también podemos cambiarle el idioma!

Ahora que ya cambiamos el idioma (si lo cambiaste), elegimos qué ejercicio queremos hacer — lo ideal es hacerlos en orden. Al seleccionar uno nos aparecen las instrucciones del ejercicio.

![Instrucciones del ejercicio](/blogs/nodeschool/instrucciones.gif)

En este ejercicio nos pide crear una carpeta llamada ***javascripting*** para que todo vaya en orden. La creamos, y dentro de ella creamos un archivo llamado ***introduction.js*** (esto lo puedes hacer desde un entorno gráfico si quieres). Dentro del archivo escribimos:

```js
console.log('Hello')
```

Y luego corremos el siguiente comando para verificar nuestro ejercicio:

```bash
javascripting verify introduction.js
```

![Error en el ejercicio](/blogs/nodeschool/errorja.gif)

¡Ups! Parece que nos equivocamos. Lo bueno es que el **workshopper** nos muestra cuál es la diferencia y en qué nos pudimos haber equivocado. En nuestro caso fue un typo — nosotros escribimos:

```js
console.log('Hello')
```

Y él esperaba:

```js
console.log('hello')
```

Cambiemos eso para superar el ejercicio.

![Solución del ejercicio](/blogs/nodeschool/solucion.gif)

¡Genial, ya logramos pasar el primer ejercicio! 🎉🎉

Al terminarlo nos explica qué acabamos de hacer y por qué funcionó. ¡Ahora quedan los otros 19 ejercicios! Y si ya sabes JavaScript, recuerda que hay más tópicos en estos **workshoppers**:

![Otros workshoppers disponibles](/blogs/nodeschool/Untitled.png)

¡La aventura que quieras tomar depende de ti!

¿Ya conocías esta herramienta?
