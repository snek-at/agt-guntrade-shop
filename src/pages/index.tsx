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
import {connectPage, Field} from '@jaenjs/jaen'
import PartnerSection from '../components/organisms/sections/PartnerSection'
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
    const allProducts = data.newShopifyProduct.edges.concat(
      data.oldShopifyProduct.edges
    )
    //change this to change the amount of displayed RelatedProducts
    const iterationLimit = allProducts.length > 12 ? 12 : allProducts.length

    for (let i = 0; i < iterationLimit; i++) {
      const randomIndex = Math.floor(Math.random() * allProducts.length)
      if (
        featuredProducts.filter(
          (product: any) =>
            product?.node?.handle === allProducts[randomIndex]?.node?.handle
        ).length === 0 &&
        typeof allProducts[randomIndex] !== 'undefined'
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
    const title: string =
      edge.node.title.split(':')[edge.node.title.split(':').length - 1]
    const products = edge.node.products.slice(0, 6)

    heroProducts[title] = {items: products, title: edge.node.title}
  })

  const showCaseProducts = data.weaponShowcaseProducts.edges.map(
    product => product.node
  )
  return (
    <BaseLayout withSearch={true} activePath={path}>
      <ScrollSpy />
      <HeroSection
        categoryProducts={heroProducts}
        showcaseProducts={showCaseProducts}
      />
      <FeaturedProductsSection
        getPath={(handle: string) => `/produkte/${handle}`}
        products={products}
      />
      <ReviewSection
        heading={
          <Field.Text name="reviews-heading" defaultValue="Bewertungen" />
        }
        data={data.allGoogleReview.nodes}
      />
      <PartnerSection />
      <NewsSection
        heading={
          <Field.Text name="news-heading" defaultValue="Neuigkeiten" />
        }
      />
      <AboutSection
        heading={
          <Field.Text name="about-heading" defaultValue="Wer wir sind" />
        }
        text={
          <Field.Text
            name="about-text"
            rtf
            defaultValue="Die Firma AGT Gun Trade KG mit eigener Büchsenmacher Werkstätte, hat
         sich nicht nur auf den Handel mit Jagdwaffen und Sportwaffen deren
         Munition Wiederladerartikel Optik Zubehör Waffenführerscheine und
         Kurse Kommissionsverkauf Ankauf von Jagd und Sportwaffen jeglicher
         Art sowie komplette Sammlung Auflösungen aus Nachlass, Erbschaften
         in ganz Österreich. (Behördenwege-Formalitäten werden gerne
         unsererseits erledigt) spezialisiert. SONDERN AUCH AUF
         Die Entwicklung und Erzeugung von Waffen durch die Haus eigene Büchsenmacher Werkstätte
         von Ferlacher-Jagdwaffen
         wie auch auf Reparatur-Instandsetzung von Waffen jeglicher Art,
         Montagearbeiten,
         Schäften und Ausfertigen, Tauch und Streichbrünierungen."
          />
        }
        backgroundimage={
          <Image
            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
            alt="alt"
            className="backgroundimage"
          />
        }
      />
      <FAQSection
        heading={
          <Field.Text
            name="faq-heading"
            defaultValue="Häufig gestellte Fragen"
          />
        }
      />
    </BaseLayout>
  )
}
//#endregion

//#region > Exports
export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
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

export default connectPage(IndexPage, {
  displayName: 'IndexPage'
})
//#endregion
