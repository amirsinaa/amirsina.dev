import { useEffect } from "react";
import App, { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppLayout from "../components/AppSkeleton/AppLayout";
import { theme } from "../components/UserInterfaceUtilities/theme";

import { useRouter } from "next/router";
import * as gtag from "lib/gtag";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
