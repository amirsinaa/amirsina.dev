import {
  Stack,
  Flex,
  Box,
} from '@chakra-ui/react'
import { PropsWithChildren, ReactNode } from 'react'


export const CallToAction = ({ bg, color, children }: {
  bg: string,
  color: string,
  children: PropsWithChildren & ReactNode
}) => {
  return (
    <Flex
      p='50px 0'
      w='100%'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        bg={bg}
        boxShadow='md'
        borderRadius='xl'
        w='100%'
        _dark={{
          bg: 'gray.800',
        }}
      >
        <Box
          w='100%'
          mx='auto'
          py={{
            base: 12,
            lg: 16,
          }}
          px={{
            base: 4,
            lg: 8,
          }}
          display={{
            lg: 'flex',
          }}
          alignItems={{
            lg: 'center',
          }}
          justifyContent={{
            lg: 'space-between',
          }}
        >
          <Box as='h2'
            fontSize={{
              base: '3xl',
              sm: '4xl',
            }}
            fontWeight='extrabold'
            letterSpacing='tight'
            lineHeight='shorter'
            color={color}
            _dark={{
              color: 'gray.100',
            }}
          >
          </Box>
          <Stack
            direction={{
              base: 'column',
              sm: 'row',
            }}
            justifyContent={'center'}
            mt={{
              base: 8,
              lg: 0,
            }}
            flexShrink={{
              lg: 0,
            }}
          >
            {children}
          </Stack>
        </Box>
      </Box>
    </Flex>
  )
}