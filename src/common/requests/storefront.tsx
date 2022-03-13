import {getShopifyImage} from '../../../plugins/gatsby-source-shopify'
import queryString from 'query-string'
import * as React from 'react'
import {createClient, Provider as UrlqProvider, useQuery} from 'urql'

export const ProductsQuery = `
query ($query: String!, $sortKey: ProductSortKeys, $first: Int, $last: Int, $after: String, $before: String, $reverse: Boolean) {
    products(
      query: $query
      sortKey: $sortKey
      first: $first
      last: $last
      after: $after
      before: $before
      reverse: $reverse
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
          price: priceRange {
            maxVariantPrice {
              amount
            }
          }
          compareAtPrice: compareAtPriceRange{
            maxVariantPrice{
              amount
            }
          }
          id
          tags
          featuredImage{
            url
            width
            height
            altText
          }
          images(first: 10){
            edges {
              node {
                url
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

const makeFilter = (
  field: string,
  selectedItems: any,
  permanentTags: Array<any>,
  categoryTagsAndPriority:
    | {
        maxPrio: number
        data: Array<{priority: number; tag: string}>
      }
    | undefined
) => {
  if (selectedItems && !Array.isArray(selectedItems)) {
    selectedItems = [selectedItems]
  }

  const selected = []
  if (categoryTagsAndPriority) {
    for (let i = 1; i < categoryTagsAndPriority.maxPrio; i++) {
      selected.push(
        categoryTagsAndPriority.data
          .map(tagAndPrio => {
            if (
              selectedItems.includes(
                tagAndPrio.tag[0] ? tagAndPrio.tag[0] : 'undefined'
              )
            ) {
              if (tagAndPrio.priority === i) {
                return `${field}:${JSON.stringify(tagAndPrio.tag[0])}`
              }
            }
          })
          .filter(rgw => typeof rgw !== 'undefined')
      )
    }
  } else {
    const categoryTags = selectedItems
      .filter((item: string) => item.startsWith('Kategorie:'))
      .map((item: string) => `${field}:${JSON.stringify(item)}`)
    selected.push(categoryTags)
  }

  const nonCategoryTags = selectedItems
    .filter((item: string) => !item.startsWith('Kategorie:'))
    .map((item: string) => `${field}:${JSON.stringify(item)}`)

  selected.push(nonCategoryTags)

  const selectedStrings = selected
    .filter(array => array.length > 0)
    .map(array => `(${array.join(' OR ')})`)

  if (permanentTags?.length > 0) {
    const perm = permanentTags
      .map((tag: any) => `${field}:${JSON.stringify(tag)}`)
      .join(' AND ')
    if (selected !== []) {
      return `${perm} AND (${selectedStrings.join(' AND ')})`
    } else {
      return perm
    }
  }

  return `(${selectedStrings.join(' AND ')})`
}

export const createQuery = (
  filters: any,
  permanentTags: Array<string>,
  categoryTagsAndPriorities:
    | {
        maxPrio: number
        data: Array<{priority: number; tag: string}>
      }
    | undefined
) => {
  const {term, tags, minPrice, maxPrice} = filters
  const parts = [
    term,
    makeFilter('tag', tags, permanentTags, categoryTagsAndPriorities)
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
  url: `https://daniel-petutschnigg.myshopify.com/api/2022-01/graphql.json`,
  fetchOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '0d53ceadc2e9061030b091340c84f876'
    }
  }
})

const makeQueryStringValue = (allItems: any[], selectedItems: any[]) => {
  if (allItems.length === selectedItems.length) {
    return []
  }
  return selectedItems
}

export const useProductSearch = (
  dontReplaceState: boolean | undefined,
  filters: {
    term: string | null
    tags: string[]
    minPrice: number
    maxPrice: number | undefined
  },
  allTags: Array<string>,
  sortKey: string | undefined,
  pause = false,
  count = 5,
  initialData: any,
  initialFilters: {
    term: string | null
    tags: string[]
    minPrice: number
    maxPrice: number | undefined
  },
  reverse: boolean,
  permanentTags: Array<string> = [],
  categoryTagsAndPriorities: {
    maxPrio: number
    data: Array<{priority: number; tag: string}>
  }
) => {
  const [query, setQuery] = React.useState(
    createQuery(filters, permanentTags, categoryTagsAndPriorities)
  )
  const [cursors, setCursors] = React.useState({
    before: null,
    after: null
  })
  const [initialRender, setInitialRender] = React.useState(true)
  const {term, tags, minPrice, maxPrice} = filters

  // Relevance is non-deterministic if there is no query, so we default to "title" instead
  const initialSortKey = filters.term ? 'RELEVANCE' : 'TITLE'

  const [result] = useQuery({
    query: ProductsQuery,
    variables: {
      query,
      sortKey: sortKey || initialSortKey,
      first: !cursors.before ? count : null,
      last: cursors.before ? count : null,
      after: cursors.after,
      before: cursors.before,
      reverse: reverse
    },
    pause: false
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
    !dontReplaceState && window.history.replaceState({}, null, url.toString())
    setQuery(createQuery(filters, permanentTags, categoryTagsAndPriorities))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, cursors, sortKey])

  const resetCursor = () => {
    setCursors({
      before: null,
      after: null
    })
  }

  const fetchNextPage = () => {
    // when we go forward we want all products after the first one of our array
    const prods =
      result?.data?.products?.edges || initialData?.data?.products?.edges

    const nextCursor = prods[prods.length - 1].cursor

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

  let products: Array<any> = React.useMemo(() => {
    /*if (query === createQuery(initialFilters)) {
      return initialData
    }*/
    if (result.data && initialRender) setInitialRender(false)
    return result.data?.products?.edges || []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, result.data, initialData, initialFilters])

  if (result && result.data) {
    hasNextPage = result.data.products.pageInfo.hasNextPage
  }

  const isFetching = result.fetching

  const getCompareAtPrice = (product: any) => {
    const price = product.node.compareAtPrice.maxVariantPrice.amount

    if (price && parseInt(price) > 0) {
      return {
        amount: price
      }
    }

    return null
  }

  let curs: Array<string> = []
  if (products.length > 0) {
    if (products[0].node) {
      curs = products.map((product: any) => product.cursor)
      products = products.map((product: any) => ({
        ...product.node,
        contextualPricing: {
          maxVariantPricing: {
            price: {
              amount: product.node.price.maxVariantPrice.amount
            },
            compareAtPrice: getCompareAtPrice(product)
          }
        },
        featuredImage: {
          alt: product.node.title,
          gatsbyImageData: getShopifyImage({
            image: {
              ...product.node.featuredImage,
              originalSrc: product.node.featuredImage.url
            }
          })
        }
      }))
    }
  }

  return {
    data: result.data,
    isFetching,
    hasNextPage,
    products,
    curs,
    filterCount,
    fetchNextPage,
    resetCursor
  }
}
export const SearchProvider = ({children}: any) => {
  return <UrlqProvider value={urqlClient}>{children}</UrlqProvider>
}
