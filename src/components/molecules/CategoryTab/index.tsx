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
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import * as style from './style'

export interface CategoryTabProps {
  items: Array<any>
  direction: string
  visible: string
  getPath: (handle: string) => string
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

const CategoryTab = ({
  items,
  direction,
  visible,
  getPath
}: CategoryTabProps) => {
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
          <SimpleGrid
            columns={{base: 2, md: 3, xl: 6}}
            spacing="5"
            css={style.Borderline}>
            {items.map(item => (
              <Link to={getPath(item.handle)}>
                <Box
                  textAlign={'end'}
                  className="borderline"
                  position="relative"
                  cursor="pointer"
                  px={{base: '1', md: '2', lg: '3'}}
                  py="5"
                  borderRadius="5px"
                  border="1px"
                  borderColor="gray.200"
                  mt="3"
                  _hover={{
                    before: {borderColor: 'agt.red'},
                    _after: {borderColor: 'agt.red'}
                  }}>
                  <GatsbyImage
                    image={item.featuredImage.gatsbyImageData}
                    alt={item.handle}
                  />
                  <Badge
                    variant="solid"
                    bg="agt.blue"
                    borderRadius="5px"
                    h="1.1rem">
                    {
                      item.tags
                        .filter((tag: string) => tag.startsWith('Kaliber:'))[0]
                        .split(':')[1]
                    }
                  </Badge>
                  <Text
                    w="100%"
                    mt="5"
                    color="black"
                    minH="5rem"
                    textAlign="center">
                    {item.title}
                  </Text>
                  <Flex alignItems="flex-end" justifyContent="flex-end">
                    <Text
                      mb={
                        typeof item.reducedPrice === 'undefined' ? '0' : '0.5'
                      }
                      fontSize={
                        typeof item.reducedPrice === 'undefined' ? '20' : '16'
                      }
                      textDecor={
                        typeof item.reducedPrice !== 'undefined'
                          ? 'line-through'
                          : 'none'
                      }>
                      {parseFloat(
                        item.contextualPricing.maxVariantPricing.price.amount
                      ).toFixed(2)}
                      €
                    </Text>
                    {item.contextualPricing.maxVariantPricing.compareAtPrice !==
                      null && (
                      <Text fontSize="20">
                        {parseFloat(
                          item.contextualPricing.maxVariantPricing
                            .compareAtPrice.amount
                        ).toFixed(2)}
                        €
                      </Text>
                    )}
                  </Flex>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </TabBox>
      )}
    </AnimatePresence>
  )
}

export default CategoryTab
