import {css} from '@emotion/react'

export const ScrollBar = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #1f1f1d;
    border-radius: 30px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ef3340;
    border-radius: 30px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d72d39;
  }
`
