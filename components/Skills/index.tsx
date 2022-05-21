import {
  VStack,
  Center,
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import { MotionBox } from "@/components/UserInterfaceUtilities/ChakraFactory";
import { container } from "@/components/UserInterfaceUtilities/Transitions";
import { useState, useEffect } from "react";
import SkillsProps from "@/types/Skill";
import SkillCard from "./SkillCard";

const Skills: React.FC<SkillsProps> = ({ skills }) => {
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
                {skillsList.map((tool, index) => (
                  <SkillCard
                    key={index}
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
