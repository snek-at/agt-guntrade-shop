import {Image} from '@chakra-ui/image'
import {Box, Heading, Flex, Wrap} from '@chakra-ui/layout'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/breadcrumb'
import Icon from '@chakra-ui/icon'
import {RiHomeLine} from '@react-icons/all-files/ri/RiHomeLine'
import {ChevronRightIcon} from '@chakra-ui/icons'
import React from 'react'

import ProductCard, {
  ProductCardProps
} from '../../components/molecules/ProductCard/3'
import {CategoryType} from '../CategoryPage'
import {SeperatorStyle} from './style'

export interface ShopPageProps extends CategoryType {
  items: ProductCardProps[]
}

const ShopPage = ({items, breadcrumb, name, bannerImage}: ShopPageProps) => {
  return (
    <>
      <Box bg="black" h="120px" color="white">
        Navbar
      </Box>
      <Box position="relative">
        <Image
          src={bannerImage}
          fallback={
            <Box
              w="100%"
              h="200px"
              bg="agt.lightgray"
              position="absolute"
              top="0"
            />
          }
        />
        <Box w="80%" mx="auto" position="relative" zIndex="1" pt="5">
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
            {breadcrumb.split('/').map(crumb => (
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
          <Heading mt="5">{name}</Heading>
        </Box>
        <Flex w="80%" position="absolute" top="200px" left="10%">
          <Box height="200vh" minW="25%" bgGradient="linear(white, black)" />
          <Wrap ml="10" spacing="10" maxW="75%" mt="10">
            {items.map((item, index) => (
              <ProductCard
                width={{base: '300px', xl: '25%'}}
                images={item.images}
                name={item.name}
                price={item.price}
                caliber={item.caliber}
                reducedprice={item.reducedprice}
                direction="left"
              />
            ))}
          </Wrap>
        </Flex>
      </Box>
    </>
  )
}

export default ShopPage
