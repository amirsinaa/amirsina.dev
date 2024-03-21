import { Box, Stack, Heading, Flex } from '@chakra-ui/react'
import {
	PageSlideFade,
	StaggerChildren,
} from '@/components/user-interface-utilities/transitions'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import PageLayout from '@/components/skeleton/page-layout'
import {
	SkillsCollection,
	SkillsCurrentlyLearningCollection,
} from '@/data/skills-data'
import { BsWrench, BsKeyboardFill } from 'react-icons/bs'
import Skills from '@/components/skills'
import type { SkillsProps } from '@/types/skill'

const ProjectsPage = ({
	skills,
	learning,
}: {
	skills: SkillsProps
	learning: SkillsProps
}): JSX.Element => {
	return (
		<PageLayout title='Skills' description='My most used skills'>
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
										My Skills
									</Box>
									<Stack pl={3}>
										<Box as={BsWrench} size='25px' />
									</Stack>
								</Flex>
							</Heading>
						</MotionBox>
						<Skills skills={skills} />
					</Box>
					<Box
						m={['6em 0']}
						w={['90%', '100%', '100%']}
						px={['0', '0', '2rem']}>
						<MotionBox>
							<Heading>
								<Flex alignItems='center'>
									<Box as='strong' fontWeight='600'>
										Currently learning
									</Box>
									<Stack pl={3}>
										<Box as={BsKeyboardFill} size='25px' />
									</Stack>
								</Flex>
							</Heading>
						</MotionBox>
						<Skills skills={learning} />
					</Box>
				</StaggerChildren>
			</PageSlideFade>
		</PageLayout>
	)
}

export function getStaticProps() {
	const skills = SkillsCollection
	const learning = SkillsCurrentlyLearningCollection
	return {
		props: {
			skills,
			learning,
		},
	}
}

export default ProjectsPage
