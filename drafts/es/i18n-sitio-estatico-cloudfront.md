---
title: 'i18n en un sitio 100% estático con CloudFront Functions'
date: '2026-07-24'
post_description: 'Cómo agregué inglés y español a mi sitio estático en S3, con detección automática de idioma en el edge, sin servidores y sin pagar un centavo extra.'
post_image_header: '/projects/this-page/og.png'
og_image: '/projects/this-page/og.png'
post_image_alt: 'Captura de monge1h.com'
---

<!-- BORRADOR: revisa el tono, cambia la fecha al día que publiques y reemplaza las imágenes (post_image_header y og_image son placeholders). Para publicar, mueve este archivo a blog/es/ y su par a blog/en/ con el mismo nombre. -->

# i18n en un sitio 100% estático con CloudFront Functions

Hola, ¡gracias por pasar por el blog!

Este sitio que estás leyendo es 100% estático: Next.js con `output: 'export'`, hospedado en un bucket de S3 detrás de CloudFront. No hay servidor, no hay funciones corriendo por request, no hay nada que escale ni nada que se caiga a las 3 de la mañana. Me encanta así.

El problema: quería que el sitio estuviera en inglés y en español, que detectara tu idioma automáticamente, y que pudieras cambiarlo con un click. Y todo lo que encuentras en internet sobre i18n en Next.js asume que tienes un servidor.

## Las restricciones

Cuando tu sitio es un export estático, pierdes varias cosas:

- El i18n nativo de Next.js (Pages Router) no funciona con `output: 'export'`.
- No hay middleware, así que no puedes leer el header `Accept-Language` en el servidor... porque no hay servidor.
- No puedes hacer redirects dinámicos desde la aplicación.

Y además yo tenía una restricción propia: **no romper las URLs existentes**. Mi blog ya estaba indexado en Google con URLs como `/blog/typescript-101/`, y cambiarlas a `/en/blog/...` significaba perder ese posicionamiento o llenar todo de redirects.

## La arquitectura

La solución quedó así:

1. **Inglés en la raíz, español bajo `/es/`.** Las URLs viejas siguen funcionando tal cual, y cada idioma tiene URLs propias (importante para SEO, ya vamos a eso).
2. **El contenido vive en carpetas por idioma.** Cada post existe con el mismo nombre de archivo en `blog/en/` y `blog/es/`:

```
blog/
  en/
    typescript-101.md
  es/
    typescript-101.md
projects/
  en/
  es/
```

Si un post no tiene traducción, el sitio hace fallback al otro idioma y muestra un aviso de "este post solo está disponible en español". Así puedo publicar sin bloquearme por la traducción.

3. **Las páginas se generan dos veces en build time.** Los componentes de página son compartidos y reciben el idioma como prop; en `pages/` hay wrappers delgados para la raíz (inglés) y para `/es/`. Al hacer `next build`, salen los dos árboles completos de HTML.

4. **Los textos de UI viven en diccionarios tipados.** Un `locales/en.ts` que define el tipo y un `locales/es.ts` que lo implementa. Si me falta una traducción, TypeScript no compila. Cero librerías de i18n.

## La detección de idioma en el edge

Aquí viene la parte divertida. ¿Cómo detectas el idioma del visitante si no tienes servidor? Con una **CloudFront Function**: un JavaScript minúsculo que corre en el edge de CloudFront en cada request, antes de tocar la caché.

```js
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/' || uri === '/index.html') {
    var lang = '';

    var cookies = request.cookies;
    if (cookies && cookies.lang && cookies.lang.value) {
      lang = cookies.lang.value;
    }

    if (!lang) {
      var headers = request.headers;
      var acceptLanguage =
        headers && headers['accept-language'] ? headers['accept-language'].value : '';
      if (acceptLanguage.toLowerCase().indexOf('es') === 0) {
        lang = 'es';
      }
    }

    if (lang === 'es') {
      return {
        statusCode: 302,
        statusDescription: 'Found',
        headers: {
          location: { value: '/es/' },
          'cache-control': { value: 'no-store' },
          vary: { value: 'Accept-Language, Cookie' },
        },
      };
    }
  }

  return request;
}
```

La lógica es simple y en este orden:

1. Solo actúa en `/`, la puerta de entrada. Si llegas con un link directo a un post, nadie te redirige a ningún lado.
2. Primero gana la cookie `lang`, que se guarda cuando usas el switcher de idioma del navbar. Tu elección explícita siempre le gana a la detección.
3. Si no hay cookie, mira el header `Accept-Language` del navegador. Si tu primer idioma es español, 302 a `/es/`.

¿El costo? CloudFront Functions incluye 2 millones de invocaciones al mes gratis, para siempre. Para un sitio personal, esto es literalmente $0.

Dos detalles que importan: el redirect es **302 y no 301** (Google recomienda redirects temporales para redirección por idioma, porque el contenido de `/` sí existe y quieres que lo indexen), y va con `vary: Accept-Language, Cookie` para que las cachés intermedias no le sirvan el redirect a la persona equivocada.

## El SEO

De nada sirve tener dos idiomas si Google no entiende la relación entre ellos. Cada página lleva:

- Su `<link rel="canonical">` apuntando a sí misma.
- Los `hreflang` alternates: `en`, `es` y `x-default` apuntando a la versión en cada idioma.
- El atributo `lang` correcto en el `<html>`, que en Pages Router se puede resolver por página leyendo el pathname en `_document`.
- Un `sitemap.xml` generado en el build con los alternates de cada URL, y un feed RSS por idioma.

## Lo que aprendí

- **No necesitas una librería de i18n para un sitio de contenido.** Un objeto tipado por idioma y carpetas de markdown resuelven el 95% del problema, con cero dependencias.
- **El edge es tu servidor cuando no tienes servidor.** CloudFront Functions (y sus equivalentes en otros CDNs) te dan justo el pedacito de lógica dinámica que un sitio estático necesita.
- **Las restricciones ayudan a diseñar.** No poder usar middleware me obligó a una arquitectura más simple y más barata que la "oficial".

Todo el código está en el [repo del sitio](https://github.com/Monge1h/monge1h.com) por si quieres ver la implementación completa 👀
