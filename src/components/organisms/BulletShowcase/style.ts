import {css} from '@emotion/react'

export const BulletStyle = css`
  .bullet {
    svg {
      margin-left: 20px;
      margin-right: 20px;
      fill: #1f1f1d;
    }
    p {
      color: black;
    }
    :hover {
      svg {
        fill: #ef3340;
      }
      p {
        color: #ef3340;
      }
      transform: scale(1.1);
    }
  }
`
