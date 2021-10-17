
import Layout, { siteTitle } from '../components/layout'
import PostCard from '../components/postCard'
import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props:{
			allPostsData
		}
	}
}

export default function Contact({ 
	allPostsData 
} : {
	allPostsData: {
    date: string
    title: string
    id: string
    post_description: string
  }[]
}){
	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Blog</title>
			</Head>

			<main className={`${styles.main_container_blog_posts}`}>
				<h2 className={styles.title_post}>
					Posts:
				</h2>
				<section className={styles.blog_posts}>
					{ allPostsData.map(({id, date, title, post_description})=>(
						<PostCard key={id} title={title} date={date} post_description={post_description}/>
					)) }
       			</section>
			</main>
		</Layout>
	)
}