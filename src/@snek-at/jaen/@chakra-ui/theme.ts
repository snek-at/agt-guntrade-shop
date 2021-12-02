import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const theme = {
  colors: {
    agt: {
      red: '#ef3340',
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
