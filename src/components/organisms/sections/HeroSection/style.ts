import {Box} from '@chakra-ui/layout'
import styled from '@emotion/styled-base'

export const BG = styled(Box)`
  .bg-div {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .bg {
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    filter: none;
    transform-origin: 0% 0%;
    transition-duration: 2s;
    min-height: 80vh;
    animation-name: rndmove;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes rndmove {
    100% {
      transform: translate3d(-1.55px, 0px, 0px) scale(1.1, 1.1);
    }
  }
`
