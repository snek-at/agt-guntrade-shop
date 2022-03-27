import {Story, Meta} from '@storybook/react'

import ProductsSection, {FeaturedProductsSectionProps, ShopifyNode} from '.'
import {allShopifyProduct, getProductNodes} from '../../../../../test-data/shopify'

const products: ShopifyNode[] = getProductNodes(16)

export default {
  title: 'Stories/IndexPage/ProductsSection',
  component: ProductsSection
} as Meta

const Template: Story<FeaturedProductsSectionProps> = args => (
  <ProductsSection {...args} />
)

export const Section2 = Template.bind({})
Section2.args = {
  products: products,
  getPath: (handle: string) => `/products/${handle}`
}
