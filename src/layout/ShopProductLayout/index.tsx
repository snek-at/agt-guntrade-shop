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
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'
import {ProductSliderLayout} from '../ProductSliderLayout'
import {BrandSliderLayout} from '../BrandSliderLayout'

const Header = (props: {title: string; path: string}) => {
  return (
    <Box>
      <Breadcrumbs path={props.path} />
      <Heading size="xl" fontWeight={'semibold'}>
        {props.title}
      </Heading>
    </Box>
  )
}

type SliderImage = {
  alt: string
  gatsbyImageData: IGatsbyImageData
}

const ImageThumbnailWrapItem = (props: {
  image: SliderImage
  active: boolean
  onClick: () => void
}) => {
  const {alt, gatsbyImageData} = props.image
  return (
    <WrapItem
      boxSize={{base: '16', md: '20'}}
      onClick={props.onClick}
      cursor="pointer"
      boxShadow={props.active ? 'inset 0px 4px 0px 0px #eb1933' : 'none'}
      p={2}
      mr={2}
      mb={2}
      _hover={{
        bg: useColorModeValue('gray.300', 'gray.800')
      }}
      transition="ease-out">
      <GatsbyImage image={gatsbyImageData} alt={alt} />
    </WrapItem>
  )
}

const ImageSlider = (props: {
  featuredImage: SliderImage
  images: Array<SliderImage>
  productMoreDetail?: React.ComponentProps<typeof ProductMoreDetail>
}) => {
  // null is featured image
  const [currentImage, setCurrentImage] = React.useState<SliderImage>(
    props.featuredImage
  )

  return (
    <Box my="4" w={{base: '100%', md: '70%'}}>
      <AspectRatio ratio={16 / 9}>
        <Box>
          <GatsbyImage
            image={currentImage.gatsbyImageData}
            alt={currentImage.alt}
          />
        </Box>
      </AspectRatio>
      <Wrap
        bg={useColorModeValue('gray.200', 'gray.700')}
        spacing={0}
        justify="center">
        <ImageThumbnailWrapItem
          image={props.featuredImage}
          active={currentImage === props.featuredImage}
          onClick={() => setCurrentImage(props.featuredImage)}
        />

        {props.images.map((image, index) => (
          <ImageThumbnailWrapItem
            key={index}
            image={image}
            active={currentImage === image}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </Wrap>

      <Box display={{base: 'none', md: 'block'}}>
        <ProductMoreDetail {...props.productMoreDetail!} />
      </Box>
    </Box>
  )
}

const ProductDetail = (props: {
  title: string
  price: string
  status: string
}) => {
  return (
    <Box
      w={{base: '100%', md: '30%'}}
      pl={{base: 0, md: 4}}
      position={'sticky'}
      top="15"
      alignSelf={'flex-start'}>
      <VStack align={'left'} spacing="4">
        <Heading size="3xl" fontWeight={'semibold'}>
          {`${props.price}€`}
        </Heading>
        <Text size="xs" fontWeight={'thin'}>
          inkl. MwSt.
        </Text>
        <Text color={useColorModeValue('green.500', 'green.300')}>
          {props.status}
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

function replaceHexColorsInHTML(
  html: string,
  coloraHex: string,
  colorbHex: string
) {
  return html.replaceAll(coloraHex, colorbHex)
}

const ProductMoreDetail = (props: {description: string}) => {
  const color = useColorModeValue('#000000', '#ffffff')

  const html = replaceHexColorsInHTML(props.description, '#000000', color)

  return (
    <Box py="8">
      <Box dangerouslySetInnerHTML={{__html: html}} />
    </Box>
  )
}

export const ShopProductLayout = (props: {
  header: React.ComponentProps<typeof Header>
  imageSlider: React.ComponentProps<typeof ImageSlider>
  productDetail: React.ComponentProps<typeof ProductDetail>
  productMoreDetail: React.ComponentProps<typeof ProductMoreDetail>
  featuredProducts: Array<any>
}) => {
  return (
    <ShopLayout>
      <Header {...props.header} />
      <VStack spacing={12}>
        <Box>
          <Flex direction={{base: 'column', md: 'row'}}>
            <ImageSlider
              {...props.imageSlider}
              productMoreDetail={props.productMoreDetail}
            />
            <ProductDetail {...props.productDetail} />
          </Flex>
          <Box display={{base: 'block', md: 'none'}}>
            <ProductMoreDetail {...props.productMoreDetail} />
          </Box>
        </Box>
        <ProductSliderLayout
          title="Unsere Empfehlungen"
          products={props.featuredProducts}
        />
        <BrandSliderLayout title="Unsere Vertretungen" />
        <Box h="500">foo</Box>
      </VStack>
    </ShopLayout>
  )
}
