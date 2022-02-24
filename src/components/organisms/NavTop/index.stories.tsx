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
    {
      name: 'Waffen',
      path: '/waffen'
    },
    {
      name: 'Munition',
      path: '/munition'
    },
    {
      name: 'Wiederladen',
      path: '/wiederladen'
    },
    {
      name: 'Optik',
      path: '/optik'
    },
    {
      name: 'AR15/AR10',
      path: '/ar15-ar10'
    },
    {
      name: 'Laufrohlinge',
      path: '/laufrohlinge'
    },
    {
      name: 'Magazine',
      path: '/magazine'
    },
    {
      name: 'Zubehör',
      path: '/zubehoer'
    },
    {
      name: 'Ersatzteile',
      path: '/ersatzteile'
    }
  ],
  activePath: '/waffen'
}
