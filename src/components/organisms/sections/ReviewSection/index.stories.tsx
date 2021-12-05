import {Story, Meta} from '@storybook/react'

import ReviewSection, {ReviewSectionProps} from '.'

export default {
  title: 'Stories/IndexPage/ReviewSection',
  component: ReviewSection
} as Meta

const Template: Story<ReviewSectionProps> = args => <ReviewSection {...args} />

export const Review = Template.bind({})
Review.args = {
  data: [
    {
      id: '1',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '2',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '3',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '4',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '5',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '6',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '7',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    },
    {
      id: '8',
      sourceImage: '',
      source: 'Daniel Peter',
      rating: '3',
      body: 'Alls good in the neighbourhood'
    }
  ]
}
