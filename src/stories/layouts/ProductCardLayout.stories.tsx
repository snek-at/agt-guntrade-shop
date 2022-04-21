import React from 'react'
import {ProductCardLayout} from '../../layout/ProductCardLayout'

export default {
  title: 'Layouts/ProductCardLayout',
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
    images={
      [
        {
          alt: '',
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-48-900x900-transformed_faa150e8-6d6e-47af-ac42-60480c6372fe_225x225_crop_center.png.webp?v=1645115333 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-48-900x900-transformed_faa150e8-6d6e-47af-ac42-60480c6372fe_450x450_crop_center.png.webp?v=1645115333 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-48-900x900-transformed_faa150e8-6d6e-47af-ac42-60480c6372fe_900x900_crop_center.png.webp?v=1645115333 900w',
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
        },
        {
          alt: '',
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-15-900x900-jDojnRoCS-transformed_225x225_crop_center.png.webp?v=1644865761 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-15-900x900-jDojnRoCS-transformed_450x450_crop_center.png.webp?v=1644865761 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-15-900x900-jDojnRoCS-transformed_900x900_crop_center.png.webp?v=1644865761 900w',
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
        }
      ]
    }
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
    images={
      [
        {
          alt: '',
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-48-900x900-transformed_faa150e8-6d6e-47af-ac42-60480c6372fe_225x225_crop_center.png.webp?v=1645115333 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-48-900x900-transformed_faa150e8-6d6e-47af-ac42-60480c6372fe_450x450_crop_center.png.webp?v=1645115333 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-48-900x900-transformed_faa150e8-6d6e-47af-ac42-60480c6372fe_900x900_crop_center.png.webp?v=1645115333 900w',
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
        },
        {
          alt: '',
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-15-900x900-jDojnRoCS-transformed_225x225_crop_center.png.webp?v=1644865761 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-15-900x900-jDojnRoCS-transformed_450x450_crop_center.png.webp?v=1644865761 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/collections/links-15-900x900-jDojnRoCS-transformed_900x900_crop_center.png.webp?v=1644865761 900w',
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
        }
      ]
    }
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
