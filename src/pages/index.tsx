//#region > Imports
import {graphql} from 'gatsby'
import ScrollSpy from '../components/molecules/ScrollSpy'
import NewsSection from '../components/organisms/sections/NewsSection'
import HeroSection from '../components/organisms/sections/HeroSection'
import ReviewSection from '../components/organisms/sections/ReviewSection'
import FeaturedProductsSection from '../components/organisms/sections/FeaturedProductsSection/2'
import AboutSection from '../components/organisms/sections/AboutSection'
import FAQSection from '../components/organisms/sections/FAQSection/2'
import {Image} from '@chakra-ui/image'
import React from 'react'

import {PageProps} from 'gatsby'
import {BaseLayout} from '../layout/BaseLayout'
//#endregion

//#region > Functions
const IndexPage = ({
  data
}: PageProps<{
  oldShopifyProduct: {edges: Array<any>}
  allGoogleReview: {nodes: Array<any>}
  newShopifyProduct: {edges: Array<any>}
  heroCollections: {edges: Array<any>}
}>) => {
  const products = React.useMemo(() => {
    const featuredProducts: Array<any> = []
    const allProducts: Array<any> = Array.from(
      new Set<any>(
        featuredProducts.concat(
          data.newShopifyProduct.edges,
          data.oldShopifyProduct.edges
        )
      )
    )
    //change this to change the amount of displayed RelatedProducts
    const iterationLimit = allProducts.length > 12 ? 12 : allProducts.length

    for (let i = 0; i < iterationLimit; i++) {
      const randomIndex = Math.floor(Math.random() * allProducts.length)

      featuredProducts.push(allProducts[randomIndex])
      allProducts.splice(randomIndex, 1)
    }
    return featuredProducts.map((product: any) => {
      return {
        ...product.node,
        slug: `/products/${product.node.handle}`
      }
    })
  }, [data.newShopifyProduct, data.oldShopifyProduct])

  let heroProducts: {[name: string]: any[]} = {
    New: data.newShopifyProduct.edges.slice(0, 6).map(product => product.node)
  }

  data.heroCollections.edges.forEach(edge => {
    const title: string = edge.node.title.split(':').at(-1)
    const products = edge.node.products.slice(0, 6)

    heroProducts[title] = products
  })

  console.log(heroProducts)
  return (
    <BaseLayout withSearch={true} activePath={location.pathname}>
      <ScrollSpy />
      <HeroSection categoryProducts={heroProducts} />
      <FeaturedProductsSection
        getPath={(handle: string) => `/products/${handle}`}
        products={products}
      />
      <ReviewSection
        heading={<p>I'm a heading.</p>}
        data={data.allGoogleReview.nodes}
      />
      <NewsSection heading={<p>I'm a news.</p>} />
      <AboutSection
        heading={<p>I'm a heading</p>}
        teaser={<p>I'm a teaser</p>}
        text={
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        }
        backgroundimage={
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
            alt="alt"
            className="backgroundimage"
          />
        }
      />
      <FAQSection heading={<p>I'm a heading</p>} />
    </BaseLayout>
  )
}
//#endregion

//#region > Exports
export const query = graphql`
  query {
    allGoogleReview {
      nodes {
        id
        rating
        body
        sourceImage
        source
      }
    }
    meta: allShopifyProduct {
      tags: distinct(field: tags)
    }
    allShopifyCollection {
      edges {
        node {
          title
          handle
          image {
            gatsbyImageData
          }
          products {
            id
            handle
            createdAt
            descriptionHtml
            title
            tags
            status
            totalInventory
            contextualPricing {
              maxVariantPricing {
                price {
                  amount
                }
                compareAtPrice {
                  amount
                }
              }
            }
            images {
              shopifyId
              gatsbyImageData
            }
            featuredImage {
              id
              gatsbyImageData
            }
          }
        }
      }
    }
    newShopifyProduct: allShopifyProduct(
      limit: 100
      sort: {fields: createdAt, order: DESC}
    ) {
      edges {
        node {
          createdAt
          description
          featuredImage {
            gatsbyImageData
          }
          contextualPricing {
            maxVariantPricing {
              price {
                amount
              }
              compareAtPrice {
                amount
              }
            }
          }
          tags
          title
        }
      }
    }
    oldShopifyProduct: allShopifyProduct(
      limit: 100
      sort: {fields: createdAt, order: ASC}
    ) {
      edges {
        node {
          createdAt
          description
          featuredImage {
            gatsbyImageData
          }
          contextualPricing {
            maxVariantPricing {
              price {
                amount
              }
              compareAtPrice {
                amount
              }
            }
          }
          tags
          title
        }
      }
    }
    heroCollections: allShopifyCollection(
      filter: {
        metafields: {
          elemMatch: {key: {eq: "im_hero_anzeigen"}, value: {eq: "true"}}
        }
      }
    ) {
      edges {
        node {
          title
          metafields {
            value
            key
          }
          products {
            createdAt
            description
            featuredImage {
              gatsbyImageData
            }
            contextualPricing {
              maxVariantPricing {
                price {
                  amount
                }
                compareAtPrice {
                  amount
                }
              }
            }
            tags
            title
          }
        }
      }
    }
  }
`

export default IndexPage
//#endregion
