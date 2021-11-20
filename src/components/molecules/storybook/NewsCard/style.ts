import {Box} from '@chakra-ui/layout'
import styled from '@emotion/styled'

import {mq} from '../../../../utils'

const NewsStyle = styled(Box)`
  .newssectionCardImage {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    ${mq[0]} {
      width: 300px;
      height: 200px;
    }
    ${mq[2]} {
      width: 540px;
      height: 360px;
    }
  }
`
export default NewsStyle
