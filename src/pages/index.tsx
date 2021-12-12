//#region > Imports
import {Box} from '@chakra-ui/react'
import {fields} from '@snek-at/jaen-pages'
import {graphql} from 'gatsby'

import NewsSection from '../components/organisms/sections/NewsSection'
import HeroSection from '../components/organisms/sections/HeroSection'
import ReviewSection from '../components/organisms/sections/ReviewSection'
import FeaturedProductsSection from '../components/organisms/sections/FeaturedProductsSection/2'
import AboutSection from '../components/organisms/sections/AboutSection'
//#endregion

//#region > Functions
const IndexPage = ({data}) => {
  return (
    <Box>
      <HeroSection />
      <NewsSection />
      <FeaturedProductsSection
        products={[
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.;Kal.9×19',
            price: 11.33,
            reducedprice: 12,
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
            ]
          }
        ]}
      />{' '}
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
      <AboutSection
        heading={
          <fields.TextField
            fieldName="about-heading"
            initValue="<p>I'm a heading</p>"
            rtf={false}
          />
        }
        teaser={
          <fields.TextField
            fieldName="about-teaser"
            initValue="<p>I'm a teaser</p>"
            rtf={false}
          />
        }
        text={
          <fields.TextField
            fieldName="about-text"
            initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
            rtf={false}
          />
        }
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
