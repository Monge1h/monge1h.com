import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/sections/Hero'
import Expertice from '../components/sections/Expertice'
import FeaturedProject from '../components/sections/FeaturedProject'
import Projects from '../components/sections/Projects'

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
      
      {/* Sections */}
      <Hero/>
      <Expertice/>
      <FeaturedProject/>
      <Projects/>
    </Layout>
  )
}

export default Home
