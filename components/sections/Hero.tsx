import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Scrolldown from '../scrolldown'

function Hero() {
  return (
    <>
    <main className={`${styles.main_container} md:tw-h-[80vh] tw-h-[95-vh]`}>
      <div className={styles.img_container}>
        <Image className={styles.img_profile} src="/images/Monge.jpg" alt="Profile Photo" height={181} width={176} />
      </div>
      <section className={styles.text_container}>
        <div className={styles.text_description} >
        <p>I&apos;m <Link className="linkedin-a link" target="_blank" href="https://www.linkedin.com/in/monge1h/" rel="noreferrer">Jorge Monge</Link> 🥝, a software engineer.</p>
          <p>I specialize in bringing ideas to life, taking them from concept to production with real <Link href="/projects" className="spotify-a link">products</Link>.</p>
          <p> I also enjoy <Link href="/projects" className="tw-text-kiwi link">writing</Link> about my projects and actively creating new <Link href="/projects" className="this-website-a link">projects</Link>. 🚀</p>


         </div>

        <div className='tw-flex tw-justify-around'>
          {/* github */}
          <a href="https://www.github.com/monge1h" target="_blank" rel="noreferrer" className="tw-p-2 tw-text-white  hover:tw-text-kiwi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-10 tw-w-10"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/monge1h/" target="_blank" rel="noreferrer" className="tw-p-2 tw-text-white  hover:tw-text-kiwi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="tw-h-10 tw-w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
          </a>
          {/* mail */}
          <a href="mailto:hey@monge1h.com" target="_blank" rel="noreferrer" className="tw-p-2 tw-text-white hover:tw-text-kiwi tw-flex tw-items-center">
            <svg
              className="tw-h-10 tw-w-10"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"></path>
              </g>
            </svg>
            <span className="tw-ml-2  tw-text-2xl">hey@monge1h.com</span>          
            </a>
        </div>
      </section>
    </main>
  <Scrolldown />
   </> 
  )
}

export default Hero