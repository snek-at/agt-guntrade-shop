// gatsby-node.js
const {useGatsbyConfig} = require('gatsby-plugin-ts-config')

// All of the same usage patterns for `useGatsbyConfig` are valid for `useGatsbyNode`
// as well
module.exports = useGatsbyConfig(
  () => require('./src/gatsby/gatsby-config'),
  {}
)
