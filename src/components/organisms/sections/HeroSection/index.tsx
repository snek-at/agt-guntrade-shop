import React from 'react'
import {Container, Box, Flex} from '@chakra-ui/react'

import BulletShowcase from '../../BulletShowcase'
import CategoryShowcase from '../../CategoryShowcase'
import AccessorieShowcase from '../../AccessorieShowcase'
import WeaponShowcase from '../../WeaponShowcase'

import {StaticImage} from 'gatsby-plugin-image'

import {GCImage} from '../../../../common/utils'

import * as style from './style'

export interface HeroSectionProps {}

const HeroSection = () => {
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
          <WeaponShowcase
            weapons={[
              {
                title: 'Pistole',
                description: 'This is a pistol',
                image: 'https://i.imgur.com/sw7n0g8.png',
                price: 100
              },
              {
                title: 'Peng',
                description: 'This is a pistol',
                image: 'https://i.imgur.com/OzO2Wsj.png',
                price: 700
              },
              {
                title: 'Bum',
                description: 'This is a pistol',
                image: 'https://i.imgur.com/RWZXVAf.png',
                price: 800
              }
            ]}
          />
          <CategoryShowcase
            tabs={{
              New: {
                items: [
                  {
                    isNew: true,
                    name: 'Arex Zero Alpha;Kal.9×19',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-48.jpg',
                    price: 12,
                    reducedPrice: 122
                  },
                  {
                    isNew: true,
                    name: 'Beretta Pistole 92X Performance Production;Kal. 9x19mm',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2021/06/20210628_143310-900x900.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'CSA Sa61 “Skorpion”,7,65mm Browning;Kal. .32 ACP',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2020/03/links-900x900.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'CZ 75 Tactical Sports Orange;Kal. 9x19mm',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/links_209-900x900.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'Heckler&Koch SFP9 L;Kal.9×19',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-26-900x900.jpg',
                    price: 122
                  },
                  {
                    isNew: true,
                    name: 'CZ Shadow 2 Optic Ready;Kal.9×19',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/LInks-900x900.jpg',
                    price: 122
                  }
                ]
              },
              Handfeuerwaffen: {
                items: [
                  {
                    isNew: true,
                    name: 'Arex Zero Alpha;Kal.9×19',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-48.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'Beretta Pistole 92X Performance Production;Kal. 9x19mm',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2021/06/20210628_143310-900x900.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'CSA Sa61 “Skorpion”,7,65mm Browning;Kal. .32 ACP',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2020/03/links-900x900.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'CZ 75 Tactical Sports Orange;Kal. 9x19mm',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/links_209-900x900.jpg',
                    price: 12
                  },
                  {
                    isNew: true,
                    name: 'Heckler&Koch SFP9 L;Kal.9×19',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-26-900x900.jpg',
                    price: 122
                  },
                  {
                    isNew: true,

                    name: 'CZ Shadow 2 Optic Ready;Kal.9×19',
                    image:
                      'https://waffen-tuerk.at/wp-content/uploads/2019/11/LInks-900x900.jpg',
                    price: 122
                  }
                ]
              }
            }}
          />
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
