---
title: "¿Cómo crear una extensión para Google Chrome?"
date: "2022-02-18"
post_description: "Aprende a crear una extensión para Google Chrome que modifique el DOM de YouTube"
post_image_header: "/blogs/extension/chrome.png"
og_image: "/blogs/extension/og.png"
post_image_alt: "thumbnail video"
---
# ¿Cómo crear una extensión para Google Chrome?


En este artículo te enseñaré a hacer una extensión de Chrome! Antes de empezar con el tutorial tenemos que tener claro que es una extensión.Según la documentación las extensiones de chrome son software que está desarrollado con tecnologías web, que permiten al usuario interactuar con la experiencia del navegador.

> Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.
> 

Así que haremos eso, interactuamos con nuestra experiencia en el navegador, específicamente con yt haremos que un video rote de posición.


## Demo:

![video: [https://www.youtube.com/watch?v=m3BU4MhgNwo](https://www.youtube.com/watch?v=m3BU4MhgNwo)](/blogs/extension/video_mirror.gif)

video: [https://www.youtube.com/watch?v=m3BU4MhgNwo](https://www.youtube.com/watch?v=m3BU4MhgNwo)


## Componentes de una extensión de chrome


- manifest.json
    - Este es el archivo principal en una extensión pues en este archivo le decimos a chrome que archivos va a cargar, qué permisos tendrá nuestra extensión sobre el navegador y datos en general de la extensión.
- popup.html
    - En este archivo hacemos lo que se renderiza cuando le demos click a nuestra extensión.
- popup.js
    - En este archivo ponemos la lógica para interactuar con nuestro popup.html.
- content_script
    - Estos archivos son los que pueden interactuar con el DOM de tab activa del navegador.
- background_script
    - Estos script tienen acceso a todas las apis de chrome, estos son scripts que pueden correr en background mientras exista la extensión, se puede usar para detectar cuando el usuario entra a cierta página o para guardar preferencias de usuarios.


## Iniciamos con el tutorial

En nuestra extensión usaremos los popups y los content script pues solo necesitamos interactuar con el dom de la extensión y con el dom de la página activa que en este caso será youtube.

### manifest.json

Así que lo primero que haremos es crear el archivo manifest.json que quedaría de la siguiente manera:

```json
{
  "manifest_version": 3,
  "name": "yt-video-mirror",
  "description": "Chrome extension that rotate yt videos 180 degrees",
  "version": "1.0",
  "permissions": ["tabs"],
  "action":{
	  "default_popup": "popup.html"
  }
}
```

Como explique anteriormente en el manifest.json ponemos los permisos y los datos en general de la extensión, ponemos el nombre, la descripción de la extensión, en que version esta, en el valor de “permissions” ponemos un arreglo de las cosas a las cuales queremos que nuestra extensión tenga permiso en este caso solo a las “tabs”, le indicamos cuál será el “popup” y le indicamos en que paginas usará los “content scripts”.


### Instalar extensión en Chrome

Una vez que tenemos el manifest.json ya podemos instalar la extensión en nuestra navegador de la siguiente manera:

- Primero nos vamos al manager de extensiones
    
    ![instalacion.gif](/blogs/extension/instalacion.gif)
    

- Luego nos cargamos nuestra extensión

![Untitled](/blogs/extension/Untitled.png)

Y seleccionamos el path donde esta creado nuestro manifest.json

![Untitled](/blogs/extension/Untitled%201.png)

Ahora ya nos saldra en nuestras extensiones

![Untitled](/blogs/extension/Untitled%202.png)

Ahora para que aparezca al lado de las otras extensiones tenemos que fijarla en nuestra barra de la siguiente manera:

![popup.gif](/blogs/extension/popup.gif)

Pero al darle click vemos que nos da un error, esto se debe a que en el manifest.json le indicamos que iba a renderizar un archivo llamado “popup.html” pero no lo hemos creado todavía! Así que haremos eso.

### popup.html

En este archivo vamos a crear el html que se renderiza cuando le demos click a nuestra extensión, en este caso un simple botón nos servirá para nuestra extensión, así que el popup.html quedaría de la siguiente manera:

```html
<!DOCTYPE html>
<head>
	<style>
		body{
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

Si te fijas en nuestro popup.html hacemos referencia a popup.js asi que tambien lo crearemos y nos quedaria asi:

```jsx
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click',rotate)

function rotate(){
	alert("Hi")
}
```

Lo que hacemos es buscar el botón y agregar un listener para que cuando le demos click al botón se dispare una alerta, pero vamos a notar lo siguiente que las alertas de nuestro botón son diferentes a las alertas que podamos hacer desde la consola del navegador.

![alert.gif](/blogs/extension/alert.gif)

Esto se debe a que todos lo que hagamos desde el popup.js se hará en base al dom del popup.html y esto no nos funciona porque en nuestra extension queremos interactuar con el dom de la página de youtube para rotar los videos, para estas tareas existen los content script para poder comunicar la extensión con el dom de la tab en la que este activa la extension, asi que crearemos nuestro content script

### Content Scripts

Para poder hacer uso de los content script necesitamos indicarle en nuestro manifest.json que vamos a hacer uso de estos tipos de scripts, así que modificamos nuestro manifest.json y nos quedaria asi:

```json
{
  "manifest_version": 3,
  "name": "yt-video-mirror",
  "description": "Chrome extension that rotate yt videos 180 degrees",
  "version": "1.0",
  "permissions": ["tabs"],
  "action":{
	  "default_popup": "popup.html"
  },
  "content_scripts": [ 
        { 
            "matches": [ "http://*/*", "https://*/*"],
            "js": [ "contentScript.js" ]
        }
      ]
}
```

Agregamos una nueva propiedad que se llama “content_scripts” que es un arreglo de objetos y en cada objeto se pone en qué urls va a funcionar el content script y cual es el archivo que será el content script. Una vez modificado manifest.json podemos crear el content script.

La manera en que se comunican los content script y el popup.js es mediante mensajes, asi que en nuestro archivo “contentScript.js” lo que haremos es crear una función que esté pendiente de un mensaje, esto mediante las apis internas de chrome y nos quedaria asi:

```jsx
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
	if(message.action == "alert"){
		alert("Hi!")
	}
}
```

Lo que estamos diciendo con esto es que "contentScript.js" va a estar pendiente de recibir mensajes y si en el objeto del mensaje la propiedad “action” es “alert” va a lanzar una alerta, así que enviaremos el mensaje desde “popup.js” cuando presionemos el botón!

```jsx
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click',rotate)

function rotate(){
	 let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params,gotTab);

  function gotTab(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{action:"alert"})
  }
}
```

Ahora ya enviamos mensajes desde “popup.js” a “contentScript.js”, lo que le estamos haciendo es obtener todas las tabs activas y chrome nos regresara en la que estamos en la posición 0 así que en esa tab le mandamos el mensaje al content script, con la propiedad “action” con el valor de “alert” para que nos genere una alerta pero desde el dom del navegador no desde el dom de la alerta

![alertacontent.gif](/blogs/extension/alertacontent.gif)

¡Genial ahora la alerta se está generando desde el dom de la tab activa!

Ahora que ya podemos interactuar con el dom de la tab activa es momento de ver cómo podemos darle vuelta a los videos.

Con el inspector de elementos podemos ver que elemento necesitamos modificar para lograr lo que queremos:

![html.gif](/blogs/extension/html.gif)

Una vez que identificamos que tag queremos afectar nuestro “contentScript.js” quedaria asi:

```jsx
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
	if(message.action == "alert"){
		alert("Hi!")
	}else if(message.action == "rotate"){
		let video = document.getElementsByClassName("html5-video-container")
		let style = video[0].getAttribute('style')
		if(!style){
			video[0].setAttribute("style","transform: rotateY(180deg)")
		}else{
			video[0].removeAttribute('style')
		}
	}
}
```

Lo que hacemos es quitarle y ponerle la propiedad “style” a la etiqueta que contiene el video y en nuestro “popup.js” cambiamos la acción en el mensaje de “alert” a “rotate”

```jsx
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click',rotate)

function rotate(){
	 let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params,gotTab);

  function gotTab(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{action:"rotate"})
  }
}
```

¡Ahora ya logramos lo que queríamos! ya funciona nuestra extensión!

![ezgif.com-gif-maker (1).gif](/blogs/extension/ezgif.com-gif-maker_(1).gif)

## Conclusión
Crear una extensión de Chrome es relativamente sencillo y hay una infinidad de cosas que se podrían crear! Todo depende de tu creatividad!

