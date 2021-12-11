import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const theme = {
  colors: {
    agt: {
      orange: '#ff6000',
      red: '#ef3340',
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
    global: (props: any) => ({
      body: {
        bg: mode('white', '#1d1f21')(props)
      }
    })
  }
}

export default extendTheme(theme)
