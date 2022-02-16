import {Box, Wrap} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/react'
import {css} from '@emotion/react'
import GatsbyLink from 'gatsby-link'

import ProductCard from '../../../../molecules/ProductCard/3'

export interface ProductsSectionProps {
  products: any[]
}

const ProductsSection = ({products}: ProductsSectionProps) => {
  const linkWidth = useBreakpointValue({base: '300px', xl: '20%'})

  return (
    <Box overflowX="hidden" py="10">
      <Wrap justify="center" spacing="5">
        {products.map((product, index) => (
          <GatsbyLink
            to={'/' + product.slug}
            css={css`
              width: ${linkWidth};
            `}>
            <ProductCard
              isFetching={false}
              width={{base: '300px', xl: '100%'}}
              //            isNew={product.isNew}
              name={product.title}
              caliber={product.tags.filter((tag: string) =>
                tag.startsWith('Kaliber:')
              )}
              price={product.priceRangeV2.maxVariantPrice.amount}
              reducedprice={product.discount}
              images={product.images}
              direction={index === 0 || index === 4 ? 'rigth' : 'left'}
            />
          </GatsbyLink>
        ))}
      </Wrap>
    </Box>
  )
}

export default ProductsSection
