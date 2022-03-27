import {Box, Wrap} from '@chakra-ui/layout'
import ProductCard, {ProductCardProps} from '../../../molecules/ProductCard'

export interface ProductsSectionProps {
  products: ProductCardProps[]
}

const ProductsSection = ({products}: ProductsSectionProps) => {
  return (
    <Box mt="20">
      <Wrap justify="center" spacing="5">
        {products.map((product, index) => (
          <>
            {console.log(index)}
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              reducedprice={product.reducedprice}
              images={product.images}
              direction={index === 0 || index === 4 ? 'rigth' : 'left'}
            />
          </>
        ))}
      </Wrap>
    </Box>
  )
}

export default ProductsSection
