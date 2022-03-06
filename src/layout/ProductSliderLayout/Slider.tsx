import {
  Box,
  Icon,
  IconButton,
  IconButtonProps,
  HStack,
  StackProps,
  useBreakpointValue,
  SimpleGrid,
  Flex
} from '@chakra-ui/react'
import React from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import {motion} from 'framer-motion'

import {useWindowWidth} from '../../common/utils'

// #region Interfaces

interface ResponsiveNumber {
  base?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

interface BaseProps {
  spacing: number
  itemWidth: number
  items: Array<React.ReactNode>
}

interface SliderProps extends BaseProps {
  maxWidthInVW: number
  screenWidth: number | undefined
}

interface GridProps extends BaseProps {
  maxWidth: number | undefined
  itemsPerRow: number
}

interface ResponsiveSliderProps {
  spacing?: ResponsiveNumber
  maxWidthInVW?: ResponsiveNumber
  itemWidth?: ResponsiveNumber
  items: Array<React.ReactNode>
  itemsPerRow?: ResponsiveNumber
}

// #endregion

// #region Functions
const SliderStack = motion<StackProps>(HStack)

export const Slider = (props: SliderProps) => {
  const [animationDirection, setAnimationDirection] = React.useState<string>('')
  const [curPage, setCurPage] = React.useState(0)

  const items = props.items
  const maxW = (props.screenWidth || 0) * (props.maxWidthInVW / 100)
  let possibleCards = Math.floor(maxW / props.itemWidth)

  if (
    possibleCards * props.itemWidth + (possibleCards - 1) * props.spacing * 2 >
    maxW
  ) {
    possibleCards -= 1
  }

  const containerWidth =
    possibleCards * props.itemWidth + (possibleCards - 1) * props.spacing * 2

  console.log(containerWidth, possibleCards)

  const pageCount = Math.ceil(items.length / possibleCards)

  const handlePageNavigate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (curPage > 0) {
        setAnimationDirection('left')
        setCurPage(curPage - 1)
      }
    } else {
      if (curPage < pageCount - 1) {
        setAnimationDirection('right')
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

  const variants = {
    left: {
      x: (-containerWidth - props.spacing * 2) * curPage,
      transition: {duration: 0.5}
    },
    right: {
      x: (-containerWidth - props.spacing * 2) * curPage,
      transition: {duration: 0.5}
    }
  }

  // product card slider with framer motion
  return (
    <Flex justifyContent={'center'} position="relative" px="24">
      <Box maxW={maxW}>
        <Box maxW={containerWidth} overflow={'hidden'}>
          <SliderStack
            spacing="10"
            align={'start'}
            variants={variants}
            animate={animationDirection}>
            {items.map(item => (
              <>
                <Box minWidth="345px">{item}</Box>
              </>
            ))}
          </SliderStack>

          {curPage > 0 && <NavigationButton direction="left" />}
          {curPage < pageCount - 1 && <NavigationButton direction="right" />}
        </Box>
      </Box>
    </Flex>
  )
}

const GridLayout = (props: GridProps) => {
  return (
    <Flex justifyContent={'center'}>
      <Box maxWidth={props.maxWidth}>
        <SimpleGrid columns={props.itemsPerRow} spacing={props.spacing}>
          {props.items.map(item => (
            <Box width={props.itemWidth}>{item}</Box>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

// #endregion

// #region Exports
export const ResponsiveSlider = (props: ResponsiveSliderProps) => {
  const itemWidth = props.itemWidth ? useBreakpointValue(props.itemWidth) : 345
  const itemsPerRow = props.itemsPerRow
    ? useBreakpointValue(props.itemsPerRow)
    : 1
  const spacing = props.spacing ? useBreakpointValue(props.spacing) : 20
  const maxWidthInVW = props.maxWidthInVW
    ? useBreakpointValue(props.maxWidthInVW)
    : 80
  const screenWidth = useWindowWidth()

  const returnValue = useBreakpointValue({
    base: (
      <GridLayout
        items={props.items}
        maxWidth={(screenWidth || 0) * (maxWidthInVW / 100)}
        itemWidth={itemWidth}
        spacing={spacing}
        itemsPerRow={itemsPerRow}
      />
    ),
    md: (
      <Slider
        items={props.items}
        maxWidthInVW={maxWidthInVW}
        screenWidth={screenWidth}
        itemWidth={itemWidth}
        spacing={spacing}
      />
    )
  })
  return <>{returnValue}</>
}
// #endregion
