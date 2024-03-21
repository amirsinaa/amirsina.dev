import { theme } from '@/components/user-interface-utilities/theme'
import AppLayout from '@/components/skeleton/app-layout'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter()

	return (
		<ChakraProvider theme={theme} resetCSS={true}>
			<AppLayout>
				<AnimatePresence
					mode='wait'
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}>
					<Box key={router.route}>
						<Component {...pageProps} />
					</Box>
				</AnimatePresence>
			</AppLayout>
		</ChakraProvider>
	)
}

export default Application
