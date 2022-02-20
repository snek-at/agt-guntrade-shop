import {Story, Meta} from '@storybook/react'

import NavTop, {NavTopProps} from '.'

export default {
  title: 'Layouts/BaseLayout/NavTop',
  component: NavTop
} as Meta

const Template: Story<NavTopProps> = args => <NavTop {...args} />

export const Default = Template.bind({})
Default.args = {
  links: [
    'Waffen',
    'Munition',
    'Wiederladen',
    'Optik',
    'AR15/AR10',
    'Laufrohlinge',
    'Magazine',
    'Zubehör',
    'Ersatzteile'
  ]
}
