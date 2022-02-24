import {Story, Meta} from '@storybook/react'
import {getProductNodes} from '../../test-data/shopify'
import {ShopCatalogLayout} from '../../layout/ShopCatalogLayout'

const products = getProductNodes(12)

export default {
  title: 'Layouts/ShopCatalogLayout',
  component: ShopCatalogLayout
} as Meta

const path = '/langwaffen/neuelangwaffen/products'

export const Page = () => (
  <ShopCatalogLayout
    header={{
      path,
      title: 'Vectan Schwarzpulverpresslinge',
      sortOptions: ['Alphabetisch', 'Preis aufsteigend', 'Preis absteigend'],
      onSortChange: () => {}
    }}
    products={{
      items: products,
      getPath: (handle: string) => `${path}/${handle}`
    }}
    filter={{
      allTags: ['Widerladen:Kurzwaffe', 'widerladen:Langwaffe'],
      activeTags: ['Widerladen:Kurzwaffe'],
      onActiveTagsChange: allTags => alert(JSON.stringify(allTags)),
      priceFilter: {
        minPrice: 50,
        maxPrice: 100,
        onPriceChange: (min, max) => alert(`${min} - ${max}`)
      }
    }}
    onLoadMore={() => {
      return false
    }}
  />
)
