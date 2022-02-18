import {ChevronRightIcon} from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {useProductSearch} from 'src/common/requests/storefront'

import {FaEuroSign, FaFilter, FaHome, FaSort} from 'react-icons/fa'
import React from 'react'
import {Breadcrumbs, ShopLayout} from '../ShopLayout'

// tag builder => input tag output type:content

export const Header = (props: {
  title: string
  sortOptions: Array<string>
  onSortChange: (option: string) => void
  isMobile?: boolean
  onMobileFilterClick?: () => void
}) => {
  return (
    <>
      <Breadcrumbs />
      <Heading size="2xl">{props.title}</Heading>
      <Box
        my="2"
        position={'sticky'}
        top="0"
        alignSelf={'flex-start'}
        zIndex="1"
        bg={useColorModeValue('white', 'agt.gray')}>
        <Flex>
          {props.isMobile ? (
            <Button
              variant="unstyled"
              leftIcon={<Icon as={FaFilter} />}
              onClick={props.onMobileFilterClick}>
              Filter
            </Button>
          ) : (
            <Button
              leftIcon={<Icon as={FaFilter} />}
              variant="unstyled"
              cursor={'default'}
              _focus={{boxShadow: 'none'}}>
              Filter
            </Button>
          )}

          <Spacer />
          <Box>
            <Select
              placeholder="Sortieren"
              variant={'unstyled'}
              my="2"
              icon={<Icon as={FaSort} mb="1" />}
              onChange={e => props.onSortChange(e.target.value)}>
              {props.sortOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
        <Divider />
      </Box>
    </>
  )
}

const PriceRangeFilter = (props: {
  minPrice: number
  maxPrice: number
  onPriceChange: (min: number, max: number) => void
}) => {
  const [value, setValue] = React.useState([props.minPrice, props.maxPrice])

  return (
    <Box>
      <Text fontWeight={'bold'}>
        {`Preisklasse (${value[0]} - ${value[1]}€)`}
      </Text>

      <Box px="4">
        <RangeSlider
          min={props.minPrice}
          max={props.maxPrice}
          value={value}
          onChange={v => setValue(v)}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
      </Box>
    </Box>
  )
}

interface FilterProps {
  allTags: Array<string> // ["category:test",...]
  activeTags: Array<string>
  onActiveTagsChange: (tags: FilterProps['activeTags']) => void
}

const Filter = (props: FilterProps) => {
  const [activeTags, setActiveTags] = React.useState(props.activeTags)

  const groupedFilter = React.useMemo(() => {
    const grouped: {
      [group: string]: Array<string>
    } = {}

    for (const tag of Object.values(props.allTags)) {
      const [group, tagName] = tag.split(':')

      grouped[group] = grouped[group] || []
      grouped[group].push(tagName)
    }

    return grouped
  }, [props.allTags])

  const handleActiveTabsChange = (tag: string) => {
    let newActiveTags

    if (activeTags.includes(tag)) {
      newActiveTags = activeTags.filter(t => t !== tag)
    } else {
      newActiveTags = [...activeTags, tag]
    }

    setActiveTags(newActiveTags)

    props.onActiveTagsChange(newActiveTags)
  }

  return (
    <VStack px="2" spacing={4} divider={<Divider />} align="stretch">
      <>
        {Object.entries(groupedFilter).map(([tagType, values]) => (
          <Box pb="2">
            <Text fontWeight={'bold'}>{tagType}</Text>
            <Stack>
              {values.map((tagName, key) => {
                const fullTag = `${tagType}:${tagName}`
                const isChecked = activeTags.includes(fullTag)

                return (
                  <Checkbox
                    key={key}
                    defaultChecked={isChecked}
                    onChange={() => handleActiveTabsChange(fullTag)}>
                    {tagName}
                  </Checkbox>
                )
              })}
            </Stack>
          </Box>
        ))}
      </>
      <PriceRangeFilter
        minPrice={0}
        maxPrice={100}
        onPriceChange={e => alert(JSON.stringify(e))}
      />
    </VStack>
  )
}

const ProductGrid = (props: {
  items: Array<any>
  onItemClick: (item: any) => void
}) => {
  // css grid
  return (
    <SimpleGrid spacing={4} minChildWidth="250px">
      {props.items.map((item, key) => (
        <Box key={key} onClick={() => props.onItemClick(item)} bg="gray.200">
          <AspectRatio ratio={1}>
            <></>
          </AspectRatio>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export const ShopCatalogLayout = (props: {
  filter: React.ComponentProps<typeof Filter>
  products: React.ComponentProps<typeof ProductGrid>
  header: React.ComponentProps<typeof Header>
  onProductSearch?: typeof useProductSearch
}) => {
  const mobile = useDisclosure()
  const [isDesktop] = useMediaQuery('(min-width: 1268px)')

  return (
    <ShopLayout>
      <Header
        {...props.header}
        isMobile={!isDesktop}
        onMobileFilterClick={mobile.onToggle}
      />
      <Flex>
        <>
          {!isDesktop ? (
            <Drawer
              isOpen={mobile.isOpen}
              onClose={mobile.onClose}
              placement="left"
              blockScrollOnMount={false}>
              <DrawerContent p="4">
                <Heading as="h3" mb="4">
                  Filter
                </Heading>
                <Filter {...props.filter} />
              </DrawerContent>
            </Drawer>
          ) : (
            <Box w="30%" position={'sticky'} top="12" alignSelf={'flex-start'}>
              <Filter {...props.filter} />
            </Box>
          )}
        </>

        <Box w="100%">
          <ProductGrid {...props.products} />
        </Box>
      </Flex>
      <Box h="5000px">
        <Text>{'Total'}</Text>
      </Box>
    </ShopLayout>
  )
}
