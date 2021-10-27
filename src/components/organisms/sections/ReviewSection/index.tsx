import {Box, Heading, Text, Wrap} from '@chakra-ui/layout'
import React from 'react'
import ReviewCard from '../../../molecules/ReviewCard'

export interface ReviewSectionProps {
  slogan: React.ReactNode
  review1text: React.ReactNode
  review1bio: React.ReactNode
  review1image: React.ReactNode
  review2text: React.ReactNode
  review2bio: React.ReactNode
  review2image: React.ReactNode
  review3text: React.ReactNode
  review3bio: React.ReactNode
  review3image: React.ReactNode
}

const ReviewSection = ({
  slogan,
  review1bio,
  review1image,
  review1text,
  review2bio,
  review2image,
  review2text,
  review3bio,
  review3image,
  review3text
}: ReviewSectionProps) => {
  return (
    <Box>
      <Box textAlign="center" mt="10">
        <Heading mb="5">Customer Reviews</Heading>
        <Text fontSize="20">{slogan}</Text>
        <Wrap mt="10" justify="center" spacing="10">
          <ReviewCard
            reviewtext={review1text}
            reviewbio={review1bio}
            reviewimage={review1image}
          />
          <ReviewCard
            reviewtext={review2text}
            reviewbio={review2bio}
            reviewimage={review2image}
          />
          <ReviewCard
            reviewtext={review3text}
            reviewbio={review3bio}
            reviewimage={review3image}
          />
        </Wrap>
      </Box>
    </Box>
  )
}

export default ReviewSection
