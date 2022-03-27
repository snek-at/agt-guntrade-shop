import {Story, Meta} from '@storybook/react'

import SideButton, {SideButtonProps} from '.'

export default {
  title: 'Molecules/buttons/SideButtons',
  component: SideButton
} as Meta

const Template: Story<SideButtonProps> = args => <SideButton {...args} />

export const Primary = Template.bind({})

Primary.args = {
  onSideButton1Click: () => null,
  onSideButton2Click: () => null,
  onSideButton3Click: () => null
}
