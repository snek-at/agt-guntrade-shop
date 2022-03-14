import {css} from '@emotion/react'

export const ImageStyle = () => css`
  &:hover > .image-container {
    transform: scale(1.1);
  }

  .image-container {
    transition: scale 150ms;
    image-rendering: optimizeQuality;
    object-fit: contain;
    max-height: 150px;
    max-width: 150px;
  }
`
