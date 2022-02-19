import {Story, Meta} from '@storybook/react'

import CategoryPage from '../../templates/CategoryPage'

export default {
  title: 'Stories/CategoryPage',
  component: CategoryPage
} as Meta

type Props = React.ComponentProps<typeof CategoryPage>

const Template: Story<Props> = args => <CategoryPage {...args} />

export const Page = Template.bind({})
Page.args = {
  pageContext: {
    category: {
      title: 'Weapon',
      handle: 'weapon'
    },
    subcategories: [
      {
        node: {
          title: 'Category 1',
          handle: 'category-1',
          image: {
            gatsbyImageData: {
              layout: 'fixed',
              width: 200,
              height: 200,
              images: {
                sources: [
                  {
                    srcSet:
                      'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_225x225_crop_center.png.webp?v=1644520317 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_450x450_crop_center.png.webp?v=1644520317 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_900x900_crop_center.png.webp?v=1644520317 900w',
                    sizes: '(min-width: 900px) 900px, 100vw',
                    type: 'image/webp'
                  }
                ],
                fallback: {
                  src: 'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_900x900_crop_center.png?v=1644520317',
                  srcSet:
                    'https://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_225x225_crop_center.png?v=1644520317 225w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_450x450_crop_center.png?v=1644520317 450w,\nhttps://cdn.shopify.com/s/files/1/0628/0462/3584/products/links-97-900x900-transformed_900x900_crop_center.png?v=1644520317 900w',
                  sizes: '(min-width: 900px) 900px, 100vw'
                }
              }
            }
          }
        }
      }
    ]
  }
}
