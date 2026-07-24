import Link from 'next/link'
import { ContentMeta } from '../lib/content'

export default function PostCard({ item, href }: { item: ContentMeta; href: string }) {
  return (
    <Link href={href} className="group h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-border bg-ink-soft transition hover:-translate-y-1 hover:border-kiwi/60">
        <div className="aspect-video overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.post_image_header}
            alt={item.post_image_alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <time dateTime={item.date} className="text-xs uppercase tracking-wide text-zinc-500">
            {item.date}
          </time>
          <h3 className="text-lg font-semibold leading-snug text-white transition-colors group-hover:text-kiwi">
            {item.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
            {item.post_description}
          </p>
        </div>
      </article>
    </Link>
  )
}
