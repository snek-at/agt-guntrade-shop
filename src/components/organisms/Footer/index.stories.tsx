import {Image} from '@chakra-ui/react'
import {Story, Meta} from '@storybook/react'

import Footer, {FooterProps} from '.'

export default {
  title: 'Layouts/BaseLayout/Footer',
  component: Footer
} as Meta

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  col1h: 'AGT',
  col1: ['Startseite', 'Shop', 'Unsere Vertretungen', 'Kontakt'],
  col2h: 'Rechtliches',
  col2: [
    'Impressum',
    'Datenschutz',
    'AGB’s',
    'Widerrufsrecht/Formular',
    'Versand',
    'Sitemap'
  ],
  col3h: 'Öffnungszeiten',
  col3: [
    'Mo. – Fr. 8.00 – 12.00 / 14.00 – 18.00',
    'Sonn, Sams- und Feiertags geschlossen'
  ]
}
