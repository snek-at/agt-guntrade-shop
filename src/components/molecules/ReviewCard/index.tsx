//#region > Imports
import {Box, BoxProps, Flex, Link, Text, Spacer} from '@chakra-ui/layout'
import {Avatar} from '@chakra-ui/react'
import React from 'react'
import {IconContext} from '@react-icons/all-files'
import {AiFillStar} from '@react-icons/all-files/ai/AiFillStar'
import {Modal, ModalContent, ModalOverlay} from '@chakra-ui/modal'
import {Button} from '@chakra-ui/button'

import * as style from './style'
import {motion} from 'framer-motion'
//#endregion

//#region > Interfaces
export interface ReviewCardProps {
  reviewText: string
  reviewImage: string
  reviewRating: string
  reviewName: string
  reviewId: string
  direction: string
  drag: any
}
//#endregion

//#region > Framer Motion
const MotionBox = motion<BoxProps>(Box)

const variants = {
  enter: (direction: string) => {
    return {
      x: direction === 'right' ? 100 : -100,
      opacity: 0
    }
  },
  center: {
    opacity: 1,
    x: 0
  }
}

//#endregion

//#region > Functions
const ReviewCard = ({
  reviewRating,
  reviewImage,
  reviewText,
  reviewName,
  reviewId,
  direction,
  drag
}: ReviewCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const queryString = window.location.search.substring(1)
  React.useEffect(() => {
    if (reviewId === queryString) {
      setIsOpen(true)
    }
  }, [])

  const onOpen = () => {
    setIsOpen(true)
    history.pushState('AGT-Guntrade Reviews', '', `/?${reviewId}`)
  }
  const onClose = () => {
    setIsOpen(false)
    history.pushState('AGT-Guntrade-Shop', '', '/')
  }

  const createReviewStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      const color = rating <= i ? '#E2E8F0' : '#ef3340'

      stars.push(
        <IconContext.Provider value={{color: color, size: '20px'}}>
          <AiFillStar />
        </IconContext.Provider>
      )
    }
    return stars
  }

  const stars = createReviewStars(parseInt(reviewRating))
  return (
    <>
      <MotionBox
        {...drag}
        bg="white"
        // minH="200px"
        w={{
          base: 'calc(33% - var(--chakra-wrap-spacing))',
          xl: 'calc(25% - var(--chakra-wrap-spacing))'
        }}
        borderRadius="5px"
        boxShadow="lg"
        p="5"
        onClick={() => onOpen()}
        custom={direction}
        initial="enter"
        animate="center"
        variants={variants}
        transition={{duration: 0.5}}>
        <Text noOfLines={4} minH="100px" mb="1">
          {reviewText}
        </Text>
        <Flex pt="3" borderTop="1px" borderColor="gray.200">
          <Avatar src={reviewImage} alt="review-avatar" boxSize="48px" />
          <Box ml="3" my="auto" w="80%">
            <Text fontWeight="bold" mt="1" isTruncated maxW="85%">
              {reviewName}
            </Text>
            <Flex>{stars.map(star => star)}</Flex>
          </Box>
          <Spacer />
          <Button mt="1" colorScheme="agt.grayScheme">
            Mehr lesen
          </Button>
        </Flex>
      </MotionBox>
      <Modal isOpen={isOpen} onClose={() => onClose()} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="5px" width="40vw" maxH="60vh" p="8">
          <Text mb="3" overflowY="auto" pr="3" css={style.Modal}>
            {reviewText}
          </Text>
          <Flex mt="3" pt="3" borderTop="1px" borderColor="gray.200">
            <Avatar src={reviewImage} alt="review-avatar" boxSize="48px" />
            <Box ml="3" my="auto">
              <Text textAlign="center" fontWeight="bold" mt="1">
                {reviewName}
              </Text>
              <Flex>{stars.map(star => star)}</Flex>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
//#endregion

//#region > Exports
export default ReviewCard
//#endregion
