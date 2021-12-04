import {IconButton} from '@chakra-ui/button'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {Box, Flex, Heading} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {AnimatePresence} from 'framer-motion'
import React from 'react'

import ReviewCard from '../../../molecules/ReviewCard'
import {useWindowWidth} from '../../../../common/utils'

interface ReviewType {
  id: string
  image: string
  name: string
  rating: string
  text: string
}
export interface ReviewSectionProps {
  heading: React.ReactNode
  teaser: React.ReactNode
  data: ReviewType[]
}

const ReviewSection = ({heading, teaser, data}: ReviewSectionProps) => {
  const [direction, setDirection] = React.useState('')
  const [index, setIndex] = React.useState(0)
  const [disabled, setDisabled] = React.useState(true)

  const isSmall = useBreakpointValue({base: true, xl: false})

  const vw = useWindowWidth()
  const numOfCards = Math.floor(vw / (isSmall ? 320 : vw * 0.25))

  React.useEffect(() => {
    ;(!isSmall && data.length <= numOfCards) ||
    index >= (data.length - numOfCards || 0) ||
    (isSmall && data.length - numOfCards === index)
      ? setDisabled(true)
      : setDisabled(false)
  }, [index, numOfCards])

  return (
    <>
      <Box overflow="hidden" w="100%" id="reviews" mt="20">
        <Box textAlign="center">
          <Heading>{heading}</Heading>
          <Box mt="3" mb="10" fontSize="20">
            {teaser}
          </Box>
        </Box>
        <Box h="fit-content" position="relative">
          <IconButton
            position="absolute"
            left={{base: '10px', md: '30px'}}
            top="50%"
            zIndex="2"
            variant="ghost"
            aria-label="left"
            isDisabled={index === 0 ? true : false}
            onClick={() => {
              setDirection('left')
              setIndex(index - numOfCards)
            }}
            icon={<ChevronLeftIcon boxSize="50px" color="agt.red" />}
          />
          <Flex justifyContent="center" alignItems="center" py="10">
            {data.map((review, i) => {
              return (
                <AnimatePresence custom={direction}>
                  {index + numOfCards > i && i - index >= 0 && (
                    <ReviewCard
                      direction={direction}
                      reviewId={review.id}
                      reviewImage={review.image}
                      reviewName={review.name}
                      reviewRating={review.rating}
                      reviewText={review.text}
                    />
                  )}
                </AnimatePresence>
              )
            })}
          </Flex>
          <IconButton
            position="absolute"
            right={{base: '10px', md: '30px'}}
            top="50%"
            zIndex="2"
            aria-label="right"
            variant="ghost"
            icon={<ChevronRightIcon boxSize="50px" color="agt.red" />}
            disabled={disabled}
            onClick={() => {
              setDirection('right')
              setIndex(index + numOfCards)
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default ReviewSection
