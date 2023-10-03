
import Layout, { siteTitle } from '../components/layout'
import PostCard from '../components/postCard'
import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import { getSortedPostsData } from "../lib/posts"

export async function getStaticProps() {
	const allPostsData = getSortedPostsData(false)
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
    post_image_header: string
	post_image_alt:string
  }[]
}){
	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Projects</title>
			</Head>

			<main className={`${styles.main_container_blog_posts}`}>
				<h2 className={styles.title_post}>
					Projects:
				</h2>
				<section className={styles.blog_posts}>
					{ allPostsData.map(({id, date, title, post_description,post_image_header, post_image_alt})=>(
						<PostCard key={id} title={title} post_image_header={post_image_header} date={date} post_description={post_description} post_image_alt={post_image_alt} id={id} redirectTo={'projects'}/>
					)) }
       			</section>
			</main>
		</Layout>
	)
}