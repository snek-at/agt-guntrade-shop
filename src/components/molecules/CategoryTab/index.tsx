import {
  SimpleGrid,
  Badge,
  Box,
  BoxProps,
  Text,
  Image,
  Circle,
  Flex,
  useColorModeValue
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
          px={2}
          transition={{duration: 0.15}}>
          <SimpleGrid
            columns={{base: 2, md: 3, xl: 6}}
            spacing="5"
            css={style.Borderline}>
            {items.map(item => (
              <Link to={getPath(item.handle)}>
                <Box
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
                  <Text fontSize="sm" fontWeight={'thin'} mt="5">
                    {
                      item.tags
                        .filter((tag: string) => tag.startsWith('Kaliber:'))[0]
                        .split(':')[1]
                    }
                  </Text>
                  <Text w="100%" color="black" minH="5rem">
                    {item.title}
                  </Text>
                  <Flex>
                    <Text
                      textDecor={
                        item.contextualPricing.maxVariantPricing
                          .compareAtPrice !== null
                          ? 'line-through'
                          : 'none'
                      }>
                      {parseFloat(
                        item.contextualPricing.maxVariantPricing.price.amount
                      ).toFixed(2)}{' '}
                      €
                    </Text>
                    {item.contextualPricing.maxVariantPricing.compareAtPrice !==
                      null && (
                      <Text color="agt.red" fontWeight={'bold'} ml="2">
                        {parseFloat(
                          item.contextualPricing.maxVariantPricing
                            .compareAtPrice.amount
                        ).toFixed(2)}{' '}
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
