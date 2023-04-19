import {
  Highlight,
  Center,
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
          <Flex direction={['column', 'column', 'row']} pt={10} mt={9}>
            <MotionBox p={'1.9rem'} pt={0} pb={0} m='auto' mb={[16, 16, 'auto']}>
              <Avatar
                size={'3xl'}
                src={''}
              />
            </MotionBox>
            <MotionBox
              m={['auto', 'initial']}
              w={['90%', '85%', '80%']}
              p={['2rem']}
              maxW='800px'
              opacity='0'
              justify='center'
              bg='white'
              borderRadius='xl'
              boxShadow='lg'
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

              <Box as='p' fontSize='2xl' fontWeight='400' textAlign='left' mt={1} mb={2.5}>
                Hi !
              </Box>
              <Box as='p' mb={2} fontSize='2xl' fontWeight='400' textAlign='left'>
                <Highlight
                  query={['Amirsina Shadkami']}
                  styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.600', color: 'white', fontWeight: 'bold' }}
                >My name is Amirsina Shadkami.</Highlight>

              </Box>
              <Box as='p' mt={2} textAlign={['justify']} fontSize='md' pt='2rem'>
                <Highlight
                  query={['developer', 'Reactjs', 'JavaScript']}
                  styles={{ px: '1.5', py: '0.5', rounded: 'full', bg: 'teal.100' }}
                >
                  I&aposm an accomplished Front-end developer with extensive experience in (JavaScript, Reactjs), modern web paradigms  (e.g., PWA, JAMstack) , widely used frameworks and some other various modern web technologies and tools.
                </Highlight>
              </Box>
              <Center mt='2rem'>
                <Stack direction={['column', 'row']}>
                  <AnimatedButton
                    link='/about'
                    icon={<VscPerson />}
                    background='green'
                    hoverBackground='darkgreen'
                    text='About me'
                  />
                  <AnimatedButton
                    link='/about'
                    icon={<VscBook />}
                    background='purple'
                    hoverBackground='green'
                    text='Blog'
                  />
                  <AnimatedButton
                    link='/skills'
                    icon={<BsWrench />}
                    background='yellow'
                    hoverBackground='skyblue'
                    text='My Skills'
                  />
                  <AnimatedButton
                    link='/projects'
                    icon={<BsCodeSlash />}
                    background='pink'
                    hoverBackground='orangered'
                    text='Projects'
                  />
                </Stack>
              </Center>
            </MotionBox>
          </Flex>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  )
}