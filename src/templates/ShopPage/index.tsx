import {Box, Heading, Flex, Wrap, Text, Stack} from '@chakra-ui/layout'
import React from 'react'
import {Checkbox} from '@chakra-ui/checkbox'
import {
  Button,
  Icon,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Divider,
  Spacer,
  useBreakpointValue
} from '@chakra-ui/react'
import GatsbyLink from 'gatsby-link'
import {BsFilterLeft} from '@react-icons/all-files/bs/BsFilterLeft'
import {RiOrderPlayFill} from '@react-icons/all-files/ri/RiOrderPlayFill'
import {css} from '@emotion/react'

import ProductCard from '../../components/molecules/ProductCard/3'
import SkeletonCard from '../../components/molecules/SkeletonCard'
import Breadcrumb from '../../components/molecules/Breadcrumb'
import {
  SearchProvider,
  getValuesFromQuery,
  useProductSearch
} from '../../common/requests/storefront'

interface ShopPageProps {
  pageContext: any
}

const DEFAULT_PRODUCTS_PER_PAGE = 20

const ShopPage = ({pageContext}: ShopPageProps) => {
  const queryParams = getValuesFromQuery(location.search)
  const initialFilters = React.useMemo(() => queryParams, [])
  const [sortKey, setSortKey] = React.useState(queryParams.sortKey)
  const [maxPriceFilter, setMaxPriceFilter] = React.useState<number>(0)
  const [minPriceFilter, setMinPriceFilter] = React.useState<number>(0)
  const [maximum, setMaximum] = React.useState<number>(0)
  const [order, setOrder] = React.useState<string>('Beliebtheit')
  const [filters, setFilters] = React.useState(queryParams)

  console.log(filters)
  const gatsbyLinkWidth = useBreakpointValue({base: '300px', xl: '25%'})

  React.useMemo(() => {
    let max = 0
    for (const product of pageContext.products) {
      if (parseInt(product.priceRangeV2.maxVariantPrice.amount) > max) {
        max = parseInt(product.priceRangeV2.maxVariantPrice.amount)
      }
      if (
        typeof product.priceRangeV2.minVariantPrice.amount !== 'undefined' &&
        parseInt(product.priceRangeV2.minVariantPrice.amount) > max
      ) {
        max = parseInt(product.priceRangeV2.minVariantPrice.amount)
      }
    }
    setMaximum(max)
    setMaxPriceFilter(max)
  }, [pageContext.products])

  let priceFilter: number[] = [minPriceFilter, maxPriceFilter]

  //shopify stuff
  const {products, isFetching, hasNextPage, fetchNextPage} = useProductSearch(
    filters,
    {
      allTags: pageContext.allTags
    },
    sortKey,
    false,
    DEFAULT_PRODUCTS_PER_PAGE,
    pageContext.products,
    initialFilters
  )

  const skeletons = []
  for (let i = 0; i < 21; i++) {
    skeletons.push(<SkeletonCard />)
  }

  return (
    <>
      <Box bg="black" h="120px" color="white">
        Navbar
      </Box>
      <Box w="80%" mx="auto" position="relative" zIndex="1" pt="5">
        <Breadcrumb
          breadcrumb={pageContext.handle.slice(
            pageContext.handle.indexOf('-') + 1
          )}
        />
        <Flex>
          <Heading mt="5">{pageContext.title}</Heading>
          <Text ml="3" mt="6" color="gray" fontWeight="bold" fontSize={26}>
            {pageContext.products.length}
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
          {Object.keys(pageContext.tags).map(key => (
            <>
              <Text>{key}</Text>
              <Stack direction="column" spacing="0" ml="2">
                {pageContext.tags[key].map((tag: string) => (
                  <Checkbox
                    isChecked={filters.tags.includes(key + ':' + tag)}
                    onChange={() => {
                      if (!filters.tags.includes(key + ':' + tag)) {
                        setFilters({
                          ...filters,
                          tags: filters.tags.concat(key + ':' + tag)
                        })
                      } else {
                        setFilters({
                          ...filters,
                          tags: filters.tags.filter(
                            category => category !== key + ':' + tag
                          )
                        })
                      }
                    }}
                    cursor="pointer">
                    {tag}
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
              setFilters({
                maxPrice: maximum,
                minPrice: 0,
                term: '',
                sortKey: sortKey,
                tags: []
              })
              priceFilter = [0, maximum]
            }}>
            Filter zurücksetzen
          </Button>
        </Box>
        <Wrap ml="10" spacing="10" maxW="75%" minW="75%">
          {!isFetching
            ? products.map((product: any) => {
                return (
                  <GatsbyLink
                    css={css`
                      width: ${gatsbyLinkWidth};
                    `}
                    to={
                      window.location.pathname +
                      window.location.pathname.endsWith('/')
                        ? product.id + '/'
                        : '/' + product.id + '/'
                    }>
                    <ProductCard
                      width={{base: '300px', xl: '100%'}}
                      name={product.title}
                      price={product?.priceRangeV2?.maxVariantPrice?.amount}
                      caliber={product.tags.filter((tag: string) =>
                        tag.startsWith('Kaliber:')
                      )}
                      reducedprice={product.discount}
                      direction="left"
                      images={product.images}
                    />
                  </GatsbyLink>
                )
              })
            : skeletons.map(skeleton => skeleton)}
        </Wrap>
      </Flex>
    </>
  )
}

const ShopPageTemplate = (props: any) => (
  <SearchProvider>
    <ShopPage {...props} />
  </SearchProvider>
)

export default ShopPageTemplate
