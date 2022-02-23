import {CheckIcon, SearchIcon} from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack
} from '@chakra-ui/react'
import {GatsbyImage} from 'gatsby-plugin-image'
import {ImageWithText} from '../../../layout/WishListLayout'
import * as React from 'react'

import {Link} from 'gatsby'

export interface SearchbarProps {
  searchResultProducts: Array<any>
  onSearch: (value: string) => void
}

export const SearchbarButton = (props: ButtonProps) => {
  return (
    <Button
      maxW="3xl"
      flex="1"
      type="button"
      mx="6"
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
      {...props}>
      <SearchIcon />
      <HStack w="full" ml="3" spacing="4px">
        <Text textAlign="left" flex="1">
          Finde Artikel
        </Text>
        <HStack spacing="4px">
          <VisuallyHidden>Drücke</VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            <Box as="abbr" title={'Strg'} textDecoration="none !important">
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
  )
}

export const Searchbar = (props: SearchbarProps) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  let timeout: NodeJS.Timeout | null = null

  const [searchValue, setSearchValue] = React.useState('')

  const delayedSearch = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    setSearchValue(value)
  }

  React.useEffect(() => {
    if (!timeout) {
      timeout = setTimeout(() => {
        props.onSearch(searchValue)
      }, 500)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [searchValue])

  return (
    <>
      <SearchbarButton onClick={onOpen} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalBody px="2">
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color={'agt.blue'} />}
                />
                <Input
                  placeholder={'Suche nach Artikeln'}
                  border="none"
                  _focus={{
                    boxShadow: 'none'
                  }}
                  color={useColorModeValue('gray.700', 'gray.300')}
                  onChange={delayedSearch}
                />
              </InputGroup>
              {props.searchResultProducts.length > 0 && (
                <>
                  <Divider />
                  <VStack m="4" align="left">
                    {props.searchResultProducts.map((product, index) => (
                      <Link to={`/products/${product.slug}`} key={index}>
                        <Box
                          key={index}
                          px="4"
                          py="2"
                          bg={useColorModeValue('gray.200', 'gray.600')}
                          rounded="md"
                          _hover={{
                            bg: 'agt.blue'
                          }}
                          cursor="pointer"
                          transition="ease-out">
                          <ImageWithText
                            title={product.title}
                            image={product.featuredImage}
                            categoriesString={product.tags
                              .filter(
                                (tag: any) => !tag.startsWith('Kategorie:')
                              )
                              .map((tag: any) => tag.split(':')[1])
                              .join(', ')}
                          />
                        </Box>
                      </Link>
                    ))}
                  </VStack>
                </>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Searchbar
