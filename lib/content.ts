import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale, locales } from './i18n'

export type Section = 'blog' | 'projects'

export interface ContentMeta {
  id: string
  date: string
  title: string
  post_description: string
  post_image_header: string
  post_image_alt: string
  og_image: string
  featured?: boolean
  featured_description?: string
}

export interface ContentData extends ContentMeta {
  markdown: string
  /** false when the requested locale has no translation and we fell back. */
  translated: boolean
}

const root = process.cwd()

function sectionDir(section: Section, locale: Locale) {
  return path.join(root, section, locale)
}

function readEntry(section: Section, locale: Locale, id: string) {
  const fullPath = path.join(sectionDir(section, locale), `${id}.md`)
  if (!fs.existsSync(fullPath)) return null
  const matterResult = matter(fs.readFileSync(fullPath, 'utf8'))
  return {
    id,
    markdown: matterResult.content,
    ...(matterResult.data as Omit<ContentMeta, 'id'>),
  }
}

export function getSortedContent(section: Section, locale: Locale): ContentMeta[] {
  const ids = getContentIds(section)
  const entries = ids
    .map((id) => {
      const entry = readEntry(section, locale, id) ?? readEntry(section, otherLocale(locale), id)
      if (!entry) return null
      const { markdown, ...meta } = entry
      return meta
    })
    .filter((entry): entry is ContentMeta => entry !== null)
  return entries.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getFeaturedContent(section: Section, locale: Locale): ContentMeta | null {
  return getSortedContent(section, locale).find((entry) => entry.featured) ?? null
}

/** Union of ids across locales, so every post exists in both route trees. */
export function getContentIds(section: Section): string[] {
  const ids = new Set<string>()
  for (const locale of locales) {
    const dir = sectionDir(section, locale)
    if (!fs.existsSync(dir)) continue
    for (const fileName of fs.readdirSync(dir)) {
      if (fileName.endsWith('.md')) ids.add(fileName.replace(/\.md$/, ''))
    }
  }
  return Array.from(ids)
}

export function getContentPaths(section: Section) {
  return getContentIds(section).map((id) => ({ params: { id } }))
}

export function getContent(section: Section, locale: Locale, id: string): ContentData {
  const entry = readEntry(section, locale, id)
  if (entry) return { ...entry, translated: true } as ContentData
  const fallback = readEntry(section, otherLocale(locale), id)
  if (!fallback) throw new Error(`Content not found: ${section}/${id}`)
  return { ...fallback, translated: false } as ContentData
}

function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'es' : 'en'
}
