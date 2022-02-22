import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import {GatsbyImage, IGatsbyImageData, StaticImage} from 'gatsby-plugin-image'
import {Breadcrumbs, ShopLayout} from '../ShopLayout'

import {GCImage, gridPadBoxes} from '../../common/utils'
import * as style from './style'
import React from 'react'
import {ProductGrid} from '../ProductGridLayout'
import {BaseLayout} from '../BaseLayout'

export type CategoryItem = {
  title: string
  handle: string
  totalProducts: number
  image: {
    gatsbyImageData: IGatsbyImageData
  } | null
}

const Header = (props: {path: string; title: string}) => {
  // banner image
  return (
    <Box position={'relative'} color="white">
      <style.Banner>
        <GCImage
          gimg={
            <StaticImage
              src="https://i.imgur.com/8zG2Ymd.jpeg"
              alt="bg"
              imgClassName="banner-image"
            />
          }
        />
      </style.Banner>
      <Box position={'absolute'} top="5" left="5" mx="8">
        <Breadcrumbs path={props.path} />
        <Heading size="2xl" my="8">
          {props.title}
        </Heading>
        <HStack
          spacing={'10'}
          textTransform="uppercase"
          fontWeight={'semibold'}
          fontSize="larger">
          <Text>Highlights</Text>
          <Text>Marken</Text>
        </HStack>
      </Box>
    </Box>
  )
}

const CategoryGrid = (props: {
  title: string
  items: Array<CategoryItem>
  onItemClick: (item: CategoryItem) => void
}) => {
  // grid that does not stretch if there are less items than the grid size

  const {items, onItemClick} = props

  const emptyBoxes: Array<any> = gridPadBoxes(items)

  return (
    <SimpleGrid spacing={'4'} {...props} minChildWidth="200px" py="8">
      {items.map((item, index) => (
        <Box
          key={index}
          onClick={() => onItemClick(item)}
          borderRadius="lg"
          overflow="hidden"
          position="relative"
          p="4"
          mb="4"
          cursor="pointer"
          _hover={{
            transform: 'scale(1.05)',
            color: 'agt.blue'
          }}>
          <AspectRatio ratio={1}>
            <VStack>
              <GatsbyImage
                alt={item.title}
                image={item.image?.gatsbyImageData!}
                style={{
                  minHeight: '100%',
                  minWidth: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </VStack>
          </AspectRatio>
          <Text
            textAlign={
              'center'
            }>{`${item.title} (${item.totalProducts})`}</Text>
        </Box>
      ))}
      {emptyBoxes}
    </SimpleGrid>
  )
}

export const ShopCategoryLayout = (props: {
  title: string
  path: string
  category: React.ComponentProps<typeof CategoryGrid>
  productGrid: React.ComponentProps<typeof ProductGrid>
}) => {
  return (
    <BaseLayout>
      <Header path={props.path} title={props.title} />

      <ShopLayout>
        <VStack spacing={16} align="left">
          <CategoryGrid {...props.category} />
          <ProductGrid {...props.productGrid} minChildWidth={200} />
        </VStack>
      </ShopLayout>
    </BaseLayout>
  )
}
