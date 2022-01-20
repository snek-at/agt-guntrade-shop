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
import GatsbyLink from 'gatsby-link'
import {GatsbyImage} from 'gatsby-plugin-image'

export interface CategoryType {
  title: string
  handle: string
  slug: string
  image?: any
  bannerImage?: string
  collectionType: string
  products?: ShopPageProps
}

export interface CategoryPageProps {
  pageContext: {category: CategoryType; subcategories: any[]}
}

const CategoryPage = ({pageContext}: CategoryPageProps) => {
  const category = pageContext.category
  const splitHandle = category.handle.split('-')
  const subcategories = pageContext.subcategories
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
          <Breadcrumb
            breadcrumb={category.handle.slice(category.handle.indexOf('-') + 1)}
          />
          <Heading mt="6" fontSize="3.25rem" color="white">
            {category.title.split(' ').at(-1)}
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
          {subcategories.map((subcategory: any) => {
            let handle = subcategory.node.handle
            if (!isNaN(handle.split('-').at(-1))) {
              handle = handle.replace(handle.split('-').at(-1), '')
            }

            let slug

            if (splitHandle[0][0] !== 'a') {
              slug = '/' + handle.split('-').at(-2) + window.location.pathname
            } else {
              slug =
                window.location.pathname +
                (window.location.pathname.charAt(
                  window.location.pathname.length - 1
                ) !== '/'
                  ? '/'
                  : '') +
                handle.split('-').at(-1) +
                '/'
            }
            return (
              <GatsbyLink to={slug}>
                <Flex
                  direction={{base: 'row', md: 'column'}}
                  py={{base: '0', md: '5'}}
                  px="5"
                  minW="285px"
                  maxW="285px"
                  _hover={{color: 'agt.blue'}}
                  borderRadius="5px"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <GatsbyImage image={category.image} alt={category.handle} />
                  <Text
                    mt={{base: 0, md: 5}}
                    alignSelf="center"
                    w="100%"
                    textAlign="center"
                    fontSize={{base: '17', md: '20'}}
                    ml={{base: '5', md: '0'}}>
                    {subcategory.node.title.split(' ').at(-1)}
                  </Text>
                </Flex>
                <Divider display={{base: 'static', md: 'none'}} w="80%" />
              </GatsbyLink>
            )
          })}
        </Wrap>
      </Box>
    </>
  )
}
/*<Image
                    my={{base: '5', md: '0'}}
                    w={{base: '100px', md: '250px'}}
                    src={subcategory.node.image}
                    alt={subcategory.node.title}
                  />*/
export default CategoryPage
