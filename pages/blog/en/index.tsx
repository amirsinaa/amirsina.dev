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
  EnglishPublishedArticlesData
} from '@/data/english-published-articles-data'
import Meta from '@/components/skeleton/meta'
import { formatBlogPostUrl } from '@/components/blog/helpers/format-blog-post-url'
import Link from 'next/link'
import { FaRegHandPointRight } from 'react-icons/fa'
import { Breadcrumb } from '@/components/blog/breadcrumb'
import { useRouter } from 'next/router'
import { GoBackButton } from '@/components/user-interface-utilities/go-back-button'

function EnglishBlogPosts({ enArticles }) {
  const router = useRouter();
  const { route } = router;
  return (
    <>
      <Meta
        title='English blog posts'
        description='informative and detailed frontend development articles and guides'
        keywords='development blog, programming blog, web, frontend, software, engineer,software engineer,front-end blog'
      />
      <GoBackButton routerInstance={router} />
      <Breadcrumb route={route} />
      <Card borderRadius='xl' marginTop={3} boxShadow='md'>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4' textAlign='left' dir='ltr'>
            {enArticles.map((post, index) => (
              <Box key={post.id}>
                <Heading size='sm'>
                  <Link href={formatBlogPostUrl(`/blog/en/${post.id}/${encodeURIComponent(formatBlogPostUrl(post.title))}`)}>
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
                  <FaRegHandPointRight />
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
  const enArticles = EnglishPublishedArticlesData.slice(0, 3)

  return {
    props: {
      enArticles
    },
    revalidate: 500,
  }
}

export default EnglishBlogPosts
