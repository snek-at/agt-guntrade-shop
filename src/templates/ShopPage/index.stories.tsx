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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
      ],
      categories: {
        brands: 'Glock'
      }
    },
    {
      name: 'Weapon',
      caliber: 'Kal.9×19',
      price: 11.33,
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
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
