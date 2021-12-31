---
title: 'Forkify'
date: '2021-29-02'
post_description: 'Best tool to create playlists using Spotify API'
post_image_header: '/projects/forkify/forkify.gif'
og_image: '/projects/this-page/og.png'
post_image_alt: 'gif of the project'
---
# Forkify

### Live demo:

- [https://forkify.monge1h.com](https://forkify.monge1h.com) [pendiente de aprobacion de extension de [quota](https://developer.spotify.com/community/news/2021/05/27/improving-the-developer-and-user-experience-for-third-party-apps/)]
### Repository:

- [GitHub <-- link](https://github.com/Monge1h/forkify)

### Tech Stack:

- React JS
- Chackra UI
- Express JS
- MongoDB
- Spotify API

Cuando salgo en RoadTrip con mis amigos siempre tengo un problema, que música poner! es por eso que debido a ese problema decidí hacer una web app
que me permita crear una playlist colaborativa y que con solo pasar un link ellos puedan poner sus canciones más escuchadas de manera automática.

Y también quería hacer algún proyecto para practicar mis habilidades de front end, en este caso use React con Chakra UI y aprendí bastante de ambos, es el primer proyecto que terminó de front end donde yo hice todo.

Lo primero que hice fue hacer un bosquejo del diseño en figma para luego hacerlo con Chackra UI  👀

![figma](/projects/forkify/figma1.png)
![figma](/projects/forkify/figma2.png)

## Flujos con los que funciona la app:

* Crear playlist
  * Inicia la app y te pide el nombre que le quieres poner a la playlist
  * Seleccionas cuantas canciones quieres poner en la playlist
  * Seleccionas en base a que tiempo quieres que se seleccionen las canciones, si las mas escuchadas de hace un mes o de hace 6 meses
  * Se crea la playlist y compartes el link que te da la app, el link consiste en el id del registro que se guardó en MongoDb
* Agregar canciones a playlist existente
  * Se ingresa con el link que se generó
  * Seleccionas cuantas canciones quieres poner en la playlist
  * Seleccionas en base a que tiempo quieres que se seleccionen las canciones, si las mas escuchadas de hace un mes o de hace 6 meses
  * Listo! Tus canciones ya están en la playlist de tu amigo! 👌


# Cosas que aprendí

### Tengo que mirar mas la documentacion!

En la última pantalla cuando se crea el link para compartir hice uso de una librería para copiar al clipboard, la librería que uso es: 
```
react-copy-to-clipboard
```
Pero Chackra UI ya tiene un Hook que me permite hacer eso!! asi que me pude haber ahorrado una librería y haber usado un hook que ya viene con Chackra UI
[useClipboard](https://chakra-ui.com/docs/hooks/use-clipboard)

Este primer proyecto de React me dejo con mas ganas de seguir haciendo proyectos interesantes FullStacks y de seguir mejorando tanto en FrontEnd como en BackEnd.
