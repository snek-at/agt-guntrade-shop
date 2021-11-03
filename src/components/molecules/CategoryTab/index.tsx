import {Flex, Box, BoxProps, Text, Image} from '@chakra-ui/react'

import {AnimatePresence, motion} from 'framer-motion'

export interface CategoryTabProps {
  items: string[]
  images: string[]
  direction: string
  visible: string
}

const TabBox = motion<BoxProps>(Box)

const variants = {
  enter: (direction: string) => {
    return {
      y: direction === 'right' ? 75 : -75,
      opacity: 0
    }
  },
  center: {
    opacity: 1,
    y: 0
  },
  exit: (direction: string) => {
    return {
      y: direction === 'right' ? -75 : 75,
      opacity: 0
    }
  }
}

const CategoryTab = ({items, images, direction, visible}: CategoryTabProps) => {
  return (
    <AnimatePresence exitBeforeEnter custom={direction}>
      {console.log(visible)}
      {visible === 'visible' && (
        <TabBox
          position="absolute"
          key={visible}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{duration: 0.15}}>
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
                mx="4"
                mt="3"
                _first={{mx: 0, mr: 4}}>
                <Image src={image} alt={items[index]} w="130px" h="65px" />
                <Text mt="5">{items[index]}</Text>
              </Box>
            ))}
          </Flex>
        </TabBox>
      )}
    </AnimatePresence>
  )
}

export default CategoryTab
