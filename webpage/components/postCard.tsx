import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
import styles from './postCard.module.css'

export default function PostCard(){
	return (
           <a href="/post.html">
               <article className={styles.card_post}>
                   <div className={styles.img_card_container}>
                       <Image src="/images/alien.gif" alt="hotdog" width={133} height={123}/>
                    </div>
                    <div className={styles.post_card__content}>
                        <div className={styles.post_card__content__title}>
                            Hello World
                        </div>
                        <p className={styles.post_card__content__description}>
                            Hi, I&apos;m Jorge. 🥝 <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis aliquet massa, eget aliquet metus. In et scelerisque nibh. Praesent mattis, metus.
                        </p>
                        <time className={styles.post_card__content__date}>02/12/2021</time>
                    </div>
                </article>
            </a>
	)
}