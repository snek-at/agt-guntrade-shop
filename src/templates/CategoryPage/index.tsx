import {
  Divider,
  useBreakpointValue,
  HStack,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Wrap,
  Link,
  Button
} from '@chakra-ui/react'

import React from 'react'

import {ShopPageProps} from '../ShopPage'
import Breadcrumb from '../../components/molecules/Breadcrumb'

export interface CategoryType {
  name: string
  breadcrumb: string
  image?: string
  bannerImage?: string
  subcategories?: CategoryType[]
  shop?: ShopPageProps
}

export interface CategoryPageProps {
  category: CategoryType
}

const CategoryPage = ({category}: CategoryPageProps) => {
  const links = useBreakpointValue({
    base: (
      <HStack spacing="5" mt="7">
        <Button colorScheme="agt.grayScheme">HIGHLIGHTS</Button>
        <Button colorScheme="agt.grayScheme">MARKEN</Button>
        <Button colorScheme="agt.grayScheme">DEALS</Button>
      </HStack>
    ),
    md: (
      <Flex mt="7" color="white" fontWeight="light" casing="uppercase">
        <Link fontSize="1.5rem" mr="3" to="">
          HIGHLIGHTS
        </Link>
        <Link fontSize="1.5rem" mr="3" to="">
          MARKEN
        </Link>
        <Link fontSize="1.5rem" mr="3" to="">
          DEALS
        </Link>
      </Flex>
    )
  })
  return (
    <>
      <Box bg="black" h="120px" color="white">
        Navbar
      </Box>
      <Box position="relative">
        <Image
          objectFit="cover"
          alignSelf="center"
          position="absolute"
          top="0"
          minW="100%"
          h="232px"
          src={category.bannerImage}
          fallback={
            <Box
              w="100%"
              h="232px"
              bg="agt.lightgray"
              position="absolute"
              top="0"
            />
          }
        />
        <Box
          p="5"
          w={{base: '100%', md: '80%'}}
          mx="auto"
          position="relative"
          zIndex="1">
          <Breadcrumb breadcrumb={category.breadcrumb} />
          <Heading mt="6" fontSize="3.25rem" color="white">
            {category.name}
          </Heading>
          {links}
        </Box>
        <Wrap
          ml="10%"
          maxW={{base: '100%', md: '80%'}}
          justify="center"
          spacing={{base: '0', md: '5'}}
          position="absolute"
          mt="14">
          {category.subcategories?.map(subcategory => (
            <>
              <Flex
                direction={{base: 'row', md: 'column'}}
                py={{base: '0', md: '5'}}
                px="5"
                minW="285px"
                maxW="285px"
                _hover={{color: 'agt.red'}}
                borderRadius="5px"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Image
                  my={{base: '5', md: '0'}}
                  w={{base: '100px', md: '250px'}}
                  src={subcategory.image}
                  alt={subcategory.name}
                />
                <Text
                  mt={{base: 0, md: 5}}
                  alignSelf="center"
                  w="100%"
                  textAlign="center"
                  fontSize={{base: '17', md: '20'}}
                  ml={{base: '5', md: '0'}}>
                  {subcategory.name}
                </Text>
              </Flex>
              <Divider display={{base: 'static', md: 'none'}} w="80%" />
            </>
          ))}
        </Wrap>
      </Box>
    </>
  )
}

export default CategoryPage
