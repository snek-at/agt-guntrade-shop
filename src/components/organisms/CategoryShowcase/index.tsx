import {Button} from '@chakra-ui/button'
import {Box, Center, Flex, Text} from '@chakra-ui/layout'
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
}

const CategoryShowcase = ({tabs}: CategoryShowcaseProps) => {
  const [current, setCurrent] = React.useState('New')
  const [direction, setDirection] = React.useState('right')

  const categories = Object.keys(tabs)

  return (
    <Center>
      <Box w="65%">
        <Flex>
          {categories.map((category, index) => {
            return (
              <Box
                _first={{borderTopLeftRadius: '3px'}}
                _last={{borderTopRightRadius: '3px'}}
                cursor="pointer"
                bg={current === category ? 'white' : 'gray.800'}
                py="3"
                px="5"
                onClick={() => {
                  setCurrent(category)
                  setDirection(
                    index > categories.indexOf(current) ? 'right' : 'left'
                  )
                }}>
                <Text
                  fontSize="14"
                  fontWeight="bold"
                  casing="uppercase"
                  color={current === category ? 'black' : 'white'}>
                  {category}
                </Text>
              </Box>
            )
          })}
        </Flex>
        <Box
          h="300px"
          w="1175px"
          p="10"
          pb="20"
          bg="white"
          borderBottomRadius="3px"
          borderTopRightRadius="3px">
          {categories.map(category => {
            return (
              <CategoryTab
                visible={current === category ? 'visible' : 'hidden'}
                items={tabs[category].items}
                images={tabs[category].images}
                direction={direction}
              />
            )
          })}
        </Box>
        <Center>
          <Button
            borderRadius="3px"
            bg="gray.800"
            color="white"
            _hover={{backgroundColor: 'gray.700'}}
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
