import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
  Icon,
  Divider,
  Center,
  WrapItem,
  Wrap
} from '@chakra-ui/react'
import React from 'react'
import {Breadcrumbs, ShopLayout} from '../ShopLayout'

import {MdMessage} from 'react-icons/md'
import {FaHeart, FaShare} from 'react-icons/fa'

const Header = (props: {title: string}) => {
  return (
    <Box>
      <Breadcrumbs />
      <Heading size="xl" fontWeight={'semibold'}>
        {props.title}
      </Heading>
    </Box>
  )
}

const ImageSlider = () => {
  return (
    <Box my="4" w={{base: '100%', md: '70%'}}>
      <AspectRatio ratio={16 / 9}>
        <Box>
          <Image
            src="https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png.webp?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png.webp?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png.webp?v=1644520721 900w"
            alt="bg"
            objectFit="contain"
            width={'50%'}
          />
        </Box>
      </AspectRatio>
      <Wrap
        bg={useColorModeValue('gray.200', 'gray.700')}
        spacing={0}
        justify="center">
        {Array.from({length: 10}).map((_, i) => (
          <WrapItem
            boxSize={{base: '16', md: '20'}}
            boxShadow={i === 0 && 'inset 0px 4px 0px 0px #eb1933'}>
            <Image
              src="https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png.webp?v=1644520721"
              alt="bg"
              objectFit="contain"
            />
          </WrapItem>
        ))}
      </Wrap>

      <Box display={{base: 'none', md: 'block'}}>
        <ProductMoreDetail />
      </Box>
    </Box>
  )
}

const ProductDetail = () => {
  return (
    <Box
      w={{base: '100%', md: '30%'}}
      pl={{base: 0, md: 4}}
      position={'sticky'}
      top="15"
      alignSelf={'flex-start'}>
      <VStack align={'left'} spacing="4">
        <Heading size="3xl" fontWeight={'semibold'}>
          12,99 €
        </Heading>
        <Text size="xs" fontWeight={'thin'}>
          inkl. MwSt.
        </Text>
        <Text color={useColorModeValue('green.500', 'green.300')}>
          Sofort lieferbar
        </Text>
        <Button
          fontSize={'2xl'}
          fontWeight={'semibold'}
          textTransform="uppercase"
          leftIcon={<Icon as={MdMessage} />}
          borderRadius={'full'}
          colorScheme="blue"
          size="lg">
          <Text>Jetzt anfragen</Text>
        </Button>
        <Divider />
        <Flex alignItems={'center'} justifyContent="center" fontSize={'xl'}>
          <Box mx="auto">
            <Text fontWeight={'semibold'}>
              <Center>
                <Icon as={FaHeart} mr="2" />
                Wishlist
              </Center>
            </Text>
          </Box>
          <Box mx="auto">
            <Text fontWeight={'semibold'} verticalAlign="center">
              <Center>
                <Icon as={FaShare} mr="2" />
                Teilen
              </Center>
            </Text>
          </Box>
        </Flex>
        <Divider />
      </VStack>
    </Box>
  )
}

const ProductMoreDetail = () => {
  return (
    <Box py="8">
      Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
      ipsumLorem ipsumLorem ipsumLorem ipsum
    </Box>
  )
}

export const ShopProductLayout = (props: {
  header: React.ComponentProps<typeof Header>
}) => {
  return (
    <ShopLayout>
      <Header {...props.header} />
      <Box>
        <Flex direction={{base: 'column', md: 'row'}}>
          <ImageSlider />
          <ProductDetail />
        </Flex>
        <Box display={{base: 'block', md: 'none'}}>
          <ProductMoreDetail />
        </Box>
      </Box>
    </ShopLayout>
  )
}
