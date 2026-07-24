import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Layout from '../layout'
import Seo from '../seo'
import Kofi from '../kofiWidget'
import { ContentData, Section } from '../../lib/content'
import { getDict, Locale, localizedPath, SITE_URL } from '../../lib/i18n'

export interface PostProps {
  locale: Locale
  section: Section
  postData: ContentData
}

export default function PostView({ locale, section, postData }: PostProps) {
  const dict = getDict(locale)
  const isBlog = section === 'blog'
  const path = `/${section}/${postData.id}/`
  const shareUrl = `https://twitter.com/share?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`${SITE_URL}${localizedPath(locale, path)}`)}&via=monge1h`

  const jsonLd = isBlog
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: postData.title,
        description: postData.post_description,
        image: `${SITE_URL}${postData.og_image ?? postData.post_image_header}`,
        datePublished: postData.date,
        inLanguage: postData.translated ? locale : locale === 'en' ? 'es' : 'en',
        author: {
          '@type': 'Person',
          name: 'Jorge Monge',
          url: SITE_URL,
        },
      }
    : undefined

  return (
    <Layout locale={locale}>
      <Seo
        locale={locale}
        title={`${postData.title} · ${dict.siteName}`}
        description={postData.post_description}
        path={path}
        image={postData.og_image ?? postData.post_image_header}
        type="article"
        publishedTime={postData.date}
        jsonLd={jsonLd}
      />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between text-sm">
          <Link
            href={localizedPath(locale, `/${section}/`)}
            className="font-semibold text-kiwi hover:text-kiwi-light"
          >
            ← {isBlog ? dict.post.backToBlog : dict.post.backToProjects}
          </Link>
          <time dateTime={postData.date} className="text-zinc-500">
            {postData.date}
          </time>
        </div>

        {!postData.translated && (
          <p className="mb-8 rounded-xl border border-kiwi/30 bg-kiwi/10 px-4 py-3 text-sm text-zinc-200">
            {dict.post.notTranslated}
          </p>
        )}

        <div className="mb-10 overflow-hidden rounded-2xl border border-ink-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={postData.post_image_header}
            alt={postData.post_image_alt}
            className="max-h-[420px] w-full object-cover"
          />
        </div>

        <div className="prose prose-invert prose-kiwi max-w-none prose-headings:tracking-tight prose-img:rounded-xl">
          <ReactMarkdown
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter style={nord} language={match[1]} PreTag="div">
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {postData.markdown}
          </ReactMarkdown>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-ink-border pt-6 text-sm text-zinc-500">
          <time dateTime={postData.date}>{postData.date}</time>
          <a
            href={shareUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-kiwi hover:text-kiwi-light"
          >
            {dict.post.share}
          </a>
        </div>

        <Kofi />
      </article>
    </Layout>
  )
}
