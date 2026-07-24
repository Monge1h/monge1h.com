import Link from 'next/link'
import Layout from '../layout'
import Seo from '../seo'
import Hero from '../sections/Hero'
import Experience from '../sections/Experience'
import About from '../sections/About'
import FeaturedProject from '../sections/FeaturedProject'
import SectionHeading from '../sections/SectionHeading'
import PostCard from '../postCard'
import LocaleRedirect from '../localeRedirect'
import { ContentMeta } from '../../lib/content'
import { getDict, Locale, localizedPath, SITE_URL } from '../../lib/i18n'

export interface HomeProps {
  locale: Locale
  featured: ContentMeta | null
  projects: ContentMeta[]
  posts: ContentMeta[]
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jorge Monge',
  url: SITE_URL,
  image: `${SITE_URL}/images/Monge.jpg`,
  jobTitle: 'Senior Software Engineer',
  email: 'mailto:hey@monge1h.com',
  sameAs: [
    'https://www.github.com/monge1h',
    'https://www.linkedin.com/in/monge1h/',
    'https://www.youtube.com/monge1h',
    'https://dribbble.com/monge1h',
  ],
}

export default function HomeView({ locale, featured, projects, posts }: HomeProps) {
  const dict = getDict(locale)

  return (
    <Layout locale={locale}>
      <Seo
        locale={locale}
        title={dict.meta.homeTitle}
        description={dict.meta.homeDescription}
        path="/"
        jsonLd={personJsonLd}
      />
      <LocaleRedirect />

      <Hero locale={locale} />
      <Experience locale={locale} />
      <About locale={locale} />
      {featured && <FeaturedProject locale={locale} project={featured} />}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between">
          <SectionHeading>{dict.projectsSection.title}</SectionHeading>
          <Link
            href={localizedPath(locale, '/projects/')}
            className="text-sm font-semibold text-kiwi hover:text-kiwi-light"
          >
            {dict.projectsSection.viewAll} →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PostCard
              key={project.id}
              item={project}
              href={localizedPath(locale, `/projects/${project.id}/`)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between">
          <SectionHeading>{dict.blogSection.title}</SectionHeading>
          <Link
            href={localizedPath(locale, '/blog/')}
            className="text-sm font-semibold text-kiwi hover:text-kiwi-light"
          >
            {dict.blogSection.viewAll} →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              item={post}
              href={localizedPath(locale, `/blog/${post.id}/`)}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}
