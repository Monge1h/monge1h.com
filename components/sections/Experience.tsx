import { getDict, Locale } from '../../lib/i18n'
import SectionHeading from './SectionHeading'

export default function Experience({ locale }: { locale: Locale }) {
  const dict = getDict(locale)

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading>{dict.experience.title}</SectionHeading>

      <ol className="ml-2 mt-10 space-y-12 border-l border-ink-border">
        {dict.experience.jobs.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-8">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-kiwi ring-4 ring-ink" />
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {job.period}
            </p>
            <h3 className="mt-1.5 text-xl font-semibold text-white">
              {job.title} · <span className="text-kiwi">{job.company}</span>
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              {job.type} · 📍 {job.location}
            </p>
            <div className="mt-3 space-y-2">
              {job.description.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-ink-border bg-ink-soft px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
