import {extendTheme} from '@chakra-ui/react'
import {Styles, mode} from '@chakra-ui/theme-tools'

const theme = {
  colors: {
    agt: {
      red: '#ef3340'
    }
  }
}

const styles: Styles = {
  global: (props: any) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', '#1d1f21')(props),
      lineHeight: 'base'
    }
  })
}

export default extendTheme(theme, styles)
