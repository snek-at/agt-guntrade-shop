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
    <Box
      color="white"
      zIndex="1"
      w={{base: '300px', md: '770px', lg: '60%'}}
      alignSelf="center"
      mt="10">
      <Flex>
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
                    minW={{base: '150px', md: '450px'}}
                    minH={{base: '90px', md: '270px'}}
                    maxW={{base: '150px', md: '450px'}}
                    maxH={{base: '90px', md: '270px'}}
                    src={weapon.image}
                    alt={weapon.title}
                  />
                  <Text
                    transform="rotate(-20deg)"
                    borderRadius="10px"
                    py="1"
                    px={{base: '1', md: '3'}}
                    fontSize={{base: '13', md: '40'}}
                    fontWeight="bold"
                    position="relative"
                    ml={{base: '50px', md: '200px'}}
                    mt={{base: '-50px', md: '-150px'}}
                    w="max-content"
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
                  w={{base: '150px', md: '300px'}}
                  key={index}
                  ml={{base: '5', lg: '10'}}
                  initial={{opacity: 0, x: 300}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.25, delay: 0.33}}>
                  <Text
                    fontWeight="bold"
                    fontSize={{base: '19.4', md: '55'}}
                    casing="uppercase">
                    {weapon.title}
                  </Text>
                  <Text fontSize={{base: '11.6', md: '35'}}>
                    {weapon.description}
                  </Text>
                  <Button
                    fontSize={{base: 12, md: 'auto'}}
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
      <Flex
        justifyContent="center"
        alignContent="center"
        mt={{base: 10, md: '20'}}
        mb={{base: '10', lg: '5'}}>
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
