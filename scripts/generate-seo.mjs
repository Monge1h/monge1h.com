// Generates sitemap.xml and RSS feeds into ./out after `next build`.
// Runs as the npm "postbuild" script, so the files ship with the static export.
import fs from 'node:fs'
import path from 'node:path'

const SITE_URL = 'https://monge1h.com'
const OUT_DIR = path.join(process.cwd(), 'out')
const LOCALES = ['en', 'es']

if (!fs.existsSync(OUT_DIR)) {
  console.error('generate-seo: ./out not found, run `next build` first')
  process.exit(1)
}

function readSection(section) {
  const ids = new Set()
  const entries = {}
  for (const locale of LOCALES) {
    const dir = path.join(process.cwd(), section, locale)
    entries[locale] = {}
    if (!fs.existsSync(dir)) continue
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue
      const id = file.replace(/\.md$/, '')
      ids.add(id)
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? ''
      const field = (name) =>
        frontmatter
          .match(new RegExp(`^${name}:\\s*(.*)$`, 'm'))?.[1]
          ?.trim()
          .replace(/^['"]|['"]$/g, '') ?? ''
      entries[locale][id] = {
        title: field('title'),
        description: field('post_description'),
        date: field('date'),
      }
    }
  }
  return { ids: Array.from(ids), entries }
}

const blog = readSection('blog')
const projects = readSection('projects')

const localizedPath = (locale, p) => (locale === 'en' ? p : p === '/' ? '/es/' : `/es${p}`)

// --- sitemap.xml ---------------------------------------------------------

const staticPaths = ['/', '/blog/', '/projects/', '/contact/']
const contentPaths = [
  ...blog.ids.map((id) => `/blog/${id}/`),
  ...projects.ids.map((id) => `/projects/${id}/`),
]

const urlEntries = [...staticPaths, ...contentPaths]
  .flatMap((p) =>
    LOCALES.map(
      (locale) => `  <url>
    <loc>${SITE_URL}${localizedPath(locale, p)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${localizedPath('en', p)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${localizedPath('es', p)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localizedPath('en', p)}"/>
  </url>`,
    ),
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`

fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemap)

// --- RSS feeds -----------------------------------------------------------

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

function rssFor(locale) {
  const items = blog.ids
    .map((id) => {
      const entry =
        blog.entries[locale][id] ?? blog.entries[locale === 'en' ? 'es' : 'en'][id]
      return entry ? { ...entry, id } : null
    })
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (entry) => `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${SITE_URL}${localizedPath(locale, `/blog/${entry.id}/`)}</link>
      <guid>${SITE_URL}${localizedPath(locale, `/blog/${entry.id}/`)}</guid>
      <description>${escapeXml(entry.description)}</description>
      <pubDate>${new Date(entry.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join('\n')

  const title = locale === 'es' ? 'Blog de Jorge Monge' : "Jorge Monge's Blog"
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${title}</title>
    <link>${SITE_URL}${localizedPath(locale, '/blog/')}</link>
    <description>${escapeXml(locale === 'es' ? 'Artículos sobre desarrollo web, JavaScript y TypeScript.' : 'Articles about web development, JavaScript and TypeScript.')}</description>
    <language>${locale}</language>
${items}
  </channel>
</rss>
`
}

fs.writeFileSync(path.join(OUT_DIR, 'rss.xml'), rssFor('en'))
fs.mkdirSync(path.join(OUT_DIR, 'es'), { recursive: true })
fs.writeFileSync(path.join(OUT_DIR, 'es', 'rss.xml'), rssFor('es'))

console.log(
  `generate-seo: wrote sitemap.xml (${(staticPaths.length + contentPaths.length) * LOCALES.length} urls), rss.xml, es/rss.xml`,
)
