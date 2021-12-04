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
  reviewImage: '',
  reviewRating: '3',
  reviewName: 'Daniel Peter',
  reviewText: 'Alls good in the neighbourhood'
}
