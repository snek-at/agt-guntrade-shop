import {Story, Meta} from '@storybook/react'
import {getProductNodes} from '../../test-data/shopify'
import {ProductSliderLayout} from '../../layout/ProductSliderLayout'

const products = getProductNodes(8)

export default {
  title: 'Layouts/ProductSliderLayout',
  component: ProductSliderLayout
} as Meta

export const Page = () => (
  <ProductSliderLayout
    title="Unsere Empfehlungen"
    products={products}
    onProductClick={p => null}
  />
)
