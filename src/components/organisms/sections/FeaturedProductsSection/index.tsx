import {Box, Wrap} from '@chakra-ui/layout'
import FeaturedProductCard, {
  FeaturedProductCardProps
} from '../../../molecules/FeaturedProductCard'

export interface FeaturedProductsSectionProps {
  products: FeaturedProductCardProps[]
}

const FeaturedProductsSection = ({products}: FeaturedProductsSectionProps) => {
  return (
    <Box mt="20">
      <Wrap justify="center" spacing="5">
        {products.map(product => (
          <FeaturedProductCard
            name={product.name}
            description={product.description}
            price={product.price}
            reducedprice={product.reducedprice}
            image={product.image}
          />
        ))}
      </Wrap>
    </Box>
  )
}

export default FeaturedProductsSection
