
import Layout, {siteTitle} from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from  '../../styles/Posts.module.css'
import { getAllPostIds , getPostData} from '../../lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({postData}:{
	postData: {
		title: string
		date:string
		id:string,
    contentHtml:string
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
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </p>

        <time className={`${styles.post_card__content__date} ${styles.post_date}`}>{postData.date}</time>
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
  const postData = await getPostData(params.id as string, false)
  return {
    props: {
      postData
    }
  }
}