import {Button} from '@chakra-ui/button'
import {Image, ImageProps} from '@chakra-ui/image'
import {Box, BoxProps, Circle, Flex, Text} from '@chakra-ui/layout'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'

interface WeaponType {
  image: string
  title: string
  description: string
}

export interface WeaponShowcaseProps {
  weapons: WeaponType[]
}

const DescriptionBox = motion<BoxProps>(Box)
const MotionImage = motion<ImageProps>(Image)

const WeaponShowcase = ({weapons}: WeaponShowcaseProps) => {
  const [current, setCurrent] = React.useState(weapons[0])

  const changeCurrent = window.setInterval(() => {
    const indexNext =
      weapons.indexOf(current) + 1 === weapons.length
        ? 0
        : weapons.indexOf(current) + 1
    setCurrent(weapons[indexNext])
  }, 10000)

  return (
    <Box bg="gray.400" p="20">
      <Flex w="60%" mx="auto">
        <AnimatePresence exitBeforeEnter>
          {weapons.map((weapon, index) => {
            return (
              weapon === current && (
                <MotionImage
                  key={index}
                  w="450"
                  h="270"
                  src={weapon.image}
                  alt={weapon.title}
                  initial={{opacity: 0, x: -300}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.2, type: 'spring'}}
                />
              )
            )
          })}
        </AnimatePresence>
        <AnimatePresence>
          {weapons.map((weapon, index) => {
            return (
              current === weapon && (
                <DescriptionBox
                  key={index}
                  ml="10"
                  initial={{opacity: 0, x: 300}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.15, delay: 0.33}}>
                  <Text fontWeight="bold" fontSize="55" casing="uppercase">
                    {weapon.title}
                  </Text>
                  <Text fontSize="35">{weapon.description}</Text>
                  <Button
                    mt="10"
                    size="lg"
                    borderRadius="3px"
                    colorScheme="orange"
                    variant="solid">
                    LEARN MORE
                  </Button>
                </DescriptionBox>
              )
            )
          })}
        </AnimatePresence>
      </Flex>
      <Flex justifyContent="center" alignContent="center" mt="10">
        {weapons.map(weapon => {
          return (
            <Circle
              size="2"
              mr="1"
              bgColor={weapon === current ? 'orange' : 'white'}
              onClick={() => setCurrent(weapon)}
            />
          )
        })}
      </Flex>
    </Box>
  )
}

export default WeaponShowcase
