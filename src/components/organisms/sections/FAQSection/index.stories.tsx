import {Story, Meta} from '@storybook/react'

import LicenseSection, {LicenseSectionProps} from '.'

export default {
  title: 'Stories/IndexPage/FAQSection',
  component: LicenseSection
} as Meta

const Template: Story<LicenseSectionProps> = args => (
  <LicenseSection {...args} />
)

export const Section = Template.bind({})

Section.args = {
  heading: <p>This is a heading</p>,
  text: (
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  )
}
