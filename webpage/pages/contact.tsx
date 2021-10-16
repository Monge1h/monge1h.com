import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
export default function Contact(){
	return (
		<Layout>
			<Head>
				<title>{siteTitle} | Contact</title>
			</Head>
			<h1>Hola</h1>
		</Layout>
	)
}