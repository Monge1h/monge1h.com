
import Layout, {siteTitle} from '../../components/layout'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {nord} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Head from 'next/head'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styles from  '../../styles/Posts.module.css'
import { getAllPostIds , getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import Kofi from '../../components/kofiWidget'

export default function Post({postData}:{
	postData: {
		title: string
		date:string
		id:string,
		post_image_header:string,
    og_image:string,
		post_description:string,
		post_image_alt:string,
    contentHtml:string,
    markdown:string
	}
}) {
  return (
    <Layout>
			<Head>
				<title>{siteTitle} | {postData.title}</title>
        <meta name="description" content={postData.post_description} />
        <meta property="og:title" content={postData.title} />
        <meta
          property="og:description"
          content={postData.post_description}
        />
        <meta
          property="og:image"
          content={`https://monge1h.com${postData.og_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Monge1h" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.post_description} />
        <meta name="twitter:image:src" content={`https://monge1h.com${postData.og_image}`}/>
			</Head>
   <main className={styles.post_container}>
     <div className={styles.post_container_padding}>
        <div className={styles.post_container_imgcont}>
            <Image className={styles.post_container_imgcont__img} height={500} width={1120} src={postData.post_image_header} alt={postData.post_image_alt} />
        </div>
     </div>
        <p className={styles.post_container__content}>
          <ReactMarkdown components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
            <SyntaxHighlighter 
              style={nord} 
              language={match[1]} 
              PreTag="div">
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>

            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
          }}>{ postData.markdown}</ReactMarkdown>
        </p>

        <div className={styles.footer_blog}>
        <time className={`${styles.post_card__content__date} ${styles.post_date}`}>{postData.date}</time>
          <a target="_blank"
              href={`http://twitter.com/share?text=${postData.title}&url=https://monge1h.com/projects/${postData.id}&via=monge1h`}
              className={`${styles.post_card__content__date} ${styles.post_date} link`} rel="noreferrer"
            >
              Share on Twitter
            </a>{' '}
        </div>
        <Kofi/>
   </main>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(false)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string, false)
  return {
    props: {
      postData
    }
  }
}