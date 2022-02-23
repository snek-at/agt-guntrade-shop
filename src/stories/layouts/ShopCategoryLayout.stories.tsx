import {Story, Meta} from '@storybook/react'
import {getProductNodes, getRandomCategoryNodes} from '../../test-data/shopify'
import {ShopCategoryLayout} from '../../layout/ShopCategoryLayout'

export default {
  title: 'Layouts/ShopCategoryLayout',
  component: ShopCategoryLayout
} as Meta

const products = getProductNodes(10)

const categories = getRandomCategoryNodes(5)

const path = '/langwaffen/neuelangwaffen/products'

export const Page = () => (
  <ShopCategoryLayout
    path={path}
    title="Vectan Schwarzpulverpresslinge"
    category={{
      items: categories as any,
      getPath: (handle: string) => `/${handle}`
    }}
    productGrid={{
      title: 'Top Produkte',
      items: products.slice(0, 8),
      getPath: (handle: string) => `/products/${handle}`
    }}
  />
)
