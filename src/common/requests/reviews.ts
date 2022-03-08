// @ts-nocheck

import axios from 'axios'
import dotenv from 'dotenv'

export interface IReview {
  source: string
  body: string
  body_html: string
  id: string
  rating: number
  source_link: string
  source_image: string
  source_id: string
  source_review_count: number
  date: string
  date_utc: Date
  images: string[]
  position: number
}

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

export const fetchReviews = async () => {
  const apiKey = process.env.SCALE_SERP_APIKEY
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

  const {
    pagination: {next_page_token},
    place_reviews_results: reviewsSlice1
  }: {
    pagination: {
      next_page_token: string
    }
    place_reviews_results: IReview[]
  } = await (
    await request(params)
  ).data

  const reviewsSlice2: IReview[] = await (
    await request({
      ...params,
      next_page_token
    })
  ).data.place_reviews_results

  return [
    ...reviewsSlice1,
    ...reviewsSlice2.map(review => ({
      ...review,
      position: review.position + reviewsSlice1.length
    }))
  ]
}
