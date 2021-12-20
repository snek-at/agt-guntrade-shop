import {Box, Wrap} from '@chakra-ui/layout'
import FeaturedProductCard, {
  FeaturedProductCardProps
} from '../../../../molecules/FeaturedProductCard/3'

export interface FeaturedProductsSectionProps {
  products: FeaturedProductCardProps[]
}

const FeaturedProductsSection = ({products}: FeaturedProductsSectionProps) => {
  return (
    <Box overflowX="hidden" py="10">
      <Wrap justify="center" spacing="5">
        {products.map((product, index) => (
          <FeaturedProductCard
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

export default FeaturedProductsSection
