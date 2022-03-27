import {Story, Meta} from '@storybook/react'
import {allShopifyProduct, getProductNodes} from '../../test-data/shopify'
import {ProductGrid} from '../../layout/ProductGridLayout'

const products = getProductNodes(16)

export default {
  title: 'Layouts/ProductGridLayout',
  component: ProductGrid
} as Meta

export const Basic = () => (
  <ProductGrid
    items={products}
    getPath={(handle: string) => `/products/${handle}`}
  />
)

export const WithTitle = () => (
  <ProductGrid
    title="Unsere Empfehlungen"
    items={products}
    getPath={(handle: string) => `/products/${handle}`}
  />
)
