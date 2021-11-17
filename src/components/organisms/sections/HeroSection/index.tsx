import React from 'react'
import {Container, Box, Flex, Image, ImageProps, Center} from '@chakra-ui/react'

import BulletShowcase from '../../BulletShowcase'
import CategoryShowcase from '../../CategoryShowcase'
import AccessorieShowcase from '../../AccessorieShowcase'
import WeaponShowcase from '../../WeaponShowcase'
import {motion} from 'framer-motion'

import {StaticImage} from 'gatsby-plugin-image'

import {GCImage} from '../../../../common/utils'

import * as style from './style'

export interface HeroSectionProps {}

const HeroSection = () => {
  return (
    <>
      <Box
        width={'full'}
        backgroundImage="linear-gradient(rgba(31, 31, 29, 0.95),rgba(31, 31, 29, 1))"
        position="relative">
        <style.BG>
          <GCImage
            gimg={
              <StaticImage
                imgClassName="bg"
                src="https://i.imgur.com/8zG2Ymd.jpeg"
                alt="bg"
              />
            }
          />
        </style.BG>
        {/* <MotionImage
          src="https://honor.ancorathemes.com/wp-content/uploads/revslider/home-2/slide_2_11.jpg"
          alt="background"
          position="absolute"
          top="0"
          left="0"
          zIndex="0"
          w="full"
          animate={{scale: 1.1}}
          transition={{
            ease: 'linear',
            duration: 10,
            repeat: Infinity
          }}
        /> */}
        <Container maxW="container.xl" py="6">
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
                  'Arex Zero Alpha;Kal.9×19',
                  'Beretta Pistole 92X Performance Production;Kal. 9x19mm',
                  'CSA Sa61 “Skorpion”,7,65mm Browning;Kal. .32 ACP',
                  'CZ 75 Tactical Sports Orange;Kal. 9x19mm',
                  'Heckler&Koch SFP9 L;Kal.9×19',
                  'CZ Shadow 2 Optic Ready;Kal.9×19'
                ],
                images: [
                  'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-48.jpg',
                  'https://waffen-tuerk.at/wp-content/uploads/2021/06/20210628_143310-900x900.jpg',
                  'https://waffen-tuerk.at/wp-content/uploads/2020/03/links-900x900.jpg',
                  'https://waffen-tuerk.at/wp-content/uploads/2019/11/links_209-900x900.jpg',
                  'https://waffen-tuerk.at/wp-content/uploads/2019/11/links-26-900x900.jpg',
                  'https://waffen-tuerk.at/wp-content/uploads/2019/11/LInks-900x900.jpg'
                ]
              },
              Handfeuerwaffen: {
                items: [
                  'Randfeuerzündung',
                  'Maschinenpistole',
                  'Revolver',
                  'Polymer',
                  'Mit Optik',
                  '1911'
                ],
                images: [
                  'https://i.imgur.com/mtBV9G4.jpeg',
                  'https://i.imgur.com/bqoN3DZ.jpeg',
                  'https://i.imgur.com/hi74u6N.jpeg',
                  'https://i.imgur.com/qzTrZPp.jpeg',
                  'https://i.imgur.com/gCdOwK9.jpeg',
                  'https://i.imgur.com/CYopn8t.jpeg'
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
