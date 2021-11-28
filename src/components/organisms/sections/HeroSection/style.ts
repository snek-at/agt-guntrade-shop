import {Box} from '@chakra-ui/layout'
import styled from '@emotion/styled-base'
import {mq} from '../../../../common/utils'

export const BG = styled(Box)`
  .bg-div {
    position: relative;
    overflow: hidden;
  }
  .bg {
    position: absolute;
    z-index: 0;
    filter: none;
    transform-origin: 0% 0%;
    transition-duration: 2s;
    animation-name: rndmove;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    ${mq[0]} {
      min-width: 300vw;
    }
    ${mq[2]} {
      min-width: 200vw;
    }
    ${mq[3]} {
      min-width: auto;
      min-height: 80vh;
    }
  }

  @keyframes rndmove {
    100% {
      transform: translate3d(-1.55px, 0px, 0px) scale(1.1, 1.1);
    }
  }
`
