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
        {products.map((product, index) => (
          <>
            {console.log(index)}
            <FeaturedProductCard
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

export default FeaturedProductsSection
