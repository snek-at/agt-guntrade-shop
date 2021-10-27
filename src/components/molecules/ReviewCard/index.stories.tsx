import {Avatar} from '@chakra-ui/avatar'
import {Story, Meta} from '@storybook/react'

import ReviewCard, {ReviewCardProps} from '.'

export default {
  title: 'Stories/IndexPage/ReviewSection',
  component: ReviewCard
} as Meta

const Template: Story<ReviewCardProps> = args => <ReviewCard {...args} />

export const Card = Template.bind({})
Card.args = {
  reviewtext: (
    <p>
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
    </p>
  ),
  reviewimage: (
    <Avatar
      size="lg"
      mt="5"
      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
      alt="avatar"
    />
  ),
  reviewbio: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
    </p>
  )
}
