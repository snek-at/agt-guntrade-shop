import {
  Box,
  Container,
  Stack,
  Text,
  Image,
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

import {StoreCardProps} from '../ShopPage'

export interface ProductPageProps extends StoreCardProps {
  description: string
  subheading: string
  features: string[]
}

const ProductPage = ({
  name,
  images,
  reducedprice,
  price,
  categories,
  features,
  description,
  subheading
}: ProductPageProps) => {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{base: 1, lg: 2}}
        spacing={{base: 8, md: 10}}
        py={{base: 18, md: 24}}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={images[0]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{base: '100%', sm: '400px', lg: '500px'}}
          />
        </Flex>
        <Stack spacing={{base: 6, md: 10}}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{base: '2xl', sm: '4xl', lg: '5xl'}}>
              {name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              € {typeof reducedprice !== 'undefined' ? reducedprice : price}
            </Text>
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
              <Text fontSize={'lg'}>{description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{base: '16px', lg: '18px'}}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                <List spacing={2}>
                  {features.slice(0, features.length / 2).map(feature => (
                    <ListItem>{feature}</ListItem>
                  ))}
                </List>
                <List spacing={2}>
                  {features.slice(features.length / 2).map(feature => (
                    <ListItem>{feature}</ListItem>
                  ))}
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{base: '16px', lg: '18px'}}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                {Object.keys(categories).map(category => (
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'} casing="capitalize">
                      {category}:
                    </Text>{' '}
                    {categories[category]}
                  </ListItem>
                ))}
              </List>
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
