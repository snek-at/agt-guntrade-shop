import {SimpleGrid, Badge, Box, BoxProps, Text, Image} from '@chakra-ui/react'

import {AnimatePresence, motion} from 'framer-motion'
import * as style from './style'

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
      position: 'absolute',
      y: direction === 'right' ? 75 : -75,
      opacity: 0
    }
  },
  center: {
    position: 'relative',
    opacity: 1,
    y: 0
  },
  exit: (direction: string) => {
    return {
      position: 'absolute',
      display: 'none',
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
          position="relative"
          key={visible}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{duration: 0.15}}>
          <SimpleGrid columns={{base: 2, md: 3, xl: 6}} css={style.Borderline}>
            {images.map((image, index) => (
              <Box
                className="borderline"
                onClick={() => null}
                cursor="pointer"
                px={{base: '1', md: '2', lg: '3'}}
                py="5"
                justifyContent="center"
                alignContent="center"
                textAlign="center"
                borderRadius="5px"
                border="1px"
                borderColor="gray.200"
                mx={{base: '5px', lg: '4'}}
                mt="3"
                _first={{lg: {mr: 4, ml: '20px'}}}
                _hover={{
                  before: {borderColor: 'agt.red'},
                  _after: {borderColor: 'agt.red'}
                }}>
                <Image src={image} alt={items[index]} w="fit-content" />
                <Text w="100%" mt="5">
                  {items[index].split(';')[0]}
                </Text>
                <Badge variant="solid" bg="agt.red" borderRadius="5px">
                  {items[index].split(';')[1]}
                </Badge>
              </Box>
            ))}
          </SimpleGrid>
        </TabBox>
      )}
    </AnimatePresence>
  )
}

export default CategoryTab
