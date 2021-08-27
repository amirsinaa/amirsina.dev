import { VStack, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "./card";
import { AnimateSharedLayout } from "framer-motion";
import { MotionBox } from "../UserInterfaceUtilities/motion";

interface ProjectsProps {
  projects: project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack mx={2} align="start" spacing={8}>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -4.5, scale: 1.01 }} key={index}>
              <ProjectCard
                title={project.title}
                description={project.desc}
                blurHash={project.blurHash}
                logo={project.logo}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </AnimateSharedLayout>
    </VStack>
  );
};

export default Projects;
