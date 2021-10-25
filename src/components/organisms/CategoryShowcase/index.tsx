import {Button} from '@chakra-ui/button'
import {Box, Center, Flex, Text} from '@chakra-ui/layout'
import CategoryTab, {CategoryTabProps} from '../../molecules/CategoryTab'
import React from 'react'

export interface CategoryShowcaseProps extends CategoryTabProps {
  categories: string[]
}

const CategoryShowcase = ({
  categories,
  items,
  images
}: CategoryShowcaseProps) => {
  const [current, setCurrent] = React.useState('New')

  return (
    <Center>
      <Box>
        <Flex>
          {categories.map(category => {
            return (
              <Box
                cursor="pointer"
                bg={current === category ? 'white' : 'gray.700'}
                py="5"
                px="7"
                onClick={() => setCurrent(category)}>
                <Text color={current === category ? 'black' : 'white'}>
                  {category}
                </Text>
              </Box>
            )
          })}
        </Flex>
        <CategoryTab items={items} images={images} />
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
