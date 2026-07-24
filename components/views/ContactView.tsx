import Layout from '../layout'
import Seo from '../seo'
import { getDict, Locale } from '../../lib/i18n'
import {
  CalendarIcon,
  DribbbleIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  YouTubeIcon,
} from '../icons'

const links = [
  { href: 'https://www.linkedin.com/in/monge1h/', label: 'LinkedIn', handle: '@monge1h', Icon: LinkedInIcon },
  { href: 'https://www.github.com/monge1h/', label: 'GitHub', handle: '@monge1h', Icon: GitHubIcon },
  { href: 'https://www.youtube.com/monge1h', label: 'YouTube', handle: '@monge1h', Icon: YouTubeIcon },
  { href: 'https://dribbble.com/monge1h', label: 'Dribbble', handle: '@monge1h', Icon: DribbbleIcon },
]

export default function ContactView({ locale }: { locale: Locale }) {
  const dict = getDict(locale)

  return (
    <Layout locale={locale}>
      <Seo
        locale={locale}
        title={`${dict.meta.contactTitle} · ${dict.siteName}`}
        description={dict.meta.contactDescription}
        path="/contact/"
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-white">{dict.contact.heading}</h1>
        <p className="mt-3 text-lg text-zinc-400">{dict.contact.intro}</p>
        <div className="mt-3 h-1 w-12 rounded-full bg-kiwi" />

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:hey@monge1h.com"
            className="flex items-center gap-2 rounded-full bg-kiwi px-6 py-2.5 font-semibold text-ink transition-colors hover:bg-kiwi-light"
          >
            <MailIcon className="h-5 w-5" />
            {dict.contact.email}
          </a>
          <a
            href="https://calendly.com/monge1h"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-border px-6 py-2.5 font-semibold text-zinc-200 transition-colors hover:border-kiwi hover:text-kiwi"
          >
            <CalendarIcon className="h-5 w-5" />
            {dict.contact.schedule}
          </a>
        </div>

        <h2 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {dict.contact.links}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {links.map(({ href, label, handle, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink-border bg-ink-soft p-5 transition-colors hover:border-kiwi/60"
              >
                <Icon className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-kiwi" />
                <span>
                  <span className="block font-semibold text-white">{label}</span>
                  <span className="block text-sm text-zinc-500">{handle}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
