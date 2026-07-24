import { GetStaticPaths, GetStaticProps } from 'next'
import PostView, { PostProps } from '../../components/views/PostView'
import { buildContentPaths, buildPostProps } from '../../lib/pageProps'

export const getStaticPaths: GetStaticPaths = async () => buildContentPaths('projects')

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) =>
  buildPostProps('projects', 'en', params?.id as string)

export default PostView
