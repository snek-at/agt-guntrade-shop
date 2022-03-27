import dotenv from 'dotenv'
import {fetchReviews, IReview} from './src/common/requests/reviews'
import {
  createAllProductsShopPage,
  createCollectionShopAndProductPages
} from './src/common/page-generator'

import type {GatsbyNode} from 'gatsby'

const GOOGLE_REVIEW_NODE_TYPE = 'GoogleReview'

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  cache,
  reporter,
  createNodeId,
  createContentDigest
}) => {
  dotenv.config()

  const {createNode} = actions

  const cacheKey = 'scaleSerpReviews'
  const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000 // 86400000
  let obj = await cache.get(cacheKey)
  if (!obj) {
    reporter.info(`Cold cache hit for ${cacheKey}`)
    reporter.info(`Fetching reviews from ScaleSerp API`)
    obj = {created: Date.now()}
    try {
      obj.data = await fetchReviews()
    } catch (e) {
      reporter.info(`Failed to fetch reviews from ScaleSerp API`)
    }
  } else if (Date.now() > obj.lastChecked + twentyFourHoursInMilliseconds) {
    reporter.info(
      `Warm cache hit for ${cacheKey}, but stale data. Fetching reviews from ScaleSerp API`
    )

    /* Reload after a day */
    try {
      obj.data = await fetchReviews()
    } catch (e) {
      reporter.info(`Failed to fetch reviews from ScaleSerp API`)
    }
  } else {
    reporter.info(
      `Warm cache hit for ${cacheKey}, not fetching reviews from ScaleSerp API`
    )
  }

  obj.lastChecked = Date.now()
  await cache.set(cacheKey, obj)

  const reviews: IReview[] = obj.data || []

  reviews.forEach(review => {
    if (review.rating >= 3) {
      createNode({
        rating: review.rating,
        position: review.position,
        body: review.body,
        date: review.date,
        sourceImage: review.source_image,
        sourceLink: review.source_link,
        source: review.source,
        id: createNodeId(`${GOOGLE_REVIEW_NODE_TYPE}-${review.position}`),
        test: true,
        parent: null,
        children: [],
        internal: {
          type: GOOGLE_REVIEW_NODE_TYPE,
          content: JSON.stringify(review),
          contentDigest: createContentDigest(review)
        }
      })
    }
  })
}

export const createPages: GatsbyNode['createPages'] = async function ({
  actions,
  graphql
}) {
  const {data} = await graphql(`
    query {
      meta: allShopifyProduct {
        tags: distinct(field: tags)
      }
      allShopifyCollection {
        edges {
          node {
            title
            handle
            image {
              gatsbyImageData
            }
            products {
              id
              handle
              createdAt
              descriptionHtml
              title
              tags
              status
              totalInventory
              contextualPricing {
                maxVariantPricing {
                  price {
                    amount
                  }
                  compareAtPrice {
                    amount
                  }
                }
              }
              images {
                shopifyId
                gatsbyImageData
              }
              featuredImage {
                id
                gatsbyImageData
              }
            }
          }
        }
      }
      allShopifyProduct(sort: {fields: title, order: ASC}) {
        edges {
          node {
            id
            handle
            collections {
              handle
            }
            descriptionHtml
            title
            tags
            status
            totalInventory
            createdAt
            contextualPricing {
              maxVariantPricing {
                price {
                  amount
                }
                compareAtPrice {
                  amount
                }
              }
            }
            images {
              shopifyId
              gatsbyImageData
            }
            featuredImage {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  createAllProductsShopPage(data, actions)
  createCollectionShopAndProductPages(data, actions)
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({actions}) => {
    const {createTypes} = actions
    const typeDefs = `
    type GoogleReview implements Node @dontInfer {
      rating: Int
      position: Int
      body: String
      date: String
      sourceLink: String
      sourceImage: String
      source: String
    }

    type ShopifyPrice {
      amount: String
    }

    type ShopifyProductContextualPricingMaxVariantPricing {
      compareAtPrice: ShopifyPrice
      price: ShopifyPrice
    }
  `

    createTypes(typeDefs)
  }
