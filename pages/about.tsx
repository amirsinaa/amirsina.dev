import { MotionBox } from "@/components/UserInterfaceUtilities/ChakraFactory";
import {
  Box,
  Stack,
  VStack,
  Heading,
  Tag,
  Flex,
  Text,
  Link,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition
} from "@/components/UserInterfaceUtilities/Transitions";
import { PublishedArticlesCollectionEnglish } from "@/data/PublishedArticlesCollectionEnglish";
import { PublishedArticlesCollectionPersian } from "@/data/PublishedArticlesCollectionPersian";
import { CompaniesCollection } from "@/data/CompaniesCollection";
import { EducationFacilities } from "@/data/EducationFacilities";
import { BsFillBriefcaseFill, BsStarFill } from "react-icons/bs";
import PageLayout from "@/components/AppSkeleton/PageLayout";
import { FaGraduationCap } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import NextLink from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  role?: string;
  period?: string;
  logo?: string;
  colorMode: string;
  alt?: string;
}

const Card = (props: CardProps) => {
  const { title, role, description, period, logo, colorMode, alt } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={"/assets/images/image_default_placeholder.png"}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Box
                as="p"
                textAlign="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {description}
              </Box>
              <Box
                as="p"
                textAlign="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
              </Box>
            </Stack>
          </Flex>
          <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </CardTransition>
  );
};

const ArticleCard = (props) => {
  const { children, articleSource, articleLink, title, lang, colorMode } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Box
                as="p"
                textAlign="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {children}
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </CardTransition>
  );
};

const About = ({ CompaniesCollection, EducationFacilities, PublishedArticlesCollectionEnglish, PublishedArticlesCollectionPersian }) => {
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      title="About"
      description="My educational and professional information"
    >
      <PageSlideFade>
        <StaggerChildren>
          <Box
            m={["auto", "initial"]}
            w={["90%", "100%", "100%"]}
            px={["0", "0", "2rem"]}
          >
            <MotionBox>
              <Heading>
                <Flex alignItems="center">
                  <Box as="strong" fontWeight="600">
                    Career
                  </Box>
                  <Stack pl={3}>
                    <Box as={BsFillBriefcaseFill} size="25px" />
                  </Stack>
                </Flex>
              </Heading>
            </MotionBox>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 3]}
              mt={12}
            >
              {CompaniesCollection.map((company, index) => (
                <MotionBox whileHover={{ y: -6, shadow: "lg" }} key={index}>
                  <Card
                    key={index}
                    title={company.title}
                    role={company.role}
                    period={company.period}
                    logo={company.logo}
                    colorMode={colorMode}
                  />
                  <Box mr={7} ml={7}>
                    <Box
                      as="p"
                      textAlign="justify"
                      mb={10}
                      fontSize="lg"
                      color={`mode.${colorMode}.career.subtext`}
                    >
                      ACACO is a custom software development and consulting company focusing on web and mobile software development. In this company, many projects have been done in different fields, most of which have been done by the following two main systems, and I have participated in them.
                    </Box>
                    {company.projects.map((project, index) => (
                      <MotionBox mt={3} mb={3} whileHover={{ y: -6, shadow: "lg" }} key={index}>
                        <Card
                          key={index}
                          title={project.title}
                          description={project.description}
                          logo={project.logo}
                          colorMode={colorMode}
                        />
                      </MotionBox>
                    ))}
                    <Box
                      as="p"
                      textAlign="justify"
                      mb={10}
                      fontSize="lg"
                      color={`mode.${colorMode}.career.subtext`}
                    >
                      During my career at ACA, I faced many different challenges and issues that resulted in learning new technologies and expanding my technical knowledge. Some of these challenges were:
                    </Box>
                    <List textAlign="justify"
                      mb={10}
                      fontSize="lg"
                      color={`mode.${colorMode}.career.subtext`}>
                      <ListItem mb={10}>
                        <ListIcon p={0} mb={1} as={BsStarFill} />
                        A dynamic solution for customers to design their site:
                        The UCMS content management system was not static, but for a long time customer landing pages were implemented by calling a set of system widgets and various templates were implemented for relatively small changes or a customer's subsites. We realized the need to come up with a solution so that we could provide the template build dynamically to the customer. At first, it was very vague but after testing and reviewing various solutions, I was able to come up with a prototype of the 'Page Builder System', which included tools for dynamic page building based on Bootstrap UI framework principles.
                        The UCMS system had plenty of widgets, but in a diffused and decentralized way, so to make the real power of the system available in one place I started rewriting multipurpose widgets from commonly used UCMS system modules so that users need only one widget from each module. A multipurpose widget that could do all the personalizations users needed, including changes in size, color, display models, etc.
                        The original prototype was completely acceptable and more features were gradually added to it.
                        The technologies that I learned by solving this problem and that helped me a lot in dynamizing the process were: ES6, Reactjs
                      </ListItem>
                      <ListItem mb={10}>
                        <ListIcon p={0} mb={1} as={BsStarFill} />
                        Non-Native mobile application:
                        One of our customers ( a university ) had an Android application for their students that was written in Java, in which a Webview was used and our system was loaded into an in-app-browser. But the developer was no longer able to add more features to it and there was no IOS version available, on the other hand in Iran, there were many complications and problems to publishing an application in the Apple App Store, so considering all these issues, we chose the PWA Approach. The challenge with this choice was that our system did not include an API. The result was the implementation of Restful API and GraphQL on the system and an advanced PWA that had various features such as authentication, offline accessibility, cache system, etc.
                        Technologies that this project made me learn: Vuejs, Nuxtjs, PWA, TailwindCSS, Docker, GraphQL
                      </ListItem>
                      <ListItem mb={10}>
                        <ListIcon p={0} mb={1} as={BsStarFill} />
                        Need to update the system stack:
                        Over time, we felt the need to update our system stack and its technologies. The approach we took was Headless CMS. First, the APIs that we implemented before in the project were extended. And for Front-end, I implemented an initial prototype with the help of React. Since Reactjs was not suitable for things like SEO because of client-side rendering, I rewrote the original prototype that was in React in Nextjs so that we could take advantage of the server-side rendering features.
                        Technologies that this project made me learn: Reactjs, Nextjs, Chakra-UI, PM2, Docker, SSR, Apollo GraphQL
                      </ListItem>
                    </List>
                  </Box>
                </MotionBox>
              ))}
            </VStack>
            <Heading>
              <Flex alignItems="center">
                <Box as="strong" fontWeight="600">
                  Education
                </Box>
                <Stack pl={3}>
                  <Box as={FaGraduationCap} size="25px" />
                </Stack>
              </Flex>
            </Heading>
            <VStack
              spacing={4}
              marginBottom={6}
              align="left"
              mx={[0, 0, 6]}
              mt={12}
            >
              {EducationFacilities.map((institute, index) => (
                <MotionBox whileHover={{ y: -6, shadow: "lg" }} key={index}>
                  <Card
                    key={index}
                    title={institute.title}
                    role={institute.role}
                    logo={institute.logo}
                    colorMode={colorMode}
                  />
                </MotionBox>
              ))}
            </VStack>
            <Heading>
              <Flex alignItems="center">
                <Box as="strong" fontWeight="600">
                  Articles
                </Box>
                <Stack pl={3}>
                  <Box as={RiArticleLine} size="25px" />
                </Stack>
              </Flex>
            </Heading>
            <Box
              m={["auto", "initial"]}
              px={["0", "0", "1rem"]}
              pt={["2.5rem"]}
            >
              <Box as="span">
                <Flex alignItems="center">
                  English
                </Flex>
              </Box>
              <VStack
                spacing={1}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={8}
              >
                {PublishedArticlesCollectionEnglish.map((enArticleItem, index) => (
                  <MotionBox whileHover={{ y: -6, shadow: "lg" }} key={index}>
                    <ArticleCard
                      key={index}
                      lang="fa"
                      title={enArticleItem.title}
                      colorMode={colorMode}
                    >
                      {enArticleItem.readFrom.map((enArticleItemReadFrom, index) => (
                        <NextLink key={index} href={enArticleItemReadFrom.articleLink} passHref>
                          <Link isExternal>
                            <Tag size="sm" fontWeight="bold" m={["0px", "0px", "5px"]}>
                              Read from : {enArticleItemReadFrom.articleSource}
                            </Tag>
                          </Link>
                        </NextLink>
                      ))}
                    </ArticleCard>
                  </MotionBox>
                ))}
              </VStack>
            </Box>
            <Box
              m={["auto", "initial"]}
              px={["0", "0", "1rem"]}
              pt={["0rem"]}
            >
              <Box as="span">
                <Flex alignItems="center">
                  Persian
                </Flex>
              </Box>
              <VStack
                spacing={1}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={8}
              >
                {PublishedArticlesCollectionPersian.map((faArticleItem, index) => (
                  <MotionBox whileHover={{ y: -6, shadow: "lg" }} key={index}>
                    <ArticleCard
                      key={index}
                      title={faArticleItem.title}
                      lang="fa"
                      colorMode={colorMode}
                    >
                      {faArticleItem.readFrom.map((faArticleItemReadFrom, index) => (
                        <NextLink key={index} href={faArticleItemReadFrom.articleLink} passHref>
                          <Link isExternal>
                            <Tag size="sm" fontWeight="bold" m={["0px", "0px", "5px"]}>
                              Read from : {faArticleItemReadFrom.articleSource}
                            </Tag>
                          </Link>
                        </NextLink>
                      ))}
                    </ArticleCard>
                  </MotionBox>
                ))}
              </VStack>
            </Box>
          </Box>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
      CompaniesCollection,
      EducationFacilities,
      PublishedArticlesCollectionEnglish,
      PublishedArticlesCollectionPersian
    }
  };
}

export default About;
