import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem
} from '@chakra-ui/react'
import {MdLocalShipping} from '@react-icons/all-files/md/MdLocalShipping'
import {GatsbyImage} from 'gatsby-plugin-image'
import React from 'react'

import {ImageStyles} from './style'
import FeaturedProductsSection from '../../components/organisms/sections/FeaturedProductsSection/2'

export interface ProductPageProps {
  pageContext: any
}

const ProductPage = ({pageContext}: ProductPageProps) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0)
  const reducedprice = pageContext.product.discount

  pageContext.product.tags = pageContext.product.tags.filter(
    (tag: string) => tag.split(':')[0] !== 'Kaliber'
  )

  return (
    <>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{base: 1, lg: 2}}
          spacing={{base: 8, md: 10}}
          py={{base: 18, md: 24}}>
          <Flex direction="column" css={ImageStyles()}>
            {pageContext.product.images.map(
              (image: any, index: number) =>
                imageIndex === index && (
                  <GatsbyImage
                    className="mainImage"
                    alt={pageContext.product.title}
                    image={image.gatsbyImageData}
                  />
                )
            )}
            <Flex alignSelf={'center'}>
              {pageContext.product.images.map(
                (image: any, index: number) =>
                  imageIndex !== index && (
                    <Box
                      py="2"
                      px="2"
                      bg="agt.lightgray"
                      _first={{borderLeftRadius: '5px', pl: '5'}}
                      _last={{borderRightRadius: '5px', pr: '5'}}>
                      <GatsbyImage
                        className="sideImage"
                        alt={pageContext.product.title}
                        image={image.gatsbyImageData}
                        onClick={() => setImageIndex(index)}
                      />
                    </Box>
                  )
              )}
            </Flex>
          </Flex>
          <Stack spacing={{base: 6, md: 10}}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{base: '2xl', sm: '4xl', lg: '5xl'}}>
                {pageContext.product.title}
              </Heading>
              <Flex>
                {reducedprice && (
                  <Text
                    color={useColorModeValue('gray.900', 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'}>
                    € {reducedprice}
                  </Text>
                )}
                <Text
                  ml="3"
                  color={
                    typeof reducedprice !== 'undefined'
                      ? 'gray'
                      : useColorModeValue('gray.900', 'gray.400')
                  }
                  fontWeight={300}
                  fontSize={'2xl'}
                  textDecoration={
                    typeof reducedprice !== 'undefined' ? 'line-through' : ''
                  }>
                  € {pageContext.product.priceRangeV2.maxVariantPrice.amount}
                </Text>
              </Flex>
            </Box>

            <Stack
              spacing={{base: 4, sm: 6}}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{base: 4, sm: 6}}>
                {/*            <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {subheading}
                </Text> */}
                <Box
                  dangerouslySetInnerHTML={{
                    __html: pageContext.product.descriptionHtml
                  }}
                />
              </VStack>
              <Box>
                <Text
                  fontSize={{base: '16px', lg: '18px'}}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Tags
                </Text>

                <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                  <List spacing={2}>
                    {pageContext.product.tags
                      .slice(0, Math.floor(pageContext.product.tags.length / 2))
                      .map((tag: string) => (
                        <ListItem>{tag.split(':')[1]}</ListItem>
                      ))}
                  </List>
                  <List spacing={2}>
                    {pageContext.product.tags
                      .slice(Math.floor(pageContext.product.tags.length / 2))
                      .map((tag: string) => (
                        <ListItem>{tag.split(':')[1]}</ListItem>
                      ))}
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg'
              }}>
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <FeaturedProductsSection products={pageContext.relatedProducts} />
    </>
  )
}

export default ProductPage
