const path = require('path')

const siteMetadata = require('./site-metadata')

module.exports = {
  siteMetadata,
  plugins: [
    '@snek-at/jaen',
    {
      resolve: '@snek-at/jaen-pages',
      options: {
        templates: {}
      }
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: '@snek-at/jaen-pages',
      options: {
        templates: {
          HousePage: path.resolve('src/templates/HousePage/index.tsx'),
          ApartmentPage: path.resolve('src/templates/ApartmentPage/index.tsx'),
          BlogPage: path.resolve('src/templates/BlogPage/index.tsx')
        }
      }
    }
  ]
}
