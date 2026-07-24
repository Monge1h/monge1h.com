import { en, Dictionary } from '../locales/en'
import { es } from '../locales/es'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'
export const SITE_URL = 'https://monge1h.com'

export function getDict(locale: Locale): Dictionary {
  return locale === 'es' ? es : en
}

/**
 * Builds the locale-aware version of a locale-less path.
 * English lives at the root (`/blog/`), Spanish under `/es/` (`/es/blog/`).
 */
export function localizedPath(locale: Locale, path: string): string {
  if (locale === 'en') return path
  return path === '/' ? '/es/' : `/es${path}`
}

/** Strips the locale prefix, returning the locale-less path. */
export function stripLocale(asPath: string): string {
  const clean = asPath.split('#')[0].split('?')[0]
  if (clean === '/es' || clean === '/es/') return '/'
  if (clean.startsWith('/es/')) return clean.slice(3)
  return clean
}

/** Returns the equivalent of the current path in the target locale. */
export function switchLocalePath(asPath: string, to: Locale): string {
  return localizedPath(to, stripLocale(asPath))
}

export function localeOfPath(asPath: string): Locale {
  const clean = asPath.split('#')[0].split('?')[0]
  return clean === '/es' || clean.startsWith('/es/') ? 'es' : 'en'
}
