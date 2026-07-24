import Layout from '../layout'
import Seo from '../seo'
import PostCard from '../postCard'
import { ContentMeta, Section } from '../../lib/content'
import { getDict, Locale, localizedPath } from '../../lib/i18n'

export interface ListProps {
  locale: Locale
  section: Section
  items: ContentMeta[]
}

export default function ListView({ locale, section, items }: ListProps) {
  const dict = getDict(locale)
  const isBlog = section === 'blog'
  const heading = isBlog ? dict.listing.blogHeading : dict.listing.projectsHeading
  const intro = isBlog ? dict.listing.blogIntro : dict.listing.projectsIntro
  const metaTitle = `${isBlog ? dict.meta.blogTitle : dict.meta.projectsTitle} · ${dict.siteName}`
  const metaDescription = isBlog ? dict.meta.blogDescription : dict.meta.projectsDescription

  return (
    <Layout locale={locale}>
      <Seo locale={locale} title={metaTitle} description={metaDescription} path={`/${section}/`} />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-white">{heading}</h1>
        <p className="mt-3 max-w-2xl text-lg text-zinc-400">{intro}</p>
        <div className="mt-3 h-1 w-12 rounded-full bg-kiwi" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PostCard
              key={item.id}
              item={item}
              href={localizedPath(locale, `/${section}/${item.id}/`)}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
