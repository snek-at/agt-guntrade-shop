import {Image} from '@chakra-ui/image'
import {Box, Flex, Heading, Text, Wrap, Link} from '@chakra-ui/layout'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/breadcrumb'
import Icon from '@chakra-ui/icon'
import {RiHomeLine} from '@react-icons/all-files/ri/RiHomeLine'
import {ChevronRightIcon} from '@chakra-ui/icons'
import React from 'react'

import {SeperatorStyle} from './style'
import {ShopPageProps} from '../ShopPage'

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
  return (
    <>
      <Box bg="black" h="120px" color="white">
        Navbar
      </Box>
      <Box position="relative">
        <Image
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
        <Box w="80%" mx="auto" position="relative" zIndex="1" pt="7">
          <Breadcrumb
            pt="1"
            borderRadius="5px"
            color="white"
            px="2"
            w="fit-content"
            bg="agt.gray"
            justifyContent="center"
            alignItems="center"
            separator={<ChevronRightIcon boxSize="2rem" className="icon" />}>
            <BreadcrumbItem position="relative" css={SeperatorStyle}>
              <BreadcrumbLink>
                <Icon
                  as={RiHomeLine}
                  boxSize="1.5rem"
                  mb="1.5"
                  _hover={{color: 'agt.red'}}
                  transition="0.3s"
                />
              </BreadcrumbLink>
            </BreadcrumbItem>
            {category.breadcrumb.split('/').map(crumb => (
              <BreadcrumbItem>
                <BreadcrumbLink
                  fontSize="1.5rem"
                  to=""
                  _hover={{color: 'agt.red'}}
                  transition="0.3s">
                  {crumb}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Heading mt="7" fontSize="3rem" color="white">
            {category.name}
          </Heading>
          <Flex mt="5" color="white">
            <Link fontSize="1.5rem" mr="3" to="">
              Link1
            </Link>
            <Link fontSize="1.5rem" mr="3" to="">
              Link2
            </Link>
            <Link fontSize="1.5rem" mr="3" to="">
              Link3
            </Link>
            <Link fontSize="1.5rem" to="">
              Link4
            </Link>
          </Flex>
          <Box position="relative">
            <Wrap justify="center" spacing="5" position="absolute" mt="14">
              {category.subcategories?.map(subcategory => (
                <Box
                  p="5"
                  maxW="232px"
                  _hover={{color: 'agt.red'}}
                  border="1px"
                  borderColor="agt.lightgray"
                  borderRadius="5px">
                  <Image
                    w="200px"
                    src={subcategory.image}
                    alt={subcategory.name}
                  />
                  <Text textAlign="center" mt="5" fontSize="20">
                    {subcategory.name}
                  </Text>
                </Box>
              ))}
            </Wrap>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CategoryPage
