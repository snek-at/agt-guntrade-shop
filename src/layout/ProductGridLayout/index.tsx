import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  SimpleGridProps,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import {gridPadBoxes} from '../../common/utils'
import {generateProductCard} from '../ProductCardLayout'

import {Link as GatsbyLink} from 'gatsby'

export const ProductGrid = (props: {
  title?: string
  items: Array<any>
  minChildWidth?: SimpleGridProps['minChildWidth']
  getPath: (handle: string) => string
}) => {
  const emptyBoxes = gridPadBoxes(props.items)

  // css grid
  return (
    <VStack spacing="6">
      {props.title && (
        <Heading textAlign={'center'} size="xl" borderBottom={'1px solid'}>
          {props.title}
        </Heading>
      )}
      <SimpleGrid spacing={4} minChildWidth={props.minChildWidth || '200px'}>
        {props.items.map((item, key) => {
          return (
            <Link key={item.id} as={GatsbyLink} to={props.getPath(item.handle)}>
              {generateProductCard(item)}
            </Link>
          )
        })}
        {emptyBoxes}
      </SimpleGrid>
    </VStack>
  )
}
