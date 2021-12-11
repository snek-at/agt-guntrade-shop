import {Story, Meta} from '@storybook/react'

import AccessorieShowcase, {AccessorieShowcaseProps} from '.'

export default {
  title: 'Stories/IndexPage/HeroSection',
  component: AccessorieShowcase
} as Meta

const Template: Story<AccessorieShowcaseProps> = args => (
  <AccessorieShowcase {...args} />
)

export const AcShowcase = Template.bind({})
AcShowcase.args = {}
