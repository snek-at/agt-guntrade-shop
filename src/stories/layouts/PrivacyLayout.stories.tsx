import {Story, Meta} from '@storybook/react'
import {PrivacyLayout} from '../../layout/PrivacyLayout'

export default {
  title: 'Layouts/PrivacyLayout',
  component: PrivacyLayout
} as Meta

export const Page = () => <PrivacyLayout activePath="" />
