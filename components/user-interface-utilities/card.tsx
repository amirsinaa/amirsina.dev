import {
	Box,
	Stack,
	Heading,
	Flex,
	Text,
	Image,
	useColorModeValue,
} from '@chakra-ui/react'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import { CardTransition } from '@/components/user-interface-utilities/transitions'
import type CardProps from '@/types/card-props'

const Card = (props: CardProps): JSX.Element => {
	const {
		bg = useColorModeValue('yellowish.100', 'gray.800'),
		logoSize = ['10', '10'],
		color = 'white',
		description,
		children,
		period,
		title,
		role,
		logo,
		alt,
	} = props
	return (
		<CardTransition>
			<MotionBox whileHover={{ y: -6 }}>
				<Box
					px={4}
					py={5}
					my={1}
					bg={bg}
					position='relative'
					borderRadius='3xl'
					boxShadow='md'
					rounded='md'>
					<Flex justifyContent='space-between'>
						<Flex>
							{logo && (
								<Image
									w={parseInt(logoSize[0])}
									h={parseInt(logoSize[1])}
									objectFit='contain'
									fallbackSrc={'/assets/images/image_default_placeholder.png'}
									src={logo}
									alt={alt}
								/>
							)}
							<Stack spacing={2} pl={3} align='left' justifyContent='center'>
								<Heading
									fontWeight='bolder'
									fontSize='md'
									as='h3'
									textAlign='left'
									color={color}>
									{title}
								</Heading>
								{role && (
									<Heading fontSize='sm' as='h4' textAlign='left' color={color}>
										{role}
									</Heading>
								)}
								{description && (
									<Text
										fontSize='sm'
										textAlign='left'
										color={color}
										noOfLines={{ base: 2 }}>
										{description}
									</Text>
								)}
								<Box textAlign='left' fontSize='sm' color={color}>
									{children}
								</Box>
							</Stack>
						</Flex>
						{period && (
							<Stack display={['none', 'none', 'flex', 'flex']}>
								<Text fontSize={14} color={color}>
									{period}
								</Text>
							</Stack>
						)}
					</Flex>
				</Box>
			</MotionBox>
		</CardTransition>
	)
}

export default Card
