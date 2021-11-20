import {Image} from '@chakra-ui/image'
import {Heading, Text} from '@chakra-ui/layout'
import {Story, Meta} from '@storybook/react'

import NewsSection, {NewsSectionProps} from './index'

export default {
  title: 'Stories/IndexPage/NewsSection',
  component: NewsSection
} as Meta

const Template: Story<NewsSectionProps> = args => <NewsSection {...args} />

export const Section = Template.bind({})
Section.args = {
  teaser: <p>This is a teaser.</p>
}
