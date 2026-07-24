---
title: '¿Cómo crear una extensión para Google Chrome?'
date: '2022-02-18'
post_description: 'Aprende a crear tu primera extensión para Google Chrome desde cero: manifest, popups y content scripts, construyendo una extensión que rota videos de YouTube.'
post_image_header: '/blogs/extension/chrome.png'
og_image: '/blogs/extension/og.png'
post_image_alt: 'Logo de Google Chrome'
---

# ¿Cómo crear una extensión para Google Chrome?

En este artículo te enseñaré a hacer una extensión de Chrome. Antes de empezar con el tutorial tenemos que tener claro qué es una extensión. Según la documentación, las extensiones de Chrome son software desarrollado con tecnologías web que permite al usuario personalizar su experiencia en el navegador.

> Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.

Así que haremos exactamente eso: interactuar con nuestra experiencia en el navegador. Específicamente, haremos que un video de YouTube rote de posición.

## Demo

![Demo de la extensión rotando un video](/blogs/extension/video_mirror.gif)

Video: [https://www.youtube.com/watch?v=m3BU4MhgNwo](https://www.youtube.com/watch?v=m3BU4MhgNwo)

## Componentes de una extensión de Chrome

- **manifest.json** — Es el archivo principal de una extensión: en él le decimos a Chrome qué archivos va a cargar, qué permisos tendrá la extensión sobre el navegador y los datos generales de la extensión.
- **popup.html** — Aquí definimos lo que se renderiza cuando le damos clic a nuestra extensión.
- **popup.js** — Aquí va la lógica para interactuar con nuestro popup.html.
- **content scripts** — Son los archivos que pueden interactuar con el DOM de la pestaña activa del navegador.
- **background scripts** — Tienen acceso a todas las APIs de Chrome y pueden correr en segundo plano mientras exista la extensión. Sirven, por ejemplo, para detectar cuándo el usuario entra a cierta página o para guardar preferencias.

## Iniciamos con el tutorial

En nuestra extensión usaremos popups y content scripts, pues solo necesitamos interactuar con el DOM de la extensión y con el DOM de la página activa, que en este caso será YouTube.

### manifest.json

Lo primero es crear el archivo `manifest.json`, que quedaría de la siguiente manera:

```json
{
  "manifest_version": 3,
  "name": "yt-video-mirror",
  "description": "Chrome extension that rotates yt videos 180 degrees",
  "version": "1.0",
  "permissions": ["tabs"],
  "action": {
    "default_popup": "popup.html"
  }
}
```

Como expliqué antes, en el `manifest.json` ponemos los permisos y los datos generales de la extensión: el nombre, la descripción, la versión. En `permissions` va un arreglo con las cosas a las que queremos que nuestra extensión tenga acceso — en este caso solo las `tabs` — y le indicamos cuál será el popup.

### Instalar la extensión en Chrome

Una vez que tenemos el `manifest.json` ya podemos instalar la extensión en nuestro navegador:

- Primero vamos al administrador de extensiones

![Abrir el administrador de extensiones](/blogs/extension/instalacion.gif)

- Luego cargamos nuestra extensión

![Cargar extensión sin empaquetar](/blogs/extension/Untitled.png)

Y seleccionamos la carpeta donde está nuestro `manifest.json`:

![Seleccionar la carpeta de la extensión](/blogs/extension/Untitled%201.png)

Ahora ya aparece entre nuestras extensiones:

![Extensión instalada](/blogs/extension/Untitled%202.png)

Para que aparezca junto a las otras extensiones tenemos que fijarla en la barra:

![Fijar la extensión en la barra](/blogs/extension/popup.gif)

Pero al darle clic vemos que da un error. Esto se debe a que en el `manifest.json` le indicamos que iba a renderizar un archivo llamado `popup.html`... ¡que todavía no hemos creado! Así que hagamos eso.

### popup.html

En este archivo creamos el HTML que se renderiza al hacer clic en la extensión. Un simple botón nos sirve, así que el `popup.html` quedaría así:

```html
<!DOCTYPE html>
<head>
  <style>
    body {
      width: 80px;
      text-align: center;
    }
    input {
      height: 20px;
      width: 50px;
      outline: none;
    }
    label {
      width: 50px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <button id="rotateVideoButton">Rotate video</button>
  <script src="./popup.js"></script>
</body>
</html>
```

Si te fijas, nuestro `popup.html` hace referencia a `popup.js`, así que también lo creamos:

```js
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click', rotate)

function rotate() {
  alert('Hi')
}
```

Lo que hacemos es buscar el botón y agregarle un listener para que al hacer clic se dispare una alerta. Pero vamos a notar algo: las alertas de nuestro botón son diferentes a las alertas que podemos lanzar desde la consola del navegador.

![Diferencia entre alertas](/blogs/extension/alert.gif)

Esto se debe a que todo lo que hagamos desde `popup.js` opera sobre el DOM del `popup.html`, y eso no nos sirve: queremos interactuar con el DOM de la página de YouTube para rotar los videos. Para estas tareas existen los **content scripts**, que comunican la extensión con el DOM de la pestaña activa. Así que creemos el nuestro.

### Content scripts

Para usar content scripts necesitamos declararlos en el `manifest.json`, que quedaría así:

```json
{
  "manifest_version": 3,
  "name": "yt-video-mirror",
  "description": "Chrome extension that rotates yt videos 180 degrees",
  "version": "1.0",
  "permissions": ["tabs"],
  "action": {
    "default_popup": "popup.html"
  },
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*"],
      "js": ["contentScript.js"]
    }
  ]
}
```

Agregamos la propiedad `content_scripts`: un arreglo de objetos donde cada uno indica en qué URLs funcionará el content script y qué archivo lo implementa. Con el manifest modificado, podemos crear el content script.

Los content scripts y el `popup.js` se comunican mediante mensajes. En nuestro `contentScript.js` creamos una función que quede pendiente de un mensaje usando las APIs internas de Chrome:

```js
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message) {
  if (message.action == 'alert') {
    alert('Hi!')
  }
}
```

Con esto, `contentScript.js` queda a la espera de mensajes: si en el objeto del mensaje la propiedad `action` es `alert`, lanza una alerta. Ahora enviemos ese mensaje desde `popup.js` cuando presionemos el botón:

```js
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click', rotate)

function rotate() {
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTab)

  function gotTab(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'alert' })
  }
}
```

Obtenemos las pestañas activas — Chrome nos regresa la actual en la posición 0 — y a esa pestaña le mandamos el mensaje con `action: "alert"` para que genere la alerta, pero ahora desde el DOM de la página, no desde el del popup.

![Alerta desde el content script](/blogs/extension/alertacontent.gif)

¡Genial, la alerta ya se genera desde el DOM de la pestaña activa!

Ahora que podemos interactuar con el DOM de la pestaña activa, es momento de ver cómo darle la vuelta a los videos.

Con el inspector de elementos identificamos qué elemento necesitamos modificar:

![Inspeccionando el DOM de YouTube](/blogs/extension/html.gif)

Una vez identificado el tag, nuestro `contentScript.js` quedaría así:

```js
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message) {
  if (message.action == 'alert') {
    alert('Hi!')
  } else if (message.action == 'rotate') {
    let video = document.getElementsByClassName('html5-video-container')
    let style = video[0].getAttribute('style')
    if (!style) {
      video[0].setAttribute('style', 'transform: rotateY(180deg)')
    } else {
      video[0].removeAttribute('style')
    }
  }
}
```

Lo que hacemos es ponerle y quitarle la propiedad `style` a la etiqueta que contiene el video. Y en nuestro `popup.js` cambiamos la acción del mensaje de `alert` a `rotate`:

```js
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click', rotate)

function rotate() {
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTab)

  function gotTab(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'rotate' })
  }
}
```

¡Y logramos lo que queríamos, nuestra extensión ya funciona!

![Extensión funcionando](/blogs/extension/ezgif.com-gif-maker_(1).gif)

## Conclusión

Crear una extensión de Chrome es relativamente sencillo y hay una infinidad de cosas que se podrían construir. ¡Todo depende de tu creatividad!
