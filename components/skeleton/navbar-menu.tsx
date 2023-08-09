import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Stack
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCircle } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { MenuLinks } from '@/data/menu-links'
import NavbarLink from './navbar-link'
import { MotionBox } from '../user-interface-utilities/chakra-factory'

export default function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <MotionBox
      bg={useColorModeValue('deepBlueSea.100', 'gray.700')}
      px={4}
      boxShadow='2xl'
      borderRadius='2xl'
      p={4}
      display='flex'
      flexDir={'column'}
      justifyContent='space-between'
      alignItems='center'
      alignSelf='center'
      w={['90%', '95%', '90%']}
      maxW={1200}
      mx='auto'
      my='1.5em'
      as='header'
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'center'}
        w={['100%', '95%', '90%', '85%', '80%', '75%', '70%']}
        maxW={1200}
        mx='auto'
      >
        <IconButton
          background={'transparent !important'}
          color={'white'}
          size={'lg'}
          fontSize={35}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={'Open Menu'}
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={8}
          alignItems={'center'}
          justifyContent={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <List display='flex'>
              {MenuLinks.map((link, index) => (
                <ListItem key={link.id}>
                  {index !== 0 ? <ListIcon fontSize={13} mb={'0.6em'} color='orange' as={FaCircle} /> : null}
                  <NavbarLink
                    name={link.name}
                    path={link.path}
                    onClose={onClose}
                  />
                </ListItem>
              ))}
            </List>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          justifyContent={'center'}
          w={'100%'}
          display={['flex', 'flex', 'none']}
        >
          <Stack
            as={'nav'}
            spacing={4}
            w={'100%'}
          >
            <List
              display='flex'
              w='100%'
              alignItems={'center'}
              flexDir='column'
              flexWrap='nowrap'
            >
              {MenuLinks.map((link) => (
                <>
                  <ListItem
                    key={link.id}
                    justifyContent={'center'}
                    py={2}
                  >
                    <NavbarLink
                      name={link.name}
                      path={link.path}
                      onClose={onClose}
                    />
                  </ListItem>
                </>
              ))}
            </List>
          </Stack>
        </Box>
      ) : null}
    </MotionBox>
  )
}
