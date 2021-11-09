import {SimpleGrid, Flex, Box, BoxProps, Text, Image} from '@chakra-ui/react'

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
          <SimpleGrid columns={{base: 1, md: 2, xl: 6}}>
            {images.map((image, index) => (
              <Box
                onClick={() => null}
                cursor="pointer"
                px={{base: '1', md: '3'}}
                py="5"
                justifyContent="center"
                alignContent="center"
                textAlign="center"
                borderRadius="5px"
                border="1px"
                borderColor="gray.200"
                mx={{base: '0', md: '4'}}
                ml={{base: '15px', md: '4'}}
                mt="3"
                _first={{md: {mr: 4, ml: '20px'}}}>
                <Image
                  src={image}
                  alt={items[index]}
                  w={{base: '260px', md: '130px'}}
                  h={{base: '130px', md: '65px'}}
                />
                <Text mt="5">{items[index]}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </TabBox>
      )}
    </AnimatePresence>
  )
}

export default CategoryTab
