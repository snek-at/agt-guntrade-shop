import {Story, Meta} from '@storybook/react'
import {BrandSliderLayout} from '../../layout/BrandSliderLayout'

export default {
  title: 'Layouts/BrandSliderLayout',
  component: BrandSliderLayout
} as Meta

export const Page = () => <BrandSliderLayout title="Unsere Vertretungen" />
