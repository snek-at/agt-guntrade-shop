import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Spacer,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import {AnimatePresence, motion, useAnimation} from 'framer-motion'
import React from 'react'
import {generateProductCard, ProductCardLayout} from '../ProductCardLayout'

import {gridPadBoxes} from '../../common/utils'
import styled from '@emotion/styled'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const MotionBox = motion<BoxProps>(Box)

const ProductSlider = (props: {products: Array<any>}) => {
  const items = props.products

  const perPage = useBreakpointValue({
    base: 1,
    md: 4,
    lg: 5
  }) as number

  const pageCount = Math.ceil(items.length / perPage)
  const [curPage, setCurPage] = React.useState(0)

  const start = curPage * perPage
  const end = start + perPage - 1

  const shouldDisplay = (index: number) => {
    return index >= start && index <= end
  }

  const handlePageNavigate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (curPage > 0) {
        setCurPage(curPage - 1)
      }
    } else {
      if (curPage < pageCount - 1) {
        setCurPage(curPage + 1)
      }
    }
  }

  const NavigationButton = (props: {direction: 'left' | 'right'}) => {
    const customProps: IconButtonProps = {
      'aria-label': `Slide to ${props.direction}`,
      boxSize: '16',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      cursor: 'pointer',
      _hover: {
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
      },
      isRound: true,
      onClick: () => handlePageNavigate(props.direction)
    }

    if (props.direction === 'left') {
      return (
        <IconButton
          {...customProps}
          left={5}
          icon={<Icon as={FaChevronCircleLeft} />}
        />
      )
    } else {
      return (
        <IconButton
          {...customProps}
          right={5}
          icon={<Icon as={FaChevronCircleRight} />}
        />
      )
    }
  }

  // product card slider with framer motion
  return (
    <Box pos="relative" overflow="hidden">
      <Box px="24">
        <HStack display="inline-flex" justify={'center'}>
          {items.map((item, index) => (
            <>{shouldDisplay(index) && generateProductCard(item)}</>
          ))}
        </HStack>

        {curPage > 0 && <NavigationButton direction="left" />}
        {curPage < pageCount - 1 && <NavigationButton direction="right" />}
      </Box>
    </Box>
  )
}

export const ProductSliderLayout = (props: {
  title: string
  slider: React.ComponentProps<typeof ProductSlider>
}) => {
  return (
    <VStack spacing={6}>
      <Heading textAlign={'center'} size="xl" borderBottom={'1px solid'}>
        {props.title}
      </Heading>
      <ProductSlider {...props.slider} />
    </VStack>
  )
}
