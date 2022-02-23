import {Story, Meta} from '@storybook/react'
import {IGatsbyImageData} from 'gatsby-plugin-image'
import {getProductNodes} from '../../test-data/shopify'
import {ShopProductLayout} from '../../layout/ShopProductLayout'
export default {
  title: 'Layouts/ShopProductLayout',
  component: ShopProductLayout
} as Meta

const path = '/langwaffen/neuelangwaffen/products/'

const products = getProductNodes(10)

export const Product0 = () => (
  <ShopProductLayout
    header={{title: products[0].title, path: `${path}/${products[0].title}`}}
    imageSlider={{
      featuredImage: products[0].featuredImage as any,
      images: products[0].images as any
    }}
    productDetail={{
      id: products[0].id,
      title: products[0].title,
      price: products[0].contextualPricing.maxVariantPricing.price.amount,
      status: 'Sofort lieferbar',
      onWishlistAdd: id => console.log('add to wishlist')
    }}
    productMoreDetail={{
      description: products[0].descriptionHtml
    }}
    featuredProducts={{
      products: products.slice(1, 7),
    }}
  />
)

export const Product1 = () => (
  <ShopProductLayout
    header={{title: products[1].title, path: `${path}/${products[1].title}`}}
    imageSlider={{
      featuredImage: products[1].featuredImage as any,
      images: products[1].images as any
    }}
    productDetail={{
      id: products[1].id,
      title: products[1].title,
      price: products[1].contextualPricing.maxVariantPricing.price.amount,
      status: 'Sofort lieferbar',
      onWishlistAdd: () => alert('Wishlist added')
    }}
    productMoreDetail={{
      description: products[1].descriptionHtml
    }}
    featuredProducts={{
      products: products.slice(2, 7),
    }}
  />
)
