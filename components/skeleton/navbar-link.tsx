import {
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { NavbarLinkProps } from '@/types/navbar'

export default function NavbarLink(props: NavbarLinkProps) {
  return (
    <Link
      href={props.path}
      onClick={() => props.onClose()}
    >
      <Text
        bg='transparent'
        as='span'
        p={2}
        mx={5}
        color={'white'}
        borderRadius='2xl'
        fontWeight='bold'
        fontSize='xl'
        _hover={{
          fontWeight: 'normal',
          color: 'white',
          background: useColorModeValue('orange', 'orange')
        }}
      >
        {props.name}
      </Text>
    </Link >
  )
}
