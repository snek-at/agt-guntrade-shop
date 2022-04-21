import React from 'react'
import {ProductCardLayout} from '.'

export default {
  title: 'Stories/IndexPage/ProductsSection',
  component: ProductCardLayout,
  decorators: [
    (storyFn: any) => (
      <div
        style={{
          width: '300px',
          height: '300px'
        }}>
        {storyFn()}
      </div>
    )
  ]
}

export const Basic = () => (
  <ProductCardLayout
    id="123"
    createdAt="2020-01-01"
    tags={[{name: 'New', color: '#00ff00'}]}
    image={{
      alt: '',
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png.webp?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png.webp?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png.webp?v=1644520721 900w',
              sizes: '(min-width: 900px) 900px, 100vw',
              type: 'image/webp'
            }
          ],
          fallback: {
            src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png?v=1644520721',
            srcSet:
              'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png?v=1644520721 900w',
            sizes: '(min-width: 900px) 900px, 100vw'
          }
        },
        layout: 'constrained',
        width: 900,
        height: 900
      }
    }}
    name="Hamilton"
    categoriesString="Clothing, Shoes"
    price="4.5"
  />
)

export const WithDiscount = () => (
  <ProductCardLayout
    id="123"
    createdAt="2022-19-01"
    tags={[
      {name: 'New', color: '#00ff00'},
      {name: 'Sale', color: '#ff0000'}
    ]}
    image={{
      alt: '',
      gatsbyImageData: {
        images: {
          sources: [
            {
              srcSet:
                'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png.webp?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png.webp?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png.webp?v=1644520721 900w',
              sizes: '(min-width: 900px) 900px, 100vw',
              type: 'image/webp'
            }
          ],
          fallback: {
            src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png?v=1644520721',
            srcSet:
              'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_225x225_crop_center.png?v=1644520721 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_450x450_crop_center.png?v=1644520721 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-900x900-transformed_900x900_crop_center.png?v=1644520721 900w',
            sizes: '(min-width: 900px) 900px, 100vw'
          }
        },
        layout: 'constrained',
        width: 900,
        height: 900
      }
    }}
    name="Hamilton"
    categoriesString="Clothing, Shoes"
    price="200.00"
    discountPrice="50.0"
  />
)
