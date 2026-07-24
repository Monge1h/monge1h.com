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
    <>
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
          </div>
        </nav>
      </header>

      {/* Mobile nav: floating button at thumb reach, bottom right corner */}
      <div className="md:hidden">
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />

        <ul
          className={`fixed right-5 z-50 w-60 origin-bottom-right rounded-2xl border border-ink-border bg-ink-soft p-2 shadow-2xl transition-all duration-200 ${
            open ? 'scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0'
          } bottom-[calc(5.75rem+env(safe-area-inset-bottom))]`}
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={localizedPath(locale, item.href)}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  item.active ? 'bg-kiwi/10 text-kiwi' : 'text-zinc-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-1 border-t border-ink-border pt-1">
            <Link
              href={switchHref}
              onClick={rememberLocale}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-zinc-200 transition-colors hover:bg-white/5"
            >
              <GlobeIcon className="h-5 w-5" />
              {dict.nav.switchLabel}
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="fixed right-5 z-50 flex h-14 w-14 flex-col items-center justify-center gap-1.5 rounded-full bg-kiwi text-ink shadow-lg shadow-black/40 transition-transform active:scale-95 bottom-[calc(1.25rem+env(safe-area-inset-bottom))]"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>
    </>
  )
}
