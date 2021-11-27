import {Box, Flex, FlexProps, Heading, Spacer, Text} from '@chakra-ui/layout'
import React from 'react'
import {fields} from '@snek-at/jaen-pages'
import {Image} from '@chakra-ui/image'
import {Button, IconButton} from '@chakra-ui/button'
import {motion} from 'framer-motion'

import NewsModal from '../../NewsModal'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

export interface NewsSectionProps {
  teaser: React.ReactNode
}

/* TODO: Fix left calculation and setDisabled calculation */

const MotionFlex = motion<FlexProps>(Flex)

const NewsSection = ({teaser}: NewsSectionProps) => {
  const [direction, setDirection] = React.useState('')
  const [index, setIndex] = React.useState(0)
  const [disabled, setDisabled] = React.useState(true)
  return (
    <>
      <Box overflow="hidden" w="100%">
        <Box textAlign="center">
          <Heading>Neuigkeiten und Informationen</Heading>
          <Box mt="3" mb="10" fontSize="20">
            {teaser}
          </Box>
        </Box>
        <IconButton
          position="absolute"
          left="50px"
          top="60%"
          zIndex="2"
          variant="ghost"
          aria-label="left"
          isDisabled={index === 0 ? true : false}
          onClick={() => {
            setDirection('left')
            setIndex(index - 1)
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
            index === page?.chidren?.length || 0
              ? setDisabled(true)
              : setDisabled(false)

            const vw = Math.max(
              document.documentElement.clientWidth || 0,
              window.innerWidth || 0
            )
            const scroll = vw / 3

            return (
              <MotionFlex
                initial={{left: 0}}
                py="10"
                animate={index === 0 ? {left: 0} : direction}
                variants={{
                  left: {
                    transform: `translateX(${
                      scroll / ((page?.children?.length || 0) - index)
                    }px)`
                  },
                  right: {
                    transform: `translateX(-${scroll * index}px)`
                  }
                }}
                width="max-content">
                {page?.children.map((child: any) => {
                  const [isOpen, setIsOpen] = React.useState(false)
                  const queryString = window.location.search.substring(1)
                  React.useEffect(() => {
                    if (child?.page?.slug === queryString) {
                      setIsOpen(true)
                    }
                  }, [])

                  const url = '/?' + child?.page?.slug
                  const text = cleanFieldText(
                    child?.page?.fields?.['newspage-text']?.content?.text ||
                      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                  )
                  const imageSrc =
                    child?.page?.fields?.['newspage-image']?.content?.src ||
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                  const heading = cleanFieldText(
                    child?.page?.fields?.['newspage-heading']?.content?.text ||
                      '<p>some heading</p>'
                  )
                  const readTime = Math.ceil(text.length / 1200)
                  return (
                    <>
                      <Box
                        mr={{lg: '20'}}
                        _first={{lg: {ml: 40}}}
                        _last={{lg: {mr: 0}}}
                        boxShadow="lg"
                        borderRadius="3px"
                        onClick={() => setIsOpen(true)}
                        w={{lg: '25vw'}}>
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
                            <Button variant="solid">Mehr lesen</Button>
                          </Flex>
                        </Box>
                      </Box>
                      <NewsModal
                        url={url}
                        isOpen={isOpen}
                        heading={heading}
                        text={text}
                        imageSrc={imageSrc}
                      />
                    </>
                  )
                })}
              </MotionFlex>
            )
          }}
        />
        <IconButton
          position="absolute"
          right="50px"
          top="60%"
          zIndex="2"
          aria-label="right"
          variant="ghost"
          icon={<ChevronRightIcon boxSize="50px" color="agt.red" />}
          disabled={disabled}
          onClick={() => {
            setDirection('right')
            setIndex(index + 1)
          }}
        />
      </Box>
    </>
  )
}

export default NewsSection
