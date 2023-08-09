import {
  Button
} from '@chakra-ui/react'
import AnimatedButtonProps from '@/types/animated-button-props'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import Link from 'next/link'


const AnimatedButton = (props: AnimatedButtonProps) => {
  const { link, icon, buttonColorSchema, bg, width, hoverBackground, text, color } = props
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      opacity='0'
      justify='center'
      minW={width ?? 'fit-content'}
      _hover={{
        zIndex: 999
      }}
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
          colorScheme={buttonColorSchema}
          bg={bg}
          variant='solid'
          w='100%'
          fontWeight='bold'
          color={color}
          _hover={{
            bg: hoverBackground,
            padding: '0 1em',
            transform: 'scale(1.1)'
          }}
        >
          {text}
        </Button>
      </Link>
    </MotionBox>
  )
}

export default AnimatedButton