import {css} from '@emotion/react'

export const Shine = css`
  overflow: hidden;
  position: relative;

  :before {
    content: ' ';
    position: absolute;
    z-index: 1;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    background: rgba(255,255,255,.2);
    transition: transform .8s ease;
    transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,135deg) translate3d(0,100%,0);
    box-sizing: border-box;
  }
  :hover {
    filter: brightness(80%);
  }
  :hover::before {
    transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,135deg) translate3d(0,-130%,0);
  }
`
