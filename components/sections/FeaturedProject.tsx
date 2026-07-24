import Link from 'next/link'
import { ContentMeta } from '../../lib/content'
import { getDict, Locale, localizedPath } from '../../lib/i18n'
import SectionHeading from './SectionHeading'

export default function FeaturedProject({
  locale,
  project,
}: {
  locale: Locale
  project: ContentMeta
}) {
  const dict = getDict(locale)

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading>{dict.featured.title}</SectionHeading>

      <Link
        href={localizedPath(locale, `/projects/${project.id}/`)}
        className="group mt-10 block overflow-hidden rounded-2xl border border-ink-border bg-ink-soft transition-colors hover:border-kiwi/60"
      >
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-white transition-colors group-hover:text-kiwi">
              {project.title}
            </h3>
            <p className="leading-relaxed text-zinc-400">
              {project.featured_description ?? project.post_description}
            </p>
            <span className="mt-2 inline-flex items-center gap-2 font-semibold text-kiwi">
              {dict.featured.cta}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
          <div className="order-first aspect-video overflow-hidden md:order-none md:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.post_image_header}
              alt={project.post_image_alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </Link>
    </section>
  )
}
