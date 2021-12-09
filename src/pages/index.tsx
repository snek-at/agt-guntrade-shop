import React from 'react'

import HeroSection from '../components/organisms/sections/HeroSection'
import FeaturedProductsSection from '../components/organisms/sections/FeaturedProductsSection'

export interface IndexPageProps {}

const IndexPage = ({}: IndexPageProps) => {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection
        products={[
          {
            name: 'Weapon',
            description: 'This is a weapon.',
            price: 11.33,
            reducedprice: 12,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.',
            price: 11.33,
            reducedprice: 12,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.',
            price: 11.33,
            reducedprice: 12,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.',
            price: 11.33,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.',
            price: 11.33,
            reducedprice: 12,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
          },
          {
            name: 'Weapon',
            description: 'This is a weapon.',
            price: 11.33,
            reducedprice: 12,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glock_17_MOD_45154998_%28Transparent%29.png/640px-Glock_17_MOD_45154998_%28Transparent%29.png'
          }
        ]}
      />
    </>
  )
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
