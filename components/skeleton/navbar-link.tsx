import {
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { NavbarLinkProps } from '@/types/navbar'

export default function NavbarLink (props: NavbarLinkProps) {
  return (
    <Link
      href={props.path}
      onClick={() => props.onClose()}
      // px={3}
      // py={1.5}
      // rounded={'md'}
      // _hover={{
      //   textDecoration: 'none',
      //   bg: useColorModeValue('gray.200', 'gray.900'),
      //   color: useColorModeValue('darkgreen.100', 'darkgreen.100')
      // }}
    >
      {props.name}
    </Link>
  )
}
