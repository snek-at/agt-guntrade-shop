import React from 'react'
import {Container, Box, Flex, Image, ImageProps, Center} from '@chakra-ui/react'

import BulletShowcase from '../../BulletShowcase'
import CategoryShowcase from '../../CategoryShowcase'
import AccessorieShowcase from '../../AccessorieShowcase'
import WeaponShowcase from '../../WeaponShowcase'
import {motion} from 'framer-motion'

export interface HeroSectionProps {}

const HeroSection = () => {
  const MotionImage = motion<ImageProps>(Image)

  return (
    <>
      <Flex
        textAlign={'center'}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        backgroundImage="linear-gradient(rgba(31, 31, 29, 0.95),rgba(31, 31, 29, 1))"
        position="relative"
        overflow="hidden">
        <MotionImage
          src="https://images4.alphacoders.com/968/thumb-1920-96814.jpg"
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
        />
        <WeaponShowcase
          weapons={[
            {
              title: 'Peng',
              description: 'This is a weapon',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
              price: 100
            },
            {
              title: 'Bang',
              description: 'This is a weapon',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
              price: 700
            },
            {
              title: 'Bum',
              description: 'This is a weapon',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
              price: 800
            }
          ]}
        />
        <CategoryShowcase
          tabs={{
            New: {
              items: ['AR15', 'AR15', 'AR15', 'AR15', 'AR15', 'AR15'],
              images: [
                'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
                'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
                'https://www.lwrci.com/assets/images/5563.jpg',
                'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
                'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
              ]
            },
            Handfeuerwaffen: {
              items: [
                'Pistolen',
                'Pistolen',

                'Pistolen',
                'Pistolen',
                'Pistolen',
                'Pistolen'
              ],
              images: [
                'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
                'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
                'https://www.lwrci.com/assets/images/5563.jpg',
                'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
                'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
              ]
            },
            Flinten: {
              items: [
                'Flinten',
                'Flinten',
                'Flinten',
                'Flinten',
                'Flinten',
                'Flinten'
              ],
              images: [
                'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
                'https://www.fieldandstream.com/uploads/2019/01/18/7TUMLR2JZRP7F52FH3ENRNVQ6A.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/8/8f/Webley_IMG_6789.jpg',
                'https://www.lwrci.com/assets/images/5563.jpg',
                'https://media.istockphoto.com/photos/hunting-rifle-with-cartridge-picture-id186779464',
                'https://www.taiwangun.com/img/product_media/85001-86000/karabiny-szturmowe-elektryczne-ar15-lite-cqb-at-ny02-cq-arcturus-85431(1).JPG'
              ]
            }
          }}
        />
        <Flex
          mt="8"
          direction={{base: 'column-reverse', lg: 'row'}}
          width="full"
          p={{base: 0, md: 10}}
          justifyContent="center"
          alignContent="center"
          position={'relative'}>
          <BulletShowcase />
          <Box mt={{base: '5', lg: '0'}} />
          <AccessorieShowcase />
        </Flex>
      </Flex>
    </>
  )
}

export default HeroSection
