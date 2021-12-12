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
    <Box zIndex="2" position="relative">
      <Flex direction={{base: 'column', md: 'row'}}>
        {categories.map((category, index) => {
          return (
            <Box
              userSelect="none"
              _first={{
                base: {borderTopRadius: '3px'},
                md: {borderTopLeftRadius: '3px'}
              }}
              _last={{md: {borderTopRightRadius: '3px'}}}
              cursor="pointer"
              bg={current === category ? 'white' : 'agt.gray'}
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
        justifyContent="center"
        alignContent="center"
        p={{md: '6', lg: '10'}}
        pl={{base: '0', lg: '10'}}
        minH={{base: '1010px', md: '700px', lg: '390px'}}
        pb="20"
        bg="white"
        borderBottomRadius="3px"
        borderTopRightRadius={{md: '3px'}}>
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
      <Center position="relative" w="full" left="0" top="-6">
        <Button
          color="white"
          borderRadius="3px"
          colorScheme="agt.grayScheme"
          variant="solid"
          size="lg"
          onClick={() => null}>
          Mehr davon
        </Button>
      </Center>
    </Box>
  )
}

export default CategoryShowcase
