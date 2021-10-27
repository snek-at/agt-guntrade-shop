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
  newscard1heading: <Heading>This is your heading</Heading>,
  newscard1text: (
    <Text>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas integer eget
      aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
      turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
      amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
      mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
      tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
      magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis
      massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat
      imperdiet sed
    </Text>
  ),
  newscard1image: (
    <Image
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="newscardimage"
      className="newssectionCardImage"
    />
  ),
  newscard2heading: <Heading>This is your heading</Heading>,
  newscard2text: (
    <Text>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas integer eget
      aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
      turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
      amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
      mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
      tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
      magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis
      massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat
      imperdiet sed
    </Text>
  ),
  newscard2image: (
    <Image
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="newscardimage"
      className="newssectionCardImage"
    />
  ),
  newscard3heading: <Heading>This is your heading</Heading>,
  newscard3text: (
    <Text>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas integer eget
      aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
      turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
      amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
      mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
      tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
      magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis
      massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat
      imperdiet sed
    </Text>
  ),
  newscard3image: (
    <Image
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="newscardimage"
      className="newssectionCardImage"
    />
  )
}
