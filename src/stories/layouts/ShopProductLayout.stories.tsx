import {Story, Meta} from '@storybook/react'
import {ShopProductLayout} from '../../layout/ShopProductLayout'

export default {
  title: 'Layouts/ShopProductLayout',
  component: ShopProductLayout
} as Meta

export const Page = () => (
  <ShopProductLayout header={{title: 'LAPUA Center-X .22lr'}} />
)
