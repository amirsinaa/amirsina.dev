import {
  Box,
  Text,
  Card,
  Stack,
  Badge,
  Heading,
  CardBody,
  StackDivider,
} from '@chakra-ui/react'
import {
  PersianPublishedArticlesData
} from '@/data/persian-published-articles-data'
import { formatBlogPostUrl } from '@/components/blog/helpers/format-blog-post-url'
import { FaRegHandPointLeft } from 'react-icons/fa'
import Meta from '@/components/skeleton/meta'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'

function PersianBlogPosts({ faArticles }) {
  return (
    <>
      <Meta
        title='وبلاگ فارسی - امیرسینا شادکامی'
        description='پست های آموزشی توسعه نرم افزار های تحت وب'
        keywords='development blog, programming blog, web, frontend, software, engineer,software engineer,front-end Blog,وب,فرانت اند,نرم افزار,'
      />
      <Breadcrumb style={{
        background: 'rgb(237, 237, 237)',
        padding: '1em',
        borderRadius: '10px',
        boxShadow: '1px 1px 4px -2px #000'
      }}>
        <BreadcrumbItem>
          <Link href='/blog'>
            Blog
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Fa</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Card borderRadius='xl' marginTop={3} boxShadow='md'>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4' textAlign='right' dir='rtl'>
            {faArticles.map((post, index) => (
              <Box key={post.id}>
                <Heading size='sm'>
                  <Link href={formatBlogPostUrl(`/blog/fa/${post.id}/${encodeURIComponent(formatBlogPostUrl(post.title))}`)}>
                    <Text fontSize='lg'>
                      <Badge p='0.15rem 0.5rem' fontSize='sm' variant='subtle' colorScheme='orange' mx='0.3rem'>
                        {index + 1}
                      </Badge>
                      <Text fontWeight='semibold' color='black' _hover={{
                        color: 'orange'
                      }} display='inline-block'>
                        {post.title}
                      </Text>
                    </Text>
                  </Link>
                </Heading>
                <Text pt='2' mx='2.2rem' fontSize='sm' display='inline-flex'>
                  <FaRegHandPointLeft />
                  <Box p='1' mt='-2' as='p'>{post.summary}</Box>
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

export async function getStaticProps() {
  const faArticles = PersianPublishedArticlesData.slice(0, 3)

  return {
    props: {
      faArticles
    },
    revalidate: 500,
  }
}

export default PersianBlogPosts
