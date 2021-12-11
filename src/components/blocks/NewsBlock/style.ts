import {css} from '@emotion/react'

import {mq} from '../../../common/utils'

export const NewsStyle = css`
  .newsblock-closed-image {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    ${mq[0]} {
      width: 300px;
      height: 200px;
    }
    ${mq[3]} {
      width: 540px;
      height: 360px;
    }
  }
`

export const ModalStyle = css`
  .newsblock-modal-image {
    margin-bottom: 30px;
  }
`
