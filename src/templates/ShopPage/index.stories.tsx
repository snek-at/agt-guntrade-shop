import {Story, Meta} from '@storybook/react'

import ShopPage, {ShopPageProps} from '.'

export default {
  title: 'Stories/ShopPage',
  component: ShopPage
} as Meta

const Template: Story<ShopPageProps> = args => <ShopPage {...args} />

export const Page = Template.bind({})
Page.args = {
  breadcrumb: 'weapon/toy/shop',
  name: 'shop',
  items: [
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 10,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'SigSauer'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 10,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'SigSauer'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 10,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'SigSauer'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 10,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'Glock'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 12,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'Glock'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 12,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'Glock'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 12,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'Glock'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      reducedprice: 11,
      images: [
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png.webp?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png.webp?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png.webp?v=1642003959 900w',
                  sizes: '(min-width: 900px) 900px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_225x225_crop_center.png?v=1642003959 225w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_450x450_crop_center.png?v=1642003959 450w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/links-48-900x900-transformed_900x900_crop_center.png?v=1642003959 900w',
                sizes: '(min-width: 900px) 900px, 100vw'
              }
            },
            layout: 'constrained',
            width: 900,
            height: 900
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/rechts-53-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        },
        {
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png.webp?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png.webp?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png.webp?v=1642003959 1500w',
                  sizes: '(min-width: 1500px) 1500px, 100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959',
                srcSet:
                  'https://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_375x375_crop_center.png?v=1642003959 375w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_750x750_crop_center.png?v=1642003959 750w,\nhttps://cdn.shopify.com/s/files/1/0621/5843/8652/products/Beschreibung-links-1-transformed_1500x1500_crop_center.png?v=1642003959 1500w',
                sizes: '(min-width: 1500px) 1500px, 100vw'
              }
            },
            layout: 'constrained',
            width: 1500,
            height: 1500
          }
        }
      ],
      categories: {
        brands: 'Glock'
      }
    }
  ],
  filters: {
    brands: ['Glock', 'SigSauer', 'Auer']
  }
}
