import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Image
} from "@chakra-ui/react";
import { MotionBox } from "@/components/user-interface-utilities/chakra-factory";
import { item } from "@/components/user-interface-utilities/transitions";
import SkillsCardProps from "@/types/skills-card"
import NextLink from 'next/link';


const SkillCard = ({
  name,
  link,
  image }: SkillsCardProps) => {

  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -4, shadow: "lg" }}>
        <NextLink href={link} passHref>
          <Link isExternal>
            <HStack
              p={4}
              bg={useColorModeValue("white", "gray.800")}
              rounded="xl"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.100", "gray.500")}
              w="100%"
              textAlign="left"
              align="start"
              spacing={4}
              _hover={{ shadow: "md" }}
            >
              <Box
                rounded="lg"
                p={0}
                position="relative"
                overflow="hidden"
                lineHeight={0}
                boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
              >
                <Box
                  position="absolute"
                  top={0}
                  bottom={0}
                  left={0}
                  right={0}
                  opacity={0.25}
                ></Box>
                <Image
                  src={image}
                  height={50}
                  objectFit="contain"
                  width={50}
                />
              </Box>
              <VStack
                align="start"
                justify="flex-start"
                spacing={1}
                maxW="lg"
                h="100%"
              >
                <VStack spacing={0} align="start" flexGrow={1}>
                  <Text fontWeight="bold" mt={3} fontSize="md" noOfLines={2}>
                    {name}
                  </Text>
                </VStack>
              </VStack>
            </HStack>
          </Link>
        </NextLink>
      </MotionBox>
    </MotionBox>
  );
};

export default SkillCard;
