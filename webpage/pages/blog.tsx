
import Layout, { siteTitle } from '../components/layout'
import PostCard from '../components/postCard'
import Head from 'next/head'
import styles from '../styles/Blog.module.css'
export default function Contact(){
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
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
       			</section>
			</main>
		</Layout>
	)
}