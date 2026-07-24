import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * Client-side fallback for the CloudFront locale redirect: only acts on the
 * English home page, mirroring the edge function (cookie first, then
 * browser language). Keeps language detection working in dev and previews.
 */
export default function LocaleRedirect() {
  const router = useRouter()

  useEffect(() => {
    if (window.location.pathname !== '/') return

    const cookie = document.cookie.match(/(?:^|;\s*)lang=(\w+)/)
    if (cookie) {
      if (cookie[1] === 'es') router.replace('/es/')
      return
    }

    if ((navigator.language || '').toLowerCase().startsWith('es')) {
      router.replace('/es/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
