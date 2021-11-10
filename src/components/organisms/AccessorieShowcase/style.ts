import {Box} from '@chakra-ui/layout'
import styled from '@emotion/styled-base'

export const Shine = styled(Box)`
  .shine {
    overflow: hidden;
    position: relative;
  }
  .shine::before {
    pointer-events: none;
    margin-top: -350px;
    width: 30px;
    height: 616px;
    position: absolute;
    display: block;
    content: '';
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: skewX(-45deg);
  }
  @keyframes shine {
    100% {
      transform: translate(550px, 350px);
    }
  }
  .shine:hover {
    filter: brightness(80%);
  }
  .shine:hover::before {
    animation-name: shine;
    animation-duration: 0.5s;
    animation-timing-function: linear;
  }
`
