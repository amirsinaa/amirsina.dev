import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NextLink from "next/link";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
];

interface NavbarLinkProps {
  index?: number;
  name: string;
  path: string;
  onClose: () => void;
}

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <NextLink href={props.path} passHref>
      <Link
        px={3}
        py={1.5}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.900"),
          color: useColorModeValue("darkgreen.100", "darkgreen.100")
        }}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      px={4}
      boxShadow={"lg"}
      position="fixed"
      w="100%"
      borderBottomLeftRadius="3xl"
      borderBottomRightRadius="3xl"
      zIndex="999"
    >
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"center"}
      w={["100%", "95%", "90%", "85%", "80%", "75%", "70%"]}
      maxW={1200}
      mx="auto"
    >
      <IconButton
        size={"md"}
        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        aria-label={"Open Menu"}
        display={["inherit", "inherit", "none"]}
        onClick={isOpen ? onClose : onOpen}
      />
      <HStack
        spacing={8}
        alignItems={"center"}
        justifyContent={"center"}>
        <HStack
          as={"nav"}
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          {menuLinks.map((link, index) => (
            <NavbarLink
              key={index}
              name={link.name}
              path={link.path}
              onClose={onClose}
            />
          ))}
        </HStack>
      </HStack>
    </Flex>

    {isOpen ? (
      <Box
        pb={4}
        w={["100%", "100%", "80%"]}
        maxW={1200}
        display={["inherit", "inherit", "none"]}
      >
        <Stack as={"nav"} spacing={4}>
          {menuLinks.map((link, index) => (
            <NavbarLink
              key={index}
              index={index}
              name={link.name}
              path={link.path}
              onClose={onClose}
            />
          ))}
        </Stack>
      </Box>
    ) : null}
  </Box>
  );
}
