import {
  VStack,
  Center,
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import { MotionBox } from "@/components/user-interface-utilities/chakra-factory";
import { container } from "@/components/user-interface-utilities/transitions";
import { useState, useEffect } from "react";
import SkillsProps from "@/types/skill";
import SkillCard from "./skill-card";

const Skills = ({ skills }: SkillsProps) => {
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    setSkillsList(skills);
  }, []);

  return (
    <Box
      textAlign="center"
      mx={0}
    >
      <VStack mx={0} spacing={0}>
        <Center as="section" width="100%" mx={0}>
          <Box
            textAlign="center"
            fontSize="xl"
            m={["auto", "initial"]}
            w={["100%"]}
            px={["0", "0", "0.5rem"]}

          >
            <MotionBox
              variants={container}
              initial="hidden"
              mx={0}
              spacing={0}
              animate="visible"
            >
              <SimpleGrid columns={[2, 2, 3, 3, 4]} spacing={4} mt={8}>
                {skillsList.map((tool) => (
                  <SkillCard
                    key={tool.id}
                    name={tool.name}
                    image={tool.image}
                    link={tool.link}
                  />
                ))}
              </SimpleGrid>
            </MotionBox>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
};

export default Skills;
