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
import { useScroll } from "framer-motion";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCircle } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react';
import { MenuLinks } from '@/data/menu-links'
import NavbarLink from './navbar-link'
import { MotionBox } from '../user-interface-utilities/chakra-factory'

export default function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);

  function makeHeaderSticky() {
    if (scrollY?.get() < 150) {
      setIsSticky(false);
    } else if (scrollY?.get() > 150 && scrollY?.get() > scrollY?.getPrevious()) {
      setIsSticky(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => makeHeaderSticky());
  });


  return (
    <MotionBox
      bg={useColorModeValue('deepBlueSea.100', 'gray.700')}
      boxShadow='2xl'
      position='fixed'
      display='flex'
      flexDir={'column'}
      zIndex='99'
      transform='translate(50%,0%)'
      right='50%'
      p={0.5}
      justifyContent='center'
      alignItems='center'
      alignSelf='center'
      w={['90%', '90%', '90%', '63%']}
      as='header'
      variants={
        {
          visible: {
            margin: '1.5em auto',
            borderRadius: '25px',
          },
          hidden: {
            width: '100%',
            margin: 0,
            borderRadius: 0
          }
        }
      }
      animate={isSticky ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
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
