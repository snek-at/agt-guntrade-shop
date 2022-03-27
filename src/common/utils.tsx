import {injectable} from 'react-magnetic-di'
import {Image} from '@chakra-ui/image'
import React from 'react'
import {Box} from '@chakra-ui/react'
import {PageProps} from 'gatsby'

const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)

export const GCImage = injectable(
  (props: {gimg: JSX.Element}) => props.gimg,
  (props: {gimg: JSX.Element}) => (
    <Image
      className={props.gimg.props.imgClassName}
      alt={props.gimg.props.alt}
      src={props.gimg.props.src}
    />
  )
)

const getWindowWidth = () => {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  )
}

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState<number>()

  React.useEffect(() => {
    setWindowWidth(getWindowWidth())
    const handleResize = () => {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth
}
/**
 * Create a array of empty boxes to fill the grid
 * if there are less items than the grid size (6-total).
 *
 * @param items
 * @returns
 */
export function gridPadBoxes(
  items: any[],
  gridSize: number = 6,
  filler: JSX.Element = <Box />
) {
  const toFill = gridSize - (items.length % gridSize || gridSize)

  if (toFill > 0) {
    return Array(toFill).fill(filler)
  }
  return []
}

export const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = React.useRef<T>()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}
