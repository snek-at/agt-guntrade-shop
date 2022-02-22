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
      },
      {
        id: '2',
        title: 'Test  1 1 1 1 1',
        price: '1.00',
        categoriesString: 'Test123',
        quantity: 21,
        image: products[7].images[0] as any
      }
    ]}
    onRemove={() => {}}
    onQuantityChange={() => {}}
    onRequestNow={() => {}}
    onContinueShopping={() => {}}
    onProductOpen={() => {}}
  />
)

export const Empty = () => (
  <WishListLayout
    items={[]}
    onRemove={() => {}}
    onQuantityChange={() => {}}
    onRequestNow={() => {}}
    onContinueShopping={() => {}}
    onProductOpen={() => {}}
  />
)
