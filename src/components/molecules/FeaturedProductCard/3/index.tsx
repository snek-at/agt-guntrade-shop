import Icon from '@chakra-ui/icon'
import {Image, ImageProps} from '@chakra-ui/image'
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

const MotionBox = motion<BoxProps>(Box)
const FadingImage = motion<ImageProps>(Image)

const variants = {
  intial: (direction: string) =>
    direction === 'left' ? {display: 'none'} : {display: 'none'},
  enter: (direction: string) =>
    direction === 'left' ? {display: 'box', x: -128} : {display: 'box', x: 128},
  exit: {display: 'none'}
}

export interface FeaturedProductCardProps {
  images: string[]
  price: number
  name: string
  caliber: string
  reducedprice?: number
  direction?: string
  isNew: boolean
}

const FeaturedProductCard = ({
  images,
  price,
  reducedprice,
  name,
  caliber,
  direction,
  isNew
}: FeaturedProductCardProps) => {
  const sale = typeof reducedprice !== 'undefined'
  const [imageIndex, setImageIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(false)

  return (
    <Flex
      position="relative"
      w={{base: '300px', xl: '20%'}}
      onMouseEnter={() => setVisible(true)}
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
          animate="enter"
          exit="exit"
          custom={direction}>
          {images.map((image, index) => {
            if (index !== 0) {
              return (
                <Image
                  fallback={<Box />}
                  _hover={{filter: 'brightness(80%)'}}
                  onMouseEnter={() => setImageIndex(index)}
                  onMouseLeave={() => setImageIndex(0)}
                  position="relative"
                  zIndex="3"
                  pointerEvents="all"
                  w="100px"
                  src={image}
                  alt={name}
                  mb="3"
                  _last={{mb: 0}}
                  p="2"
                  bg="agt.lightgray"
                  borderRadius="5px"
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
            bg="red.200"
            zIndex="2"
          />
        )}
        <Box minH="210px">
          <AnimatePresence>
            {(imageIndex && (
              <FadingImage
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                src={images[imageIndex]}
                alt={name}
                borderRadius="5px"
                mt="5"
                fallback={<Box />}
              />
            )) || (
              <Image
                src={images[0]}
                alt={name}
                borderRadius="5px"
                mt="5"
                fallback={<Box />}
              />
            )}
          </AnimatePresence>
        </Box>
        <Box p="2.5">
          {isNew && (
            <Badge borderRadius="5px" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
          <Flex>
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            <Spacer />

            <Icon
              as={FiShoppingCart}
              h={7}
              w={7}
              _hover={{color: 'agt.red'}}
              zIndex="1"
              position="relative"
            />
          </Flex>
          <Flex>
            <Badge
              mt="4"
              h="1.6em"
              variant="solid"
              bg="agt.red"
              borderRadius="5px"
              px="2"
              fontSize="0.8em">
              {caliber}
            </Badge>
            <Spacer />
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
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default FeaturedProductCard
