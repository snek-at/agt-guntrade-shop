import {Button} from '@chakra-ui/button'
import {Box, Center, Flex, Text, Grid, GridItem} from '@chakra-ui/layout'
import {SlideFade} from '@chakra-ui/transition'
import CategoryTab from '../../molecules/CategoryTab'
import React from 'react'

interface Tab {
  [category: string]: {
    images: string[]
    items: string[]
  }
}

export interface CategoryShowcaseProps {
  tabs: Tab
  categories: string[]
}

const CategoryShowcase = ({categories, tabs}: CategoryShowcaseProps) => {
  const [current, setCurrent] = React.useState('New')
  const [last, setLast] = React.useState('')

  return (
    <Center>
      <Box>
        <Flex>
          {categories.map(category => {
            return (
              <Box
                _first={{borderTopLeftRadius: '10px'}}
                _last={{borderTopRightRadius: '10px'}}
                cursor="pointer"
                bg={current === category ? 'white' : 'gray.700'}
                py="5"
                px="7"
                onClick={() => {
                  setLast(current)
                  setCurrent(category)
                }}>
                <Text color={current === category ? 'black' : 'white'}>
                  {category}
                </Text>
              </Box>
            )
          })}
        </Flex>
        {categories.map((category, index) => {
          return (
            <Box display={tabs[current] === tabs[category] ? 'static' : 'none'}>
              <CategoryTab
                items={tabs[category].items}
                images={tabs[category].images}
              />
            </Box>
          )
        })}
        <Center>
          <Button
            bg="gray.700"
            color="white"
            _hover={{backgroundColor: 'gray.600'}}
            variant="solid"
            size="lg"
            mt="-6"
            onClick={() => null}>
            Mehr davon
          </Button>
        </Center>
      </Box>
    </Center>
  )
}

export default CategoryShowcase
