import Icon from '@chakra-ui/icon'
import {
  Badge,
  Box,
  BoxProps,
  Circle,
  Flex,
  Spacer,
  Text
} from '@chakra-ui/layout'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {FiShoppingCart} from '@react-icons/all-files/fi/FiShoppingCart'

import {borderline, sideline} from './style'
import {GatsbyImage, GatsbyImageProps} from 'gatsby-plugin-image'
import {Skeleton} from '@chakra-ui/react'

const MotionBox = motion<BoxProps>(Box)
const FadingImage = motion<GatsbyImageProps>(GatsbyImage)

const variants = {
  intial: {display: 'none'},
  enter: (direction: string) =>
    direction === 'left' ? {display: 'box', x: -128} : {display: 'box', x: 128},
  exit: {display: 'none'}
}

export interface ProductCardProps {
  images: any[]
  price: number
  name: string
  caliber: string
  width?: any
  isNew?: boolean
  reducedprice?: number
  direction?: string
  filters?: string[]
  isFetching: boolean
}

const ProductCard = ({
  width,
  images,
  price,
  reducedprice,
  name,
  caliber,
  direction,
  isNew,
  isFetching
}: ProductCardProps) => {
  const sale = typeof reducedprice !== 'undefined'
  const [imageIndex, setImageIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(false)

  if (typeof caliber[0] === 'string') {
    caliber = caliber[0].split(':')[1]
  }

  return (
    <Flex
      position="relative"
      w={width}
      maxW="340px"
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {visible && (
        <MotionBox
          cursor="pointer"
          css={sideline(visible, direction || '')}
          border="solid"
          borderRight={direction === 'left' ? 'none' : 'solid'}
          borderLeft={direction === 'left' ? 'solid' : 'none'}
          right={direction === 'left' ? 'none' : '0px'}
          borderWidth="1px"
          borderColor="agt.lightgray"
          borderLeftRadius={direction === 'left' ? '5px' : '0px'}
          borderTopRightRadius={direction === 'left' ? '0px' : '5px'}
          borderBottomRightRadius={direction === 'left' ? '0px' : '5px'}
          mt="-2%"
          h="103%"
          p="3"
          bg="white"
          position="absolute"
          zIndex="2"
          variants={variants}
          initial="initial"
          whileHover="enter"
          exit="exit"
          custom={direction}>
          {images.map((gatsbyimage, index) => {
            if (index !== 0) {
              return (
                <GatsbyImage
                  className="sideImageStyle"
                  image={gatsbyimage.gatsbyImageData}
                  alt={name}
                  onMouseOver={() => setImageIndex(index)}
                  onMouseLeave={() => setImageIndex(0)}
                />
              )
            }
          })}
        </MotionBox>
      )}
      <Box
        minW="100%"
        css={borderline(visible)}
        transform={visible ? 'scale(1.03)' : 'none'}
        borderX="none"
        cursor="pointer"
        border="1px"
        borderColor="agt.lightgray"
        p="3"
        borderRadius="5px"
        color="black"
        borderRightWidth={
          visible ? (direction !== 'left' ? '0px' : '1px') : '1px'
        }
        borderLeftWidth={
          visible ? (direction === 'left' ? '0px' : '1px') : '1px'
        }>
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="blue.200"
            zIndex="2"
          />
        )}
        <Box minH="210px">
          <AnimatePresence>
            {(imageIndex &&
              images.length > 1 &&
              images.map((gatsbyimage, index) => {
                console.log(gatsbyimage.gatsbyImageData)
                return (
                  imageIndex === index && (
                    <MotionBox initial={{opacity: 0}} animate={{opacity: 1}}>
                      <Skeleton isLoaded={!isFetching}>
                        <GatsbyImage
                          image={gatsbyimage.gatsbyImageData}
                          alt={name}
                        />
                      </Skeleton>
                    </MotionBox>
                  )
                )
              })) || (
              <GatsbyImage image={images[0].gatsbyImageData} alt={name} />
            )}
          </AnimatePresence>
        </Box>
        <Box p="2.5">
          {isNew && (
            <Badge
              borderRadius="5px"
              px="2"
              fontSize="0.8em"
              colorScheme="blue">
              New
            </Badge>
          )}
          <Flex>
            <Skeleton isLoaded={!isFetching}>
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
            </Skeleton>
            <Spacer />

            <Icon
              as={FiShoppingCart}
              h={7}
              w={7}
              _hover={{color: 'agt.blue'}}
              zIndex="1"
              position="relative"
            />
          </Flex>
          <Flex>
            <Skeleton isLoaded={!isFetching}>
              <Badge
                mt="4"
                h="1.6em"
                variant="solid"
                bg="agt.blue"
                borderRadius="5px"
                px="2"
                fontSize="0.8em">
                {caliber}
              </Badge>
            </Skeleton>
            <Spacer />
            <Skeleton isLoaded={!isFetching}>
              <Flex>
                <Text
                  mt={sale ? '2' : '0.5'}
                  fontSize={sale ? '21' : '30'}
                  textDecoration={sale ? 'line-through' : 'none'}
                  color={sale ? 'gray.700' : 'black'}>
                  {price}€
                </Text>
                {sale ? (
                  <Text fontSize="30" ml="1.5">
                    {reducedprice}€
                  </Text>
                ) : (
                  <></>
                )}
              </Flex>
            </Skeleton>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductCard
