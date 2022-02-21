import {Story, Meta} from '@storybook/react'
import {ShopCatalogLayout} from '../../layout/ShopCatalogLayout'
import {products} from '../pages/_data/products'

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
      onItemClick: (item: any) => console.log(item)
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
