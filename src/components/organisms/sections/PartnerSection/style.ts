import {css} from '@emotion/react'

export const ImageStyle = () => css`
  &:hover > .image-container {
    transform: scale(1.1);
    .image {
      backface-visibility: hidden;
      transform: translateZ(0);
    }
  }

  .image-container {
    transition: scale 150ms;
    image-rendering: optimizeQuality;
    width: 280;
    height: 180;
    object-fit: cover;
  }
`
