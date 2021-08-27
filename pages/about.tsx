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
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition
} from "../components/UserInterfaceUtilities/PageTransitions";
import { MotionBox } from "../components/UserInterfaceUtilities/motion";
import { CompaniesCollection } from "data/CompaniesCollection";
import { EducationFacilities } from "data/EducationFacilities";
import { PublishedArticlesCollectionEnglish } from "data/PublishedArticlesCollectionEnglish";
import { PublishedArticlesCollectionPersian } from "data/PublishedArticlesCollectionPersian";
import NextLink from 'next/link';
import PageLayout from "../components/AppSkeleton/PageLayout";

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
  const { children,  articleSource, articleLink, title, lang, colorMode} = props;
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

const About = ({ CompaniesCollection, EducationFacilities, PublishedArticlesCollectionEnglish,PublishedArticlesCollectionPersian }) => {
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
            px={["0","0","2rem"]}
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
              px={["0","0","1rem"]}
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
                            <Tag  size="sm" fontWeight="bold" m={["0px","0px","5px"]}>
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
              px={["0","0","1rem"]}
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
                            <Tag  size="sm" fontWeight="bold" m={["0px","0px","5px"]}>
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
