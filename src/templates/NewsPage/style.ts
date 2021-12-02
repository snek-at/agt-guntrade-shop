import {css} from '@emotion/react'
import {mq} from '../../common/utils'

export const responsiveImage = css`
  .image {
    ${mq[0]} {
      width: 300px;
    }
    ${mq[2]} {
      width: 450px;
    }
  }
`
