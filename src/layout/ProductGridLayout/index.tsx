import {
  Box,
  Heading,
  SimpleGrid,
  SimpleGridProps,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import {gridPadBoxes} from '../../common/utils'
import {generateProductCard} from '../ProductCardLayout'

export const ProductGrid = (props: {
  title?: string
  items: Array<any>
  onItemClick: (item: any) => void
  minChildWidth?: SimpleGridProps['minChildWidth']
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
            <Box key={key} onClick={() => props.onItemClick(item)}>
              {generateProductCard(item)}
            </Box>
          )
        })}
        {emptyBoxes}
      </SimpleGrid>
    </VStack>
  )
}
