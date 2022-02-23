import React, {ReactNode} from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  StackDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VisuallyHidden,
  Kbd,
  Text
} from '@chakra-ui/react'
import {HamburgerIcon, CloseIcon, AddIcon, SearchIcon} from '@chakra-ui/icons'
import {FiShoppingCart} from '@react-icons/all-files/fi/FiShoppingCart'
import {Logo} from '../../../common/assets'
import * as style from './style'
import {AiTwotoneHeart} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'
import Searchbar from '../Searchbar'

import {Link as GatsbyLink} from 'gatsby'

export interface NavTopProps {
  links: {
    name: string
    path: string
  }[]
  activePath?: string
}

const NavTop = ({links, activePath}: NavTopProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const allLinkElement = links.map((link, i) => (
    <Link
      key={i}
      as={GatsbyLink}
      to={link.path}
      px={2}
      py={1}
      rounded={'md'}
      bg={
        link.path === activePath
          ? useColorModeValue('gray.200', 'gray.600')
          : 'transparent'
      }
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.600')
      }}>
      {link.name}
    </Link>
  ))

  return (
    <>
      <Box
        bg={['agt.gray', 'agt.gray', 'agt.gray', 'agt.gray']}
        color={['white', 'white', 'primary.700', 'primary.700']}
        w="full"
        px={{base: '4', md: '8'}}>
        <Flex
          py={8}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxW="8xl"
          mx="auto">
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{md: 'none'}}
            onClick={isOpen ? onClose : onOpen}
            bg={['agt.gray', 'agt.gray', 'agt.gray', 'agt.gray']}
          />
          <HStack
            as={GatsbyLink}
            to="/"
            cursor={'pointer'}
            spacing={{base: '10', md: '20'}}
            alignItems={'center'}
            maxW="2xl"
            css={style.Logo}>
            <Logo />
          </HStack>
          <Searchbar searchResultProducts={[]} onSearch={v => console.log(v)} />
          <HStack spacing={8} alignItems={'center'} justifyContent={'flex-end'}>
            {/* <Menu>
            <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
                size={'sm'}
                src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
            />
            </MenuButton>
            <MenuList>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
            </MenuList>
        </Menu> */}
            <Button
              as={GatsbyLink}
              to="/wishlist"
              size="sm"
              rounded="md"
              color={['white']}
              bg={['agt.red']}
              display={{base: 'none', md: 'flex'}}
              _hover={{
                bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600']
              }}
              leftIcon={<FaHeart />}>
              Wunschliste
            </Button>
            <IconButton
              justifyContent={'center'}
              size={'md'}
              icon={<FiShoppingCart />}
              aria-label={'Open Menu'}
              display={{base: 'flex', md: 'none'}}
              onClick={isOpen ? onClose : onOpen}
              bg={['agt.grey']}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{md: 'none'}}>
            <Stack as={'nav'} spacing={4}>
              {allLinkElement}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box
        as="nav"
        bg={useColorModeValue('white', 'gray.700')}
        role="navigation"
        display={{base: 'none', md: 'flex'}}>
        <Flex
          h={12}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxW="8xl"
          mx="auto">
          <HStack
            w="100%"
            as={'nav'}
            spacing={4}
            justifyContent={'space-between'}>
            {allLinkElement}
          </HStack>
        </Flex>
      </Box>
    </>
  )
}

export default NavTop
