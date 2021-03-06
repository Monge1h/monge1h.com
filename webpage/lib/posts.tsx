import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'blog')
const projectsDirectory = path.join(process.cwd(), 'projects')

export function getSortedPostsData(posts:boolean) {
  // Get file names under /posts
  let directory : string
  if(posts){
    directory = postsDirectory
  }else{
    directory = projectsDirectory
  }
  const fileNames = fs.readdirSync(directory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {date: string; title: string, post_description:string, post_image_header: string})
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds(posts:boolean) {
  let directory : string
  if(posts){
    directory = postsDirectory
  }else{
    directory = projectsDirectory
  }
  const fileNames = fs.readdirSync(directory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string, posts:boolean) {
  let directory : string
  if(posts){
    directory = postsDirectory
  }else{
    directory = projectsDirectory
  }
  const fullPath = path.join(directory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    markdown: matterResult.content,
    ...(matterResult.data as { date: string; title: string })
  }
}