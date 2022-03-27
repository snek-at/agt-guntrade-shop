import {Image} from '@chakra-ui/react'
import {Story, Meta} from '@storybook/react'

import {ContactForm} from '.'

export default {
  title: 'Stories/ContactForm',
  component: ContactForm
} as Meta

export const Basic = () => (
  <ContactForm requestOptions={['Waffenschein', 'Warenkauf', 'Sonstiges']} />
)
