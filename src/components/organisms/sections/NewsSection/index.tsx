import {Button, IconButton} from '@chakra-ui/button'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {Image} from '@chakra-ui/image'
import {Box, BoxProps, Flex, Heading, Spacer, Text} from '@chakra-ui/layout'
import {useBreakpointValue} from '@chakra-ui/media-query'
import {fields} from '@snek-at/jaen-pages'
import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'

import NewsModal from '../../NewsModal'
import {useWindowWidth} from '../../../../common/utils'
import {useColorModeValue} from '@chakra-ui/color-mode'

const MotionBox = motion<BoxProps>(Box)

const NewsSection = () => {
  const [direction, setDirection] = React.useState('')
  const [index, setIndex] = React.useState(0)
  const [disabled, setDisabled] = React.useState(true)

  const isSmall = useBreakpointValue({base: true, xl: false})
  const buttonColor = useColorModeValue('agt.grayScheme', 'gray')

  const vw = useWindowWidth()
  const numOfCards = Math.floor(vw / (isSmall ? 320 : vw * 0.25))
  return (
    <>
      <Box overflow="hidden" w="100%" id="news" mt="20">
        <Box textAlign="center">
          <Heading>
            <fields.TextField
              fieldName="newssection-heading"
              initValue="<p>This is a heading</p>"
              rft={false}
            />
          </Heading>
          <Box mt="3" mb="10" fontSize="20">
            <fields.TextField
              fieldName="newssection-teaser"
              initValue="<p>some teaser text</p>"
              rtf={false}
            />
          </Box>
        </Box>
        <Box h="fit-content" position="relative">
          <IconButton
            position="absolute"
            left={{base: '10px', md: '30px'}}
            top="50%"
            zIndex="2"
            variant="ghost"
            aria-label="left"
            isDisabled={index === 0 ? true : false}
            onClick={() => {
              setDirection('left')
              setIndex(index - numOfCards)
            }}
            icon={<ChevronLeftIcon boxSize="50px" color="agt.red" />}
          />
          <fields.IndexField
            fieldName="newssection-cards"
            onRender={(page: any) => {
              const cleanFieldText = (text: string) => {
                return typeof text !== 'undefined'
                  ? text.substring(3, text.length - 4)
                  : ''
              }
              ;(!isSmall && (page?.children?.length || 0) <= numOfCards) ||
              index >= (page?.children?.length - numOfCards || 0) ||
              (isSmall && page?.children?.length - numOfCards === index)
                ? setDisabled(true)
                : setDisabled(false)

              return (
                <Flex
                  minW="100%"
                  justifyContent={'center'}
                  alignItems={'center'}
                  initial={{left: 0}}
                  py="10"
                  width="max-content">
                  {page?.children
                    .slice(0)
                    .reverse()
                    .map((child: any, i: number) => {
                      const [isOpen, setIsOpen] = React.useState(false)
                      const onClose = () => {
                        setIsOpen(false)
                        history.pushState('AGT-Guntrade News', '', '/')
                      }

                      const queryString = window.location.search.substring(1)
                      React.useEffect(() => {
                        if (child?.page?.slug === queryString) {
                          setIsOpen(true)
                        }
                      }, [])

                      const url = '/?' + child?.page?.slug + '#news'
                      const text = cleanFieldText(
                        child?.page?.fields?.['newspage-text']?.content?.text ||
                          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                      )
                      const imageSrc =
                        child?.page?.fields?.['newspage-image']?.content?.src ||
                        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                      const heading = cleanFieldText(
                        child?.page?.fields?.['newspage-heading']?.content
                          ?.text || '<p>some heading</p>'
                      )
                      const readTime = Math.ceil(text.length / 1200)
                      return (
                        <>
                          <AnimatePresence>
                            {index + numOfCards > i && i - index >= 0 && (
                              <MotionBox
                                _first={{ml: 0}}
                                key={i}
                                display="relative"
                                ml={{base: '5', lg: '3.5vw'}}
                                boxShadow="lg"
                                borderRadius="3px"
                                onClick={() => setIsOpen(true)}
                                maxW={{base: '300px', xl: '20vw'}}
                                minH={{base: '390px', xl: '400px'}}
                                custom={direction}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                variants={{
                                  enter: (direction: string) => {
                                    return {
                                      x: direction === 'right' ? 100 : -100,
                                      opacity: 0
                                    }
                                  },
                                  center: {
                                    opacity: 1,
                                    x: 0
                                  },
                                  exit: (direction: string) => {
                                    return {
                                      x: direction === 'right' ? -100 : 100,
                                      opacity: 0
                                    }
                                  }
                                }}
                                transition={{duration: 0.5}}>
                                <Image
                                  objectFit="cover"
                                  alt="newspage-image"
                                  src={imageSrc}
                                  borderTopRadius="3px"
                                />
                                <Box p="3">
                                  <Heading textAlign="center" mb="3">
                                    {heading}
                                  </Heading>
                                  <Text noOfLines={3} mt="3">
                                    {text}
                                  </Text>
                                  <Flex mt="3">
                                    <Text mt="3" color="gray">
                                      {readTime} min
                                    </Text>
                                    <Spacer />
                                    <Button
                                      variant="solid"
                                      colorScheme={buttonColor}>
                                      Mehr lesen
                                    </Button>
                                  </Flex>
                                </Box>
                              </MotionBox>
                            )}
                          </AnimatePresence>
                          <NewsModal
                            url={url}
                            isOpen={isOpen}
                            heading={heading}
                            text={text}
                            imageSrc={imageSrc}
                            onClose={onClose}
                          />
                        </>
                      )
                    })}
                </Flex>
              )
            }}
          />
          <IconButton
            position="absolute"
            right={{base: '10px', md: '30px'}}
            top="50%"
            zIndex="2"
            aria-label="right"
            variant="ghost"
            icon={<ChevronRightIcon boxSize="50px" color="agt.red" />}
            disabled={disabled}
            onClick={() => {
              setDirection('right')
              setIndex(index + numOfCards)
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default NewsSection
