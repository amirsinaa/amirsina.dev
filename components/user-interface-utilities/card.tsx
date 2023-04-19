import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import { CardTransition } from '@/components/user-interface-utilities/transitions'
import CardProps from '@/types/card-props'

const Card = (props: CardProps) => {
  const {
    description,
    colorMode,
    children,
    period,
    title,
    role,
    logo,
    alt
  } = props
  return (
    <CardTransition>
      <MotionBox whileHover={{ y: -6 }}>
        <Box
          px={4}
          py={5}
          my={4}
          bg={useColorModeValue('white', 'gray.800')}
          position='relative'
          borderRadius='xl'
          boxShadow='md'
          rounded='md'
        >
          <Flex justifyContent='space-between'>
            <Flex>
              {logo && (
                <Image
                  rounded='full'
                  w={16}
                  h={16}
                  objectFit='contain'
                  fallbackSrc={'/assets/images/image_default_placeholder.png'}
                  src={logo}
                  alt={alt}
                />
              )}
              <Stack spacing={2} pl={3} align='left' justifyContent='center'>
                <Heading
                  fontWeight='bold'
                  fontSize='md'
                  as='h3'
                  textAlign='left'
                  color={`mode.${colorMode}.career.text`}
                >
                  {title}
                </Heading>
                {role && (
                  <Heading
                    fontSize='sm'
                    as='h4'
                    textAlign='left'
                    color={`mode.${colorMode}.career.subtext`}
                  >
                    {role}
                  </Heading>
                )}
                {description && (
                  <Text
                    fontSize='sm'
                    textAlign='left'
                    color={colorMode}
                    noOfLines={{ base: 2 }}
                  >
                    {description}
                  </Text>
                )}
                <Box
                  textAlign='left'
                  fontSize='sm'
                  color={`mode.${colorMode}.career.subtext`}
                >
                  {children}
                </Box>
              </Stack>
            </Flex>
            {period && (
              <Stack display={['none', 'none', 'flex', 'flex']}>
                <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
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