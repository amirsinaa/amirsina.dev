import Head from 'next/head'
import { MetaInfo } from '@/types/meta'

const Meta = ({ title, keywords, description, image, type, locale, url, handle, siteName }: MetaInfo): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={image ? image : '/logo.png'} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={handle} />
      <meta name="twitter:title" content={title} />
      {type === 'article' && <meta property="article:author" content={locale === 'en' ? 'Amirsina Shadkami' : 'امیرسینا شادکامی'} />}
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Amirsina Shadkami - Frontend Developer',
  keywords: 'development, programming, web, frontend, software, engineer,software engineer,Front-end developer',
  description: 'Accomplished Front-end developer with extensive experience in (HTML5, CSS3, JavaScript Vanilla, Vuejs), modern web paradigms  (e.g., PWA, JAMstack) , widely used frameworks and some other various modern web technologies and tools.',
  type: 'website',
  locale: 'en',
  handle: '@amirsinaa'
}

export default Meta
