import React from 'react'

const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em']

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)

const getWindowWidth = () => {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  )
}

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth())

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth
}
