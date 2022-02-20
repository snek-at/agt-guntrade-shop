import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const theme = {
  config: {
    initialColorMode: false
  },
  colors: {
    agt: {
      orange: '#ff6000',
      red: '#ef3340',
      blue: '#2151a1',
      gray: '#1f1f1d',
      lightgray: '#E6E6E9',
      grayScheme: {
        300: '#424240',
        600: '#424240',
        500: '#1f1f1d',
        200: '#1f1f1d'
      }
    }
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('gray.50', '#1d1f21')(props)
      },
      ':host,:root': {
        '--chakra-ui-focus-ring-color': '#424240'
      }
    })
  },
  shadows: {
    outline: '0 0 0 3px #424240'
  }
}

export default extendTheme(theme)
