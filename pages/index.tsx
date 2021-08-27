import * as React from "react";
import {
  Flex,
  Button,
  Center,
  Avatar,
  Stack,
  Link,
  Box
} from "@chakra-ui/react";
import { MotionBox } from "../components/UserInterfaceUtilities/motion";
import NextLink from 'next/link';
import { VscPerson } from "react-icons/vsc"
import { BsWrench, BsCodeSlash } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren,
} from "../components/UserInterfaceUtilities/PageTransitions";
import PageLayout from "../components/AppSkeleton/PageLayout";

export default function Index() {
  return (
    <PageLayout title="Amirsina Shadkami - Frontend Developer">
      <PageSlideFade>
        <StaggerChildren>
          <Flex direction={["column", "column", "row"]} pt={10} mt={9}>
            <MotionBox p={"1.9rem"} pt={0} pb={0} m="auto" mb={[16, 16, "auto"]}>
              <Avatar
                size={"3xl"}
                src={"https://avatars.githubusercontent.com/u/20769213?v=4"}
              />
            </MotionBox>
            <MotionBox
              m={["auto", "initial"]}
              w={["90%", "85%", "80%"]}
              px={["0", "0", "2rem"]}
              maxW="800px"
              opacity="0"
              justify="center"
              direction="column"
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
              <Box as="p" fontSize="2xl" fontWeight="400" textAlign="left" mt={1} mb={2.5}>
                <Box as="strong" fontWeight="600">Hi !</Box>
              </Box>
              <Box as="p" mb={2} fontSize="2xl" fontWeight="400" textAlign="left">
                My name is<Box as="strong" fontWeight="600"> Amirsina Shadkami.</Box>
                <Box as="p" mt={2} textAlign={["justify"]}>
                  I&apos;m a{" "} Accomplished Front-end developer with extensive experience in (HTML5, CSS3, JavaScript Vanilla, Vuejs), modern web paradigms  (e.g., PWA, JAMstack) , widely used frameworks and some other various modern web technologies and tools.
                </Box>
              </Box>
            </MotionBox>
          </Flex>
          <Flex direction={["column", "column", "row"]} justify="center" mt={10}>
            <Center>
              <Stack spacing={4} direction={["column", "row"]}>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  opacity="0"
                  justify="center"
                  initial={{
                    opacity: 0,
                    translateY: 150
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: {
                      duration: 0.6
                    }
                  }}
                >
                  <NextLink href={"/about"} passHref>
                    <Link>
                      <Button
                        leftIcon={<VscPerson />}
                        colorScheme="green"
                        variant="solid"
                        minW="250px"
                        fontWeight="bold"
                        _hover={{
                          bg: "darkgreen"
                        }}
                      >
                        More About me
                      </Button>
                    </Link>
                  </NextLink>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  opacity="0"
                  justify="center"
                  initial={{
                    opacity: 0,
                    translateY: 150
                  }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                    transition: {
                      duration: 0.7
                    }
                  }}
                >
                  <NextLink href={"/projects"} passHref>
                    <Link>
                      <Button
                        leftIcon={<BsCodeSlash />}
                        colorScheme="orange"
                        variant="solid"
                        minW="250px"
                        fontWeight="bold"
                        _hover={{
                          bg: "orangered"
                        }}
                      >
                        Projects
                      </Button>
                    </Link>
                  </NextLink>
                </MotionBox>
                <MotionBox
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  opacity="0"
                  justify="center"
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

                  <NextLink href={"/skills"} passHref>
                    <Link>
                      <Button
                        leftIcon={<BsWrench />}
                        colorScheme="blue"
                        variant="solid"
                        minW="250px"
                        fontWeight="bold"
                        _hover={{
                          bg: "skyblue"
                        }}
                      >
                        Skills
                      </Button>
                    </Link>
                  </NextLink>
                </MotionBox>
              </Stack>
            </Center>
          </Flex>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
}