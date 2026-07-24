---
title: 'Este video tiene X vistas'
date: '2021-12-03'
post_description: 'Cómo hacer que un video de YouTube actualice su título y su miniatura automáticamente con el número de vistas, usando la API de YouTube y Python.'
post_image_header: '/blogs/cuantas-vistas/VISTAS.png'
og_image: '/blogs/cuantas-vistas/og.png'
post_image_alt: 'Miniatura del video'
---

# Este video tiene X vistas

De seguro has visto estos videos que se pusieron de moda, donde el título se va actualizando dependiendo de cuántas visitas tiene el video.

![Ejemplo de video con vistas en el título](/blogs/cuantas-vistas/Untitled.png)

Yo mismo hice un video, aquí te lo dejo 👀:

[¡Este video tiene X vistas!](https://youtu.be/m3BU4MhgNwo)

Y aunque no lo creas, es más fácil de lo que parece: solo tenemos que usar la [API de YouTube](https://developers.google.com/youtube/v3). Para usarla necesitamos una cuenta de Google, que voy a asumir que ya tienes.

También necesitamos tener instalado Python 3 (si no lo tienes, lo puedes descargar de [aquí](https://www.python.org/)).

En el sitio web de la API hay una sección de referencias con bastantes ejemplos de lo que podemos hacer. Nosotros necesitamos tres cosas:

1. Obtener la data del video, para ver cuántas visitas tenemos.
2. Actualizar el título del video.
3. Cambiar la miniatura del video.

Vamos por el primer paso.

### Obtener la data del video

Nos vamos al menú, seleccionamos el submenú **videos** y luego **list**.

![Sección videos.list de la API](/blogs/cuantas-vistas/Untitled%201.png)

Esta sección muestra la data que podemos obtener de un video y los parámetros necesarios para obtenerla. A nosotros nos interesan las vistas — vienen si pedimos `statistics` — y la data del video para obtener el título anterior, que viene en `snippet`.

Lo bueno es que podemos probar la API desde el mismo sitio, así que eso haremos: buscamos un video y copiamos su ID (los últimos dígitos de la URL del video).

![Copiando el ID del video](/blogs/cuantas-vistas/Untitled%202.png)

Este ID lo ponemos en esta parte:

![Campo para el ID](/blogs/cuantas-vistas/Untitled%203.png)

Luego ejecutamos con el botón de hasta abajo que dice **execute**:

![Botón execute](/blogs/cuantas-vistas/Untitled%204.png)

Y nos retorna lo siguiente:

![Respuesta de la API](/blogs/cuantas-vistas/Untitled%205.png)

![Respuesta de la API con snippet](/blogs/cuantas-vistas/Untitled%206.png)

Como podemos ver, nos retorna tanto las vistas como la data del video: título, descripción, etc.

Ya obtenemos la data; ahora hay que hacer lo mismo desde Python. Lo bueno es que la API nos da estas mismas peticiones en diferentes lenguajes. Para verlas le damos a este botón:

![Botón para ver ejemplos de código](/blogs/cuantas-vistas/Untitled%207.png)

Se abre un menú con ejemplos en múltiples lenguajes:

![Ejemplos en diferentes lenguajes](/blogs/cuantas-vistas/Untitled%208.png)

Vamos a la sección de Python y copiamos el código a nuestro editor favorito. Lo modificamos un poco para poder pasarle el ID del video como parámetro, y quedaría algo así:

```python
# -*- coding: utf-8 -*-

# Sample Python code for youtube.videos.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/guides/code_samples#python

import os
import sys

import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

# Agregamos más scopes para poder modificar nuestros videos desde el script
scopes = ["https://www.googleapis.com/auth/youtube",
          "https://www.googleapis.com/auth/youtube.force-ssl",
          "https://www.googleapis.com/auth/youtube.readonly",
          "https://www.googleapis.com/auth/youtubepartner"]

def main():
    # Con esto obtenemos el ID que pasemos al usar el script
    ID = sys.argv[1]

    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "YOUR_CLIENT_SECRET_FILE.json"

    # Get credentials and create an API client
    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    credentials = flow.run_console()
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

    request = youtube.videos().list(
        part="statistics, snippet",
        id=ID
    )
    response = request.execute()

    print(response)

if __name__ == "__main__":
    main()
```

Si ejecutamos este script (en mi caso lo guardé como `update.py`) nos va a dar error, porque no tenemos las librerías necesarias. Las instalamos con los siguientes comandos (es recomendado crear un entorno virtual para manejar las dependencias en Python — te recomiendo leer [esto](https://docs.python.org/es/3/tutorial/venv.html) 👀):

```bash
pip install --upgrade google-api-python-client
pip install --upgrade google-auth-oauthlib google-auth-httplib2
```

Genial, ya tenemos las librerías. Ahora nos faltan las credenciales para acceder a la API, que obtenemos en la [consola de Google](https://console.developers.google.com/).

Buscamos la API de YouTube en la consola:

![Buscando la API de YouTube](/blogs/cuantas-vistas/Untitled%209.png)

Luego habilitamos la API:

![Habilitando la API](/blogs/cuantas-vistas/Untitled%2010.png)

Ahora creamos nuestras credenciales:

![Creando credenciales](/blogs/cuantas-vistas/Untitled%2011.png)

![Pantalla de consentimiento](/blogs/cuantas-vistas/Untitled%2012.png)

Le ponemos un nombre a la app y le damos guardar:

![Nombre de la aplicación](/blogs/cuantas-vistas/Untitled%2013.png)

Ahora creamos un cliente OAuth:

![Creando cliente OAuth](/blogs/cuantas-vistas/Untitled%2014.png)

Elegimos la opción de aplicación de escritorio y le ponemos el nombre que queramos:

![Tipo de aplicación](/blogs/cuantas-vistas/Untitled%2015.png)

¡Ya tenemos las credenciales! Solo falta descargarlas:

![Descargando credenciales](/blogs/cuantas-vistas/Untitled%2016.png)

Una vez descargadas, movemos el archivo a la carpeta del proyecto y lo renombramos a `client_secret.json`. Luego modificamos la línea del código que lo lee:

```python
client_secrets_file = "client_secret.json"
```

Ahora sí podemos ejecutar el script. Recuerda pasarle el ID de un video como argumento:

```bash
python update.py ID_DE_TU_VIDEO
```

Al ejecutarlo, en la consola saldrá un link al que tenemos que entrar para obtener el token que necesita el script. Entramos al link y seleccionamos la cuenta dueña del video que queremos modificar (para poder modificarlo tiene que ser un video nuestro). Nos dará un token, lo copiamos, lo pegamos en el prompt de la consola, y ya nos trae la data del video:

![Data del video en la consola](/blogs/cuantas-vistas/datos.gif)

Entre toda esa data está lo que necesitamos, así que la tomamos y la enviamos modificada. Agregamos esto al código para actualizar el título del video:

```python
data_del_video = response["items"][0]["snippet"]
vistas = response["items"][0]["statistics"]["viewCount"]

data_del_video["title"] = f"Este video tiene {vistas} vistas!"

update_request = youtube.videos().update(
    part="snippet",
    body=dict(
        snippet=data_del_video,
        id=ID
    )
).execute()
```

Ahora falta actualizar la miniatura. Para generar la imagen usaremos una librería llamada Pillow:

```bash
pip install pillow
```

Luego creamos un archivo llamado `generar_miniatura.py` con el siguiente código:

```python
from PIL import Image, ImageDraw, ImageFont

def generar_imagen(vistas):
    img = Image.new('RGBA', (1280, 720), 'white')

    text_miniatura = f"Este video \ntiene \n{vistas} vistas"

    path = "./miniatura.png"

    font = ImageFont.truetype("Roboto-Black.ttf", 80)
    w, h = font.getsize(text_miniatura)

    draw = ImageDraw.Draw(img)

    draw.text(((1280-w)/2, (720-h)/2), text_miniatura, font=font, fill="black")

    img.save(path)

    return path
```

Necesitamos una fuente en el directorio, al mismo nivel del archivo — la puedes descargar de Google Fonts o de la página que prefieras. La función nos regresa el path donde se guardó la imagen; con ese dato y la imagen generada ya podemos actualizar la miniatura de nuestro video:

```python
from generar_miniatura import generar_imagen

# ...

path = generar_imagen(vistas)

youtube.thumbnails().set(
    videoId=ID,
    media_body=path
).execute()
```

Lo ejecutamos y... ¡ya funciona! Actualizamos el título y la miniatura del video 🚀
