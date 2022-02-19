import {Story, Meta} from '@storybook/react'
import {IGatsbyImageData} from 'gatsby-plugin-image'
import {ShopProductLayout} from '../../layout/ShopProductLayout'
import {products} from '../pages/_data/products'
export default {
  title: 'Layouts/ShopProductLayout',
  component: ShopProductLayout
} as Meta

export const Product0 = () => (
  <ShopProductLayout
    header={{title: products[0].title}}
    imageSlider={{
      featuredImage: products[0].featuredImage as any,
      images: products[0].images as any
    }}
    productDetail={{
      title: products[0].title,
      price: products[0].priceRangeV2.maxVariantPrice.amount,
      status: 'Sofort lieferbar'
    }}
    productMoreDetail={{
      description: products[0].descriptionHtml
    }}
    featuredProducts={products.slice(1, 7)}
  />
)

export const Product1 = () => (
  <ShopProductLayout
    header={{title: products[1].title}}
    imageSlider={{
      featuredImage: products[1].featuredImage as any,
      images: products[1].images as any
    }}
    productDetail={{
      title: products[1].title,
      price: products[1].priceRangeV2.maxVariantPrice.amount,
      status: 'Sofort lieferbar'
    }}
    productMoreDetail={{
      description: products[1].descriptionHtml
    }}
    featuredProducts={products.slice(0, 6)}
  />
)
