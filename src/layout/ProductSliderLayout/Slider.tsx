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
  BoxProps,
  Progress,
  ProgressProps,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {motion, useMotionValue, useAnimation} from 'framer-motion'

import {useWindowWidth} from '../../common/utils'
import {CarouselStyle} from './style'

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
  containerPadding: number
  maxWidthInVW: number
  screenWidth: number | undefined
  progressProps: ProgressProps
}

interface GridProps extends BaseProps {
  maxWidth: number | undefined
  itemsPerRow: number
}

interface ResponsiveSliderProps {
  progressProps?: ProgressProps
  containerPadding?: ResponsiveNumber
  sliderSpacing?: ResponsiveNumber
  gridSpacing?: ResponsiveNumber
  maxWidthInVW?: ResponsiveNumber
  itemWidth?: ResponsiveNumber
  items: Array<React.ReactNode>
  itemsPerRow?: ResponsiveNumber
  breakpoint?: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

// #endregion

// #region Functions
const SliderStack = motion<StackProps>(HStack)
const MotionBox = motion<BoxProps>(Box)

const Slider = (props: SliderProps) => {
  const animate = useAnimation()
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
    possibleCards * props.itemWidth +
    (possibleCards - 1) * props.spacing +
    props.containerPadding * 2

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
        if (curPage % 1 !== 0) {
          setLastPage(curPage)
          setCurPage(Math.ceil(curPage))
        } else {
          setLastPage(curPage)
          setCurPage(curPage + 1)
        }
      }
    }
    calculateDistance(curPage)
  }

  const NavigationButton = (props: {direction: 'left' | 'right'}) => {
    const customProps: IconButtonProps = {
      'aria-label': `Slide to ${props.direction}`,
      position: 'absolute',
      display: {base: 'none', lg: 'block'},
      boxSize: '16',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      cursor: 'pointer',
      bgColor: 'black',
      _hover: {
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
      },
      className: 'button',
      isRound: true,
      onClick: () => handlePageNavigate(props.direction)
    }

    if (props.direction === 'left') {
      return (
        <IconButton
          {...customProps}
          left={5}
          icon={
            <Icon
              color={useColorModeValue('gray.200', 'gray.600')}
              boxSize="8"
              as={FaChevronLeft}
            />
          }
        />
      )
    } else {
      return (
        <IconButton
          {...customProps}
          right={5}
          icon={
            <Icon
              color={useColorModeValue('gray.200', 'gray.600')}
              boxSize="8"
              as={FaChevronRight}
            />
          }
        />
      )
    }
  }
  const x = useMotionValue(0)

  const calculateDistance = (targetPage: number | undefined) => {
    const clickDistance = -(
      containerWidth +
      props.spacing -
      2 * props.containerPadding
    )
    const position = x.get() === 0 ? lastPage * clickDistance : x.get()
    let targetPx: number

    if (lastPage % 1 !== 0) {
      const snapDistance = props.itemWidth + props.spacing
      const scrollHelper = curPage > lastPage ? -0.1 : 0.1
      console.log(scrollHelper)
      targetPx =
        Math.round(position / snapDistance + scrollHelper) * snapDistance
    } else {
      targetPx = (targetPage || 0) * clickDistance
    }
    const solution = targetPx / position

    animate.start({
      x:
        position % clickDistance === 0 || targetPx === 0
          ? targetPx
          : position * solution
    })
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
    calculateDistance(undefined)
  }

  // product card slider with framer motion
  return (
    <Flex
      css={CarouselStyle()}
      justifyContent={'center'}
      alignItems={'center'}
      position="relative"
      direction={'column'}>
      <Box maxW={`${maxW}px`} position="relative" className="container">
        <Box
          maxW={`${containerWidth}px`}
          overflow={'hidden'}
          className="inner-container">
          <MotionBox
            style={{x}}
            drag="x"
            cursor={isDragging ? 'grabbing' : 'grab'}
            onDragStart={() => {
              setIsDragging(true)
            }}
            onDragEnd={() => {
              handleDragEnd()
              setIsDragging(false)
            }}
            w={`${containerWidth * pageCount}px`}
            dragConstraints={{
              left: -containerWidth * (pageCount - 1) - props.spacing,
              right: 0
            }}
            animate={animate}>
            <SliderStack
              spacing={`${props.spacing}px`}
              align={'start'}
              px={`${props.containerPadding}px`}>
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
      <Progress {...props.progressProps} max={pageCount - 1} value={curPage} />
    </Flex>
  )
}

const GridLayout = (props: GridProps) => {
  return (
    <Flex justifyContent={'center'}>
      <Box maxWidth={props.maxWidth}>
        <SimpleGrid columns={props.itemsPerRow} spacing={props.spacing / 2}>
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
 * @param props.containerPadding - optional default:0 - type:ResponsiveNumber - The paddingX on the container useful for hover animations with x effect (in px).
 * @param props.breakpoint - optional default:md - type:'base'|'sm'|'md'|'lg'|'xl'|'2xl' - The Chakra breakpoint at which the Grid changes into the Slider.
 * If the value is 'base' no Grid will be displayed.
 * @param props.progressProps - optional - type:ProgressProps - The styling of the Chakra-UI progress element.
 */
export const ResponsiveSlider = (props: ResponsiveSliderProps) => {
  const itemWidth = props.itemWidth ? useBreakpointValue(props.itemWidth) : 280
  const itemsPerRow = props.itemsPerRow
    ? useBreakpointValue(props.itemsPerRow)
    : 1
  const sliderSpacing = props.spacing ? useBreakpointValue(props.spacing) : 40
  const gridSpacing = props.grodSpacing
    ? useBreakpointValue(props.gridSpacing)
    : 20
  const maxWidthInVW = props.maxWidthInVW
    ? useBreakpointValue(props.maxWidthInVW)
    : 80
  const containerPadding = props.containerPadding
    ? useBreakpointValue(props.containerPadding)
    : 0
  const breakpoint = props.breakpoint || 'md'
  const screenWidth = useWindowWidth()
  const baseProgressProps: ProgressProps = {
    width: `${maxWidthInVW / 2}vw`,
    height: '5px',
    mt: 2,
    borderRadius: 'lg',
    colorScheme: 'gray'
  }
  const progressProps: ProgressProps = {
    ...baseProgressProps,
    ...props.progressProps
  }

  const sliderProps = {
    progressProps: progressProps,
    containerPadding: containerPadding,
    items: props.items,
    maxWidthInVW: maxWidthInVW,
    screenWidth: screenWidth,
    itemWidth: itemWidth,
    spacing: sliderSpacing
  }

  const returnValue = useBreakpointValue({
    base: (
      <GridLayout
        items={props.items}
        maxWidth={(screenWidth || 0) * (maxWidthInVW / 100)}
        itemWidth={itemWidth}
        spacing={gridSpacing}
        itemsPerRow={itemsPerRow}
      />
    ),
    [breakpoint]: <Slider {...sliderProps} />
  })

  return <>{returnValue}</>
}
// #endregion
