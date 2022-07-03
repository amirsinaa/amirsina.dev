import {
  Button,
  Link
} from "@chakra-ui/react";
import AnimatedButtonProps from '@/types/animated-button-props'
import { MotionBox } from "@/components/user-interface-utilities/chakra-factory";
import NextLink from 'next/link';


const AnimatedButton = (props: AnimatedButtonProps) => {
  const { link, icon, background, width, hoverBackground, text } = props
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      opacity="0"
      justify="center"
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
      <NextLink href={link} passHref>
        <Link>
          <Button
            leftIcon={icon}
            colorScheme={background}
            variant="solid"
            minW={width}
            fontWeight="bold"
            _hover={{
              bg: hoverBackground
            }}
          >
            { text }
          </Button>
        </Link>
      </NextLink>
    </MotionBox>
  );
}

export default AnimatedButton;