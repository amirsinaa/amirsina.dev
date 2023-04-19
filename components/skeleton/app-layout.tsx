import ColorModeSwitcher from '@/components/user-interface-utilities/color-mode-switcher'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NavbarMenu from './navbar-menu'
import { Fragment } from 'react'
import Footer from './footer'

function AppLayout(props) {
  const router = useRouter()
  return (
    <Fragment>
      {router.pathname === '/' ? null : <NavbarMenu />}
      <Box
        textAlign='center'
        fontSize='lg'
        w={['100%', '95%', '90%', '85%', '80%', '75%', '70%']}
        maxW={1200}
        mx='auto'
      >
        <Box pt={router.pathname === '/' ? '2rem' : '7rem'} pb={10}>
          {props.children}
        </Box>
      </Box>
      <Box
        bg={useColorModeValue('white', 'gray.500')}
        px='0.6em'
        boxShadow={'md'}
        position='fixed'
        bottom='13%'
        left='5%'
        borderRadius='100%'
        py='0.2em'
        className='color-mode-handler'
      >
        <ColorModeSwitcher />
      </Box>
      <Footer />
    </Fragment >
  )
}

export default AppLayout
