//#region > Imports
import {Box} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {graphql} from 'gatsby'

import HeroSection from '../components/organisms/sections/HeroSection'
import ReviewSection from '../components/organisms/sections/ReviewSection'
//#endregion

//#region > Functions
const IndexPage = ({data}) => {
  return (
    <Box>
      <HeroSection />
      <ReviewSection
        heading={
          <fields.TextField
            fieldName="review-heading"
            initValue="<p>I'm a heading.</p>"
            rtf={false}
          />
        }
        teaser={
          <fields.TextField
            fieldName="review-teaser"
            initValue="<p>I'm a teaser</p>"
            rtf={false}
          />
        }
        data={data.allGoogleReview.nodes}
      />
    </Box>
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
  }
`

export default IndexPage
//#endregion
