import dotenv from 'dotenv'
import {GatsbyConfig as GatsbyConfigType} from 'gatsby'

dotenv.config()

const GatsbyConfig: GatsbyConfigType = {
  jsxRuntime: 'automatic',
  siteMetadata: {}
}

GatsbyConfig.plugins = [
  {
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      resetCSS: true,
      isUsingColorMode: true
    }
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-meta-redirect`,
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
  {
    resolve: 'gatsby-source-shopify',
    options: {
      password: process.env.SHOPIFY_SHOP_PASSWORD,
      storeUrl: process.env.SHOP,
      shopifyConnections: ['collections']
    }
  },
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
      resolveSiteUrl: () => process.env.URL,
      resolvePages: ({allSitePage: {nodes: allPages}}: any) => {
        return allPages.map((page: any) => {
          return {...page}
        })
      },
      serialize: ({path, modifiedGmt}: {path: any; modifiedGmt: any}) => {
        return {
          url: path,
          lastmod: modifiedGmt
        }
      }
    }
  }
]

export default GatsbyConfig
