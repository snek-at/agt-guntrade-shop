import {Story, Meta} from '@storybook/react'
import {ShopLayout} from '../../layout/ShopLayout'
import {products} from '../pages/_data/products'

export default {
  title: 'Layouts/ShopLayout',
  component: ShopLayout
} as Meta

export const Page = () => <ShopLayout />
