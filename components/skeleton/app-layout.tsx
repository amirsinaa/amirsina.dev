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
        as='main'
        textAlign='center'
        fontSize='lg'
        w={['100%', '95%', '90%', '85%', '80%', '75%', '70%']}
        maxW={1200}
        mx='auto'
      >
        <Box pt={router.pathname === '/' ? '2rem' : '3rem'} pb={10} my={router.pathname === '/' ? '1rem' : '8em'}>
          {props.children}
        </Box>
      </Box>
      <Footer />
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
    </Fragment >
  )
}

export default AppLayout
