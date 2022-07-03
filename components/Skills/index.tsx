import {
  VStack,
  Center,
  Link,
  Box,
  SimpleGrid,
  useColorMode
} from "@chakra-ui/react";
import { MotionBox } from "@/components/user-interface-utilities/chakra-factory";
import { container } from "@/components/user-interface-utilities/transitions";
import Card from "@/components/user-interface-utilities/card";
import SkillsProps from "@/types/skill";
import NextLink from 'next/link';

const Skills = ({ skills }: SkillsProps) => {
  const { colorMode } = useColorMode();
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
                {skills.map((tool) => (
                  <NextLink href={tool.link} passHref key={tool.id}>
                    <Link isExternal>
                      <Card
                        title={tool.name}
                        logo={tool.image}
                        colorMode={colorMode}
                      />
                    </Link>
                  </NextLink>
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
