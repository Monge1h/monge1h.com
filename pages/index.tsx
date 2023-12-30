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
        <title>{`${siteTitle}`}</title>
        <meta name="description" content="Jorge Monge homepage" />
        <meta name="author" content="Jorge Monge" />
        <meta name="author" content="monge1h" />
        <meta property="og:title" content="Jorge Monge" />
        <meta
          property="og:description"
          content="I create things for Internet, and I love to drink water"
        />
        <meta
          property="og:image"
          content="https://monge1h.com/images/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@monge1h" />
        <meta name="twitter:creator" content="@monge1h" />
        <meta name="twitter:image" content="https://monge1h.com/images/og.png" />
      </Head>
        {/* <main className="about-container"> */}
        <main className={styles.main_container}>
          <div className={styles.img_container}>
                <Image className={styles.img_profile} src="/images/Monge.jpg" alt="Profile Photo" height={181} width={176}/>
          </div>
          <section className={styles.text_container}>
            <div className={styles.text_description}>
            <p>Hi, I&apos;m a <Link className="linkedin-a link" target="_blank" href="https://www.linkedin.com/in/monge1h/" rel="noreferrer">Jorge.</Link> 🥝<br/>
        I’m a developer, I love to do cool <Link href="/projects" className="this-website-a link">projects</Link> and 
        <Link href="/blog" className="this-website-a link">writing</Link> about them,I also create{" "}
        <Link className="yt-a link" target="_blank" href="https://www.youtube.com/monge1h" rel="noreferrer">YouTube videos</Link> about tech things and I love to listen
        to <Link target="_blank" className="spotify-a link" href="https://open.spotify.com/user/12125703988?si=a265bf6ed44d4c9c" rel="noreferrer">music!</Link></p>
            </div>
          </section>
      </main>
    </Layout>
  )
}

export default Home
