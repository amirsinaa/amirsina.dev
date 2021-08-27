import * as React from "react";
import { SkillsCollection } from "../data/SkillsCollection";
import { MotionBox } from "../components/UserInterfaceUtilities/motion";
import Skills from "../components/Skills";
import {
  Box,
  Stack,
  Heading,
  Flex
} from "@chakra-ui/react";
import { BsWrench } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren
} from "components/UserInterfaceUtilities/PageTransitions";
import PageLayout from "../components/AppSkeleton/PageLayout";

const ProjectsPage = ({ skills }) => {
  return (
    <PageLayout
      title="Skills"
      description="My most used skills"
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
                    My Skills
                  </Box>
                  <Stack pl={3}>
                    <Box as={BsWrench} size="25px" />
                  </Stack>
                </Flex>
              </Heading>
            </MotionBox>
            <Skills skills={skills} />
          </Box>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  const skills = SkillsCollection;
  return {
    props: {
      skills
    }
  };
}

export default ProjectsPage;
