import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
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
import { Breadcrumb } from '@/components/blog/breadcrumb'
import { serialize } from 'next-mdx-remote/serialize'
import { BLOG_BASE_URL } from '@/constants/blog'
import Meta from '@/components/skeleton/meta'
import smartypants from 'remark-smartypants'
import { MDXRemote } from 'next-mdx-remote'
import rehypePrism from 'rehype-prism-plus'
import { useScroll } from 'framer-motion'
import { useRouter } from 'next/router'

function Blog({ data }) {
  const { asPath, route } = useRouter();
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Meta
        title={data.title}
        description={data.title}
        keywords={data.keywords}
        locale='fa'
        url={`${BLOG_BASE_URL}${asPath}`}
        type='article'
      />
      <MotionBox
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <Breadcrumb route={route} query={String(data.title)} />
      <MotionBox
        className='blog-post'
        as='article'
        my={10}
        flexDirection='column'
        dir={data.language === 'fa' ? 'rtl' : 'ltr'}
        textAlign={data.language === 'fa' ? 'right' : 'left'}
      >
        <MDXRemote {...data.markdown} />
      </MotionBox>
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
        host: JSON.stringify(params)
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