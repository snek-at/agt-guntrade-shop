import {Container, SimpleGrid, Center, Box, Heading} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/button'
import FeaturedProductCard from '../../../../molecules/ProductCard/3'
import {Bullet} from '../../../../../common/assets'

interface ShopifyNode {
  images: any[]
  priceRangeV2: {
    maxVariantPrice: {
      amount: number
    }
    minVariantPrice: {
      amount: number
    }
  }
  tags: string[]
  title: string
  caliber: string
  reducedprice?: number
  direction?: string
  isNew: boolean
}

export interface FeaturedProductsSectionProps {
  products: ShopifyNode[]
}

const FeaturedProductsSection = ({products}: FeaturedProductsSectionProps) => {
  return (
    <Container as="section" maxW="8xl" pt="6" id="featuredproducts">
      <Box textAlign="center" my="10">
        <Heading>Featured Products</Heading>
        <Bullet color="agt.red" w="unset" fontSize="xl" mt="5" mb="10" />
      </Box>
      <SimpleGrid columns={{base: 2, md: 3, xl: 4}} spacing="5">
        {products.map((product, index) => (
          <FeaturedProductCard
            isNew={product.isNew}
            name={product.title}
            caliber={product.tags[1]}
            price={product.priceRangeV2.maxVariantPrice.amount}
            reducedprice={product.priceRangeV2.maxVariantPrice.amount}
            images={product.images}
            direction={index === 0 || index === 4 ? 'rigth' : 'left'}
          />
        ))}
      </SimpleGrid>
      <Center mt={{base: '0', md: '10'}}>
        <Button
          mt={{base: '0', md: '10'}}
          color="white"
          borderRadius="5px"
          bg="agt.blue"
          variant="solid"
          size="lg"
          onClick={() => null}>
          Mehr davon
        </Button>
      </Center>
    </Container>
  )
}

export default FeaturedProductsSection
