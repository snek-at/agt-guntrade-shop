import {Story, Meta} from '@storybook/react'
import {WishListLayout} from '../../layout/WishListLayout'
import {products} from '../pages/_data/products'

export default {
  title: 'Layouts/WishListLayout',
  component: WishListLayout
} as Meta

export const Filled = () => (
  <WishListLayout
    items={[
      {
        id: '1',
        title: 'Test',
        price: '1.00',
        categoriesString: 'Test',
        quantity: 1,
        image: products[0].images[0] as any
      }
    ]}
    onRemove={() => {}}
    onQuantityChange={() => {}}
    onRequestNow={() => {}}
    onContinueShopping={() => {}}
  />
)

export const Empty = () => (
  <WishListLayout
    items={[]}
    onRemove={() => {}}
    onQuantityChange={() => {}}
    onRequestNow={() => {}}
    onContinueShopping={() => {}}
  />
)
