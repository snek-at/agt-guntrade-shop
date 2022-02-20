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

export interface NavTopProps {
  links: string[]
}

const NavLink = ({children}: {children: ReactNode}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}>
    {children}
  </Link>
)

const NavTop = ({links}: NavTopProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Box
        bg={['agt.gray', 'agt.gray', 'agt.gray', 'agt.gray']}
        color={['white', 'white', 'primary.700', 'primary.700']}
        position={'sticky'}
        top={0}
        zIndex={999}
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
            spacing={{base: '10', md: '20'}}
            alignItems={'center'}
            maxW="2xl"
            css={style.Logo}>
            <Logo />
          </HStack>
          <Button
            maxW="3xl"
            flex="1"
            type="button"
            mx="6"
            href={'#'}
            lineHeight="1.2"
            w="100%"
            bg={useColorModeValue('white', 'gray.700')}
            whiteSpace="nowrap"
            display={{base: 'none', md: 'flex'}}
            alignItems="center"
            color="gray.400"
            py="3"
            px="4"
            outline="0"
            _focus={{shadow: 'outline'}}
            shadow="base"
            rounded="md"
            // {...props}
          >
            <SearchIcon />
            <HStack w="full" ml="3" spacing="4px">
              <Text textAlign="left" flex="1">
                Finde Artikel
              </Text>
              <HStack spacing="4px">
                <VisuallyHidden>Drücke</VisuallyHidden>
                <Kbd color="gray.500" rounded="2px">
                  <Box
                    as="abbr"
                    title={'Strg'}
                    textDecoration="none !important">
                    {'Strg'}
                  </Box>
                </Kbd>
                <VisuallyHidden>und</VisuallyHidden>
                <Kbd color="gray.500" rounded="2px">
                  K
                </Kbd>
                <VisuallyHidden> zum suchen</VisuallyHidden>
              </HStack>
            </HStack>
          </Button>
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
              size="sm"
              rounded="md"
              color={['white']}
              bg={['agt.red']}
              display={{base: 'none', md: 'flex'}}
              _hover={{
                bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600']
              }}
              leftIcon={<FiShoppingCart />}>
              Einkaufswagn
            </Button>
            <IconButton
              center
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
              {links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box as="nav" role="navigation" display={{base: 'none', md: 'flex'}}>
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
            {links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  )
}

export default NavTop
