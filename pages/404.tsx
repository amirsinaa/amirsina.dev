import { Heading, Flex, Box } from '@chakra-ui/react'
import {
	PageSlideFade,
	StaggerChildren,
} from '@/components/user-interface-utilities/transitions'
import AnimatedButton from '@/components/user-interface-utilities/animated-button'
import PageLayout from '@/components/skeleton/page-layout'
import { VscHome } from 'react-icons/vsc'

const Error404Page = (): JSX.Element => {
	return (
		<PageLayout title='Error404Page' description='Page not found'>
			<PageSlideFade>
				<StaggerChildren>
					<Box
						m={['auto', 'initial']}
						w={['90%', '100%', '100%']}
						px={['0', '0', '2rem']}>
						<Heading>
							<Flex alignItems='center' justify='space-around'>
								<Box as='strong' fontWeight='600' mx={1}>
									Page not found - 404
								</Box>
								<AnimatedButton
									link='/'
									icon={<VscHome />}
									bg='deepBlueSea.100'
									color='white'
									text='Back to home'
								/>
							</Flex>
						</Heading>
					</Box>
				</StaggerChildren>
			</PageSlideFade>
		</PageLayout>
	)
}

export default Error404Page
