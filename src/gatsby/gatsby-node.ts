import dotenv from 'dotenv'
import {fetchReviews, IReview} from '../common/requests/reviews'
import {createPages} from '../common/page-generator'

import {GatsbyNode as GatsbyNodeType} from 'gatsby'

const GOOGLE_REVIEW_NODE_TYPE = 'GoogleReview'

const GatsbyNode: GatsbyNodeType = {}

GatsbyNode.sourceNodes = async ({
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
    obj.data = await fetchReviews()
  } else if (Date.now() > obj.lastChecked + twentyFourHoursInMilliseconds) {
    reporter.info(
      `Warm cache hit for ${cacheKey}, but stale data. Fetching reviews from ScaleSerp API`
    )

    /* Reload after a day */
    obj.data = await fetchReviews()
  } else {
    reporter.info(
      `Warm cache hit for ${cacheKey}, not fetching reviews from ScaleSerp API`
    )
  }

  obj.lastChecked = Date.now()
  await cache.set(cacheKey, obj)

  const reviews: IReview[] = obj.data

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

GatsbyNode.createPages = async function ({actions, graphql}) {
  await createPages(actions, graphql)
}

GatsbyNode.createSchemaCustomization = ({actions}) => {
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

export default GatsbyNode
