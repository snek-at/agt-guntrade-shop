import {Image} from '@chakra-ui/react'
import {Story, Meta} from '@storybook/react'

import ContactModal, {ContactModalProps} from '.'

export default {
  title: 'Stories/IndexPage/ContactModal',
  component: ContactModal
} as Meta

const Template: Story<ContactModalProps> = args => <ContactModal {...args} />

export interface ContactModalProps {
  isOpen: boolean
  heading: string
  text: string
  imageSrc: string
  url: string
  onClose: Function
  tag: string
}

export const About = Template.bind({})
About.args = {
  isOpen: true,
  heading: <p>Kaufanfrage (unverbindlich)</p>,
  text: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  ),
  onClose: () => null,
}
