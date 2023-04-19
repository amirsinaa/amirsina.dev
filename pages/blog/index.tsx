import {
  Box,
  Text,
  Card,
  Stack,
  Badge,
  Divider,
  Heading,
  CardBody,
  CardFooter,
  CardHeader,
  StackDivider,
} from '@chakra-ui/react'
import AnimatedButton from '@/components/user-interface-utilities/animated-button'
import { formatBlogPostUrl } from '@/components/blog/helpers/format-blog-post-url'
import { BsFillArchiveFill } from 'react-icons/bs'
import {
  EnglishPublishedArticlesData
} from '@/data/english-published-articles-data'
import {
  PersianPublishedArticlesData
} from '@/data/persian-published-articles-data'
import Meta from '@/components/skeleton/meta'
import Link from 'next/link'
import { FaRegHandPointLeft, FaRegHandPointRight } from 'react-icons/fa'

function Blog({ enArticles, faArticles }) {
  return (
    <>
      <Meta
        title='Blog posts'
        description='informative and detailed frontend development articles and guides'
        keywords='development blog, programming blog, web, frontend, software, engineer,software engineer,front-end blog'
      />
      <Card borderRadius='xl' boxShadow='md'>
        <CardHeader>
          <Heading size='lg' color='purple'>Latest English Posts</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4' textAlign='left' dir='ltr'>
            {enArticles.map((post, index) => (
              <Box key={post.id}>
                <Heading size='sm'>
                  <Link href={`/blog/en/${post.id}/${encodeURIComponent(formatBlogPostUrl(post.title))}`}>
                    <Box fontSize='lg'>
                      <Badge p='0.15rem 0.5rem' fontSize='sm' variant='subtle' colorScheme='purple' mt='-1.5' mx='0.3rem'>
                        {index + 1}
                      </Badge>
                      <Text fontWeight='semibold' color='black' _hover={{
                        color: 'purple'
                      }} display='inline-block'>
                        {post.title}
                      </Text>
                    </Box>
                  </Link>
                </Heading>
                <Box pt='2' mx='2.2rem' fontSize='sm' display='inline-flex'>
                  <FaRegHandPointRight />
                  <Box p='1' mt='-2' as='p'>{post.summary}</Box>
                </Box>
              </Box>
            ))}
            {/* <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}> */}
            {/* </Text> */}
          </Stack>
        </CardBody>
        <Divider my='1rem' orientation='horizontal' h='0.4' mx='auto' display='flex' width='98%' bg='purple' borderRadius='3xl' />
        <CardFooter display='flex' justifyContent='end'>
          <AnimatedButton
            link='/blog/en'
            icon={<BsFillArchiveFill />}
            background='purple'
            hoverBackground='purple'
            text='See all'
          />
        </CardFooter>
      </Card>
      <Divider my='1rem' orientation='horizontal' h='1.5' mx='auto' display='flex' width='98%' bg='purple' borderRadius='3xl' />
      <Card borderRadius='xl' boxShadow='md'>
        <CardHeader>
          <Heading size='lg' color='purple'>آخرین پست ها فارسی</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4' textAlign='right' dir='rtl'>
            {faArticles.map((post, index) => (
              <Box key={post.id}>
                <Heading size='sm'>
                  <Link href={formatBlogPostUrl(`/blog/fa/${post.id}/${encodeURIComponent(formatBlogPostUrl(post.title))}`)}>
                    <Box fontSize='lg'>
                      <Badge p='0.15rem 0.5rem' fontSize='sm' variant='subtle' colorScheme='purple' mx='0.3rem'>
                        {index + 1}
                      </Badge>
                      <Text fontWeight='semibold' color='black' _hover={{
                        color: 'purple'
                      }} display='inline-block'>
                        {post.title}
                      </Text>
                    </Box>
                  </Link>
                </Heading>
                <Box pt='2' mx='2.2rem' fontSize='sm' display='inline-flex'>
                  <FaRegHandPointLeft color='purple' />
                  <Box p='1' mt='-2' as='p'>{post.summary}</Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </CardBody>
        <Divider my='1rem' orientation='horizontal' h='0.4' mx='auto' display='flex' bg='purple' borderRadius='3xl' />
        <CardFooter>
          <AnimatedButton
            link='/blog/en'
            icon={<BsFillArchiveFill />}
            background='purple'
            hoverBackground='purple'
            text='مشاهده همه'
          />
        </CardFooter>
      </Card>
    </>
  )
}

export async function getStaticProps() {
  const enArticles = EnglishPublishedArticlesData.slice(0, 3)
  const faArticles = PersianPublishedArticlesData.slice(0, 3)

  return {
    props: {
      enArticles,
      faArticles
    },
    revalidate: 500,
  }
}

export default Blog
