import {Box} from '@chakra-ui/react'
import React from 'react'
import {generateProductCard} from '../ProductCardLayout'

import {Link} from 'gatsby'
import {Slider} from '@snek-at/uikit'

export const ProductSliderLayout = (props: {
  title: string
  products: Array<any>
}) => {
  const productsForSlider = React.useMemo(
    () =>
      props.products.map(product => (
        <Box maxW={'xs'}>
          <Link
            to={`/products/${product.handle}`}
            draggable="false"
            onDragStart={e => e.preventDefault()}>
            {generateProductCard(product)}
          </Link>
        </Box>
      )),
    [props.products]
  )

  return (
    <Box py={16} w="full">
      <Slider>{productsForSlider}</Slider>
    </Box>
  )
}
