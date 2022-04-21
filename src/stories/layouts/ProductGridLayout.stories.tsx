import {Story, Meta} from '@storybook/react'
import {allShopifyProduct, getProductNodes} from '../../test-data/shopify'
import {ProductGrid} from '../../layout/ProductGridLayout'
import {ProductGrid as ProductGrid1} from '../../layout/ProductGridLayout/1'

const products = getProductNodes(16)

export default {
  title: 'Layouts/ProductGridLayout',
  component: ProductGrid
} as Meta

export const Old = () => (
  <ProductGrid1
    items={products}
    getPath={(handle: string) => `/produkte/${handle}`}
  />
)

export const Basic = () => (
  <ProductGrid
    items={products}
    getPath={(handle: string) => `/produkte/${handle}`}
  />
)

export const WithTitle = () => (
  <ProductGrid
    title="Unsere Empfehlungen"
    items={products}
    getPath={(handle: string) => `/produkte/${handle}`}
  />
)
