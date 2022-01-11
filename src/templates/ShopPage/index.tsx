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
  Spacer,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from '@chakra-ui/react'

import {BsFilterLeft} from '@react-icons/all-files/bs/BsFilterLeft'
import {RiOrderPlayFill} from '@react-icons/all-files/ri/RiOrderPlayFill'

export interface FilterCategoryType {
  [category: string]: string
}

export interface StoreCardProps extends ProductCardProps {
  categories: FilterCategoryType
}

interface FilterType {
  [category: string]: string[]
}

export interface ShopPageProps extends CategoryType {
  items: StoreCardProps[]
  filters: FilterType
}

const ShopPage = ({items, breadcrumb, name, filters}: ShopPageProps) => {
  const [categories, setCategories] = React.useState<string[]>([])
  const [maxPriceFilter, setMaxPriceFilter] = React.useState<number>(0)
  const [minPriceFilter, setMinPriceFilter] = React.useState<number>(0)
  const [maximum, setMaximum] = React.useState<number>(0)
  const [order, setOrder] = React.useState<string>('price')

  const dynamicSort = (property: string) => {
    var sortOrder = 1
    if (property[0] === '-') {
      sortOrder = -1
      property = property.substring(1)
    }
    if (property === 'price') {
      return function (a: any, b: any) {
        let properties = ['price', 'price']
        if (typeof a?.reducedprice !== 'undefined') {
          properties[0] = 'reducedprice'
        }
        if (typeof b?.reducedprice !== 'undefined') {
          properties[1] = 'reducedprice'
        }
        var result =
          a[properties[0]] < b[properties[1]]
            ? -1
            : a[properties[0]] > b[properties[1]]
            ? 1
            : 0
        return result * sortOrder
      }
    }
    return function (a: any, b: any) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
      return result * sortOrder
    }
  }

  const sortItems = () => {
    items = items.sort(dynamicSort(order))
  }

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
            <Popover trigger="hover">
              <PopoverTrigger>
                <IconButton
                  aria-label="sort"
                  icon={<RiOrderPlayFill />}
                  boxSize="1.5rem"
                  mt="1"
                  ml="2"
                />
              </PopoverTrigger>
              <PopoverContent w="fit-content" boxShadow="lg" px="0" pb="0">
                <PopoverBody p="0" pt="8">
                  <Text
                    p="2"
                    w="100%"
                    onClick={() => {
                      setOrder('-price')
                      sortItems()
                    }}
                    _hover={{bg: 'agt.lightgray'}}>
                    Günstigste
                  </Text>
                  <Text
                    p="2"
                    w="100%"
                    onClick={() => {
                      setOrder('price')
                      sortItems()
                    }}
                    _hover={{bg: 'agt.lightgray'}}>
                    Teuerste
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
        <Divider mt="1" />
      </Box>
      <Flex w="80%" ml="10%" mt="5">
        <Box minW="25%" position="sticky" bottom="0px" h="fit-content">
          {Object.keys(filters).map(category => (
            <>
              <Text fontWeight="bold">{category}</Text>
              <Stack direction="column" spacing="0" ml="2">
                {filters[category].map(filter => (
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
            </>
          ))}
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
              [isVisible, items, order]
            )
          })}
        </Wrap>
      </Flex>
    </>
  )
}

export default ShopPage
