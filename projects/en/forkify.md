---
title: 'Forkify'
date: '2021-02-28'
post_description: 'A web app that creates collaborative Spotify playlists for road trips: everyone adds their most-listened songs automatically.'
post_image_header: '/projects/forkify/forkify.gif'
og_image: '/projects/forkify/og.png'
post_image_alt: 'Animated demo of Forkify'
featured: true
featured_description: 'Forkify automates collaborative playlists for road trips: every passenger adds their most-listened Spotify songs just by opening a link. No more fighting over the trip music.'
---

# Forkify

### Live demo

- [https://forkify.monge1h.com](https://forkify.monge1h.com) *(pending approval of the Spotify [quota](https://developer.spotify.com/community/news/2021/05/27/improving-the-developer-and-user-experience-for-third-party-apps/) extension)*

### Repository

- [GitHub](https://github.com/Monge1h/forkify)

### Tech stack

- React
- Chakra UI
- Express
- MongoDB
- Spotify API

Whenever I go on a road trip with my friends, I always face the same problem: what music to play! So I decided to build a web app that lets me create a collaborative playlist, where just by sharing a link everyone can automatically add their most-listened songs.

I also wanted a project to practice my frontend skills. I used React with Chakra UI and learned a lot from both — it's the first frontend project I finished doing everything myself.

The first thing I did was sketch the design in Figma, then build it with Chakra UI 👀

![Figma design, screen 1](/projects/forkify/figma1.png)
![Figma design, screen 2](/projects/forkify/figma2.png)

## How the app works

- **Create a playlist**
  - You open the app and it asks what you want to name the playlist.
  - You pick how many songs to add.
  - You pick the time range: your top songs from the last month or the last 6 months.
  - The playlist is created and you share the link the app gives you (the link contains the id of the record stored in MongoDB).
- **Add songs to an existing playlist**
  - You enter through the generated link.
  - You pick how many songs to add.
  - You pick the time range of your top songs.
  - Done! Your songs are in your friend's playlist 👌

## Things I learned

### I need to read the docs more!

On the last screen, when the share link is created, I used a library to copy to the clipboard:

```
react-copy-to-clipboard
```

But Chakra UI already ships a hook that does exactly that! I could have saved myself a dependency by using [useClipboard](https://chakra-ui.com/docs/hooks/use-clipboard), which comes with Chakra UI.

This first React project left me wanting to keep building interesting full-stack projects and to keep improving on both frontend and backend.
