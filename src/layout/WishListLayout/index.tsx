import {
  AspectRatio,
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Spacer,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import {
  GatsbyImage,
  GatsbyImageProps,
  IGatsbyImageData
} from 'gatsby-plugin-image'
import React from 'react'
import {AiFillApi} from 'react-icons/ai'
import {FaHeartBroken} from 'react-icons/fa'
import {MdMessage} from 'react-icons/md'
import {WishlistProduct} from '../../services/wishlist'
import {BaseLayout} from '../BaseLayout'
import {ShopLayout} from '../ShopLayout'

const ContinueShoppingText = (props: {onClick: () => void}) => (
  <HStack
    mt={{
      base: 2,
      md: 4
    }}
    justify="center">
    <Text>oder,</Text>
    <Link color={'agt.blue'} fontWeight="semibold" onClick={props.onClick}>
      zu den Artikeln
    </Link>
  </HStack>
)

const SummaryBox = (props: {
  totalPrice: number
  onRequestNow: () => void
  onContinueShopping: () => void
}) => {
  return (
    <>
      <VStack
        align="left"
        spacing={6}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={{
          base: 4,
          md: 6
        }}>
        <Heading as="h3" size="md" fontWeight="bold" mb={2}>
          Wunschliste Übersicht
        </Heading>
        <HStack justifyContent={'space-between'}>
          <Text fontSize={'xl'}>Total</Text>
          <Text ml={2} fontSize={'2xl'} fontWeight="extrabold">
            {props.totalPrice} €
          </Text>
        </HStack>
        <Button
          fontSize={'2xl'}
          fontWeight={'semibold'}
          textTransform="uppercase"
          leftIcon={<Icon as={MdMessage} />}
          borderRadius={'full'}
          colorScheme="blue"
          size="lg"
          onClick={props.onRequestNow}>
          <Text>Jetzt anfragen</Text>
        </Button>
      </VStack>
      <ContinueShoppingText onClick={props.onContinueShopping} />
    </>
  )
}

const EmptyWishList = (props: {onContinueShopping: () => void}) => {
  return (
    <VStack
      align="center"
      justify="center"
      w="100%"
      h="100%"
      p={{
        base: 4,
        md: 6
      }}
      spacing={6}
      bg={useColorModeValue('gray.200', 'gray.700')}
      borderRadius="sm">
      <Icon as={FaHeartBroken} boxSize={20} color="agt.red" />
      <Heading as="h3" size="md" fontWeight="bold" mb={2}>
        Wunschliste ist leer
      </Heading>
      <Text fontSize={'xl'}>
        Füllen Sie sie mit Ihren Wunschartikeln aus dem Shop auf.
      </Text>
      <ContinueShoppingText onClick={props.onContinueShopping} />
    </VStack>
  )
}

export const WishListLayout = (props: {
  items: Array<WishlistProduct>
  onRemove: (id: string) => void
  onQuantityChange: (id: string, quantity: number) => void
  onRequestNow: () => void
  onContinueShopping: () => void
  onProductOpen: (id: string) => void
}) => {
  const itemLength = props.items.length

  const totalPrice = props.items.reduce(
    (acc, item) => acc + parseInt(item.price) * item.quantity,
    0
  )

  const summaryBox = (
    <SummaryBox
      totalPrice={totalPrice}
      onRequestNow={props.onRequestNow}
      onContinueShopping={props.onContinueShopping}
    />
  )

  return (
    <BaseLayout>
      <ShopLayout>
        <Box
          m={{
            base: 4,
            lg: 6,
            xl: 12
          }}>
          <Heading as="h1" size="lg" fontWeight="extrabold" pb={4}>
            Wunschliste {`(${itemLength} Artikel)`}
          </Heading>
          {itemLength > 0 ? (
            <>
              <Flex>
                <VStack align="left" w="100%">
                  {props.items.map(item => (
                    <WishListItem
                      key={item.id}
                      {...item}
                      onRemove={() => props.onRemove(item.id)}
                      onQuantityChange={(quantity: number) =>
                        props.onQuantityChange(item.id, quantity)
                      }
                      onOpenProduct={() => props.onProductOpen(item.id)}
                    />
                  ))}
                </VStack>
                <Box
                  ml={12}
                  display={{
                    base: 'none',
                    xl: 'block'
                  }}>
                  {summaryBox}
                </Box>
              </Flex>
              <Box
                my={8}
                mx={{
                  base: 0,
                  md: 16
                }}
                display={{
                  base: 'block',
                  xl: 'none'
                }}>
                {summaryBox}
              </Box>
            </>
          ) : (
            <EmptyWishList onContinueShopping={props.onContinueShopping} />
          )}
        </Box>
      </ShopLayout>
    </BaseLayout>
  )
}

const ImageWithText = (props: {
  title: string
  categoriesString: string
  image: {
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
}) => (
  <Flex>
    <Box
      minW="100"
      boxSize="100"
      bg={useColorModeValue('gray.200', 'gray.600')}>
      <GatsbyImage alt={props.image.alt} image={props.image.gatsbyImageData} />
    </Box>

    <Flex ml={4} flexDirection="column" my="auto">
      <Heading as="h3" size="sm" fontWeight="semibold" mb={2}>
        {props.title}
      </Heading>
      <Text fontSize="xs" fontWeight={'thin'}>
        {props.categoriesString}
      </Text>
    </Flex>
  </Flex>
)

const WishListItem = (props: {
  title: string
  categoriesString: string
  image: {
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
  price: string
  quantity: number
  onQuantityChange: (value: number) => void
  onRemove: () => void
  onOpenProduct: () => void
}) => {
  const imageWithText = (
    <Box cursor={'pointer'} onClick={props.onOpenProduct}>
      <ImageWithText
        title={props.title}
        image={props.image}
        categoriesString={props.categoriesString}
      />
    </Box>
  )

  const stepper = (
    <Stepper onChange={props.onQuantityChange} value={props.quantity} />
  )

  const price = <Text fontWeight={'semibold'}>{props.price} €</Text>

  return (
    <>
      <HStack
        w="100%"
        p={2}
        display={{
          base: 'none',
          md: 'flex'
        }}
        spacing={{
          base: 4,
          md: 8,
          lg: 12
        }}>
        <Flex flex="1">{imageWithText}</Flex>
        <Flex my={'auto'}>{stepper}</Flex>

        <Flex my={'auto'}>{price}</Flex>

        <Flex my="auto">
          <CloseButton onClick={props.onRemove} />
        </Flex>
      </HStack>
      <Flex
        w="100%"
        p="2"
        justifyContent={'space-between'}
        flexDirection="column"
        display={{
          base: 'flex',
          md: 'none'
        }}>
        {imageWithText}
        <HStack justifyContent={'space-between'} pt="2">
          <Text
            cursor={'pointer'}
            fontWeight="normal"
            fontSize="sm"
            textDecoration={'underline'}
            onClick={props.onRemove}>
            Delete
          </Text>
          {stepper}
          {price}
        </HStack>
      </Flex>
    </>
  )
}
function Stepper(props: {value?: number; onChange: (value: number) => void}) {
  return (
    <NumberInput
      defaultValue={props.value || 1}
      min={1}
      size="sm"
      maxW={20}
      allowMouseWheel
      onChange={(_, v) => props.onChange(v)}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}
