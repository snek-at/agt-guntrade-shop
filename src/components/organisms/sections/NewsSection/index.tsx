import {Box, Heading, Text} from '@chakra-ui/layout'
import React from 'react'
import {scroller} from 'react-scroll'
import {useColorModeValue} from '@chakra-ui/color-mode'
import {AspectRatio, VStack, Stack, useDisclosure} from '@chakra-ui/react'

import {Bullet} from '../../../../common/assets'
import {Field, useJaenPageIndex} from '@jaenjs/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import {ResponsiveSlider} from '../../../../layout/ProductSliderLayout/Slider'

import NewsModal from '../../NewsModal'
import {CardStyle} from './style'

export interface NewsSectionProps {
  heading: React.ReactNode
}

const NewsSection = ({heading}: NewsSectionProps) => {
  const [childId, setChildId] = React.useState<string>()
  const [url, setUrl] = React.useState<string>()

  const index = useJaenPageIndex({
    jaenPageId: 'JaenPage /news/'
  })

  const {isOpen, onOpen, onClose} = useDisclosure()

  if (index.children.length === 0) {
    return null
  }

  return (
    <VStack id="news" spacing={6} mb={4} pb={16}>
      <Box textAlign="center">
        <Heading size={'2xl'} maxW="50vw">
          {heading}
        </Heading>
        <Bullet color="agt.red" w="unset" fontSize="xl" mt="5" mb="10" />
      </Box>
      <ResponsiveSlider
        breakpoint="base"
        sliderSpacing={{base: 4, md: 8, lg: 12}}
        itemWidth={{base: 350}}
        progressProps={{mt: 4}}
        children={index.children.map(page => {
          React.useEffect(() => {
            if (
              window &&
              window.location.search === `?${page.jaenPageMetadata.title}` &&
              !isOpen
            ) {
              setChildId(page.id)
              onOpen()
              scroller.scrollTo('news', {offset: -200})
            }
          }, [])
          return index.withJaenPage(
            page.id,
            <>
              <Box
                m={1}
                onClick={() => {
                  onOpen()
                  setChildId(page.id)
                  setUrl(`?${page.jaenPageMetadata.title}`)
                }}
                css={CardStyle()}>
                <AspectRatio ratio={16 / 9}>
                  <Field.Image
                    name="main"
                    defaultValue={
                      <StaticImage
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="default image"
                        onDragStart={e => e.preventDefault()}
                        draggable="false"
                        className="image-container"
                        imgClassName="image"
                      />
                    }
                    className="image-container"
                    imgClassName="image"
                  />
                </AspectRatio>
                <Stack pt={4}>
                  <Text
                    color={'agt.blue'}
                    fontWeight={600}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                    <Field.Text name="highlight" defaultValue="Aktion" />
                  </Text>
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    <Field.Text name="heading" defaultValue="Titel" />
                  </Heading>
                  <Text color={'gray.500'} noOfLines={4}>
                    <Field.Text
                      name="description"
                      defaultValue=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum."
                    />
                  </Text>
                </Stack>
              </Box>
            </>
          )
        })}
        progressProps={{
          colorScheme: 'agt.grayScheme',
          bg: useColorModeValue('gray.200', 'gray.600')
        }}
      />
      {index.withJaenPage(
        childId || '',
        <NewsModal
          url={url || ''}
          highlight={<Field.Text name="highlight" defaultValue="Aktion" />}
          isOpen={isOpen}
          onClose={onClose}
          heading={<Field.Text name="heading" defaultValue="Titel" />}
          text={
            <Field.Text
              name="description"
              defaultValue=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum."
            />
          }
          image={
            <Field.Image
              name="main"
              defaultValue={
                <StaticImage
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="default image"
                />
              }
            />
          }
        />
      )}
    </VStack>
  )
}

export default NewsSection
