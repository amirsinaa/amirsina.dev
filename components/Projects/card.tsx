import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { assignTechTagColor } from "../UserInterfaceUtilities/theme";
import LazyImage from "../UserInterfaceUtilities/LazyImage";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  blurHash,
  link,
  technologies
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
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
        <LazyImage
          src={logo}
          blurHash={blurHash}
          size="md"
          width={100}
          height={100}
          layout="fixed"
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
            <HStack pt={2} display={{ sm: "none" , md:"flex"}}>
              {technologies.map((tech, index) => (
                <Tag key={index} size="sm" fontWeight="bold" m={["0px","0px","5px"]} colorScheme={assignTechTagColor(tech)}>
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
