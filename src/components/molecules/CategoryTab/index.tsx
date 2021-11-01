import {Flex, Box, BoxProps, Text, Image} from '@chakra-ui/react'

import {AnimatePresence, motion} from 'framer-motion'

export interface CategoryTabProps {
  items: string[]
  images: string[]
  direction: string
  key: string
}

const TabBox = motion<BoxProps>(Box)

const variants = {
  enter: (direction: string) => {
    return {
      x: direction === 'right' ? 500 : -500,
      opacity: 0
    }
  },
  center: {
    opacity: 1,
    x: 0
  },
  exit: (direction: string) => {
    return {
      x: direction === 'right' ? -500 : 500,
      opacity: 0
    }
  }
}

const CategoryTab = ({items, images, direction, key}: CategoryTabProps) => {
  return (
    <Box
      h="100%"
      w="100%"
      p="10"
      pb="20"
      bg="white"
      borderBottomRadius="10px"
      borderTopRightRadius="10px">
      <AnimatePresence exitBeforeEnter custom={direction}>
        <TabBox
          key={key}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{duration: 0.2}}>
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
                mx="5"
                mt="3">
                <Image src={image} alt={items[index]} w="150px" h="75px" />
                <Text mt="5">{items[index]}</Text>
              </Box>
            ))}
          </Flex>
        </TabBox>
      </AnimatePresence>
    </Box>
  )
}

export default CategoryTab
