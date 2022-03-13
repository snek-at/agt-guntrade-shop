import {Story, Meta} from '@storybook/react'
import {ImprintLayout} from '../../layout/ImprintLayout'

export default {
  title: 'Layouts/ImprintLayout',
  component: ImprintLayout
} as Meta

export const Page = () => <ImprintLayout activePath="" />
