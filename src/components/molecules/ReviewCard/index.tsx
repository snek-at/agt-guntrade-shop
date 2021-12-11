//#region > Imports
import {Box, BoxProps, Flex, Text} from '@chakra-ui/layout'
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
  direction
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
        <IconContext.Provider value={{color: color, size: '25px'}}>
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
        _first={{ml: 0}}
        ml="3.5vw"
        minH="260px"
        w={{base: '300px', xl: '20%'}}
        borderRadius="3px"
        boxShadow="lg"
        p="5"
        onClick={() => onOpen()}
        custom={direction}
        initial="enter"
        animate="center"
        variants={variants}
        transition={{duration: 0.5}}>
        <Text noOfLines={4} minH="100px">
          {reviewText}
        </Text>
        <Flex alignItems="flex-end" justifyContent="flex-end">
          <Button variant="ghost">Mehr lesen</Button>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          pt="3"
          borderTop="1px"
          borderColor="gray.200">
          <Avatar src={reviewImage} alt="review-avatar" boxSize="75px" />
          <Box ml="3" my="auto">
            <Flex>{stars.map(star => star)}</Flex>
            <Text textAlign="center" fontWeight="bold" mt="1">
              {reviewName}
            </Text>
          </Box>
        </Flex>
      </MotionBox>
      <Modal isOpen={isOpen} onClose={() => onClose()} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="3px" width="40vw" maxH="60vh" p="8">
          <Text mb="3" overflowY="auto" pr="3" css={style.Modal}>
            {reviewText}
          </Text>
          <Flex mt="3" pt="3" borderTop="1px" borderColor="gray.200">
            <Avatar src={reviewImage} alt="review-avatar" boxSize="75px" />
            <Box ml="3" my="auto">
              <Flex>{stars.map(star => star)}</Flex>
              <Text textAlign="center" fontWeight="bold" mt="1">
                {reviewName}
              </Text>
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
