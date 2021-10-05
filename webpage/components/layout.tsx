import Head from 'next/head'

export const siteTitle = "Jorge Monge"

export default function Layout({children}:{
	children:React.ReactNode
}){
	return (
		<div>
			<Head>
    			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta 
				 	name="description"
					content=""
				/>
			</Head>
			<main>{children}</main>
			<h1>h</h1>
		</div>
	)
}