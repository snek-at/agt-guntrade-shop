import {Container, Box, Flex} from '@chakra-ui/react'

import BulletShowcase from '../../BulletShowcase'
import CategoryShowcase from '../../CategoryShowcase'
import AccessorieShowcase from '../../AccessorieShowcase'
import WeaponShowcase from '../../WeaponShowcase'

import {StaticImage} from 'gatsby-plugin-image'

import {GCImage} from '../../../../common/utils'

import * as style from './style'

export interface HeroSectionProps {}

const HeroSection = (props: {
  categoryProducts: any
  showcaseProducts: any[]
}) => {
  return (
    <>
      <Box
        id="hero"
        as="section"
        width={'full'}
        backgroundImage="linear-gradient(rgba(31, 31, 29, 0.95),rgba(31, 31, 29, 1))"
        position="relative"
        overflow="hidden">
        <style.BG>
          <GCImage
            gimg={
              <StaticImage
                className="bg-div"
                imgClassName="bg"
                src="https://i.imgur.com/8zG2Ymd.jpeg"
                alt="bg"
              />
            }
          />
        </style.BG>
        <Container maxW="8xl" py="6">
          <WeaponShowcase weapons={props.showcaseProducts} />
          <CategoryShowcase tabs={props.categoryProducts} />
          <Flex
            mt="8"
            direction={{base: 'column-reverse', lg: 'row'}}
            width="full"
            justifyContent="center"
            alignContent="center">
            <BulletShowcase />
            <AccessorieShowcase />
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default HeroSection
