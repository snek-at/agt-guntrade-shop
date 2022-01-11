import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {Box, Circle, Flex, Heading} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {AnimatePresence} from 'framer-motion'
import React from 'react'

import {ReviewStyle} from './style'
import ReviewCard from '../../../molecules/ReviewCard'
import {useWindowWidth} from '../../../../common/utils'

interface ReviewType {
  id: string
  sourceImage: string
  source: string
  rating: string
  body: string
}
export interface ReviewSectionProps {
  heading: React.ReactNode
  teaser: React.ReactNode
  data: ReviewType[]
}

const ReviewSection = ({heading, teaser, data}: ReviewSectionProps) => {
  const [direction, setDirection] = React.useState('')
  const [index, setIndex] = React.useState(0)
  const [isInvisible, setIsInvisible] = React.useState(true)

  const isSmall = useBreakpointValue({base: true, xl: false})
  const isMobile = useBreakpointValue({base: true, md: false})

  const vw = useWindowWidth()
  const numOfCards = Math.floor(vw / (isSmall ? 320 : vw * 0.25))

  React.useEffect(() => {
    ;(!isSmall && data.length <= numOfCards) ||
    index >= (data.length - numOfCards || 0) ||
    (isSmall && data.length - numOfCards === index)
      ? setIsInvisible(true)
      : setIsInvisible(false)
  }, [index, numOfCards])

  const drag = {
    drag: 'x',
    dragConstraints: {left: 0, right: 0},
    onDragEnd: (event, info) => {
      if (info.offset.x > 0) {
        if (index !== 0) {
          setDirection('left')
          setIndex(index - numOfCards)
        }
      } else {
        if (!isInvisible) {
          setDirection('right')
          setIndex(index + numOfCards)
        }
      }
    }
  }

  return (
    <>
      <Box overflow="hidden" w="100%" id="reviews" mt="20">
        <Box textAlign="center">
          <Heading>{heading}</Heading>
          <Box mt="3" fontSize="20">
            {teaser}
          </Box>
        </Box>
        <Box
          h="fit-content"
          position="relative"
          css={ReviewStyle(!(index === 0), !isInvisible)}>
          <Circle
            cursor="pointer"
            className="button1"
            _hover={{bg: 'blackAlpha.400'}}
            size="50px"
            centerContent
            bg="blackAlpha.300"
            display={isMobile && index !== 0 ? 'block' : 'none'}
            position="absolute"
            left={{base: '10px', md: '30px'}}
            top="45%"
            zIndex="2"
            onClick={() => {
              setDirection('left')
              setIndex(index - numOfCards)
            }}>
            <ChevronLeftIcon
              color="white"
              boxSize="50px"
              position="relative"
              zIndex="3"
            />
          </Circle>
          <Flex
            justifyContent="center"
            alignItems="center"
            py="10"
            minH="300px">
            {data.map((review, i) => {
              return (
                <AnimatePresence custom={direction}>
                  {index + numOfCards > i && i - index >= 0 && (
                    <ReviewCard
                      drag={drag}
                      direction={direction}
                      reviewId={review.id}
                      reviewImage={review.sourceImage}
                      reviewName={review.source}
                      reviewRating={review.rating}
                      reviewText={review.body}
                    />
                  )}
                </AnimatePresence>
              )
            })}
          </Flex>
          <Circle
            className="button2"
            cursor="pointer"
            bg="blackAlpha.300"
            _hover={{bg: 'blackAlpha.400'}}
            centerContent
            position="absolute"
            display={isMobile && !isInvisible ? 'block' : 'none'}
            right={{base: '10px', md: '30px'}}
            top="45%"
            zIndex="2"
            onClick={() => {
              setDirection('right')
              setIndex(index + numOfCards)
            }}>
            <ChevronRightIcon
              color="white"
              boxSize="50px"
              position="relative"
              zIndex="3"
            />
          </Circle>
        </Box>
      </Box>
    </>
  )
}

export default ReviewSection
