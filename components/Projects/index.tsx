import { MotionBox } from "@/components/user-interface-utilities/chakra-factory";
import { VStack, SimpleGrid } from "@chakra-ui/react";
import { LayoutGroup } from "framer-motion";
import ProjectsProps from "@/types/project";
import ProjectCard from "./project-card";


const Projects = ({ projects }: ProjectsProps) => {
  return (
    <VStack mx={2} align="start" spacing={8}>
      <LayoutGroup>
        <SimpleGrid columns={1} spacing={4} mt={5} w="100%">
          {projects.map((project) => (
            <MotionBox whileHover={{ y: -4.5, scale: 1.01 }} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                logo={project.logo}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </LayoutGroup>
    </VStack>
  );
};

export default Projects;
