import { ColorModeSwitcher } from "@/components/UserInterfaceUtilities/ColorModeSwitcher";
import { Box , useColorModeValue } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import NavbarMenu from "./NavbarMenu";
import { Fragment } from "react";
import Footer from "./Footer";

function AppLayout(props) {
  const router = useRouter()
  return (
    <Fragment>
      {router.pathname === '/' ? null : <NavbarMenu />}
      <Box
        textAlign="center"
        fontSize="lg"
        w={["100%", "95%", "90%", "85%", "80%", "75%", "70%"]}
        maxW={1200}
        mx="auto"
      >
        <Box pt={router.pathname === '/' ? '2rem' : '7rem'} pb={10}>
          {props.children}
        </Box>
      </Box>
      <Box
        bg={useColorModeValue("white", "gray.500")}
        px="0.6em"
        boxShadow={"md"}
        position="fixed"
        bottom="13%"
        left="5%"
        borderRadius="100%"
        py="0.2em"
        className="color-mode-handler"
      >
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
      <Footer />
    </Fragment>
  );
}

export default AppLayout;
