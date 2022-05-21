import { MotionBox } from "@/components/UserInterfaceUtilities/ChakraFactory";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import ProjectsProps from "@/types/Project";
import ProjectCard from "./ProjectCard";


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <VStack mx={2} align="start" spacing={8}>
      <AnimateSharedLayout>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project, index) => (
            <MotionBox whileHover={{ y: -4.5, scale: 1.01 }} key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
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
