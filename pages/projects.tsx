import * as React from "react";
import { IndependentProjectsList } from "../data/IndependentProjectsList";
import { MotionBox } from "../components/UserInterfaceUtilities/motion";
import Projects from "../components/Projects";
import {
  Box,
  Stack,
  Heading,
  Flex
} from "@chakra-ui/react";
import { BsCodeSlash } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren
} from "components/UserInterfaceUtilities/PageTransitions";
import PageLayout from "../components/AppSkeleton/PageLayout";

const ProjectsPage = ({ projects }) => {
  return (
    <PageLayout
      title="Projects"
      description="List of freelance projects done by me"
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
                    Projects
                  </Box>
                  <Stack pl={3}>
                    <Box as={BsCodeSlash} size="25px" />
                  </Stack>
                </Flex>
              </Heading>
            </MotionBox>
            <Projects projects={projects} />
          </Box>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  const projects = IndependentProjectsList;
  return {
    props: {
      projects
    }
  };
}

export default ProjectsPage;
