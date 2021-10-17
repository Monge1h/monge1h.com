import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
import styles from './postCard.module.css'

export default function PostCard(data:
    {
        title:string, 
        date:string ,
        text_introduction:string
    }){
	return (
           <a href="/post.html">
               <article className={styles.card_post}>
                   <div className={styles.img_card_container}>
                       <Image src="/images/alien.gif" alt="hotdog" width={133} height={123}/>
                    </div>
                    <div className={styles.post_card__content}>
                        <div className={styles.post_card__content__title}>
                            {data.title}
                        </div>
                        <p className={styles.post_card__content__description}>
                            {data.text_introduction} 
                        </p>
                        <time className={styles.post_card__content__date}>{data.date}</time>
                    </div>
                </article>
            </a>
	)
}