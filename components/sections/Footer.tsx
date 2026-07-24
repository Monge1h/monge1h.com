import { useContext } from 'react'
import { getDict, Locale } from '../../lib/i18n'
import { ViewCountContext } from '../../contexts/ViewsCountContext'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, MailIcon, YouTubeIcon } from '../icons'

const socials = [
  { href: 'https://www.github.com/monge1h', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/monge1h/', label: 'LinkedIn', Icon: LinkedInIcon },
  { href: 'https://www.youtube.com/monge1h', label: 'YouTube', Icon: YouTubeIcon },
  { href: 'https://dribbble.com/monge1h', label: 'Dribbble', Icon: DribbbleIcon },
]

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDict(locale)
  const { viewCount } = useContext(ViewCountContext)

  return (
    <footer className="border-t border-ink-border bg-ink-soft/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {dict.footer.heading}
          </h2>
          <p className="mt-3 text-zinc-400">{dict.footer.text}</p>

          <div className="mt-8 flex items-center justify-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-zinc-400 transition-colors hover:text-kiwi"
              >
                <Icon />
              </a>
            ))}
            <a
              href="mailto:hey@monge1h.com"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-kiwi"
            >
              <MailIcon />
              <span className="hidden text-sm font-medium sm:inline">hey@monge1h.com</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-ink-border pt-6 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <span>© 2026 {dict.footer.rights}</span>
          {viewCount > 0 && (
            <p id="visitorCountFooter">
              {dict.footer.visitorLabel} {viewCount}
            </p>
          )}
          <span>{dict.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  )
}
