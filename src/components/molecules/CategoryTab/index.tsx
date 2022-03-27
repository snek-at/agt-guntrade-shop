import {
  SimpleGrid,
  Badge,
  Box,
  BoxProps,
  Text,
  Image,
  Circle,
  Flex
} from '@chakra-ui/react'

import {AnimatePresence, motion} from 'framer-motion'
import * as style from './style'

export interface CategoryItemType {
  image: string
  name: string
  price: number
  reducedPrice?: number
  isNew: boolean
}

export interface CategoryTabProps {
  items: CategoryItemType[]
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

const CategoryTab = ({items, direction, visible}: CategoryTabProps) => {
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
            {items.map(item => (
              <Box
                className="borderline"
                position="relative"
                onClick={() => null}
                cursor="pointer"
                px={{base: '1', md: '2', lg: '3'}}
                py="5"
                borderRadius="5px"
                border="1px"
                borderColor="gray.200"
                mx={{base: '5px', lg: '4'}}
                mt="3"
                _first={{lg: {mr: 4, ml: '20px'}}}
                _hover={{
                  before: {borderColor: 'agt.blue'},
                  _after: {borderColor: 'agt.blue'}
                }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  w="fit-content"
                  fallback={<Box />}
                />
                {item.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="blue.200"
                    zIndex="2"
                  />
                )}
                <Text
                  w="100%"
                  mt="5"
                  color="black"
                  minH="5rem"
                  textAlign="center">
                  {item.name.split(';')[0]}
                </Text>
                <Badge
                  variant="solid"
                  bg="agt.blue"
                  borderRadius="5px"
                  h="1.1rem">
                  {item.name.split(';')[1]}
                </Badge>
                <Flex alignItems="flex-end" justifyContent="flex-end">
                  <Text
                    mb={typeof item.reducedPrice === 'undefined' ? '0' : '0.5'}
                    fontSize={
                      typeof item.reducedPrice === 'undefined' ? '20' : '16'
                    }
                    textDecor={
                      typeof item.reducedPrice !== 'undefined'
                        ? 'line-through'
                        : 'none'
                    }>
                    {item.price}€
                  </Text>
                  {typeof item.reducedPrice !== 'undefined' && (
                    <Text fontSize="20">{item.reducedPrice}€</Text>
                  )}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </TabBox>
      )}
    </AnimatePresence>
  )
}

export default CategoryTab
