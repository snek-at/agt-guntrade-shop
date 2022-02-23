import {Story, Meta} from '@storybook/react'
import {getProductNodes} from '../../test-data/shopify'
import {WishListLayout} from '../../layout/WishListLayout'

export default {
  title: 'Layouts/WishListLayout',
  component: WishListLayout
} as Meta

const products = getProductNodes(10)

export const Filled = () => (
  <WishListLayout
    items={[
      {
        id: '1',
        handle: 'test',
        title: 'Test',
        price: '1.00',
        categoriesString: 'Test',
        quantity: 1,
        image: products[0].images[0] as any
      },
      {
        id: '2',
        handle: 'test-1-1-1-1-1',
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
