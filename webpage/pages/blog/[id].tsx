import Layout, {siteTitle} from '../../components/layout'
import Head from 'next/head'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {nord} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image'
import styles from  '../../styles/Posts.module.css'
import ReactMarkdown from 'react-markdown'
import { getAllPostIds , getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({postData}:{
	postData: {
		title: string
		date:string
		id:string,
    contentHtml:string,
    markdown:string,
	}
}) {
  return (
    <Layout>

			<Head>
				<title>{siteTitle} | {postData.title}</title>
			</Head>
   <main className={styles.post_container}>
        <h2 className={styles.post_container__title}>{postData.title}</h2>
        <div className={styles.post_container_imgcont}>
            <Image className={styles.post_container_imgcont__img} height={500} width={1120} src="/images/alien.gif" alt="alien gif" />
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

        <time className={`${styles.post_card__content__date} ${styles.post_date}`}>{postData.date}</time>
   </main>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(true)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string, true)
  return {
    props: {
      postData
    }
  }
}