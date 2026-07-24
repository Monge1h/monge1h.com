---
title: 'Forkify'
date: '2021-02-28'
post_description: 'Una web app que crea playlists colaborativas de Spotify para road trips: cada quien aporta sus canciones más escuchadas de manera automática.'
post_image_header: '/projects/forkify/forkify.gif'
og_image: '/projects/forkify/og.png'
post_image_alt: 'Demo animada de Forkify'
featured: true
featured_description: 'Forkify automatiza la creación de playlists colaborativas para road trips: cada pasajero agrega sus canciones más escuchadas de Spotify con solo abrir un link. Se acabó pelear por la música del viaje.'
---

# Forkify

### Demo en vivo

- [https://forkify.monge1h.com](https://forkify.monge1h.com) *(pendiente de aprobación de la extensión de [cuota](https://developer.spotify.com/community/news/2021/05/27/improving-the-developer-and-user-experience-for-third-party-apps/) de Spotify)*

### Repositorio

- [GitHub](https://github.com/Monge1h/forkify)

### Tech stack

- React
- Chakra UI
- Express
- MongoDB
- Spotify API

Cuando salgo de road trip con mis amigos siempre tengo el mismo problema: ¡qué música poner! Por eso decidí hacer una web app que me permita crear una playlist colaborativa, donde con solo compartir un link cada quien puede agregar sus canciones más escuchadas de manera automática.

También quería un proyecto para practicar mis habilidades de frontend. Usé React con Chakra UI y aprendí bastante de ambos, es el primer proyecto de frontend que terminé haciendo todo yo.

Lo primero que hice fue un bosquejo del diseño en Figma, para luego construirlo con Chakra UI 👀

![Diseño en Figma, pantalla 1](/projects/forkify/figma1.png)
![Diseño en Figma, pantalla 2](/projects/forkify/figma2.png)

## Flujos con los que funciona la app

- **Crear playlist**
  - Inicias la app y te pide el nombre que le quieres poner a la playlist.
  - Seleccionas cuántas canciones quieres poner.
  - Seleccionas el rango de tiempo: si las más escuchadas del último mes o de los últimos 6 meses.
  - Se crea la playlist y compartes el link que te da la app (el link contiene el id del registro guardado en MongoDB).
- **Agregar canciones a una playlist existente**
  - Entras con el link que se generó.
  - Seleccionas cuántas canciones quieres agregar.
  - Seleccionas el rango de tiempo de tus canciones más escuchadas.
  - ¡Listo! Tus canciones ya están en la playlist de tu amigo 👌

## Cosas que aprendí

### ¡Tengo que mirar más la documentación!

En la última pantalla, cuando se crea el link para compartir, usé una librería para copiar al portapapeles:

```
react-copy-to-clipboard
```

¡Pero Chakra UI ya tiene un hook que hace exactamente eso! Me pude haber ahorrado una librería usando [useClipboard](https://chakra-ui.com/docs/hooks/use-clipboard), que ya viene con Chakra UI.

Este primer proyecto de React me dejó con más ganas de seguir haciendo proyectos full-stack interesantes y de seguir mejorando tanto en frontend como en backend.
