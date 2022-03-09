import {css} from '@emotion/react'

export const ImageStyle = () => css`
  &:hover > .image-container {
    scale: 1.1;
  }

  .image-container {
    width: 150px;
    height: auto;
    transition: scale 150ms;
  }

  .image {
    object-fit: contain;
  }
`
