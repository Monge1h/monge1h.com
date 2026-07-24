import { GetStaticProps } from 'next'
import ListView, { ListProps } from '../../../components/views/ListView'
import { buildListProps } from '../../../lib/pageProps'

export const getStaticProps: GetStaticProps<ListProps> = async () => buildListProps('blog', 'es')

export default ListView
