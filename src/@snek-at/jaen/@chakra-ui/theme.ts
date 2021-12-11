import {extendTheme} from '@chakra-ui/react'

const theme = {
  colors: {
    agt: {
      orange: '#ff6000',
      red: '#ef3340',
      gray: '#1f1f1d',
      grayScheme: {
        300: '#424240',
        600: '#424240',
        500: '#1f1f1d',
        200: '#1f1f1d'
      }
    }
  }
}

export default extendTheme(theme)
