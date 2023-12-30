import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'

function returnPath():string{
	let images = ['/images/water-drink.gif','/images/water-bill-gates.gif','/images/dont-forget-to-drink-water.gif']
	return images[Math.floor(Math.random() * images.length)]
}

export default function Custom404(){
	return (
		<div className={styles.container}>
			<Head>
				<title>{`Jorge Monge | 404`}</title>
			</Head>
			<h1 className={styles.title_post}>404!</h1>
			<Image src={returnPath()} width='360' height='300'/>
			<p className={styles.text}>I don&apos;t know what you&apos;re looking for,
				but drink some water!
			</p>
			<Link href={'/'} className={`link ${styles.return_home}`}>Return Home</Link>
		</div>
	)
}