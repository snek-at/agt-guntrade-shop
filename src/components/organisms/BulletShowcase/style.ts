import {Box} from '@chakra-ui/layout'
import styled from '@emotion/styled-base'

export const BulletStyle = styled(Box)`
  .bullet {
    margin-left: 20px;
    margin-right: 20px;
    fill: gray;
    :hover {
      fill: orange;
    }
  }
`
