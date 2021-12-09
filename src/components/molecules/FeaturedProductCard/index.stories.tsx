import {Story, Meta} from '@storybook/react'

import FeaturedProductCard, {FeaturedProductCardProps} from '.'

export default {
  title: 'Stories/IndexPage/FeaturedProductsSection',
  component: FeaturedProductCard
} as Meta

const Template: Story<FeaturedProductCardProps> = args => (
  <FeaturedProductCard {...args} />
)

export const Card = Template.bind({})
Card.args = {
  name: 'Weapon',
  description: 'This is a weapon.',
  price: 11.33,
  reducedprice: 12,
  image:
    'https://images.guns.com/prod/2020/11/24/5fbd75534c509cbc64befaf8cbb8b775fc70475751dc5.jpg?imwidth=600'
}
