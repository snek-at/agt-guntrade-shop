import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {Box, SimpleGrid, Circle, Container, Heading} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {AnimatePresence} from 'framer-motion'
import {useColorModeValue} from '@chakra-ui/color-mode'
import React from 'react'

import {ReviewStyle} from './style'
import ReviewCard from '../../../molecules/ReviewCard'
import {useWindowWidth} from '../../../../common/utils'

import {Bullet} from '../../../../common/assets'

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
  const [direction, setDirection] = React.useState('')
  const [index, setIndex] = React.useState(0)
  const [isInvisible, setIsInvisible] = React.useState(true)

  const simpleGridValue = useBreakpointValue({base: 2, md: 3, xl: 4}) || 1
  const isSmall = useBreakpointValue({base: true, xl: false})
  const buttonColor = useColorModeValue('agt.grayScheme', 'gray')

  const vw = useWindowWidth()
  const numOfCards = Math.floor(vw / (vw / simpleGridValue))

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
  const isMobile = useBreakpointValue({base: true, md: false})

  return (
    <>
      <Box
        as="section"
        id="reviews"
        overflow="hidden"
        w="full"
        mt="20"
        bg={['agt.gray', 'agt.gray', 'agt.gray', 'agt.gray']}>
        <Box textAlign="center" mt="10">
          <Heading color="white">{heading}</Heading>
          <Bullet color="agt.red" w="unset" fontSize="xl" mt="5" />
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
            left={{base: '10px', md: '30px', xl: '10%'}}
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
          <Container
            d="flex"
            maxW="8xl"
            py="6"
            alignItems="center"
            minH="300px">
            <SimpleGrid columns={simpleGridValue} spacing="5">
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
            </SimpleGrid>
          </Container>
          <Circle
            className="button2"
            cursor="pointer"
            bg="blackAlpha.300"
            _hover={{bg: 'blackAlpha.400'}}
            centerContent
            position="absolute"
            display={isMobile && !isInvisible ? 'block' : 'none'}
            right={{base: '10px', md: '30px', xl: '10%'}}
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
