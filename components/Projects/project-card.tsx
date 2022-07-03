
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Image,
  Link
} from "@chakra-ui/react";
import { assignTechTagColor } from "@/components/user-interface-utilities/theme";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCardProps from "@/types/project-card";
import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  logo,
  link,
  technologies
}: ProjectCardProps) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.500")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <Image
          src={logo}
          sizes="md"
          width={100}
          objectFit="contain"
          height={100}
          rounded="sm"
        />
        <VStack align="start" justify="flex-start" onClick={toggleOpen}>
          <VStack spacing={0} align="start">
            <motion.div layout>
              <HStack>
                <Text
                  as={Link}
                  href={link}
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={1}
                  onClick={e => e.stopPropagation()}
                  isExternal
                >
                  {title}
                </Text>
              </HStack>
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text
                    fontSize="sm"
                    color={textColor}
                  >
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
            <HStack pt={2} display={{ sm: "none", md: "flex" }}>
              {technologies.map((tech, index) => (
                <Tag key={index} size="sm" fontWeight="bold" m={["0px", "0px", "5px"]} colorScheme={assignTechTagColor(tech)}>
                  {tech}
                </Tag>
              ))}
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;
