import axios from 'axios'
import dotenv from 'dotenv'

const NODE_TYPE = 'GoogleReview'

dotenv.config()

const request = async params => {
  const response = await axios
    .get('https://api.scaleserp.com/search', {
      params
    })
    .catch(error => {
      throw new Error(`Error fetching results from ScaleSerp API: ${error}`)
    })

  if (!response || !response.data)
    throw new Error(`Error fetching results from ScaleSerp API:`)
  return response
}

let requestCount = 0

const createReviewNodes = (
  createNode,
  createNodeId,
  createContentDigest,
  response
) => {
  const reviews = response.data.place_reviews_results || []
  requestCount = requestCount + 1
  reviews.forEach(review => {
    const rating = review.rating
    const position = review.position + 10 * requestCount
    if (rating >= 3) {
      createNode({
        ...review,
        positon: position,
        rating: rating,
        sourceImage: review.source_image,
        sourceLink: review.source_link,
        id: createNodeId(`${NODE_TYPE}-${position}`),
        test: true,
        parent: null,
        children: [],
        internal: {
          type: NODE_TYPE,
          content: JSON.stringify(review),
          contentDigest: createContentDigest(review)
        }
      })
    }
  })
}

export const fetchReviews = async (
  createNode,
  createNodeId,
  createContentDigest
) => {
  const apiKey = process.env.APIKEY
  const placeId = process.env.PLACE_ID

  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error(
      'You must supply a valid API Key from Scale Serp. Visit https://scaleserp.com/ for more information.'
    )
  }

  if (!placeId || typeof placeId !== 'string') {
    throw new Error(
      'You must supply a valid place id from Google. You can find your place id at https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder.'
    )
  }

  let params = {
    api_key: apiKey,
    search_type: 'place_reviews',
    data_id: placeId,
    hl: 'de'
  }

  const response = await request(params)
  createReviewNodes(createNode, createNodeId, createContentDigest, response)

  params = {
    ...params,
    next_page_token: response.data.pagination.next_page_token
  }

  const secondResponse = await request(params)
  createReviewNodes(
    createNode,
    createNodeId,
    createContentDigest,
    secondResponse
  )
}
