---
title: "Este video tiene x vistas"
date: "2021-12-03"
post_description: "Este video actualiza su título y descripción automáticamente"
post_image_header: "/blogs/cuantas-vistas/VISTAS.png"
og_image: "/blogs/cuantas-vistas/og.png"
post_image_alt: "thumbnail video"
---

# YouTube api

De seguro has visto estos vídeos que se pusieron de moda, donde los vídeos se van actualizando dependiendo de cuántas visitas tiene el vídeo.

![/blogs/cuantas-vistas/Untitled.png](/blogs/cuantas-vistas/Untitled.png)

yo mismo hice un vídeo aquí te lo dejo 👀

[Este video tiene X vistas!](https://youtu.be/m3BU4MhgNwo)

Y aunque no lo creas es más fácil de lo que parece, solo tenemos que usar la api de youtube esa la podemos encontrar en el siguiente [https://developers.google.com/youtube/v3](https://developers.google.com/youtube/v3), para usarla necesitamos una cuenta de google que voy a asumir que ya la tienes.

También necesitamos tener instalado python3, voy a asumir que ya lo tienes instalado (si no lo tienes lo puedes descargar de [aquí](https://www.python.org/).

El el sitio web de la api podemos ver que hay un sección que se llama referencias, en esta sección hay bastantes ejemplos del uso que le podemos dar a la api, nosotros necesitamos 3 cosas:

1. Obtener la data del video, para ver cuantas visitas tenemos.
2. Actualizar el titulo del video
3. Cambiar la miniatura del video

Vamor por el primer paso

### Obtener la data del video

Nos vamos al menú, seleccionamos el submenú videos, y luego list.

![/blogs/cuantas-vistas/Untitled%201.png](/blogs/cuantas-vistas/Untitled%201.png)

En esta sección nos muestra la data que podemos obtener de un video, y los parámetros que se necesitan para obtenerla, a nosotros nos interesa la parte de las vistas!, esto data la podemos obtener si le pedimos que nos retorne las statistics y también necesitamos la data del video, para obtener el título anterior y esto viene en el item snippet .

Lo bueno es que podemos probar la api desde el sitio así que eso haremos, buscamos un video y copiamos su ID, el ID son los últimos dígitos de la url del video.

![/blogs/cuantas-vistas/Untitled%202.png](/blogs/cuantas-vistas/Untitled%202.png)

Este id lo ponemos en esta parte:

![/blogs/cuantas-vistas/Untitled%203.png](/blogs/cuantas-vistas/Untitled%203.png)

Luego ejecutamos esto, con el botón de hasta abajo que dice execute.

![/blogs/cuantas-vistas/Untitled%204.png](/blogs/cuantas-vistas/Untitled%204.png)

Y este nos retorna lo siguiente:

![/blogs/cuantas-vistas/Untitled%205.png](/blogs/cuantas-vistas/Untitled%205.png)

![/blogs/cuantas-vistas/Untitled%206.png](/blogs/cuantas-vistas/Untitled%206.png)

Como podemos ver que nos retorna la data del video, tanto la data de las views como la data del video título, descripción etc.

Ya obtenemos la data, ahora tenemos que hacer esto mismo pero desde python, lo bueno es que la api nos da estas mismas peticiones pero en diferentes lenguajes entonces nos vamos a buscarla para eso le damos a este botón.

![/blogs/cuantas-vistas/Untitled%207.png](/blogs/cuantas-vistas/Untitled%207.png)

Se nos abrira un menu donde podremos ver múltiples ejemplos en diferentes lenguajes

![/blogs/cuantas-vistas/Untitled%208.png](/blogs/cuantas-vistas/Untitled%208.png)

Nos vamos a la sección de python y copiamos el código para ponerlo en tu editor de código favorito, lo modificamos un poco para que podamos pasarle el id del video como parámetro y el código quedaría algo así:

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

# agregamos mas scopes para poder modificar nuestros videos desde el script
scopes = ["https://www.googleapis.com/auth/youtube",
          "https://www.googleapis.com/auth/youtube.force-ssl",
          "https://www.googleapis.com/auth/youtube.readonly",
          "https://www.googleapis.com/auth/youtubepartner"]

def main():
    # Con esto obtenemos el id que pongamos cuando usemos el script
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

Si queremos ejecutar este script, en mi caso lo guarde como update.py, nos va a dar error ya que no tenemos las librerias que necesitamos, las instalamos con los siguientes comandos (Es recomendado crear un entorno virtual para manejar las dependencia en python, te recomiendo leer esto [https://docs.python.org/es/3/tutorial/venv.html](https://docs.python.org/es/3/tutorial/venv.html) 👀)

```python
pip install --upgrade google-api-python-client
pip install --upgrade google-auth-oauthlib google-auth-httplib2
```

Genial ya tenemos las librerías ahora nos faltan las credenciales para acceder a la api, estas las obtenemos en la consola de google → [https://console.developers.google.com/](https://console.developers.google.com/)

Tenemos que buscar la api de youtube en la consola de google

![/blogs/cuantas-vistas/Untitled%209.png](/blogs/cuantas-vistas/Untitled%209.png)

Luego habilitamos la api!

![/blogs/cuantas-vistas/Untitled%2010.png](/blogs/cuantas-vistas/Untitled%2010.png)

Ahora tendremos que crear nuestras credenciales.

![/blogs/cuantas-vistas/Untitled%2011.png](/blogs/cuantas-vistas/Untitled%2011.png)

![/blogs/cuantas-vistas/Untitled%2012.png](/blogs/cuantas-vistas/Untitled%2012.png)

Le ponemos un nombre a la app y le damos en guardar

![/blogs/cuantas-vistas/Untitled%2013.png](/blogs/cuantas-vistas/Untitled%2013.png)

Ahora creamos un cliente OAuth

![/blogs/cuantas-vistas/Untitled%2014.png](/blogs/cuantas-vistas/Untitled%2014.png)

Luego elegimos la opción de aplicación para ordenadores y le ponemos el nombre que queramos.

![/blogs/cuantas-vistas/Untitled%2015.png](/blogs/cuantas-vistas/Untitled%2015.png)

¡Ahora ya tenemos las credenciales! solo falta descargarlas

![/blogs/cuantas-vistas/Untitled%2016.png](/blogs/cuantas-vistas/Untitled%2016.png)

Una vez descargado lo movemos a la carpeta en la que estamos trabajando el proyecto y lo renombramos a client_secret.json, luego modificamos el código en el cual leemos este archivo a esto:

```python
client_secrets_file = "client_secret.json"
```

Ahora si podemos ejecutar el script y nos tendría que funcionar, recuerda que tienes que pasarle un id de un video como argumento al script:

```bash
python elnombredetuscript.py poner id de mi video
```

Al momento de ejecutar en la consola nos saldrá un link al que tenemos que entrara para que nos de el token que ocupamos para que el script pueda funcionar, entramos a el link y seleccionamos la cuenta la cual tiene el video que queremos modificar, ya que para poder modificarlo tiene que ser un video nuestro, una vez seleccionada la cuenta nos dará un token lo copiamos y lo ponemos en el prompt de la consola, ahora ya nos traerá la data del video.

![/blogs/cuantas-vistas/datos.gif](/blogs/cuantas-vistas/datos.gif)

Entre toda esa data, está lo que ocupamos, así que tomamos esa data y la enviamos modificada, así que agregamos esto al código para que se actualice el título del vídeo:

```python
data_del_video = response["items"][0]["snippet"]
vistas = response["items"][0]["statistics"]["viewCount"]

data_del_video["title"] = f"Este video tiene {vistas} vistas!"

update_request = youtube.videos().update(
		part="snippet",
    body=dict(
		    snippet=data_del_video,
        id = ID
        )
    ).execute()
```

Ahora nos falta actualizar la imagen para eso vamos a usar una librería que se llama pillow, para generar la imagen, así que lo instalamos con el siguiente comando.

```python
pip install pillow
```

Luego de instalarlo creamos un archivo que se llame **generar_miniatura.py** y ponemos el siguiente código:

```python
from PIL import Image, ImageDraw, ImageFont

def generar_imagen(vistas):
    img = Image.new('RGBA',(1280,720),'white')

    text_miniatura = f"Este video \ntiene \n{vistas} vistas"

    path = "./miniatura.png"

    font = ImageFont.truetype("Roboto-Black.ttf",80)
    w, h = font.getsize(text_miniatura)

    draw = ImageDraw.Draw(img)

    draw.text(((1280-w)/2,(720-h)/2),text_miniatura, font=font,  fill="black")

    img.save(path)

    return path
```

Tenemos que tener una fuente en el directorio al mismo nivel del archivo, la fuente las puedes descargar de google fonts o de otra pagina que prefieres, la función nos regresa el path de donde fue guardada la imagen, ahora con ese dato y con la imagen generada podemos mandarla para que se actualice la imagen miniatura de nuestro video.

```python
#####
from generar_miniatura import generar_imagen

#####
#####
path = generar_imagen(vistas)

youtube.thumbnails().set(
    videoId=ID,
    media_body=path
).execute()

```

Lo ejecutamos y ahora ya funciona! ya actualizamos el titulo y la imagen del video!
