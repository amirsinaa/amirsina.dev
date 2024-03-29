import {
  useColorModeValue,
  Box
} from '@chakra-ui/react'
import { GoBackButton } from '@/components/user-interface-utilities/go-back-button'
import AnimatedButton from '@/components/user-interface-utilities/animated-button'
import { VscBook } from 'react-icons/vsc'
import { CallToAction } from '@/components/user-interface-utilities/call-to-action'
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
import type { Post } from '@/types/blog'
import BlogPostSemanticSchema from '@/components/blog/blog-post-semantic-schema'

function Blog({ data }: { data: Post }): JSX.Element {
  const router = useRouter();
  const { asPath, route } = router;
  const { scrollYProgress } = useScroll();

  return (
    <>
      <BlogPostSemanticSchema data={data} />
      <Meta
        title={data.title}
        description={data.summary}
        keywords={data.keywords}
        locale='fa'
        url={`${BLOG_BASE_URL}${asPath}`}
        type='article'
      />
      <MotionBox
        className='progress-bar'
        style={{ scaleX: scrollYProgress }}
      />
      <GoBackButton routerInstance={router} />
      <Breadcrumb route={route} query={String(data.title)} />
      <MotionBox
        className='blog-post'
        as='article'
        my={10}
        flexDirection='column'
        dir={data.language === 'fa' ? 'rtl' : 'ltr'}
        textAlign={data.language === 'fa' ? 'right' : 'left'}
      >
        {data.summary}
        <hr />
        <MDXRemote {...data.markdown} />
        <hr />
        <CallToAction color='gray.900' bg='yellowish.100'>
          <Box as='h3' fontWeight='bolder' color={useColorModeValue('gray.900', 'white')} fontSize='33px' mt='-5px' display='flex'>این مقاله ابتدا در ویرگول نوشته شده</Box>
          {data.readFrom.map(item => <AnimatedButton
            key={item.id}
            link={item.articleLink}
            icon={<VscBook />}
            bg='deepBlueSea.100'
            color='white'
            text={` بخوانید در ${item.articleSource} `}
          />)}
        </CallToAction>
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
        summary: article.data.summary,
        markdown: JSON.parse(JSON.stringify(articleContent)),
        readFrom: article.data.readFrom,
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