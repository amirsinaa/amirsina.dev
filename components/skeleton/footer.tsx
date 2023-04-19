import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import SiteConfig from '@/configs/index'

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
}

const Footer = () => {
  return (
    <Stack
      as='footer'
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent='space-between'
      alignItems='center'
      w={['100%', '85%', '80%']}
      maxW={1200}
      mx='auto'
    >
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexFlow={['column-reverse', 'column-reverse']}
        justifyContent={['center', 'space-between']}
        alignItems='center'
        w='100%'
      >
        <Text
          textAlign='center'
          fontSize='sm'
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          © {new Date().getFullYear()} Amirsina Shadkami{' '}
        </Text>
        <Box textAlign='center'>
          {SiteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size='lg'
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer
