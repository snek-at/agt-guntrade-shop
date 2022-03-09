import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {
  Box,
  SimpleGrid,
  Circle,
  Container,
  Heading,
  VStack
} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {AnimatePresence} from 'framer-motion'
import {useColorModeValue} from '@chakra-ui/color-mode'
import React from 'react'

import {ReviewStyle} from './style'
import ReviewCard from '../../../molecules/ReviewCard'
import {useWindowWidth} from '../../../../common/utils'

import {Bullet} from '../../../../common/assets'
import {ResponsiveSlider} from '../../../../layout/ProductSliderLayout/Slider'

interface ReviewType {
  id: string
  sourceImage: string
  source: string
  rating: string
  body: string
}
export interface ReviewSectionProps {
  heading: React.ReactNode
  data: ReviewType[]
}

const ReviewSection = ({heading, data}: ReviewSectionProps) => {
  const reviewsForSlider = data.map((review: ReviewType) => (
    <ReviewCard
      reviewId={review.id}
      reviewImage={review.sourceImage}
      reviewName={review.source}
      reviewRating={review.rating}
      reviewText={review.body}
    />
  ))

  return (
    <VStack spacing={6} bg="agt.gray" my={4} py={16}>
      <Box textAlign="center">
        <Heading size={'xl'} color="white" maxW="50vw">
          {heading}
        </Heading>
        <Bullet color="agt.red" w="unset" fontSize="xl" mt="5" mb="10" />
      </Box>

      <ResponsiveSlider
        items={reviewsForSlider}
        breakpoint="base"
        spacing={{base: 4, md: 8, lg: 12}}
        progressProps={{
          colorScheme: 'agt.blueScheme',
          bgColor: useColorModeValue('gray.200', 'gray.600'),
          mt: 4
        }}
      />
    </VStack>
  )
}

export default ReviewSection
