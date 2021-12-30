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
    bannerImage:
      'https://thumbs.static-thomann.de/thumb//convert/pics/images/category/fx/cat_ta_alt1.jpg',
    subcategories: [
      {
        name: 'Arex Zero Alpha',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-48.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Beretta Pistole 92X',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2021/06/20210628_143310-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'CSA Sa61 “Skorpion”,7,65mm',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2020/03/links-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'CZ 75 Tactical Sports Orange',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2019/11/links_209-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Arex Zero Alpha',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-48.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Beretta Pistole 92X',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2021/06/20210628_143310-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'CSA Sa61 “Skorpion”,7,65mm',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2020/03/links-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'CZ 75 Tactical Sports Orange',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2019/11/links_209-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Arex Zero Alpha',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-48.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'Beretta Pistole 92X',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2021/06/20210628_143310-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'CSA Sa61 “Skorpion”,7,65mm',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2020/03/links-900x900.jpg',
        breadcrumb: 'weapon/toy'
      },
      {
        name: 'CZ 75 Tactical Sports Orange',
        image:
          'https://waffen-tuerk.at/wp-content/uploads/2019/11/links_209-900x900.jpg',
        breadcrumb: 'weapon/toy'
      }
    ]
  }
}
