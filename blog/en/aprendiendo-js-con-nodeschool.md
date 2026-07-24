---
title: 'Learning JavaScript with NodeSchool'
date: '2021-11-02'
post_description: "Heard of NodeSchool? Learn JavaScript right from your terminal with NodeSchool's interactive workshoppers — here's how, step by step."
post_image_header: '/blogs/nodeschool/nodeschool.png'
og_image: '/blogs/nodeschool/og.png'
post_image_alt: 'NodeSchool logo'
---

# Learning JavaScript with NodeSchool

## What is NodeSchool?

NodeSchool is an open source project run by volunteers with two goals: creating high-quality programming curricula and organizing community learning events.

At NodeSchool San Miguel we've been running community learning events, but the other side of NodeSchool also does workshops... in your terminal! Yes, your terminal. They're called **workshoppers** — interactive workshops you can run from the console. Enough talk, let's try one. The first thing we need is Node.js and npm installed.

NodeSchool maintains different **workshoppers**, from learning **JavaScript or Node** to Markdown and Electron. Here's a [link](https://nodeschool.io/) so you can check them out 👀.

In this article we'll use the *javascripting* workshopper, which is perfect if you're just getting started with programming. To install it we use npm and run:

```bash
# The -g flag installs it globally so we can call it from the console
npm install -g javascripting
```

Once installed we can run it from the console 😉:

```bash
javascripting
```

And we'll see the following:

![javascripting menu](/blogs/nodeschool/espanol.gif)

Here we can already see the topics this **workshopper** covers — and we can even change its language!

Now we pick which exercise to do (ideally in order). When you select one, the instructions for the exercise appear.

![Exercise instructions](/blogs/nodeschool/instrucciones.gif)

This exercise asks us to create a folder called ***javascripting*** to keep things tidy. We create it, and inside it we create a file called ***introduction.js*** (you can do this from a GUI if you prefer). Inside the file we write:

```js
console.log('Hello')
```

Then we run the following command to verify our exercise:

```bash
javascripting verify introduction.js
```

![Exercise error](/blogs/nodeschool/errorja.gif)

Oops! Looks like we got it wrong. The nice part is that the **workshopper** shows us the diff and where we may have made a mistake. In our case it was a typo — we wrote:

```js
console.log('Hello')
```

And it expected:

```js
console.log('hello')
```

Let's fix that to pass the exercise.

![Exercise solution](/blogs/nodeschool/solucion.gif)

Awesome, we passed the first exercise! 🎉🎉

After finishing, it explains what we just did and why it worked. Now there are 19 more exercises to go! And if you already know JavaScript, remember there are other topics in these **workshoppers**:

![Other available workshoppers](/blogs/nodeschool/Untitled.png)

Which adventure you take is up to you!

Did you already know about this tool?
