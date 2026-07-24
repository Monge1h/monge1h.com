import { GetStaticProps } from 'next'
import HomeView, { HomeProps } from '../components/views/HomeView'
import { buildHomeProps } from '../lib/pageProps'

export const getStaticProps: GetStaticProps<HomeProps> = async () => buildHomeProps('en')

export default HomeView
