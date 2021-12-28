import {Box, Wrap} from '@chakra-ui/layout'
import ProductCard, {
  ProductCardProps
} from '../../../../molecules/ProductCard/3'

export interface ProductsSectionProps {
  products: ProductCardProps[]
}

const ProductsSection = ({products}: ProductsSectionProps) => {
  return (
    <Box overflowX="hidden" py="10">
      <Wrap justify="center" spacing="5">
        {products.map((product, index) => (
          <ProductCard
            width={{base: '300px', xl: '20%'}}
            isNew={product.isNew}
            name={product.name}
            caliber={product.caliber}
            price={product.price}
            reducedprice={product.reducedprice}
            images={product.images}
            direction={index === 0 || index === 4 ? 'rigth' : 'left'}
          />
        ))}
      </Wrap>
    </Box>
  )
}

export default ProductsSection
