import Image from 'next/image'
import styles from '../styles/404.module.css'

export default function Custom404(){
	return (
		<div>
			<h1>404!</h1>
			<Image src={'/images/water-drink.gif'} width='144' height='144'/>
			<p>I don&apos;t know what you&apos;re looking for,
				but drink some water
			</p>
		</div>
	)
}