import {navigate, PageProps} from 'gatsby'
import React from 'react'
import {isEqual} from 'lodash'

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
  const [lazyload, setLazyload] = React.useState(false)
  const [displayedProducts, setDisplayedProducts] = React.useState(
    pageContext.products.items
  )
  const [initialData, setInitialData] = React.useState<any>()
  const {data, products, hasNextPage, resetCursor, fetchNextPage} =
    useProductSearch(
      {
        term: filters.term,
        tags: filters.tags,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice
      },
      pageContext.filter.allTags,
      sortKey,
      false,
      21,
      initialData,
      filters.initialFilters,
      reverse
    )

  if (!isEqual(displayedProducts, products) && products.length > 0) {
    if (lazyload) {
      setDisplayedProducts(displayedProducts.concat(products))
    } else {
      setDisplayedProducts(products)
    }
    setInitialData(data)
  }
  return (
    <ShopCatalogLayout
      filter={{
        ...pageContext.filter,
        onActiveTagsChange: (tags: Array<string>) => {
          resetCursor()
          setLazyload(false)
          setFilters({...filters, tags: tags, initialFilters: filters})
        },
        priceFilter: {
          minPrice: 0,
          maxPrice: pageContext.filter.initialFilters.maxPrice,
          onPriceChange: (min, max) => {
            resetCursor()
            setLazyload(false)
            setFilters({...filters, minPrice: min, maxPrice: max})
          }
        }
      }}
      header={{
        title: pageContext.header.title,
        path: location.pathname,
        sortOptions: ['Alphabetisch', 'Preis aufsteigend', 'Preis absteigend'],
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
          setLazyload(false)
          setSortKey(sortOption)
        }
      }}
      products={{
        items: displayedProducts,
        onItemClick: (item: any) => {
          // remove the trailing slash
          const pathname = location.pathname.replace(/\/$/, '')

          navigate(`${pathname}/${item.handle}`)
        }
      }}
      onLoadMore={() => {
        console.log('funkt')

        if (
          hasNextPage ||
          (typeof hasNextPage === 'undefined' && pageContext.filter.hasNextPage)
        ) {
          fetchNextPage()
          setLazyload(true)
          return true
        }
        return false
      }}
    />
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
