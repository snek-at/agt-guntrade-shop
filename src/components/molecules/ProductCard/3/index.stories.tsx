import {Story, Meta} from '@storybook/react'

import ProductCard, {ProductCardProps} from '.'

export default {
  title: 'Stories/IndexPage/ProductsSection',
  component: ProductCard
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

export const Card3 = Template.bind({})
Card3.args = {
  name: 'Weapon',
  caliber: '9mm',
  price: 11.33,
  reducedprice: 12,
  images: [
    'https://images.guns.com/prod/2020/11/24/5fbd75534c509cbc64befaf8cbb8b775fc70475751dc5.jpg?imwidth=600',
    'https://e7.pngegg.com/pngimages/1006/168/png-clipart-heckler-koch-mp5-submachine-gun-firearm-airsoft-guns-machine-gun-assault-rifle-machine-gun.png',
    'https://images.guns.com/prod/2020/11/24/5fbd75534c509cbc64befaf8cbb8b775fc70475751dc5.jpg?imwidth=600'
  ]
}
