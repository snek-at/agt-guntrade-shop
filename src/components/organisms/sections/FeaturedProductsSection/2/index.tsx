import {
  Container,
  SimpleGrid,
  Center,
  Box,
  Heading,
  Link
} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/button'
import {generateProductCard} from '../../../../../layout/ProductCardLayout'
import {Bullet} from '../../../../../common/assets'
import {Link as GatsbyLink, navigate} from 'gatsby'
import {Field} from '@jaenjs/jaen'

export interface ShopifyNode {
  id: string
  handle: string
  collections: {
    handle: string
  }[]
  descriptionHtml: string
  title: string
  tags: string[]
  status: string
  totalinventory?: number
  createdAt: string
  contextualPricing: {
    maxVariantPricing: {
      price: {
        amount: string
      }
      compareAtPrice: {
        amount: string
      } | null
    }
  }
  images: {
    shopifyId: string
    gatsbyImageData: any
  }[]
  featuredImage: {
    id: string
    gatsbyImageData: any
  }
}

export interface FeaturedProductsSectionProps {
  products: ShopifyNode[]
  getPath: (handle: string) => string
}

const FeaturedProductsSection = ({
  products,
  getPath
}: FeaturedProductsSectionProps) => {
  return (
    <Container as="section" maxW="8xl" pt="6" id="featuredproducts">
      <Box textAlign="center" my="10">
        <Heading size="2xl">
          <Field.Text
            name="featured-products-heading"
            defaultValue="Unser Sortiment"
          />
        </Heading>
        <Bullet color="agt.red" w="unset" fontSize="xl" mt="5" mb="10" />
      </Box>
      <SimpleGrid columns={{base: 2, md: 4, xl: 6}} spacing="5">
        {products.map((item, key) => {
          return (
            <Link key={key} as={GatsbyLink} to={getPath(item.handle)}>
              {generateProductCard(item)}
            </Link>
          )
        })}
      </SimpleGrid>
      <Center mt={{base: '4', md: '10'}}>
        <Button
          color="white"
          borderRadius="5px"
          bg="agt.blue"
          variant="solid"
          size="lg"
          _hover={{bg: 'agt.blueAccent'}}
          onClick={() => navigate('/produkte')}>
          Mehr davon
        </Button>
      </Center>
    </Container>
  )
}

export default FeaturedProductsSection
