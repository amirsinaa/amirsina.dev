import {
  useColorModeValue,
  useColorMode,
  ListItem,
  ListIcon,
  Heading,
  VStack,
  Stack,
  Flex,
  List,
  Box,
} from '@chakra-ui/react'
import {
  PageSlideFade,
  StaggerChildren
} from '@/components/user-interface-utilities/transitions'
import { EnglishPublishedArticlesData } from '@/data/english-published-articles-data'
import type { EducationFacilities } from '@/types/education'
import type { Companies } from '@/types/company'
import AnimatedButton from '@/components/user-interface-utilities/animated-button'
import { PersianPublishedArticlesData } from '@/data/persian-published-articles-data'
import { CompaniesData } from '@/data/companies-data'
import { EducationFacilitiesData } from '@/data/education-facilities-data'
import { BsFillBriefcaseFill, BsStarFill } from 'react-icons/bs'
import PageLayout from '@/components/skeleton/page-layout'
import { FaGraduationCap } from 'react-icons/fa'
import { RiArticleLine } from 'react-icons/ri'
import { VscBook } from 'react-icons/vsc'
import { CallToAction } from '@/components/user-interface-utilities/call-to-action'
import Card from '@/components/user-interface-utilities/card'

const About = ({
  companies,
  education
}: {
  companies: Companies,
  education: EducationFacilities
}): JSX.Element => {

  const { colorMode } = useColorMode()

  return (
    <PageLayout
      title='About'
      description='My educational and professional information'
    >
      <PageSlideFade>
        <StaggerChildren>
          <Box
            m={['auto', 'initial']}
            w={['90%', '100%', '100%']}
            px={['0', '0', '2rem']}
          >
            <Heading>
              <Flex alignItems='center'>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size='25px' />
                </Stack>
                <Box as='strong' fontWeight='600' mx={1}>
                  Career
                </Box>
              </Flex>
            </Heading>
            <VStack
              spacing={4}
              marginBottom={6}
              align='left'
              mx={[0, 0, 3]}
              mt={12}
            >
              {companies.map((company) => (
                <Box key={company.id}>
                  <Card
                    title={company.title}
                    role={company.role}
                    bg={useColorModeValue('deepBlueSea.100', 'gray.700')}
                    color='white'
                    period={company.period}
                    logo={company.logo}
                  />
                  <Box mr={7} ml={7}>
                    <Box
                      as='p'
                      textAlign='justify'
                      mb={10}
                      fontSize='lg'
                      color={`mode.${colorMode}.career.subtext`}
                    >
                      {company.about}
                    </Box>
                    {company.projects.map((project) => (
                      <Card
                        key={project.id}
                        title={project.title}
                        bg={useColorModeValue('deepBlueSea.100', 'gray.700')}
                        color='white'
                        description={project.description}
                        logo={project.logo}
                      />
                    ))}
                    <Box
                      as='p'
                      textAlign='justify'
                      mb={10}
                      fontSize='lg'
                      color={`mode.${colorMode}.career.subtext`}
                    >
                      {company.challenges.intro}
                    </Box>
                    <List textAlign='justify'
                      mb={10}
                      fontSize='lg'
                      color={`mode.${colorMode}.career.subtext`}>
                      {company.challenges.data.map(item => <ListItem my={5} key={item.id} mb={10}><ListIcon p={0} mb={1} as={BsStarFill} />{item.text}</ListItem>)}
                    </List>
                  </Box>
                </Box>
              ))}
            </VStack>
            <Heading>
              <Flex alignItems='center'>
                <Box as='strong' fontWeight='600'>
                  Education
                </Box>
                <Stack pl={3}>
                  <Box as={FaGraduationCap} size='25px' />
                </Stack>
              </Flex>
            </Heading>
            <VStack
              spacing={4}
              marginBottom={6}
              align='left'
              mx={[0, 0, 6]}
              mt={12}
            >
              {education.map((institute) => (
                <Card
                  key={institute.id}
                  bg={useColorModeValue('deepBlueSea.100', 'gray.700')}
                  color='white'
                  title={institute.title}
                  role={institute.role}
                  logo={institute.logo}
                />
              ))}
            </VStack>
            <Heading>
              <Flex alignItems='center'>
                <Box as='strong' fontWeight='600'>
                  Articles
                </Box>
                <Stack pl={3}>
                  <Box as={RiArticleLine} size='25px' />
                </Stack>
              </Flex>
            </Heading>

            <CallToAction color='gray.900' bg='yellowish.100'>
              <Box as='h3' fontWeight='bolder' color={useColorModeValue('gray.900', 'white')} fontSize='33px' mt='-5px' display='flex'>Check my latest articles</Box>
              <AnimatedButton
                link='/blog'
                icon={<VscBook />}
                bg='deepBlueSea.100'
                color='white'
                text='English'
              />
              <AnimatedButton
                link='/blog'
                icon={<VscBook />}
                bg='white'
                color='deepBlueSea.100'
                text='Persian'
              />
            </CallToAction>
          </Box>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  )
}

export function getStaticProps() {
  const companies = CompaniesData
  const education = EducationFacilitiesData
  const enArticles = EnglishPublishedArticlesData
  const faArticles = PersianPublishedArticlesData
  return {
    props: {
      companies,
      education,
      enArticles,
      faArticles
    }
  }
}

export default About