import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getDict, Locale, localizedPath, stripLocale, switchLocalePath } from '../lib/i18n'
import { GlobeIcon } from './icons'

export default function NavBar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const dict = getDict(locale)
  const router = useRouter()
  const bare = stripLocale(router.asPath)

  const items = [
    { href: '/', label: dict.nav.about, active: bare === '/' },
    { href: '/blog/', label: dict.nav.blog, active: bare.startsWith('/blog') },
    { href: '/projects/', label: dict.nav.projects, active: bare.startsWith('/projects') },
    { href: '/contact/', label: dict.nav.contact, active: bare.startsWith('/contact') },
  ]

  const otherLocale: Locale = locale === 'en' ? 'es' : 'en'
  const switchHref = switchLocalePath(router.asPath, otherLocale)

  const rememberLocale = () => {
    document.cookie = `lang=${otherLocale};path=/;max-age=31536000;samesite=lax`
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href={localizedPath(locale, '/')}
          className="text-lg font-semibold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Jorge Monge<span className="text-kiwi">.</span>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className={`transition-colors hover:text-white ${item.active ? 'text-white' : 'text-zinc-400'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={switchHref}
            onClick={rememberLocale}
            aria-label={dict.nav.switchLabel}
            title={dict.nav.switchLabel}
            className="flex items-center gap-1.5 rounded-full border border-ink-border px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-kiwi hover:text-kiwi"
          >
            <GlobeIcon className="h-4 w-4" />
            {dict.nav.switchShort}
          </Link>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-zinc-200 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-5 bg-zinc-200 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-5 bg-zinc-200 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/5 px-6 py-4 md:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={localizedPath(locale, item.href)}
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-base font-medium ${item.active ? 'text-kiwi' : 'text-zinc-300'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
