import {Story, Meta} from '@storybook/react'

import ScrollToTopButton, {ScrollToTopButtonProps} from '.'

export default {
  title: 'Molecules/buttons/ScrollToTopButton',
  component: ScrollToTopButton
} as Meta

const Template: Story<ScrollToTopButtonProps> = args => (
  <ScrollToTopButton {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  onScrollToTopClick: () => null
}
