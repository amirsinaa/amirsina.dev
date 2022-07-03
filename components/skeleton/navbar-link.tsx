import {
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavbarLinkProps } from "@/types/navbar"

export default function NavbarLink (props: NavbarLinkProps) {
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
