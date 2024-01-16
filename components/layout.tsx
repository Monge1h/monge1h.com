import { Toaster } from 'sonner';

import Head from 'next/head'
import NavBar from './navBar'
import ViewerCount from './viewerCount/ViewerCount';

export const siteTitle = "Jorge Monge"

import { ViewCountProvider } from '../contexts/ViewsCountContext';

export default function Layout({ children }: {
	children: React.ReactNode
}) {
	return (
		<ViewCountProvider>
			<div>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta
						name="description"
						content=""
					/>
				</Head>
				<header>
					<ViewerCount />
					<NavBar />
				</header>
				<main>
					<Toaster />
					{children}</main>
			</div>
		</ViewCountProvider>
	)
}