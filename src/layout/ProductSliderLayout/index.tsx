import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  VStack
} from '@chakra-ui/react'
import {AnimatePresence, motion, useAnimation} from 'framer-motion'
import React from 'react'
import {generateProductCard, ProductCardLayout} from '../ProductCardLayout'

import {gridPadBoxes} from '../../common/utils'
import styled from '@emotion/styled'
import {Slider} from './Slider'
import {Link} from 'gatsby'


export const ProductSliderLayout = (props: {
  title: string
  products: Array<any>
}) => {
  const productsForSlider = React.useMemo(
    () =>
      props.products.map(product => (
        <Link to={`/products/${product.handle}`}>
          {generateProductCard(product)}
        </Link>
      )),
    [props.products]
  )

  return (
    <VStack spacing={6}>
      <Heading textAlign={'center'} size="xl" borderBottom={'1px solid'}>
        {props.title}
      </Heading>
      <Slider items={productsForSlider} />
    </VStack>
  )
}
