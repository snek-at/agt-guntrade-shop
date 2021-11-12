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
    <Box mx={{md: 'auto'}} alignSelf="center" zIndex="2">
      <Flex direction={{base: 'column', md: 'row'}}>
        {categories.map((category, index) => {
          return (
            <Box
              userSelect="none"
              _first={{borderTopLeftRadius: '3px'}}
              _last={{borderTopRightRadius: '3px'}}
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
          bg="agt.gray"
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
  )
}

export default CategoryShowcase
