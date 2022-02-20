import {Story, Meta} from '@storybook/react'
import {ShopCategoryLayout} from '../../layout/ShopCategoryLayout'
import {products} from '../pages/_data/products'

export default {
  title: 'Layouts/ShopCategoryLayout',
  component: ShopCategoryLayout
} as Meta

export const Page = () => (
  <ShopCategoryLayout
    category={{
      items: [
        {
          title: 'Laufrohlinge',
          handle: 'laufrohlinge',
          totalProducts: 100,
          image: {
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
          }
        },
        {
          title: 'Kurzwaffengeschosse',
          handle: 'kurzwaffengeschosse',
          totalProducts: 100,
          image: {
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
          }
        },
        {
          title: 'Vectan Schwarzpulverpresslinge',
          handle: 'vectan-schwarzpulverpresslinge',
          totalProducts: 100,
          image: {
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
          }
        },
        {
          title: 'Laufrohlinge',
          handle: 'laufrohlinge',
          totalProducts: 100,
          image: {
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
          }
        },
        {
          title: 'Laufrohlinge',
          handle: 'laufrohlinge',
          totalProducts: 100,
          image: {
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
          }
        },
        {
          title: 'Laufrohlinge',
          handle: 'laufrohlinge',
          totalProducts: 100,
          image: {
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
          }
        }
      ],
      onItemClick: item => alert(item.handle)
    }}
    productGrid={{
      title: 'Top Produkte',
      items: products.slice(0, 8),
      onItemClick: item => alert(item.handle)
    }}
  />
)
