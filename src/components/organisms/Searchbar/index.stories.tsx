import {Story, Meta} from '@storybook/react'
import {getProductNodes} from '../../../test-data/shopify'

import Searchbar, {SearchbarProps} from '.'

const products = getProductNodes(10)

export default {
  title: 'Layouts/Searchbar',
  component: Searchbar
} as Meta

const Template: Story<SearchbarProps> = args => <Searchbar {...args} />

export const Default = Template.bind({})
Default.args = {
  searchResultProducts: products,
  onSearch: value => console.log(value)
}
