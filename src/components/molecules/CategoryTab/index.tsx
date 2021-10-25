import {Flex, Box, Text, Image} from '@chakra-ui/react'

export interface CategoryTabProps {
  items: string[]
  images: string[]
}

const CategoryTab = ({items, images}: CategoryTabProps) => {
  return (
    <Box h="100%" w="100%" p="10" bg="white">
      <Flex>
        {images.map((image, index) => (
          <Box
            onClick={() => null}
            cursor="pointer"
            px="3"
            py="5"
            justifyContent="center"
            alignContent="center"
            textAlign="center"
            borderRadius="3px"
            border="1px"
            borderColor="gray.200"
            mx="3"
            mt="3">
            <Image src={image} alt={items[index]} w="250px" h="150px" />
            <Text mt="5">{items[index]}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default CategoryTab
