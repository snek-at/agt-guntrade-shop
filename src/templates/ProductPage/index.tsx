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

import {StoreCardProps} from '../ShopPage'
import {ImageStyles} from './style'

export interface ProductPageProps extends StoreCardProps {
  description: string
  subheading: string
  tags: string[]
}

const ProductPage = ({
  name,
  images,
  reducedprice,
  price,
  tags,
  description,
  subheading
}: ProductPageProps) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0)

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{base: 1, lg: 2}}
        spacing={{base: 8, md: 10}}
        py={{base: 18, md: 24}}>
        <Flex direction="column" css={ImageStyles()}>
          {images.map(
            (image, index) =>
              imageIndex === index && (
                <GatsbyImage
                  className="mainImage"
                  alt={name}
                  image={image.gatsbyImageData}
                />
              )
          )}
          <Flex alignSelf={'center'}>
            {images.map(
              (image, index) =>
                imageIndex !== index && (
                  <Box
                    py="2"
                    px="2"
                    bg="agt.lightgray"
                    _first={{borderLeftRadius: '5px', pl: '5'}}
                    _last={{borderRightRadius: '5px', pr: '5'}}>
                    <GatsbyImage
                      className="sideImage"
                      alt={name}
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
              {name}
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
                € {price}
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
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {subheading}
              </Text>
              <Box dangerouslySetInnerHTML={{__html: description}} />
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
                  {tags.slice(0, Math.floor(tags.length / 2)).map(tag => (
                    <ListItem>{tag}</ListItem>
                  ))}
                </List>
                <List spacing={2}>
                  {tags.slice(Math.floor(tags.length / 2)).map(tag => (
                    <ListItem>{tag}</ListItem>
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

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default ProductPage
