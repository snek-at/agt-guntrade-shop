import {PageProps} from 'gatsby'
import React from 'react'

import {
  SearchProvider,
  useProductSearch
} from '../../common/requests/storefront'
import {ShopCatalogLayout} from '../../layout/ShopCatalogLayout'

type ShopPageProps = PageProps<
  {},
  {
    filter: {
      allTags: Array<string>
      categoryTagsAndPriorities: {maxPrio: number, data: Array<{priority: number; tag: string}>}
      productPageTags: Array<string>
      activeTags: Array<string>
      initialFilters: {
        term: string | null
        tags: Array<string>
        maxPrice: number
      }
      hasNextPage: boolean
    }
    header: {
      title: string
    }
    products: {
      items: Array<any>
    }
  }
>

const ShopPage = ({pageContext, location}: ShopPageProps) => {
  const [filters, setFilters] = React.useState({
    ...pageContext.filter.initialFilters,
    minPrice: 0,
    initialFilters: {
      ...pageContext.filter.initialFilters,
      minPrice: 0
    }
  })

  const [sortKey, setSortKey] = React.useState('TITLE')
  const [reverse, setReverse] = React.useState(false)
  const [allProducts, setAllProducts] = React.useState(
    pageContext.products.items
  )

  const [initialData, setInitialData] = React.useState<any>()

  const {data, isFetching, products, hasNextPage, resetCursor, fetchNextPage} =
    useProductSearch(
      false,
      {
        term: filters.term,
        tags: filters.tags,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice
      },
      pageContext.filter.allTags,
      sortKey,
      false,
      12,
      initialData,
      filters.initialFilters,
      reverse,
      pageContext.filter.activeTags,
      pageContext.filter.categoryTagsAndPriorities
    )

  const [isLoading, setIsLoading] = React.useState(false)
  const [shouldResetFilters, setShouldResetFilters] = React.useState(false)
  const [hasMore, setHasMore] = React.useState(pageContext.filter.hasNextPage)

  React.useEffect(() => {
    setHasMore(hasNextPage)
  }, [hasNextPage])

  React.useEffect(() => {
    setShouldResetFilters(true)
  }, [filters])

  React.useEffect(() => {
    if (
      JSON.stringify(products.map(p => p.handle)) !==
      JSON.stringify(allProducts.map(p => p.handle))
    ) {
      if (shouldResetFilters) {
        setAllProducts(products)
        setShouldResetFilters(false)
      } else {
        // merge the new products with the old ones
        setAllProducts(allProducts.concat(products))
      }

      setInitialData(data)
    }
  }, [JSON.stringify(products.map(p => p.handle)), shouldResetFilters])

  React.useEffect(() => {
    if (isLoading) {
      if (hasMore) {
        if (!isFetching) {
          fetchNextPage()
        }
      }
    }
    setIsLoading(false)
  }, [isLoading, hasMore, isFetching])

  return (
    <>
      <ShopCatalogLayout
        activePath={location.pathname}
        loading={isFetching}
        filter={{
          ...pageContext.filter,
          activeTags: [],
          allTags: pageContext.filter.productPageTags,
          onActiveTagsChange: (tags: Array<string>) => {
            resetCursor()
            setFilters({
              ...filters,
              tags: tags,
              initialFilters: filters
            })
          },
          priceFilter: {
            minPrice: 0,
            maxPrice: pageContext.filter.initialFilters.maxPrice,
            onPriceChange: (min, max) => {
              resetCursor()
              setFilters({...filters, minPrice: min, maxPrice: max})
            }
          }
        }}
        header={{
          title: pageContext.header.title,
          path: location.pathname,
          sortOptions: [
            'Alphabetisch',
            'Preis aufsteigend',
            'Preis absteigend'
          ],
          onSortChange: (option: string) => {
            let sortOption: string
            switch (option) {
              case 'Alphabetisch':
                sortOption = 'TITLE'
                setReverse(false)
                break
              case 'Preis aufsteigend':
                sortOption = 'PRICE'
                setReverse(false)
                break
              case 'Preis absteigend':
                sortOption = 'PRICE'
                setReverse(true)
                break
              default:
                sortOption = 'TITLE'
                setReverse(false)
            }
            resetCursor()
            setShouldResetFilters(true)
            setSortKey(sortOption)
          }
        }}
        products={{
          items: allProducts,
          getPath: (handle: string) => {
            // remove the trailing slash
            const pathname = location.pathname.replace(/\/$/, '')

            return `${pathname}/${handle}`
          }
        }}
        onLoadMore={() => setIsLoading(true)}
      />
    </>
  )
}

const ShopPageWithSearch = (props: ShopPageProps) => {
  return (
    <SearchProvider>
      <ShopPage {...props} />
    </SearchProvider>
  )
}

export default ShopPageWithSearch
