import {
  filterArticleSource
} from '@/components/blog/helpers/filter-article-source'
import { formatBlogPostUrl } from '@/components/blog/helpers/format-blog-post-url'
import {
  blogPostRedirect
} from '@/components/blog/helpers/redirect-blog-post'
import {
  PersianPublishedArticlesData
} from '@/data/persian-published-articles-data'
import { serialize } from 'next-mdx-remote/serialize'
import Meta from '@/components/skeleton/meta'
import smartypants from 'remark-smartypants'
import { MDXRemote } from 'next-mdx-remote'
import rehypePrism from 'rehype-prism-plus'
import { Box } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import Link from 'next/link'

function Blog({ data }) {
  return (
    <>
      <Meta
        title={data.title}
        description={data.title}
        keywords={data.keywords}
      />
      <Breadcrumb
        style={{
          background: 'rgb(237, 237, 237)',
          padding: '1em',
          borderRadius: '10px',
          boxShadow: '1px 1px 4px -2px #000'
        }}>
        <BreadcrumbItem>
          <Link href='#'>
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href='/blog/fa'>
            Fa
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{data.title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box
        as='article'
        my={10}
        className='blog-post'
        flexDirection='column'
        dir={data.language === 'fa' ? 'rtl' : 'ltr'}
        textAlign={data.language === 'fa' ? 'right' : 'left'}
      >
        <MDXRemote {...data.markdown} />
      </Box>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { id, title } = params
  const article = { data: filterArticleSource(params.id, PersianPublishedArticlesData) }
  const articleContent = await serialize(article.data?.markdown, {
    mdxOptions: {
      remarkPlugins: [smartypants],
      rehypePlugins: [rehypePrism],
    },
  })
  blogPostRedirect(title, formatBlogPostUrl(article.data?.title), `fa/${id}`);

  return {
    props: {
      data: {
        id: article.data.id,
        title: article.data.title,
        language: article.data.language,
        markdown: JSON.parse(JSON.stringify(articleContent)),
      },
    },
    revalidate: 500,
  }
}

export async function getStaticPaths() {
  const faArticles = PersianPublishedArticlesData
  const faPaths = faArticles.map((post) => ({
    params: {
      id: post.id.toString(),
      title: post.title
    },
  }))

  const paths = [...faPaths]

  return { paths, fallback: 'blocking' }
}

export default Blog