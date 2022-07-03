import {
  Flex,
  Button,
  Center,
  Avatar,
  Stack,
  Link,
  Box
} from "@chakra-ui/react";
import { MotionBox } from "@/components/user-interface-utilities/chakra-factory";
import {
  PageSlideFade,
  StaggerChildren,
} from "@/components/user-interface-utilities/transitions";
import AnimatedButton from "@/components/user-interface-utilities/animated-button";
import PageLayout from "@/components/skeleton/page-layout";
import { BsWrench, BsCodeSlash } from "react-icons/bs";
import { VscPerson } from "react-icons/vsc"

export default function Index() {
  return (
    <PageLayout title="Amirsina Shadkami - Frontend Developer">
      <PageSlideFade>
        <StaggerChildren>
          <Flex direction={["column", "column", "row"]} pt={10} mt={9}>
            <MotionBox p={"1.9rem"} pt={0} pb={0} m="auto" mb={[16, 16, "auto"]}>
              <Avatar
                size={"3xl"}
                src={""}
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
                Hi !
              </Box>
              <Box as="p" mb={2} fontSize="2xl" fontWeight="400" textAlign="left">
                My name is Amirsina Shadkami.
              </Box>
              <Box as="p" mt={2} textAlign={["justify"]}>
                I&apos;m an{" "} accomplished Front-end developer with extensive experience in (HTML5, CSS3, JavaScript Vanilla, Vuejs), modern web paradigms  (e.g., PWA, JAMstack) , widely used frameworks and some other various modern web technologies and tools.
              </Box>
            </MotionBox>
          </Flex>
          <Flex direction={["column", "column", "row"]} justify="center" mt={10}>
            <Center>
              <Stack spacing={4} direction={["column", "row"]}>
                <AnimatedButton
                  link="/about"
                  icon={<VscPerson />}
                  background="green"
                  hoverBackground="darkgreen"
                  width="250px"
                  text="More About me"
                />
                <AnimatedButton
                  link="/skills"
                  icon={<BsWrench />}
                  background="blue"
                  hoverBackground="skyblue"
                  width="250px"
                  text="My Skills"
                />
                <AnimatedButton
                  link="/projects"
                  icon={<BsCodeSlash />}
                  background="orange"
                  hoverBackground="orangered"
                  width="250px"
                  text="Projects"
                />
              </Stack>
            </Center>
          </Flex>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
}