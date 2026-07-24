import { getDict, Locale } from '../../lib/i18n'
import SectionHeading from './SectionHeading'

export default function About({ locale }: { locale: Locale }) {
  const dict = getDict(locale)

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading>{dict.about.title}</SectionHeading>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {dict.about.items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-ink-border bg-ink-soft p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-kiwi">
              {item.label}
            </p>
            <p className="mt-3 font-semibold text-white">{item.value}</p>
            <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
