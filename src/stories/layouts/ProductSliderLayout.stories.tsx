import {Story, Meta} from '@storybook/react'
import {ProductSliderLayout} from '../../layout/ProductSliderLayout'

import {products} from '../pages/_data/products'

export default {
  title: 'Layouts/ProductSliderLayout',
  component: ProductSliderLayout
} as Meta

export const Page = () => (
  <ProductSliderLayout title="Unsere Empfehlungen" products={products} />
)
