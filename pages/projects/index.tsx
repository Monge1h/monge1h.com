import { GetStaticProps } from 'next'
import ListView, { ListProps } from '../../components/views/ListView'
import { buildListProps } from '../../lib/pageProps'

export const getStaticProps: GetStaticProps<ListProps> = async () =>
  buildListProps('projects', 'en')

export default ListView
