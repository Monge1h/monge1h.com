import Link from 'next/link'
import styles from './postCard.module.css'

export default function PostCard(data:
    {
        title:string, 
        date:string ,
        post_description:string,
        id: string,
        redirectTo: string
    }){
	return (
          <Link href={`/${data.redirectTo}/${data.id}`}><a>
               <article className={styles.card_post}>
                   <div className={styles.img_card_container}>
                        <img  src="/images/alien.gif" alt="hotdog"/>
                    </div>
                    <div className={styles.post_card__content}>
                        <div className={styles.post_card__content__title}>
                            {data.title}
                        </div>
                        <p className={styles.post_card__content__description}>
                            {data.post_description} 
                        </p>
                        <time className={styles.post_card__content__date}>{data.date}</time>
                    </div>
                </article>
            </a>
        </Link> 
	)
}