import {css} from '@emotion/react'

import {mq} from '../../common/utils'

export const ImageStyles = () => css`
  .mainImage {
    margin-right: auto;
    margin-left: auto;
    objectfit: cover;
    width: 100%;
    ${mq[0]} {
      height: 100%;
    }
    ${mq[1]} {
      heigth: 400px;
    }
    ${mq[3]} {
      height: 500px;
    }
  }
  .sideImage {
    width: 100px;
    objectfit: cover;
  }
`
