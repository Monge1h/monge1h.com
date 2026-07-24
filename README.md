# monge1h.com

Personal website of Jorge Monge — portfolio, bilingual blog and personal playground.

## Stack

- [Next.js](https://nextjs.org/) (Pages Router, static export)
- Tailwind CSS
- Markdown content with per-locale folders (`blog/{en,es}`, `projects/{en,es}`)
- AWS S3 + CloudFront (infra in `terraform/`), deployed via GitHub Actions

## i18n

English lives at the root (`/`), Spanish under `/es/`. A CloudFront Function
(`terraform/functions/locale-redirect.js`) redirects `/` to `/es/` based on the
`lang` cookie (set by the language switcher) or the `Accept-Language` header.
`components/localeRedirect.tsx` mirrors that behavior client-side for dev.

To add a post, create the same file name in `blog/en/` and `blog/es/` (same slug
in both languages). If a translation is missing, the site falls back to the
other language and shows a notice.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs the static site to `./out` and generates `sitemap.xml` and the RSS
feeds (`rss.xml`, `es/rss.xml`) via the `postbuild` script.

## Tests

```bash
npm run test:e2e
```
