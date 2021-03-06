import {Story, Meta} from '@storybook/react'

import CategoryShowcase, {CategoryShowcaseProps} from '.'

export default {
  title: 'Stories/IndexPage/HeroSection',
  component: CategoryShowcase
} as Meta

const Template: Story<CategoryShowcaseProps> = args => (
  <CategoryShowcase {...args} />
)

export const Showcase = Template.bind({})
Showcase.args = {
  tabs: {
    New: {
      items: [
        'Randfeuerzündung',
        'Maschinenpistole',
        'Revolver',
        'Polymer',
        'Mit Optik',
        '1911'
      ],
      images: [
        'https://i.imgur.com/mtBV9G4.jpeg',
        'https://i.imgur.com/bqoN3DZ.jpeg',
        'https://i.imgur.com/hi74u6N.jpeg',
        'https://i.imgur.com/qzTrZPp.jpeg',
        'https://i.imgur.com/gCdOwK9.jpeg',
        'https://i.imgur.com/CYopn8t.jpeg'
      ]
    },
    Handfeuerwaffen: {
      items: ['Pistolen', 'Revolver', 'SMGs', 'Jagdgewehre', 'AR15'],
      images: [
        'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
        'https://www.lwrci.com/assets/images/5563.jpg',
        'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
        'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
      ]
    },
    Flinten: {
      items: ['Pistolen', 'Revolver', 'SMGs', 'Jagdgewehre', 'AR15'],
      images: [
        'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
        'https://www.lwrci.com/assets/images/5563.jpg',
        'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
        'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
      ]
    }
  }
}
