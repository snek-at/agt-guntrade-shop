import {Story, Meta} from '@storybook/react'
import {ContactLayout} from '../../layout/ContactLayout'

export default {
  title: 'Layouts/ContactLayout',
  component: ContactLayout
} as Meta

export const Page = () => <ContactLayout heading="Kontakt" contact="" />
