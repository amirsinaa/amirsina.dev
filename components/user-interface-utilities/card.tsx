import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { CardTransition } from "@/components/user-interface-utilities/transitions";
import CardProps from "@/types/card-props";

const Card = (props: CardProps) => {
  const { title, role, description, period, logo, colorMode, alt, children } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: "lg" }}
        bg={useColorModeValue("white", "gray.800")}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            {logo && (
              <Image
                rounded="full"
                w={16}
                h={16}
                objectFit="contain"
                fallbackSrc={"/assets/images/image_default_placeholder.png"}
                src={logo}
                alt={alt}
              />
            )}
            <Stack spacing={2} pl={3} align="left">
              <Heading
                fontSize="xl"
                as="h3"
                textAlign="left"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              {role && (
                <Heading
                  fontSize="sm"
                  as="h4"
                  textAlign="left"
                  color={`mode.${colorMode}.career.subtext`}
                >
                  {role}
                </Heading>
              )}
              {description && (
                <Box
                  as="p"
                  textAlign="left"
                  fontSize="sm"
                  color={`mode.${colorMode}.career.subtext`}
                >
                  {description}
                </Box>
              )}
              <Box
                as="p"
                textAlign="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {children}
              </Box>
            </Stack>
          </Flex>
          {period && (
            <Stack display={["none", "none", "flex", "flex"]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
            </Stack>
            )}
        </Flex>
      </Box>
    </CardTransition>
  );
};

export default Card;