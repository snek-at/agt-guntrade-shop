import {Story, Meta} from '@storybook/react'
import {ProductGrid} from '../../layout/ProductGridLayout'

import {products} from '../pages/_data/products'

export default {
  title: 'Layouts/ProductGridLayout',
  component: ProductGrid
} as Meta

export const Basic = () => (
  <ProductGrid items={products} onItemClick={() => {}} />
)

export const WithTitle = () => (
  <ProductGrid
    title="Unsere Empfehlungen"
    items={products}
    onItemClick={() => {}}
  />
)
