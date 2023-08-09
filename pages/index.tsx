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

export default function Index() {
  return (
    <PageLayout title='Amirsina Shadkami - Frontend Developer'>
      <PageSlideFade>
        <StaggerChildren>
          <Flex
            mx={10}
            pos='relative'
            direction={['column', 'column', 'row']}
            pt='10%'
            mt='10%'
          >
            <MotionBox
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
                src={''}
                pos={['initial', 'absolute']}
                top='-30%'
                left='35%'
                zIndex={99}
                display={['block']}
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
                  My name is Amirsina Shadkami.
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
                  I&aposm an accomplished Front-end developer with extensive experience in (JavaScript, Reactjs), modern web paradigms  (e.g., PWA, JAMstack) , widely used frameworks and some other various modern web technologies and tools.
                </Highlight>
              </Box>
            </MotionBox>
          </Flex>
          <Flex
            mx={12}
            pos='relative'
            direction={['row']}
            pt={10}
            px={0}
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
                  link='/about'
                  width='25%'
                  icon={<VscPerson />}
                  buttonColorSchema='purple'
                  hoverBackground='purple'
                  text='About me'
                />
                <AnimatedButton
                  link='/blog'
                  width='25%'
                  icon={<VscBook />}
                  buttonColorSchema='orange'
                  hoverBackground='darkOrange'
                  text='Blog'
                />
                <AnimatedButton
                  link='/skills'
                  width='25%'
                  icon={<BsWrench />}
                  buttonColorSchema='yellow'
                  hoverBackground='gold'
                  text='My Skills'
                />
                <AnimatedButton
                  link='/projects'
                  width='25%'
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