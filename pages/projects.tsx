import { IndependentProjectsListData } from '@/data/independent-projects-list-data'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import Projects from '@/components/projects'
import { Box, Stack, Heading, Flex } from '@chakra-ui/react'
import type ProjectsProps from '@/types/project'
import { BsCodeSlash } from 'react-icons/bs'
import {
	PageSlideFade,
	StaggerChildren,
} from '@/components/user-interface-utilities/transitions'
import PageLayout from '@/components/skeleton/page-layout'

const ProjectsPage = ({ projects }: ProjectsProps): JSX.Element => {
	return (
		<PageLayout
			title='Projects'
			description='List of freelance projects done by me'>
			<PageSlideFade>
				<StaggerChildren>
					<Box
						m={['auto', 'initial']}
						w={['90%', '100%', '100%']}
						px={['0', '0', '2rem']}>
						<MotionBox>
							<Heading>
								<Flex alignItems='center'>
									<Box as='strong' fontWeight='600'>
										Projects
									</Box>
									<Stack pl={3}>
										<Box as={BsCodeSlash} size='25px' />
									</Stack>
								</Flex>
							</Heading>
						</MotionBox>
						<Projects projects={projects} />
					</Box>
				</StaggerChildren>
			</PageSlideFade>
		</PageLayout>
	)
}

export function getStaticProps() {
	const projects = IndependentProjectsListData
	return {
		props: {
			projects,
		},
	}
}

export default ProjectsPage
