import {Button} from '@chakra-ui/button'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {Image} from '@chakra-ui/image'
import {
  Box,
  BoxProps,
  Circle,
  Flex,
  Heading,
  Spacer,
  Text,
  SimpleGrid,
  Container,
  HStack
} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'

import {NewsStyle} from './style'
import NewsModal from '../../NewsModal'
import {useWindowWidth} from '../../../../common/utils'
import {useColorModeValue} from '@chakra-ui/color-mode'
import {Avatar, Center, Divider, Skeleton, Stack} from '@chakra-ui/react'

import {Bullet} from '../../../../common/assets'
import {Field} from '@jaenjs/jaen'
import {StaticImage} from 'gatsby-plugin-image'

export interface NewsSectionProps {
  heading: React.ReactNode
}

const MotionBox = motion<BoxProps>(Box)

const NewsSection = ({heading}: NewsSectionProps) => {
  const [direction, setDirection] = React.useState('')
  const [isInvisible, setIsInvisible] = React.useState(true)
  const [index, setIndex] = React.useState(0)

  const simpleGridValue = useBreakpointValue({base: 1, md: 2, xl: 3}) || 1
  const isSmall = useBreakpointValue({base: true, xl: false})
  const buttonColor = useColorModeValue('agt.grayScheme', 'gray')

  const vw = useWindowWidth()
  const numOfCards = Math.floor(vw / (vw / simpleGridValue))

  const drag = {
    drag: 'x',
    dragConstraints: {left: 0, right: 0},
    onDragEnd: (event, info) => {
      if (info.offset.x > 0) {
        if (index !== 0) {
          setDirection('left')
          setIndex(index - numOfCards)
        }
      } else {
        if (!isInvisible) {
          setDirection('right')
          setIndex(index + numOfCards)
        }
      }
    }
  }

  const newsIndex = (
    <HStack spacing="6">
      <Field.Index
        jaenPageId="JaenPage /news/"
        filter={p => true}
        renderPage={page => {
          return (
            <Center py={6}>
              <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                  maxH={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                  bg="red">
                  <Field.Image
                    name="main"
                    defaultValue={
                      <StaticImage
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="default image"
                      />
                    }
                    width="100%"
                    height={400}
                    objectFit="cover"
                  />
                </Box>
                <Stack>
                  <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    Blog
                  </Text>
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    Boost your conversion rate
                  </Heading>
                  <Text color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                  <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                  />
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>Achim Rolle</Text>
                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          )
        }}
      />
    </HStack>
  )

  console.log('NEWSINDEX', newsIndex)

  const isMobile = useBreakpointValue({base: true, md: false})

  return (
    <>
      <Box as="section" id="news" overflow="hidden" w="full" mt="20">
        <Box textAlign="center">
          <Heading>{heading}</Heading>
          <Bullet color="agt.red" w="unset" fontSize="xl" mt="5" mb="10" />
        </Box>
        <Box
          h="fit-content"
          position="relative"
          css={NewsStyle(!(index === 0), !isInvisible)}>
          <Circle
            cursor="pointer"
            className="button1"
            _hover={{bg: 'blackAlpha.400'}}
            size="50px"
            centerContent
            bg="blackAlpha.300"
            display={isMobile && index !== 0 ? 'block' : 'none'}
            position="absolute"
            left={{base: '10px', md: '30px'}}
            top="50%"
            zIndex="2"
            onClick={() => {
              setDirection('left')
              setIndex(index - numOfCards)
            }}>
            <ChevronLeftIcon
              className="arrow"
              color="white"
              boxSize="50px"
              position="relative"
              zIndex="3"
            />
          </Circle>
          {newsIndex}
          <Circle
            cursor="pointer"
            className="button2"
            _hover={{bg: 'blackAlpha.400'}}
            bg="blackAlpha.300"
            centerContent
            position="absolute"
            display={isMobile && !isInvisible ? 'block' : 'none'}
            right={{base: '10px', md: '30px'}}
            top="50%"
            zIndex="2"
            onClick={() => {
              setDirection('right')
              setIndex(index + numOfCards)
            }}>
            {' '}
            <ChevronRightIcon
              className="arrow"
              color="white"
              boxSize="50px"
              position="relative"
              zIndex="3"
            />
          </Circle>
        </Box>
      </Box>
    </>
  )
}

export default NewsSection
