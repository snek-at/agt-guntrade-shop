import queryString from 'query-string'
import * as React from 'react'
import {createClient, Provider as UrlqProvider, useQuery} from 'urql'

export const ProductsQuery = `
query ($query: String!, $sortKey: ProductSortKeys, $first: Int, $last: Int, $after: String, $before: String) {
    products(
      query: $query
      sortKey: $sortKey
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          title
          handle
          priceRangeV2: priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
          id
          images{
            edges {
              node {
                originalSrc
                width
                height
                altText
              }
            }
          }
        }
      }
    }
  }`

const makeFilter = (field: string, selectedItems: any) => {
  if (!selectedItems?.length) return
  if (selectedItems && !Array.isArray(selectedItems)) {
    selectedItems = [selectedItems]
  }
  return `(${selectedItems
    .map((item: any) => `${field}:${JSON.stringify(item)}`)
    .join(' OR ')})`
}

export const createQuery = (filters: any) => {
  const {term, tags, minPrice, maxPrice} = filters
  const parts = [
    term,
    makeFilter('tag', tags)
    // Exclude empty filter values
  ].filter(Boolean)
  if (maxPrice) {
    parts.push(`variants.price:<="${maxPrice}"`)
  }
  if (minPrice) {
    parts.push(`variants.price:>="${minPrice}"`)
  }

  return parts.join(' ')
}

const arrayify = (value: any) => {
  if (!value) {
    return []
  }
  if (!Array.isArray(value)) {
    return [value]
  }
  return value
}

export const getValuesFromQuery = (query: string | any) => {
  const isClient = typeof query === 'string'
  const {
    q: term,
    s: sortKey,
    x: maxPrice,
    n: minPrice,
    t
  } = isClient ? queryString.parse(query) : query
  return {
    term,
    sortKey,
    maxPrice,
    minPrice,
    tags: arrayify(t)
  }
}

export const urqlClient = createClient({
  url: `https://daniels-testhop.myshopify.com/api/2021-01/graphql.json`,
  fetchOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '26fb20c56a3a42b4738b7e0a588f8d04'
    }
  }
})

const makeQueryStringValue = (allItems: any[], selectedItems: any[]) => {
  if (allItems.length === selectedItems.length) {
    return []
  }
  return selectedItems
}

export const getSearchResults = async ({query, count = 24}) => {
  const filters = getValuesFromQuery(query)

  // Relevance is non-deterministic if there is no query, so we default to "title" instead
  const initialSortKey = filters.term ? 'RELEVANCE' : 'TITLE'

  const urqlQuery = createQuery(filters)

  const results = await urqlClient
    .query(ProductsQuery, {
      query: urqlQuery,
      // this does not support paginated results
      first: count,
      sortKey: filters.sortKey || initialSortKey
    })
    .toPromise()

  return results.data?.products?.edges
}

export const useProductSearch = (
  filters,
  allTags,
  sortKey,
  pause = false,
  count = 20,
  initialData = [],
  initialFilters
) => {
  const [query, setQuery] = React.useState(createQuery(filters))
  const [cursors, setCursors] = React.useState({
    before: null,
    after: null
  })
  const [initialRender, setInitialRender] = React.useState(true)
  const {term, tags, minPrice, maxPrice} = filters

  // Relevance is non-deterministic if there is no query, so we default to "title" instead
  const initialSortKey = filters.term ? 'RELEVANCE' : 'TITLE'
  // only fetch after the filters have changed
  const shouldPause = React.useMemo(
    () => query === createQuery(initialFilters) || pause,
    [query, pause, initialFilters]
  )

  const [result] = useQuery({
    query: ProductsQuery,
    variables: {
      query,
      sortKey: sortKey || initialSortKey,
      first: !cursors.before ? count : null,
      last: cursors.before ? count : null,
      after: cursors.after,
      before: cursors.before
    },
    pause: shouldPause
  })

  React.useEffect(() => {
    const qs = queryString.stringify({
      // Don't show if falsy
      q: term || undefined,
      x: maxPrice || undefined,
      n: minPrice || undefined,
      // Don't show if sort order is default
      s: sortKey === initialSortKey ? undefined : sortKey,
      // Don't show if all values are selected
      t: makeQueryStringValue(allTags, tags),
      c: cursors.after || undefined
    })

    const url = new URL(window.location.href)
    url.search = qs
    url.hash = ''
    window.history.replaceState({}, null, url.toString())
    setQuery(createQuery(filters))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, cursors, sortKey])

  const fetchNextPage = () => {
    // when we go forward we want all products after the first one of our array
    const prods = result.data.products
    const nextCursor = prods.edges[prods.edges.length - 1].cursor
    setCursors({
      before: null,
      after: nextCursor
    })
  }

  const filterCount =
    (filters.tags.length === allTags.length ? 0 : filters.tags.length) +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0)

  let hasNextPage

  const products = React.useMemo(() => {
    if (query === createQuery(initialFilters)) {
      return initialData
    }
    if (result.data && initialRender) setInitialRender(false)
    return result.data?.products?.edges || []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, result.data, initialData, initialFilters])

  if (result && result.data) {
    hasNextPage = result.data.products.pageInfo.hasNextPage
  }

  const isFetching = !initialRender && result.fetching

  return {
    data: result.data,
    isFetching,
    hasNextPage,
    products,
    filterCount,
    fetchNextPage
  }
}
export const SearchProvider = ({children}: any) => {
  return <UrlqProvider value={urqlClient}>{children}</UrlqProvider>
}
