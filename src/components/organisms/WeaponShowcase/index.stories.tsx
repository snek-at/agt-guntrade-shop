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
      image: 'https://i.imgur.com/sw7n0g8.png',
      price: 100
    },
    {
      title: 'Peng',
      description: 'This is a pistol',
      image: 'https://i.imgur.com/OzO2Wsj.png',
      price: 700
    },
    {
      title: 'Bum',
      description: 'This is a pistol',
      image: 'https://i.imgur.com/RWZXVAf.png',
      price: 800
    }
  ]
}
