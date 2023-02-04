import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
export default function Contact(){
	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Contact</title>
			</Head>

			<main className={`${styles.about_container} ${styles.contact_container}`}>
				<h2 className={styles.title_post}>
					You can find me in:
				</h2>
				<section className={styles.contact_text_container}>
					<div className={styles.contact_text_description}>
					<ul className={styles.contact_links}>
						<li className="linkedin-a list"><a className="linkedin-a link" target="_blank"  href="https://www.linkedin.com/in/monge1h/" rel="noreferrer">Linkedin</a></li>
						<li className="github-a list"><a className="link" target="_blank" href="https://www.github.com/monge1h/" rel="noreferrer">GitHub</a></li>
						<li className="dribbble-a list"><a className="dribbble-a link" target="_blank" href="https://dribbble.com/monge1h" rel="noreferrer">dribbble</a></li>
						<li className="yt-a list"><a className="yt-a link" target="_blank" href="https://www.youtube.com/monge1h" rel="noreferrer">YouTube</a></li>
						<li className="linkedin-a list"><a className="linkedin-a link" target="_blank"  href="https://calendly.com/monge1h" rel="noreferrer"> Schedule a meeting in calendly</a></li>
					</ul>
					</div>
				</section>
			</main>
		</Layout>
	)
}