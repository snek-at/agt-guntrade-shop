import {Button} from '@chakra-ui/button'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {Image} from '@chakra-ui/image'
import {
  Box,
  BoxProps,
  Circle,
  Flex,
  Heading,
  Spacer,
  Text
} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'

import {NewsStyle} from './style'
import NewsModal from '../../NewsModal'
import {useWindowWidth} from '../../../../common/utils'
import {useColorModeValue} from '@chakra-ui/color-mode'
import {Divider, Skeleton} from '@chakra-ui/react'

const MotionBox = motion<BoxProps>(Box)

const NewsSection = () => {
  const [direction, setDirection] = React.useState('')
  const [isInvisible, setIsInvisible] = React.useState(true)
  const [index, setIndex] = React.useState(0)

  const isSmall = useBreakpointValue({base: true, xl: false})
  const buttonColor = useColorModeValue('agt.grayScheme', 'gray')

  const vw = useWindowWidth()
  const numOfCards = Math.floor(vw / (isSmall ? 320 : vw * 0.25))

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
        overflow="hidden"
        w="100%"
        id="news"
        mt="20"
        position="relative"
        css={NewsStyle(!(index === 0), !isInvisible)}>
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
          top="50%"
          zIndex="2"
          onClick={() => {
            setDirection('left')
            setIndex(index - numOfCards)
          }}>
          <ChevronLeftIcon
            className="arrow"
            color="white"
            boxSize="50px"
            position="relative"
            zIndex="3"
          />
        </Circle>
        <Skeleton h="300px" />
        <Circle
          cursor="pointer"
          className="button2"
          _hover={{bg: 'blackAlpha.400'}}
          bg="blackAlpha.300"
          centerContent
          position="absolute"
          display={isMobile && !isInvisible ? 'block' : 'none'}
          right={{base: '10px', md: '30px'}}
          top="50%"
          zIndex="2"
          onClick={() => {
            setDirection('right')
            setIndex(index + numOfCards)
          }}>
          {' '}
          <ChevronRightIcon
            className="arrow"
            color="white"
            boxSize="50px"
            position="relative"
            zIndex="3"
          />
        </Circle>
      </Box>
    </>
  )
}

export default NewsSection
