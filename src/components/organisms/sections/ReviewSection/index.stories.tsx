import {Avatar} from '@chakra-ui/avatar'
import {Story, Meta} from '@storybook/react'

import ReviewSection, {ReviewSectionProps} from '.'

export default {
  title: 'Stories/IndexPage/ReviewSection',
  component: ReviewSection
} as Meta

const Template: Story<ReviewSectionProps> = args => <ReviewSection {...args} />

export const Review = Template.bind({})
Review.args = {
  slogan: (
    <div>
      <p>We always love hearing from our customers.</p>
      <p>Here are a few of our reviews!</p>
    </div>
  ),
  review1text: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas integer eget
      aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
      turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
      amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
      mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
      tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
    </p>
  ),
  review1image: (
    <Avatar
      size="lg"
      mt="5"
      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
      alt="avatar"
    />
  ),
  review1bio: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
    </p>
  ),
  review2text: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas integer eget
      aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
      turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
      amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
      mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
      tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
    </p>
  ),
  review2image: (
    <Avatar
      size="lg"
      mt="5"
      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
      alt="avatar"
    />
  ),
  review2bio: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
    </p>
  ),
  review3text: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas integer eget
      aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
      turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
      amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
      mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
      tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
    </p>
  ),
  review3image: (
    <Avatar
      size="lg"
      mt="5"
      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
      alt="avatar"
    />
  ),
  review3bio: (
    <p>
      amet consectetur adipiscing elit pellentesque habitant morbi tristique
    </p>
  )
}
