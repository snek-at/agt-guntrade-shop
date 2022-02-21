import {css} from '@emotion/react'

export const Spy = css`
  .active-scroll-spy {
    color: red;
  }
  svg {
    &:hover #crosshair4 {
      opacity: 0.5;
      fill: #eb1933;
      animation-name: spin;
      transform-origin: center;
      animation-duration: 500ms;
      animation-iteration-count: once;
      animation-timing-function: linear;
    }
    &:hover #squerl2 {
      filter: drop-shadow(0 4px 10px #2151a1) drop-shadow(0 4px 20px #2151a1);
    }
    &:hover #font2 {
      filter: drop-shadow(0 4px 10px #2151a1) drop-shadow(0 4px 20px #2151a1);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(270deg);
    }
  }
`
