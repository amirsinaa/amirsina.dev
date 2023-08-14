import {
  Highlight,
  Avatar,
  Stack,
  Flex,
  Box
} from '@chakra-ui/react'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import {
  PageSlideFade,
  StaggerChildren,
} from '@/components/user-interface-utilities/transitions'
import AnimatedButton from '@/components/user-interface-utilities/animated-button'
import PageLayout from '@/components/skeleton/page-layout'
import { BsWrench, BsCodeSlash } from 'react-icons/bs'
import { VscPerson } from 'react-icons/vsc'
import { VscBook } from 'react-icons/vsc'
import SiteConfig from '@/configs/index'

export default function Index({ authorsName, authorsBio }) {
  return (
    <PageLayout title='Amirsina Shadkami - Frontend Developer'>
      <PageSlideFade>
        <StaggerChildren>
          <Flex
            mx={['1em', '0', '0']}
            pos='relative'
            direction={['column', 'column', 'row']}
            pt='10%'
            mt='10%'
          >
            <MotionBox
              pos='relative'
              initial={{
                opacity: 0,
                translateY: 150
              }}
              animate={{
                opacity: 1,
                translateY: 0,
                transition: {
                  duration: 0.8
                }
              }}
            >
              <Avatar
                size={'3xl'}
                src={'/assets/images/panir/1.jpeg'}
                width={300}
                height={300}
                border='3px solid'
                color='yellowish.100'
                boxShadow='2xl'
                position='absolute'
                overflowX='hidden'
                display={['none', 'none', 'flex', 'flex']}
                flexDir={'column'}
                zIndex='99'
                transform='translate(150%,-70%)'
                p={0.5}
                justifyContent='center'
                alignItems='center'
                alignSelf='center'
              />
            </MotionBox>
            <MotionBox
              m={['auto', 'initial']}
              p={['2rem']}
              opacity='0'
              justify='center'
              bg='deepBlueSea.100'
              color='white'
              borderRadius='xl'
              boxShadow='sm'
              direction='column'
              initial={{
                opacity: 0,
                translateX: 150
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.5
                }
              }}
            >
              <Box
                as='p'
                fontSize='2xl'
                fontWeight='400'
                textAlign='left'
                mt={1}
                mb={2.5}>
                Hi !
              </Box>
              <Box
                as='p'
                mb={2}
                fontSize='2xl'
                fontWeight='400'
                textAlign='left'
              >
                <Highlight
                  query={['Amirsina Shadkami']}
                  styles={{
                    px: '2',
                    py: '1',
                    rounded: 'full',
                    bg: 'yellowish.100',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {`My name is ${authorsName}.`}
                </Highlight>
              </Box>
              <Box
                as='p'
                mt={2}
                textAlign={['justify']}
                fontSize='md'
                pt='2rem'
              >
                <Highlight
                  query={['developer', 'Reactjs', 'JavaScript']}
                  styles={{
                    px: '1.5',
                    py: '0.5',
                    rounded: 'full',
                    bg: 'yellowish.100'
                  }}
                >
                  {String(authorsBio)}
                </Highlight>
              </Box>
            </MotionBox>
          </Flex>
          <Flex
            pos='relative'
            direction={['row']}
            pt={10}
            px={0}
            mb={10}
            mx={['1em', '0', '0']}
          >
            <MotionBox
              opacity='0'
              justify='center'
              w='100%'
              initial={{
                opacity: 0,
                translateX: 150
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.5
                }
              }}
            >
              <Stack
                direction={['column', 'column', 'column', 'row']}
                w='100%'
                justify='space-evenly'
              >
                <AnimatedButton
                  fontSize='21px'
                  link='/about'
                  width='50%'
                  icon={<VscPerson />}
                  buttonColorSchema='purple'
                  hoverBackground='purple'
                  text='About me'
                />
                <AnimatedButton
                  fontSize='21px'
                  link='/blog'
                  width='50%'
                  icon={<VscBook />}
                  buttonColorSchema='orange'
                  hoverBackground='darkOrange'
                  text='Blog'
                />
              </Stack>
              <Stack
                direction={['column', 'column', 'column', 'row']}
                w='100%'
                my={3}
                justify='space-evenly'
              >
                <AnimatedButton
                  fontSize='21px'
                  link='/skills'
                  width='50%'
                  icon={<BsWrench />}
                  buttonColorSchema='yellow'
                  hoverBackground='gold'
                  text='My Skills'
                />
                <AnimatedButton
                  fontSize='21px'
                  link='/projects'
                  width='50%'
                  icon={<BsCodeSlash />}
                  buttonColorSchema='pink'
                  hoverBackground='hotpink'
                  text='Projects'
                />
              </Stack>
            </MotionBox>
          </Flex>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  )
}


export function getStaticProps() {
  const author = SiteConfig.author
  return {
    props: {
      authorsName: author.name,
      authorsBio: author.about
    }
  }
}