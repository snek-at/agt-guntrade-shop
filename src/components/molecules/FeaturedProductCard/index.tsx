import {Button} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {Box, Flex, Heading, Spacer, Text} from '@chakra-ui/layout'
import React from 'react'

import {Borderline} from './style'

export interface FeaturedProductCardProps {
  image: string
  price: number
  name: string
  description: string
  reducedprice?: number
}

const FeaturedProductCard = ({
  image,
  price,
  reducedprice,
  name,
  description
}: FeaturedProductCardProps) => {
  const sale = typeof reducedprice !== 'undefined'
  return (
    <Box
      w={{base: '300px', lg: '20%'}}
      bg="agt.lightgray"
      p="3"
      borderRadius="3px"
      color="black"
      css={Borderline}>
      <Image src={image} alt={name} borderRadius="3px" mt="5" />
      <Box p="2.5">
        <Heading>{name}</Heading>
        <Text minH="3rem">{description}</Text>
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
  )
}

export default FeaturedProductCard
