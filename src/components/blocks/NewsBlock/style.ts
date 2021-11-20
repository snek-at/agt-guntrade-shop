import {css} from '@emotion/react'

import {mq} from '../../../utils'

export const NewsStyle = css`
  .newsblock-image {
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
