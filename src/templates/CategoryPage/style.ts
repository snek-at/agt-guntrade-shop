import {css} from '@emotion/react'

export const CardImage = (
  margin: string | undefined,
  width: string | undefined
) => css`
  margin-left: ${margin};
  margin-right: ${margin};
  width: ${width};
`

export const BannerImage = () => css`
  object-fit: cover;
  align-self: center;
  position: absolute;
  top: 0;
  min-width: 100%;
  height: 232px;
`
