import {css} from '@emotion/react'

export const CarouselStyle = () => css`
  .container {
    &:hover {
      .button {
        opacity: 1;
        pointer-events: auto;
      }
    }
    .button {
      transition: opacity 150ms;
      opacity: 0;
      pointer-events: none;
    }
  }
`
