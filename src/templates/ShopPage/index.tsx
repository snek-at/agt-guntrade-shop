import {Box, Heading, Flex, Wrap, Text, Stack} from '@chakra-ui/layout'
import React from 'react'

import ProductCard, {
  ProductCardProps
} from '../../components/molecules/ProductCard/3'
import {CategoryType} from '../CategoryPage'
import {Checkbox} from '@chakra-ui/checkbox'
import Breadcrumb from '../../components/molecules/Breadcrumb'
import {
  Button,
  Icon,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Divider,
  Spacer
} from '@chakra-ui/react'

import {BsFilterLeft} from '@react-icons/all-files/bs/BsFilterLeft'
import {RiOrderPlayFill} from '@react-icons/all-files/ri/RiOrderPlayFill'

export interface FilterCategoryType {
  [category: string]: string
}

export interface StoreCardProps extends ProductCardProps {
  categories: FilterCategoryType
}

export interface ShopPageProps extends CategoryType {
  items: StoreCardProps[]
  tags: string[]
  breadcrumb: string
  name: string
}

const ShopPage = ({items, breadcrumb, name, tags}: ShopPageProps) => {
  const [categories, setCategories] = React.useState<string[]>([])
  const [maxPriceFilter, setMaxPriceFilter] = React.useState<number>(0)
  const [minPriceFilter, setMinPriceFilter] = React.useState<number>(0)
  const [maximum, setMaximum] = React.useState<number>(0)
  const [order, setOrder] = React.useState<string>('Beliebtheit')

  React.useMemo(() => {
    let max = 0
    for (const item of items) {
      if (item.price > maximum) {
        max = item.price
      } else if (
        typeof item.reducedprice !== 'undefined' &&
        item.reducedprice > maximum
      ) {
        max = item.reducedprice
      }
    }
    setMaximum(max)
    setMaxPriceFilter(max)
  }, [items])

  const checkFilters = (item: StoreCardProps) => {
    let price
    let category
    if (categories.length === 0) {
      category = true
    } else {
      for (const key of Object.keys(item.categories)) {
        if (categories.includes(item.categories[key])) {
          category = true
          break
        }
      }
    }

    if (maxPriceFilter === maximum && minPriceFilter === 0) {
      price = true
    } else if (
      (item.price <= maxPriceFilter ||
        (typeof item.reducedprice !== 'undefined' &&
          item.reducedprice <= maxPriceFilter)) &&
      (item.price >= minPriceFilter ||
        (typeof item.reducedprice !== 'undefined' &&
          item.reducedprice <= minPriceFilter))
    ) {
      price = true
    }

    return category && price
  }

  let priceFilter: number[] = [minPriceFilter, maxPriceFilter]

  return (
    <>
      <Box bg="black" h="120px" color="white">
        Navbar
      </Box>
      <Box w="80%" mx="auto" position="relative" zIndex="1" pt="5">
        <Breadcrumb breadcrumb={breadcrumb} />
        <Flex>
          <Heading mt="5">{name}</Heading>
          <Text ml="3" mt="6" color="gray" fontWeight="bold" fontSize={26}>
            {items.length}
          </Text>
        </Flex>
        <Flex mt="3">
          <Flex>
            <Icon as={BsFilterLeft} boxSize="2rem" />
            <Text fontSize="1.25rem">Filter</Text>
          </Flex>
          <Spacer />
          <Flex>
            <Text fontSize="1.25rem">{order}</Text>
            <Icon as={RiOrderPlayFill} boxSize="1.5rem" mt="1" ml="2" />
          </Flex>
        </Flex>
        <Divider mt="1" />
      </Box>
      <Flex w="80%" ml="10%" mt="5">
        <Box minW="25%" position="sticky" bottom="0px" h="fit-content">
          <Stack direction="column" spacing="0" ml="2">
            {tags.map(filter => (
              <Checkbox
                onChange={() => {
                  if (!categories.includes(filter)) {
                    setCategories(categories.concat(filter))
                  } else {
                    setCategories(
                      categories.filter(category => category !== filter)
                    )
                  }
                }}
                cursor="pointer">
                {filter}
              </Checkbox>
            ))}
          </Stack>
          <Text fontWeight="bold">maxPriceFilter</Text>
          <RangeSlider
            min={0}
            max={maximum}
            value={priceFilter}
            onChange={value => {
              setMinPriceFilter(value[0])
              setMaxPriceFilter(value[1])
            }}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
          <Flex alignItems="center" justifyContent="center" fontSize="20">
            <Text>{minPriceFilter}</Text>
            <Text mx="3">-</Text>
            <Text>{maxPriceFilter}</Text>
          </Flex>
          <Button
            mt="5"
            colorScheme="agt.grayScheme"
            onClick={() => {
              setMinPriceFilter(0)
              setMaxPriceFilter(maximum)
              setCategories([])
              priceFilter = [0, maximum]
            }}>
            Filter zurücksetzen
          </Button>
        </Box>
        <Wrap ml="10" spacing="10" maxW="75%" minW="75%">
          {items.map(item => {
            const isVisible = checkFilters(item)
            return React.useMemo(
              () =>
                isVisible && (
                  <ProductCard
                    width={{base: '300px', xl: '25%'}}
                    images={item.images}
                    name={item.name}
                    price={item.price}
                    caliber={item.caliber}
                    reducedprice={item.reducedprice}
                    direction="left"
                  />
                ),
              [isVisible]
            )
          })}
        </Wrap>
      </Flex>
    </>
  )
}

export default ShopPage
