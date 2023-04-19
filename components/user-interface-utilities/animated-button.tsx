import {
  Button
} from '@chakra-ui/react'
import AnimatedButtonProps from '@/types/animated-button-props'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import Link from 'next/link'


const AnimatedButton = (props: AnimatedButtonProps) => {
  const { link, icon, background, width, hoverBackground, text } = props
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      opacity='0'
      justify='center'
      initial={{
        opacity: 0,
        translateY: 150
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.6
        }
      }}
    >
      <Link href={link}>
        <Button
          leftIcon={icon}
          colorScheme={background ?? 'gray'}
          variant='solid'
          minW={width ?? 'fit-content'}
          fontWeight='bold'
          _hover={{
            bg: hoverBackground
          }}
        >
          {text}
        </Button>
      </Link>
    </MotionBox>
  )
}

export default AnimatedButton