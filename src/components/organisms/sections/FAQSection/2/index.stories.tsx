import {Story, Meta} from '@storybook/react'

import FAQSection, {FAQSectionProps} from '.'

export default {
  title: 'Stories/IndexPage/FAQSection',
  component: FAQSection
} as Meta

const Template: Story<FAQSectionProps> = args => <FAQSection {...args} />

export const Section2 = Template.bind({})

Section2.args = {
  heading: <p>This is a heading</p>
}
