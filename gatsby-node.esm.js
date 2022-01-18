const {fetchReviews} = require('./src/common/requests/reviews')
const dotenv = require('dotenv')

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  dotenv.config()

  const {createNode} = actions

  await fetchReviews(createNode, createNodeId, createContentDigest)
}

exports.createSchemaCustomization = ({actions}) => {
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
