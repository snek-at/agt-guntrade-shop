import {css} from '@emotion/react'

export const ImageStyle = () => css`
  &:hover > .image-container {
    transform: scale(1.1);
  }

  .image-container {
    transition: scale 150ms;
    image-rendering: optimizeQuality;
    object-fit: contain;
    width: 150px;
  }

  .image {
    max-height: 150px;
  }
`
