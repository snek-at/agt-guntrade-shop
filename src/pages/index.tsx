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
import {Element} from 'react-scroll'

import {PageProps} from 'gatsby'
import {BaseLayout} from '../layout/BaseLayout'
//#endregion

//#region > Functions
const IndexPage = ({
  data,
  path
}: PageProps<{
  oldShopifyProduct: {edges: Array<any>}
  allGoogleReview: {nodes: Array<any>}
  newShopifyProduct: {edges: Array<any>}
  heroCollections: {edges: Array<any>}
  weaponShowcaseProducts: {edges: Array<any>}
}>) => {
  const products = React.useMemo(() => {
    const featuredProducts: Array<any> = []

    const allProducts: Array<any> = new Array<any>(
      ...data.newShopifyProduct.edges,
      ...data.oldShopifyProduct.edges
    )

    //change this to change the amount of displayed RelatedProducts
    const iterationLimit = allProducts.length > 12 ? 12 : allProducts.length

    for (let i = 0; i < iterationLimit; i++) {
      const randomIndex = Math.floor(Math.random() * allProducts.length)

      if (
        featuredProducts.filter(
          (product: any) =>
            product.node.handle === allProducts[randomIndex].node.handle
        ).length === 0
      ) {
        featuredProducts.push(allProducts[randomIndex])
      }
      if (
        featuredProducts.length < iterationLimit &&
        allProducts.length > 0 &&
        i + 1 === iterationLimit
      ) {
        i -= 1
      }
      allProducts.splice(randomIndex, 1)
    }
    return featuredProducts.map((product: any) => {
      return {
        ...product.node
      }
    })
  }, [data.newShopifyProduct, data.oldShopifyProduct])

  let heroProducts: {
    [name: string]: {
      title: string
      items: any[]
    }
  } = {
    New: {
      items: data.newShopifyProduct.edges
        .slice(0, 6)
        .map(product => product.node),
      title: 'products'
    }
  }

  data.heroCollections.edges.forEach(edge => {
    const title: string = edge.node.title.split(':').at(-1)
    const products = edge.node.products.slice(0, 6)

    heroProducts[title] = {items: products, title: edge.node.title}
  })

  const showCaseProducts = data.weaponShowcaseProducts.edges.map(
    product => product.node
  )
  return (
    <BaseLayout withSearch={true} activePath={path}>
      <ScrollSpy />
      <Element name="hero">
        <HeroSection
          categoryProducts={heroProducts}
          showcaseProducts={showCaseProducts}
        />
      </Element>
      <Element name="featuredproducts">
        <FeaturedProductsSection
          getPath={(handle: string) => `/products/${handle}`}
          products={products}
        />
      </Element>
      <Element name="reviews">
        <ReviewSection
          heading={<p>I'm a heading.</p>}
          data={data.allGoogleReview.nodes}
        />
      </Element>
      <Element name="news">
        <NewsSection heading={<p>I'm a news.</p>} />
      </Element>
      <Element name="about">
        <AboutSection
          heading={<p>I'm a heading</p>}
          teaser={<p>I'm a teaser</p>}
          text={
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
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
      </Element>
      <Element name="faq">
        <FAQSection heading={<p>I'm a heading</p>} />
      </Element>
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
          handle
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
          handle
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
            handle
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
    weaponShowcaseProducts: allShopifyProduct(
      filter: {metafields: {elemMatch: {key: {regex: "g/^weaponshowcase/"}}}}
    ) {
      edges {
        node {
          handle
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
          title
          metafields {
            key
            value
          }
        }
      }
    }
  }
`

export default IndexPage
//#endregion
