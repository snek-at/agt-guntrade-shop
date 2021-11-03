import {Story, Meta} from '@storybook/react'

import WeaponShowcase, {WeaponShowcaseProps} from '.'

export default {
  title: 'Stories/IndexPage/HeroSection',
  component: WeaponShowcase
} as Meta

const Template: Story<WeaponShowcaseProps> = args => (
  <WeaponShowcase {...args} />
)

export const WShowcase = Template.bind({})
WShowcase.args = {
  weapons: [
    {
      title: 'Pistole',
      description: 'This is a pistol',
      image:
        'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
      price: 100
    },
    {
      title: 'Peng',
      description: 'This is a pistol',
      image:
        'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
      price: 700
    },
    {
      title: 'Bum',
      description: 'This is a pistol',
      image:
        'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
      price: 800
    }
  ]
}
