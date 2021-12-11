import {Story, Meta} from '@storybook/react'

import BulletShowcase, {BulletShowcaseProps} from '.'

export default {
  title: 'Stories/IndexPage/HeroSection',
  component: BulletShowcase
} as Meta

const Template: Story<BulletShowcaseProps> = args => (
  <BulletShowcase {...args} />
)

export const BullShowcase = Template.bind({})
BullShowcase.args = {}
