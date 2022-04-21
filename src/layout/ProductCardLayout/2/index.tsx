import {
  Flex,
  Box,
  Badge,
  useColorModeValue,
  HStack,
  Text,
  VStack,
  Spacer,
  Button,
} from '@chakra-ui/react'
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'
import React from 'react'

import {cardStyle} from './style'

function calculateTextColorForBackgroundColor(hexColor: string) {
  const rgb = hexColor
    .replace('#', '')
    .match(/../g)
    ?.map(x => parseInt(x, 16))!
  const luma = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
  return luma > 140 ? 'black' : 'white'
}

function ImageControls(props: {
  isActive: boolean
  controls: Array<{
    icon: React.ReactElement
    onClick: () => void
  }>
}) {
  const {isActive} = props

  // hstack with two buttons full width and centered

  // Return a gray box with three icons inside
  return (
    <Box
      hidden={!isActive}
      d="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('gray.200', 'gray.700')}
      borderRadius="sm"
      w="100%"
      h="100%">
      <HStack align="center" justify="center" w="100%" spacing={'2'} mx="2">
        {props.controls.map(control => (
          <Button
            w="100%"
            variant={'ghost'}
            _focus={{boxShadow: 'none'}}
            onClick={e => {
              e.stopPropagation()
              e.preventDefault()
              control.onClick()
            }}>
            {control.icon}
          </Button>
        ))}
      </HStack>
    </Box>
  )
}

function ImageBoxWithTags(props: {
  image: {
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
  tags: ProductCardProps['tags']
}) {
  // Box with image as background and tags on bottom
  const {image, tags} = props

  return (
    <Box
      className="pimg background"
      borderRadius="md"
      // boxShadow="lg"
      // bg={useColorModeValue('gray.200', 'gray.600')}
      overflow="hidden"
      position="relative">
      <GatsbyImage
        onDragStart={e => e.preventDefault()}
        draggable="false"
        image={image.gatsbyImageData}
        alt={image.alt}
      />
      <Flex position="absolute" top="0" left="0" right="0" p={2}>
        {tags.map(tag => (
          <Badge
            variant="solid"
            fontSize="sm"
            fontWeight="semibold"
            rounded="md"
            px={2}
            mr={2}
            key={tag.name}
            color={calculateTextColorForBackgroundColor(tag.color)}
            bgColor={tag.color}
            textTransform="none">
            {tag.name}
          </Badge>
        ))}
      </Flex>
    </Box>
  )
}

function Price(props: {price: string; discountPrice?: string}) {
  const price = `${parseFloat(props.price).toFixed(2)} €`
  if (props.discountPrice) {
    const discountPrice = `${parseFloat(props.discountPrice).toFixed(2)} €`
    // strike through price and put discount price on the right side
    return (
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent={{
          base: 'center',
          md: 'flex-start'
        }}>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.600"
          textDecoration={'line-through'}>
          {price}
        </Text>
        <Text fontSize="sm" fontWeight="bold" color="red.500" ml={2}>
          {discountPrice}
        </Text>
      </Flex>
    )
  }

  return (
    <Box fontSize="sm" fontWeight="semibold" mb={2}>
      <Text>{price}</Text>
    </Box>
  )
}

export interface ProductCardProps {
  id: string
  image: {
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
  images: {
    alt: string
    gatsbyImageData: IGatsbyImageData
  }[]
  name: string
  categoriesString: string
  price: string
  discountPrice?: string
  tags: Array<{name: string; color: string}>
  createdAt: string
}

export function ProductCardLayout(props: ProductCardProps) {
  const {id, image, images, name, categoriesString, price, discountPrice, createdAt} =
    props

  const getDefaultTags = (tags: typeof props.tags = []) => {
    if (new Date(createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000) {
      tags.push({name: 'Neu', color: 'agt.blue'})
    }

    if (discountPrice) {
      const percent = (1 - parseFloat(discountPrice) / parseFloat(price)) * -100

      tags.push({name: `${percent.toFixed(0)}%`, color: 'agt.red'})
    }

    return tags
  }

  const allimages = [image].concat(images)

  if (images)
    allimages.concat(images)

  console.log("\n\n\n fuck \n\n\n")

  const [imageIndex, setImageIndex] = React.useState(0)
  const [tags, _] = React.useState(getDefaultTags())
  

  return (
    <VStack
      display={"block"}
      css={cardStyle()}
      boxSize={'full'}
      cursor="pointer"
      // bg="red"
      textAlign={{
        base: 'center',
        md: 'left'
      }}>
      <Box
        className="pcard"
        position="relative"
        cursor="pointer"
        bg={useColorModeValue('white', 'gray.700')}
        px={{base: '1', md: '2', lg: '3'}}
        py="5"
        // h={'full'}
        minH={'full'}
        borderRadius="5px"
        border="1px"
        borderColor="gray.200"
        // mt="3"
        >
        {allimages?.map((image, index) => (
          <>
          <input type="radio" className='radioimg' name={"imgbox-" + id} id={"imgbox-" + id + "-" + index} checked={imageIndex === index}></input>
          <ImageBoxWithTags image={image} tags={tags} />
          </>
        ))}
        <Text fontSize="sm" isTruncated>
          {categoriesString || '-'}
        </Text>
        <Text fontWeight="semibold">{name}</Text>
        <Price price={price} discountPrice={discountPrice} />
        <Spacer
          position="absolute"
          w="0"
          h="100%"
          right="0"
          top="0"
          borderLeft="1px"
          borderColor="gray.200"
        />
        <Box
          className='borderline'
          cursor="pointer"
          bg={useColorModeValue('white', 'gray.700')}
          px={{base: '1', md: '2', lg: '3'}}
          py="5"
          // h={'full'}
          // minH={'full'}
          borderRadius="5px"
          border="1px"
          borderColor="gray.200"
          _hover={{
            before: {borderColor: 'agt.red'},
            _after: {borderColor: 'agt.red'}
          }}
        >
          <VStack
            className='imgline'
            position="absolute"
            zIndex={9}
            opacity="0"
            boxSize={'full'}
            // p="5"
            w="calc(50% * (1/1.5))"
            top={0}
            left="calc(100% * (1/1.5))"
          >
            {allimages.map((image, index) => (
              <>                
                <label htmlFor={"imgbox-" + id + "-" + index}>
                  <Box
                    // position="absolute"
                    className={"iimgbox-" + index}
                    borderBottom="1px"
                    borderColor="gray.200"
                  >
                    <GatsbyImage
                      onDragStart={e => e.preventDefault()}
                      draggable="false"
                      image={image.gatsbyImageData}
                      alt={image.alt}
                      onMouseOver={() => setImageIndex(index)}
                      onMouseLeave={() => setImageIndex(0)}
                    />
                  </Box>
                </label>
              </>
            ))}
          </VStack> 
        </Box>
      </Box>
    </VStack>
  )
}

export function generateProductCard(item: any) {
  const tagsWithoutCategory = item.tags
    .filter((tag: any) => !tag.startsWith('Kategorie:'))
    .map((tag: any) => tag.split(':')[1])
    .join(', ')

  return (
    <ProductCardLayout
      createdAt={item.createdAt}
      id={item.id}
      tags={[]}
      image={item.featuredImage}
      images={item.images}
      name={item.title}
      categoriesString={tagsWithoutCategory}
      price={item.contextualPricing.maxVariantPricing.price.amount}
      discountPrice={
        item.contextualPricing.maxVariantPricing.compareAtPrice?.amount
      }
    />
  )
}
