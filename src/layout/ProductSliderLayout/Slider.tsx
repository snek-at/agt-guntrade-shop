import {
  Box,
  Icon,
  IconButton,
  IconButtonProps,
  HStack,
  StackProps,
  useBreakpointValue,
  SimpleGrid,
  Flex,
  BoxProps
} from '@chakra-ui/react'
import React from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import {motion, useMotionValue} from 'framer-motion'

import {useWindowWidth} from '../../common/utils'

// #region Interfaces

interface ResponsiveNumber {
  base?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  '2xl'?: number
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
const MotionBox = motion<BoxProps>(Box)

const Slider = (props: SliderProps) => {
  const [animationDirection, setAnimationDirection] = React.useState<string>('')
  const [curPage, setCurPage] = React.useState(0)
  const [lastPage, setLastPage] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)

  const items = props.items
  const maxW = (props.screenWidth || 0) * (props.maxWidthInVW / 100)
  let possibleCards = Math.floor(maxW / props.itemWidth)

  if (
    possibleCards * props.itemWidth + (possibleCards - 1) * props.spacing >
    maxW
  ) {
    possibleCards -= 1
  }

  const containerWidth =
    possibleCards * props.itemWidth + (possibleCards - 1) * props.spacing

  const pageCount = Math.ceil(items.length / possibleCards)

  React.useEffect(() => {
    if (pageCount < curPage) {
      setLastPage(pageCount - 1)
      setCurPage(pageCount - 1)
    }
  }, [pageCount])

  const handlePageNavigate = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      if (curPage > 0) {
        setAnimationDirection('left')
        if (curPage % 1 !== 0) {
          setLastPage(curPage)
          setCurPage(Math.floor(curPage))
        } else {
          setLastPage(curPage)
          setCurPage(curPage - 1)
        }
      }
    } else {
      if (curPage < pageCount - 1) {
        setAnimationDirection('right')
        if (curPage % 1 !== 0) {
          setLastPage(curPage)
          setCurPage(Math.ceil(curPage))
        } else {
          setLastPage(curPage)
          setCurPage(curPage + 1)
        }
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
  const x = useMotionValue(0)

  const mathMagic = (targetPage: number) => {
    const distance = -(containerWidth + props.spacing)
    const targetPx = targetPage * distance
    const position = x.get() === 0 ? lastPage * distance : x.get()
    const solution = targetPx / position

    return position % distance === 0 || targetPx === 0
      ? targetPx
      : position * solution
  }

  const variants = {
    left: {
      x: mathMagic(curPage),
      transition: {duration: 0.5}
    },
    right: {
      x: mathMagic(curPage),
      transition: {duration: 0.5}
    }
  }

  const handleDragEnd = () => {
    setLastPage(curPage)
    const pageCandidate = x.get() / -containerWidth
    if (pageCandidate > pageCount - 1) {
      setCurPage(pageCount - 1)
    } else if (pageCandidate < 0) {
      setCurPage(0)
    } else {
      setCurPage(pageCandidate)
    }
  }

  // product card slider with framer motion
  return (
    <Flex justifyContent={'center'} position="relative" px="24">
      <Box maxW={`${maxW}px`}>
        <Box maxW={`${containerWidth}px`} overflow={'hidden'}>
          <MotionBox
            style={{x}}
            drag="x"
            onDragStart={() => {
              setIsDragging(true)
            }}
            onDragEnd={() => {
              setIsDragging(false)
            }}
            onDragTransitionEnd={() => handleDragEnd()}
            w={`${containerWidth * pageCount}px`}
            dragConstraints={{
              left: -containerWidth * (pageCount - 1),
              right: 0
            }}
            variants={variants}
            animate={animationDirection}>
            <SliderStack spacing={`${props.spacing}px`} align={'start'}>
              {items.map(item => (
                <>
                  <MotionBox
                    pointerEvents={isDragging ? 'none' : 'auto'}
                    minWidth={`${props.itemWidth}px`}
                    maxW={`${props.itemWidth}px`}>
                    {item}
                  </MotionBox>
                </>
              ))}
            </SliderStack>
          </MotionBox>
        </Box>
        {curPage > 0 && <NavigationButton direction="left" />}
        {curPage < pageCount - 1 && <NavigationButton direction="right" />}
      </Box>
    </Flex>
  )
}

const GridLayout = (props: GridProps) => {
  return (
    <Flex justifyContent={'center'}>
      <Box maxWidth={props.maxWidth}>
        <SimpleGrid columns={props.itemsPerRow} spacing={props.spacing}>
          {props.items.map(item => {
            return <Box width={props.itemWidth}>{item}</Box>
          })}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

// #endregion

// #region Exports

/**
 * Wraps the provided items into an Slider or a Grid depending on the size of the device.
 *
 * @type ResponsiveNumber - A Chakra-UI responsive Value (object syntax).
 *
 * @param props.items - type:Array<React.ReactNode> array of items.
 * @param props.spacing - optional default:40 - type:ResponsiveNumber -  The spacing between the cards (in px).
 * @param props.maxWidthInVW - optional default:80 - type:ResponsiveNumber -  The maxWidth of the slider or grid (in vw).
 * @param props.itemWidth - optional default:280 - type:ResponsiveNumber -  The width of a single Item (in px).
 * @param props.itemsPerRow - optional default:1 - type:ResponsiveNumber - The items per row in the Grid.
 */
export const ResponsiveSlider = (props: ResponsiveSliderProps) => {
  const itemWidth = props.itemWidth ? useBreakpointValue(props.itemWidth) : 280
  const itemsPerRow = props.itemsPerRow
    ? useBreakpointValue(props.itemsPerRow)
    : 1
  const spacing = props.spacing ? useBreakpointValue(props.spacing) : 40
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
