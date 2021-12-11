import {Story, Meta} from '@storybook/react'

import HeroSection, {HeroSectionProps} from '.'

export default {
  title: 'Stories/IndexPage/HeroSection',
  component: HeroSection
} as Meta

const Template: Story<HeroSectionProps> = args => <HeroSection {...args} />

export const Hero = Template.bind({})
Hero.args = {}
