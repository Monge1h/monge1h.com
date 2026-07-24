import Image from 'next/image'
import Link from 'next/link'
import { getDict, Locale, localizedPath } from '../../lib/i18n'
import { withYears } from '../../lib/experience'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons'

export default function Hero({ locale }: { locale: Locale }) {
  const dict = getDict(locale)

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 pb-20 pt-16 md:flex-row md:justify-between md:gap-16 md:pt-24">
      <div className="max-w-xl text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kiwi">
          {dict.hero.role} · {dict.hero.location}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {dict.hero.greeting} <span aria-hidden="true">🥝</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">
          {withYears(dict.hero.description)}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            href={localizedPath(locale, '/projects/')}
            className="rounded-full bg-kiwi px-6 py-2.5 font-semibold text-ink transition-colors hover:bg-kiwi-light"
          >
            {dict.hero.ctaProjects}
          </Link>
          <Link
            href={localizedPath(locale, '/blog/')}
            className="rounded-full border border-ink-border px-6 py-2.5 font-semibold text-zinc-200 transition-colors hover:border-kiwi hover:text-kiwi"
          >
            {dict.hero.ctaBlog}
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 md:justify-start">
          <a
            href="https://www.github.com/monge1h"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-kiwi"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/monge1h/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-kiwi"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:hey@monge1h.com"
            aria-label="Email"
            className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-kiwi"
          >
            <MailIcon />
            <span className="text-sm font-medium">hey@monge1h.com</span>
          </a>
        </div>
      </div>

      <Image
        src="/images/Monge.jpg"
        alt="Jorge Monge"
        width={208}
        height={208}
        priority
        className="h-44 w-44 rounded-full object-cover ring-2 ring-kiwi/70 ring-offset-4 ring-offset-ink md:h-52 md:w-52"
      />
    </section>
  )
}
