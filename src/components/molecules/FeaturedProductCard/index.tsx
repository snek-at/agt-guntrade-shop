import {Button} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {
  Badge,
  Box,
  BoxProps,
  Flex,
  Heading,
  Spacer,
  Text
} from '@chakra-ui/layout'
import {motion} from 'framer-motion'
import React from 'react'

import {borderline} from './style'

const MotionBox = motion<BoxProps>(Box)

const variants = {
  intial: (direction: string) =>
    direction === 'left' ? {display: 'none'} : {display: 'none'},
  enter: (direction: string) =>
    direction === 'left' ? {display: 'box', x: -130} : {display: 'box', x: 130},
  exit: {display: 'none'}
}

export interface FeaturedProductCardProps {
  images: string[]
  price: number
  name: string
  description: string
  reducedprice?: number
  direction: string
}

const FeaturedProductCard = ({
  images,
  price,
  reducedprice,
  name,
  description,
  direction
}: FeaturedProductCardProps) => {
  const sale = typeof reducedprice !== 'undefined'
  const [imageIndex, setImageIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(false)

  return (
    <Flex
      position="relative"
      w={{base: '300px', lg: '20%'}}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {visible && (
        <MotionBox
          border="solid"
          borderRight={direction === 'left' ? 'none' : 'solid'}
          borderLeft={direction === 'left' ? 'solid' : 'none'}
          right={direction === 'left' ? 'none' : '0px'}
          borderWidth="2px"
          borderColor="agt.red"
          borderLeftRadius="3px"
          top="-1.5%"
          h="103%"
          py="3"
          pl="3"
          bg="agt.lightgray"
          position="absolute"
          zIndex="2"
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={direction}>
          <Box bg="white" p="2" mr="2" borderRadius="3px">
            {images.map((image, index) => {
              if (index !== imageIndex) {
                return (
                  <Image
                    onClick={() => setImageIndex(index)}
                    w="100px"
                    src={image}
                    alt={name}
                    mb="4"
                    _last={{mb: 0}}
                  />
                )
              }
            })}
          </Box>
        </MotionBox>
      )}
      <Box
        css={borderline(visible)}
        transform={visible ? 'scale(1.03)' : 'none'}
        borderX="none"
        bg="agt.lightgray"
        p="3"
        borderRadius="3px"
        color="black">
        <Image src={images[imageIndex]} alt={name} borderRadius="3px" mt="5" />
        <Box p="2.5">
          <Heading>{name}</Heading>
          <Box minH="3rem">
            <Text noOfLines={3}>{description.split(';')[0]}</Text>
            <Badge variant="solid" bg="agt.red" borderRadius="5px">
              {description.split(';')[1]}
            </Badge>
          </Box>
          <Flex mt="4">
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
            <Spacer />
            <Button colorScheme="agt.grayScheme">Jetzt kaufen</Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default FeaturedProductCard
