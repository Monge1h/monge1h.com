import Head from 'next/head'
import { Locale, localizedPath, SITE_URL } from '../lib/i18n'

interface SeoProps {
  locale: Locale
  title: string
  description: string
  /** Locale-less path with trailing slash, e.g. `/blog/typescript-101/`. */
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  jsonLd?: Record<string, unknown>
}

export default function Seo({
  locale,
  title,
  description,
  path,
  image = '/images/og.png',
  type = 'website',
  publishedTime,
  jsonLd,
}: SeoProps) {
  const canonical = `${SITE_URL}${localizedPath(locale, path)}`
  const enUrl = `${SITE_URL}${localizedPath('en', path)}`
  const esUrl = `${SITE_URL}${localizedPath('es', path)}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jorge Monge" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      <meta property="og:site_name" content="Jorge Monge" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={locale === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:locale:alternate" content={locale === 'es' ? 'en_US' : 'es_ES'} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@monge1h" />
      <meta name="twitter:creator" content="@monge1h" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}
