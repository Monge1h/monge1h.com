import Head from 'next/head'
import { Toaster } from 'sonner'
import NavBar from './navBar'
import Footer from './sections/Footer'
import ViewerCount from './viewerCount/ViewerCount'
import { Locale } from '../lib/i18n'
import { ViewCountProvider } from '../contexts/ViewsCountContext'

export default function Layout({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <ViewCountProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ViewerCount locale={locale} />
      <Toaster theme="dark" />
      <div className="flex min-h-screen flex-col">
        <NavBar locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </div>
    </ViewCountProvider>
  )
}
