import {
  SimpleGrid,
  Badge,
  Box,
  BoxProps,
  Text,
  Image,
  Circle,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import {AnimatePresence, motion} from 'framer-motion'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Link as GatsbyLink, navigate} from 'gatsby'
import {generateProductCard} from '../../../layout/ProductCardLayout'

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

export interface CategoryTabProps {
  products: ShopifyNode[]
  direction: string
  visible: string
  getPath: (handle: string) => string
}

const TabBox = motion<BoxProps>(Box)

const variants = {
  enter: (direction: string) => {
    return {
      position: 'absolute',
      y: direction === 'right' ? 75 : -75,
      opacity: 0
    }
  },
  center: {
    position: 'relative',
    opacity: 1,
    y: 0
  },
  exit: (direction: string) => {
    return {
      position: 'absolute',
      display: 'none',
      y: direction === 'right' ? -75 : 75,
      opacity: 0
    }
  }
}

const CategoryTab = ({
  products,
  direction,
  visible,
  getPath
}: CategoryTabProps) => {
  return (
    <AnimatePresence exitBeforeEnter custom={direction}>
      {visible === 'visible' && (
        <TabBox
          position="relative"
          key={visible}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          px={2}
          transition={{duration: 0.15}}>
          <SimpleGrid
            columns={{base: 1, sm: 2, md: 3, xl: 6}}
            spacing="5">
            {products.map((item, key) => (
              <Link key={key} as={GatsbyLink} to={getPath(item.handle)} _hover={{textDecoration: 'none'}}>
                {generateProductCard(item)}
                {/* {alert("fuck")} */}
              </Link>
            ))}
          </SimpleGrid>
        </TabBox>
      )}
    </AnimatePresence>
  )
}

export default CategoryTab
