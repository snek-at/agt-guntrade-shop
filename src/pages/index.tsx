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

import {PageProps} from 'gatsby'
import {BaseLayout} from '../layout/BaseLayout'
//#endregion

//#region > Functions
const IndexPage = ({
  data
}: PageProps<{
  allShopifyProduct: {edges: Array<any>}
  allGoogleReview: {nodes: Array<any>}
  newShopifyProduct: {edges: Array<any>}
}>) => {
  const products = data.allShopifyProduct.edges.map((product: any) => {
    return {
      ...product.node,
      slug: `/products/${product.node.handle}`
    }
  })

  return (
    <BaseLayout withSearch={true}>
      <ScrollSpy />
      <HeroSection categoryProducts={{New: data.newShopifyProduct.edges}} />
      <FeaturedProductsSection products={products} />
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
    allShopifyProduct(limit: 20) {
      edges {
        node {
          createdAt
          description
          images {
            gatsbyImageData
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          tags
          title
        }
      }
    }
    newShopifyProduct: allShopifyProduct(
      limit: 6
      sort: {fields: createdAt, order: DESC}
    ) {
      edges {
        node {
          createdAt
          description
          images {
            gatsbyImageData
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          tags
          title
        }
      }
    }
  }
`

export default IndexPage
//#endregion
