import {Flex} from '@chakra-ui/layout'
import {injectable} from 'react-magnetic-di'
import React from 'react'

const breakpoints = ['0em', '30em', '48em', '62em', '80em']

export const mq = breakpoints.map(bp => `@media (min-width: ${bp})`)

export const BCinject = injectable(
  (block: JSX.Element, card: JSX.Element) => {
    const cards = []
    for (let i = 0; i < 6; i++) {
      cards.push(card)
    }
    return <Flex>{cards.map(rgw => rgw)}</Flex>
  },
  (block: JSX.Element, card: JSX.Element) => {
    return <>block</>
  }
)
