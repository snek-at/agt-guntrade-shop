import {Story, Meta} from '@storybook/react'

import ShopPage from '../../templates/ShopPage'
import {products} from './_data/products'

export default {
  title: 'Pages/ShopPage',
  component: ShopPage
} as Meta

type Props = React.ComponentType<typeof ShopPage>

const Template: Story<Props> = args => <ShopPage {...args} />

export const Page = Template.bind({})
Page.args = {
  pageContext: {
    title: 'AGT Shop',
    products,
    allTags: [],
    handle: 'title',
    tags: {}
  }
}
