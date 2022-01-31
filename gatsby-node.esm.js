const {fetchReviews} = require('./src/common/requests/reviews')
const dotenv = require('dotenv')
const {createPages} = require('./src/common/page-generator')

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  dotenv.config()

  const {createNode} = actions

  await fetchReviews(createNode, createNodeId, createContentDigest)
}

exports.createPages = async function ({actions, graphql}) {
  await createPages(actions, graphql)
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
