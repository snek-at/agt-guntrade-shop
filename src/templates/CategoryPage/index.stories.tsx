import {Story, Meta} from '@storybook/react'

import CategoryPage, {CategoryPageProps} from '.'

export default {
  title: 'Stories/CategoryPage',
  component: CategoryPage
} as Meta

const Template: Story<CategoryPageProps> = args => <CategoryPage {...args} />

export const Page = Template.bind({})
Page.args = {
  category: {
    name: 'Weapon',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
    breadcrumb: 'weapon',
    subcategories: [
      {
        name: 'Toy',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Spear',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Sword',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Gun',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Mace',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Stick',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Brassknuckle',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Knife',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Spork',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Dildo',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
        breadcrumb: 'weapon/toy'
      }
    ]
  }
}
