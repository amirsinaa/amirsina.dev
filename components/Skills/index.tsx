import * as React from "react";
import { useState } from "react";
import {
  VStack,
  Center,
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import Card from "./card";
import { MotionBox } from "../UserInterfaceUtilities/motion";
import { container } from "../UserInterfaceUtilities/PageTransitions";

interface SkillsProps {
  skills: skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
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
                  <Card
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
