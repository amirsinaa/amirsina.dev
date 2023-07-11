import {
  useColorModeValue,
  Text,
  background
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
        borderRadius='2xl'
        fontWeight='bold'
        _hover={{
          color: 'white',
          background: useColorModeValue('gray.600', 'gray.600')
        }}
      >
        {props.name}
      </Text>
    </Link >
  )
}
