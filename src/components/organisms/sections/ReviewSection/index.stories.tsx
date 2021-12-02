import {Story, Meta} from '@storybook/react'

import ReviewSection, {ReviewSectionProps} from '.'

export default {
  title: 'Stories/IndexPage/ReviewSection',
  component: ReviewSection
} as Meta

const Template: Story<ReviewSectionProps> = args => <ReviewSection {...args} />

export const Review = Template.bind({})
Review.args = {}
