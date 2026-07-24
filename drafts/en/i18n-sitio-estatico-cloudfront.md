---
title: 'i18n on a 100% static site with CloudFront Functions'
date: '2026-07-24'
post_description: 'How I added English and Spanish to my static site on S3, with automatic language detection at the edge, no servers and no extra cost.'
post_image_header: '/projects/this-page/og.png'
og_image: '/projects/this-page/og.png'
post_image_alt: 'Screenshot of monge1h.com'
---

<!-- DRAFT: review the tone, change the date to your publish day and replace the images (post_image_header and og_image are placeholders). To publish, move this file to blog/en/ and its pair to blog/es/ with the same filename. -->

# i18n on a 100% static site with CloudFront Functions

Hi, thanks for stopping by the blog!

The site you're reading is 100% static: Next.js with `output: 'export'`, hosted in an S3 bucket behind CloudFront. There's no server, no functions running per request, nothing that scales and nothing that goes down at 3 AM. I love it that way.

The problem: I wanted the site in English and Spanish, with automatic language detection, and a one click switcher. And everything you find online about i18n in Next.js assumes you have a server.

## The constraints

When your site is a static export, you lose a few things:

- Next.js built in i18n (Pages Router) doesn't work with `output: 'export'`.
- There's no middleware, so you can't read the `Accept-Language` header on the server... because there's no server.
- You can't do dynamic redirects from the application.

And I had one more constraint of my own: **don't break existing URLs**. My blog was already indexed by Google with URLs like `/blog/typescript-101/`, and moving them to `/en/blog/...` meant losing that ranking or filling everything with redirects.

## The architecture

Here's what I landed on:

1. **English at the root, Spanish under `/es/`.** The old URLs keep working as they are, and each language gets its own URLs (which matters for SEO, more on that below).
2. **Content lives in per language folders.** Every post exists with the same filename in `blog/en/` and `blog/es/`:

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

If a post has no translation, the site falls back to the other language and shows a "this post is only available in Spanish" notice. That way I can publish without being blocked by translation work.

3. **Pages are generated twice at build time.** The page components are shared and receive the locale as a prop; in `pages/` there are thin wrappers for the root (English) and for `/es/`. When `next build` runs, both full HTML trees come out.

4. **UI strings live in typed dictionaries.** A `locales/en.ts` that defines the type and a `locales/es.ts` that implements it. If I miss a translation, TypeScript won't compile. Zero i18n libraries.

## Language detection at the edge

Here comes the fun part. How do you detect the visitor's language with no server? With a **CloudFront Function**: a tiny piece of JavaScript that runs at CloudFront's edge on every request, before hitting the cache.

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

The logic is simple, and in this order:

1. It only acts on `/`, the front door. If you arrive with a direct link to a post, nobody redirects you anywhere.
2. The `lang` cookie wins first. It gets set when you use the language switcher in the navbar, so your explicit choice always beats detection.
3. If there's no cookie, it looks at the browser's `Accept-Language` header. If your first language is Spanish, you get a 302 to `/es/`.

The cost? CloudFront Functions includes 2 million invocations per month for free, forever. For a personal site, this is literally $0.

Two details that matter: the redirect is a **302, not a 301** (Google recommends temporary redirects for language based redirection, since the content at `/` does exist and you want it indexed), and it ships with `vary: Accept-Language, Cookie` so intermediate caches don't serve the redirect to the wrong person.

## The SEO

Having two languages is useless if Google doesn't understand how they relate. Every page ships:

- Its `<link rel="canonical">` pointing to itself.
- The `hreflang` alternates: `en`, `es` and `x-default`, pointing to each language version.
- The correct `lang` attribute on `<html>`, which in Pages Router you can resolve per page by reading the pathname in `_document`.
- A `sitemap.xml` generated at build time with the alternates for every URL, plus one RSS feed per language.

## What I learned

- **You don't need an i18n library for a content site.** One typed object per language and markdown folders solve 95% of the problem, with zero dependencies.
- **The edge is your server when you have no server.** CloudFront Functions (and their equivalents on other CDNs) give you exactly the tiny slice of dynamic logic a static site needs.
- **Constraints help you design.** Not being able to use middleware pushed me into an architecture that's simpler and cheaper than the "official" one.

All the code is in the [site's repo](https://github.com/Monge1h/monge1h.com) if you want to see the full implementation 👀
