import dotenv from 'dotenv'
import {fetchReviews} from '../common/requests/reviews'
import {createPages} from '../common/page-generator'

import {GatsbyNode as GatsbyNodeType} from 'gatsby'

const GatsbyNode: GatsbyNodeType = {}

GatsbyNode.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  dotenv.config()

  const {createNode} = actions

  await fetchReviews(createNode, createNodeId, createContentDigest)
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
  `

  createTypes(typeDefs)
}

export default GatsbyNode
