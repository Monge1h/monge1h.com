import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        {/* <main className="about-container"> */}
        <main className={styles.main_container}>
          <div className={styles.img_container}>
                <Image className={styles.img_profile} src="/images/Monge.jpg" alt="Profile Photo" height={181} width={176}/>
          </div>
          <section className={styles.text_container}>
            <div className={styles.text_description}>
            <p>Hi, I&apos;m a <a className="linkedin-a link" target="_blank" href="https://www.linkedin.com/in/monge1h/" rel="noreferrer">Jorge.</a> 🥝<br/>
        I’m a developer, I love to do cool <a className="this-website-a link" href="">projects</a> and 
        <Link href="/blog"><a className="this-website-a link"> writing</a></Link> about them,I also create{" "}
        <a className="yt-a link" target="_blank" href="https://www.youtube.com/monge1h" rel="noreferrer">YouTube videos</a> about tech things and I love to listen
        to <a target="_blank" className="spotify-a link" href="https://open.spotify.com/user/12125703988?si=a265bf6ed44d4c9c" rel="noreferrer">music!</a></p>
            </div>
          </section>
      </main>
    </Layout>
  )
}

export default Home
