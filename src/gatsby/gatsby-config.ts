import dotenv from 'dotenv'
import {GatsbyConfig as GatsbyConfigType} from 'gatsby'

import {site} from '../../jaen-data/internal.json'

dotenv.config()

const GatsbyConfig: GatsbyConfigType = {
  jsxRuntime: 'automatic',
  siteMetadata: site.siteMetadata
}

GatsbyConfig.plugins = [
  {
    resolve: '@jaenjs/jaen',
    options: {
      jaenProjectId: 1
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
      excludes: [`/jaen/admin`, `/_`],
      query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
      resolveSiteUrl: () => site.siteMetadata.siteUrl,
      resolvePages: ({allSitePage: {nodes: allPages}}: any) => {
        return allPages.map((page: any) => {
          return {...page}
        })
      },
      serialize: ({path, modifiedGmt}: {path: any; modifiedGmt: any}) => {
        console.log('PATH PATH', path, modifiedGmt)
        return {
          url: path,
          lastmod: modifiedGmt
        }
      }
    }
  }
]

export default GatsbyConfig
