import {Button} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {Box, BoxProps, Circle, Flex, Text} from '@chakra-ui/layout'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'

interface WeaponType {
  image: string
  title: string
  description: string
  price: number
}

export interface WeaponShowcaseProps {
  weapons: WeaponType[]
}

const DescriptionBox = motion<BoxProps>(Box)
const WeaponBox = motion<BoxProps>(Box)

let WeaponShowcase = ({weapons}: WeaponShowcaseProps) => {
  const [current, setCurrent] = React.useState(weapons[0])

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      let indexNext = 0
      if (weapons.length !== weapons.indexOf(current) + 1) {
        indexNext = weapons.indexOf(current) + 1
      }
      setCurrent(weapons[indexNext])
    }, 10000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <Box p="20" color="white">
      <Flex w="60%" mx="auto">
        <AnimatePresence initial={false}>
          {weapons.map((weapon, index) => {
            return (
              weapon === current && (
                <WeaponBox
                  key={index}
                  initial={{opacity: 0, x: -300}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.3, type: 'spring'}}>
                  <Image
                    w="450"
                    h="270"
                    src={weapon.image}
                    alt={weapon.title}
                  />
                  <Text
                    transform="rotate(-20deg)"
                    borderRadius="10px"
                    py="1"
                    px="3"
                    fontSize="40"
                    fontWeight="bold"
                    zIndex="2"
                    position="relative"
                    ml="200px"
                    mt="-150px"
                    w="fit-content"
                    border="4px"
                    borderColor="agt.orange"
                    color="agt.orange">
                    {weapon.price} €
                  </Text>
                </WeaponBox>
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
                  transition={{duration: 0.25, delay: 0.33}}>
                  <Text fontWeight="bold" fontSize="55" casing="uppercase">
                    {weapon.title}
                  </Text>
                  <Text fontSize="35">{weapon.description}</Text>
                  <Button
                    mt="10"
                    size="lg"
                    borderRadius="3px"
                    bg="agt.orange"
                    _hover={{bg: 'white', color: 'black'}}
                    variant="solid">
                    LEARN MORE
                  </Button>
                </DescriptionBox>
              )
            )
          })}
        </AnimatePresence>
      </Flex>
      <Flex justifyContent="center" alignContent="center" mt="20">
        {weapons.map(weapon => {
          return (
            <Circle
              size="2"
              mr="1"
              bgColor={weapon === current ? 'agt.orange' : 'white'}
              onClick={() => {
                setCurrent(weapon)
              }}
            />
          )
        })}
      </Flex>
    </Box>
  )
}

export default WeaponShowcase
