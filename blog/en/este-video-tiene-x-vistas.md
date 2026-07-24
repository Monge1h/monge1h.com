---
title: 'This video has X views'
date: '2021-12-03'
post_description: 'How to make a YouTube video automatically update its title and thumbnail with its view count, using the YouTube API and Python.'
post_image_header: '/blogs/cuantas-vistas/VISTAS.png'
og_image: '/blogs/cuantas-vistas/og.png'
post_image_alt: 'Video thumbnail'
---

# This video has X views

You've surely seen those videos that became a trend, where the title keeps updating based on how many views the video has.

![Example of a video with the view count in its title](/blogs/cuantas-vistas/Untitled.png)

I made one myself, here it is 👀:

[This video has X views!](https://youtu.be/m3BU4MhgNwo)

And believe it or not, it's easier than it looks: we just need to use the [YouTube API](https://developers.google.com/youtube/v3). To use it we need a Google account, which I'll assume you already have.

We also need Python 3 installed (if you don't have it, you can download it [here](https://www.python.org/)).

The API site has a reference section with plenty of examples of what we can do. We need three things:

1. Get the video's data, to see how many views we have.
2. Update the video's title.
3. Change the video's thumbnail.

Let's start with the first step.

### Getting the video's data

Go to the menu, select the **videos** submenu, then **list**.

![videos.list section of the API](/blogs/cuantas-vistas/Untitled%201.png)

This section shows the data we can get for a video and the parameters required to get it. We care about the views, they come back if we request `statistics`, and the video's data to get the current title, which comes in `snippet`.

The nice part is that we can try the API right from the site, so let's do that: find a video and copy its ID (the last characters of the video's URL).

![Copying the video ID](/blogs/cuantas-vistas/Untitled%202.png)

We paste that ID here:

![ID field](/blogs/cuantas-vistas/Untitled%203.png)

Then we run it with the **execute** button at the bottom:

![Execute button](/blogs/cuantas-vistas/Untitled%204.png)

And it returns the following:

![API response](/blogs/cuantas-vistas/Untitled%205.png)

![API response with snippet](/blogs/cuantas-vistas/Untitled%206.png)

As you can see, it returns both the view stats and the video's data: title, description, etc.

We've got the data; now we need to do the same from Python. Luckily the API gives us these same requests in different languages. To see them, click this button:

![Button to view code samples](/blogs/cuantas-vistas/Untitled%207.png)

A menu opens with examples in multiple languages:

![Samples in different languages](/blogs/cuantas-vistas/Untitled%208.png)

Go to the Python section and copy the code into your favorite editor. We tweak it a bit so we can pass the video ID as an argument, and it ends up like this:

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

# We add more scopes so the script can modify our videos
scopes = ["https://www.googleapis.com/auth/youtube",
          "https://www.googleapis.com/auth/youtube.force-ssl",
          "https://www.googleapis.com/auth/youtube.readonly",
          "https://www.googleapis.com/auth/youtubepartner"]

def main():
    # This grabs the ID we pass when running the script
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

If we run this script (I saved it as `update.py`) it will fail, because we don't have the required libraries yet. We install them with the following commands (it's recommended to create a virtual environment to manage Python dependencies, I suggest reading [this](https://docs.python.org/3/tutorial/venv.html) 👀):

```bash
pip install --upgrade google-api-python-client
pip install --upgrade google-auth-oauthlib google-auth-httplib2
```

Great, we have the libraries. Now we need credentials to access the API, which we get from the [Google console](https://console.developers.google.com/).

Search for the YouTube API in the console:

![Searching for the YouTube API](/blogs/cuantas-vistas/Untitled%209.png)

Then enable the API:

![Enabling the API](/blogs/cuantas-vistas/Untitled%2010.png)

Now let's create our credentials:

![Creating credentials](/blogs/cuantas-vistas/Untitled%2011.png)

![Consent screen](/blogs/cuantas-vistas/Untitled%2012.png)

Give the app a name and save:

![Application name](/blogs/cuantas-vistas/Untitled%2013.png)

Now create an OAuth client:

![Creating an OAuth client](/blogs/cuantas-vistas/Untitled%2014.png)

Choose the desktop application option and name it whatever you like:

![Application type](/blogs/cuantas-vistas/Untitled%2015.png)

We have our credentials! We just need to download them:

![Downloading credentials](/blogs/cuantas-vistas/Untitled%2016.png)

Once downloaded, move the file into the project folder and rename it to `client_secret.json`. Then update the line of code that reads it:

```python
client_secrets_file = "client_secret.json"
```

Now we can run the script. Remember to pass a video ID as an argument:

```bash
python update.py YOUR_VIDEO_ID
```

When you run it, the console prints a link you need to open to get the token the script needs. Open the link and select the account that owns the video you want to modify (it has to be your own video). It gives you a token, copy it, paste it into the console prompt, and the script fetches the video's data:

![Video data in the console](/blogs/cuantas-vistas/datos.gif)

Within all that data is what we need, so we take it and send it back modified. We add this to the code to update the video's title:

```python
data_del_video = response["items"][0]["snippet"]
vistas = response["items"][0]["statistics"]["viewCount"]

data_del_video["title"] = f"This video has {vistas} views!"

update_request = youtube.videos().update(
    part="snippet",
    body=dict(
        snippet=data_del_video,
        id=ID
    )
).execute()
```

Now we're missing the thumbnail. To generate the image we'll use a library called Pillow:

```bash
pip install pillow
```

Then create a file called `generar_miniatura.py` with the following code:

```python
from PIL import Image, ImageDraw, ImageFont

def generar_imagen(vistas):
    img = Image.new('RGBA', (1280, 720), 'white')

    text_miniatura = f"This video \nhas \n{vistas} views"

    path = "./miniatura.png"

    font = ImageFont.truetype("Roboto-Black.ttf", 80)
    w, h = font.getsize(text_miniatura)

    draw = ImageDraw.Draw(img)

    draw.text(((1280-w)/2, (720-h)/2), text_miniatura, font=font, fill="black")

    img.save(path)

    return path
```

We need a font file in the same directory, you can download one from Google Fonts or wherever you prefer. The function returns the path where the image was saved; with that and the generated image we can update our video's thumbnail:

```python
from generar_miniatura import generar_imagen

# ...

path = generar_imagen(vistas)

youtube.thumbnails().set(
    videoId=ID,
    media_body=path
).execute()
```

Run it and... it works! We've updated the video's title and thumbnail 🚀
