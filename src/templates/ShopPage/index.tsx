import {Image} from '@chakra-ui/image'
import {Box, Heading, Flex, Wrap, Text, VStack, Stack} from '@chakra-ui/layout'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/breadcrumb'
import Icon from '@chakra-ui/icon'
import {RiHomeLine} from '@react-icons/all-files/ri/RiHomeLine'
import {ChevronRightIcon} from '@chakra-ui/icons'
import React from 'react'

import ProductCard, {
  ProductCardProps
} from '../../components/molecules/ProductCard/3'
import {CategoryType} from '../CategoryPage'
import {SeperatorStyle} from './style'
import {Checkbox} from '@chakra-ui/checkbox'
import {NumberInput, NumberInputField} from '@chakra-ui/number-input'

interface FilterCategoryType {
  [category: string]: string
}

interface StoreCardProps extends ProductCardProps {
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
  const [priceFilter, setPriceFilter] = React.useState<number>(0)
  const [maximum, setMaximum] = React.useState<number>(0)

  React.useEffect(() => {
    for (const item of items) {
      if (item.price > maximum) {
        setMaximum(item.price)
      } else if (
        typeof item.reducedprice !== 'undefined' &&
        maximum < item.reducedprice
      ) {
        setMaximum(item.reducedprice)
      }
    }
    if (priceFilter === 0) {
      setPriceFilter(maximum)
    }
  })

  const checkFilters = (item: StoreCardProps) => {
    for (const key of Object.keys(item.categories)) {
      if (categories.includes(item.categories[key])) {
        if (
          item.price <= priceFilter ||
          (typeof item.reducedprice !== 'undefined' &&
            item.reducedprice <= priceFilter)
        ) {
          return true
        }
      }
    }
    return false
  }

  return (
    <>
      <Box bg="black" h="120px" color="white">
        Navbar
      </Box>
      <Box w="80%" mx="auto" position="relative" zIndex="1" pt="5">
        <Breadcrumb
          pt="1"
          borderRadius="5px"
          color="white"
          px="2"
          w="fit-content"
          bg="agt.gray"
          justifyContent="center"
          alignItems="center"
          separator={<ChevronRightIcon boxSize="2rem" className="icon" />}>
          <BreadcrumbItem position="relative" css={SeperatorStyle}>
            <BreadcrumbLink>
              <Icon
                as={RiHomeLine}
                boxSize="1.5rem"
                mb="1.5"
                _hover={{color: 'agt.red'}}
                transition="0.3s"
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumb.split('/').map(crumb => (
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize="1.5rem"
                to=""
                _hover={{color: 'agt.red'}}
                transition="0.3s">
                {crumb}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <Heading mt="5">{name}</Heading>
      </Box>
      <Flex w="80%" ml="10%" mt="10">
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
          <Text fontWeight="bold">Pricefilter</Text>
          <NumberInput
            defaultValue={0}
            min={0}
            max={maximum}
            onChange={valueString => setPriceFilter(parseFloat(valueString))}>
            <NumberInputField />
          </NumberInput>
        </Box>
        <Wrap ml="10" spacing="10" maxW="75%" minW="75%">
          {items.map(
            item =>
              checkFilters(item) && (
                <ProductCard
                  width={{base: '300px', xl: '25%'}}
                  images={item.images}
                  name={item.name}
                  price={item.price}
                  caliber={item.caliber}
                  reducedprice={item.reducedprice}
                  direction="left"
                />
              )
          )}
        </Wrap>
      </Flex>
    </>
  )
}

export default ShopPage
