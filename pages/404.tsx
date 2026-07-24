import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getDict, Locale } from '../lib/i18n'

const gifs = [
  '/images/water-drink.gif',
  '/images/water-bill-gates.gif',
  '/images/dont-forget-to-drink-water.gif',
]

export default function Custom404() {
  // Both locale and gif depend on the browser, so resolve them after mount
  // to keep the statically exported HTML hydration-safe.
  const [locale, setLocale] = useState<Locale>('en')
  const [gif, setGif] = useState<string | null>(null)

  useEffect(() => {
    if (window.location.pathname.startsWith('/es')) setLocale('es')
    setGif(gifs[Math.floor(Math.random() * gifs.length)])
  }, [])

  const dict = getDict(locale)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Head>
        <title>Jorge Monge | 404</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="text-7xl font-bold tracking-tight text-kiwi">{dict.notFound.title}</h1>
      <div className="mt-8 h-[300px]">
        {gif && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={gif} width={360} height={300} alt="Drink water gif" className="rounded-2xl" />
        )}
      </div>
      <p className="mt-8 max-w-md text-lg text-zinc-400">{dict.notFound.text}</p>
      <Link
        href={locale === 'es' ? '/es/' : '/'}
        className="mt-8 rounded-full bg-kiwi px-6 py-2.5 font-semibold text-ink transition-colors hover:bg-kiwi-light"
      >
        {dict.notFound.back}
      </Link>
    </div>
  )
}
