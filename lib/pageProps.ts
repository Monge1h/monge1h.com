import {
  getContent,
  getContentPaths,
  getFeaturedContent,
  getSortedContent,
  Section,
} from './content'
import { Locale } from './i18n'

export function buildHomeProps(locale: Locale) {
  const featured = getFeaturedContent('projects', locale)
  const projects = getSortedContent('projects', locale)
    .filter((project) => project.id !== featured?.id)
    .slice(0, 3)
  const posts = getSortedContent('blog', locale).slice(0, 3)
  return { props: { locale, featured, projects, posts } }
}

export function buildListProps(section: Section, locale: Locale) {
  return { props: { locale, section, items: getSortedContent(section, locale) } }
}

export function buildPostProps(section: Section, locale: Locale, id: string) {
  return { props: { locale, section, postData: getContent(section, locale, id) } }
}

export function buildContentPaths(section: Section) {
  return { paths: getContentPaths(section), fallback: false as const }
}
