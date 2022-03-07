import {Heading, VStack} from '@chakra-ui/react'
import React from 'react'
import {generateProductCard} from '../ProductCardLayout'

import {ResponsiveSlider} from './Slider'
import {Link} from 'gatsby'

export const ProductSliderLayout = (props: {
  title: string
  products: Array<any>
}) => {
  const productsForSlider = React.useMemo(
    () =>
      props.products.map(product => (
        <Link
          to={`/products/${product.handle}`}
          draggable="false"
          onDragStart={e => e.preventDefault()}>
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
      <ResponsiveSlider items={productsForSlider} />
    </VStack>
  )
}
