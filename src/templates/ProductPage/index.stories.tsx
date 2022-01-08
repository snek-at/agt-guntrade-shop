import {Story, Meta} from '@storybook/react'

import ProductPage, {ProductPageProps} from '.'

export default {
  title: 'Stories/ProductPage',
  component: ProductPage
} as Meta

const Template: Story<ProductPageProps> = args => <ProductPage {...args} />

export const Page = Template.bind({})
Page.args = {
  name: 'SumGun',
  price: 100,
  images: [
    'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.',
  subheading:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
  features: [
    'Feature1',
    'Feature2',
    'Feature1',
    'Feature2',
    'Feature1',
    'Feature2'
  ],
  categories: {
    brand: 'SigSauer'
  }
}
