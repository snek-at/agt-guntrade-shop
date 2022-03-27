import {Button} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {Box, BoxProps, Circle, Flex, Text, FlexProps} from '@chakra-ui/layout'
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

const DescriptionBox = motion<FlexProps>(Flex)
const WeaponBox = motion<BoxProps>(Box)

let WeaponShowcase = ({weapons}: WeaponShowcaseProps) => {
  const [current, setCurrent] = React.useState(weapons[0])

  React.useEffect(() => setCurrent(weapons[0]), [])
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
    <Flex
      justifyContent="center"
      alignItems="center"
      minH={{base: 'max-content', md: '460px'}}>
      <Box
        color="white"
        zIndex="1"
        w={{base: '300px', md: '770px', lg: '60%'}}
        alignSelf="center"
        mt="10">
        <Flex direction={{base: 'column', md: 'row'}} alignSelf="center">
          <AnimatePresence initial={false}>
            {weapons.map((weapon, index) => {
              return (
                weapon === current && (
                  <WeaponBox
                    zIndex="3"
                    key={index}
                    initial={{opacity: 0, x: -300}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.3, type: 'spring'}}>
                    <Image
                      minW={{base: '300px', md: '450px'}}
                      minH={{base: '180px', md: '270px'}}
                      maxW={{base: '300px', md: '450px'}}
                      maxH={{base: '180px', md: '270px'}}
                      src={weapon.image}
                      alt={weapon.title}
                    />
                    <Text
                      zIndex="1"
                      transform="rotate(-20deg)"
                      borderRadius="10px"
                      py="1"
                      px={{base: '1', md: '3'}}
                      fontSize={{base: '27', md: '40'}}
                      fontWeight="bold"
                      position="relative"
                      ml={{base: '100px', md: '200px'}}
                      mt={{base: '-100px', md: '-150px'}}
                      w="max-content"
                      border="4px"
                      borderColor="agt.red"
                      color="agt.red"
                      userSelect="none">
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
                    direction={{base: 'row', md: 'column'}}
                    mt={{base: '14', md: '0'}}
                    w="300px"
                    key={index}
                    ml={{base: 'auto', lg: '10'}}
                    mr={{base: 'auto', md: '0'}}
                    initial={{opacity: 0, x: 300}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.25, delay: 0.33}}>
                    <Box mt={{base: '-2', md: '0'}}>
                      <Text
                        fontWeight="bold"
                        fontSize={{base: '23', md: '55'}}
                        casing="uppercase">
                        {weapon.title}
                      </Text>
                      <Text fontSize={{base: '17.5', md: '35'}}>
                        {weapon.description}
                      </Text>
                    </Box>
                    <Button
                      ml={{base: 'auto', md: '0'}}
                      mt={{base: '0', md: '10'}}
                      size="lg"
                      borderRadius="5px"
                      bg="agt.blue"
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
                cursor="pointer"
                size="2"
                mr="1"
                bgColor={weapon === current ? 'agt.red' : 'white'}
                onClick={() => {
                  if (weapon !== current) {
                    setCurrent(weapon)
                  }
                }}
              />
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default WeaponShowcase
