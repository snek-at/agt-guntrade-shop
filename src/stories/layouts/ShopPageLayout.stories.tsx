import {Story, Meta} from '@storybook/react'
import {ShopPageLayout} from '../../layout/ShopLayout'
import {products} from '../pages/_data/products'

export default {
  title: 'Layouts/ShopPageLayout',
  component: ShopPageLayout
} as Meta

export const Page = () => (
  <ShopPageLayout
    header={{
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
      onActiveTagsChange: allTags => alert(JSON.stringify(allTags))
    }}
  />
)
