import {Box, Flex, useColorModeValue} from '@chakra-ui/react'
import {Field} from '@jaenjs/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import {ResponsiveSlider} from '../../../../layout/ProductSliderLayout/Slider'
import {ImageStyle} from './style'

const PartnerCard = (props: {identifier: number}) => {
  return (
    <Flex
      w="280px"
      height="180px"
      css={ImageStyle()}
      className="container"
      border="1px"
      borderRadius="5px"
      borderColor={'agt.lightgray'}
      _hover={{borderColor: 'agt.gray'}}
      justifyContent="center"
      alignItems={'center'}>
      <Field.Image
        name={`partner-image-${props.identifier}`}
        defaultValue={
          <StaticImage
            src="./logoipsum-logo-7.svg"
            alt="superPartner"
            imgClassName="image"
            className="image-container"
            draggable="false"
            onDragCapture={e => e.preventDefault()}
          />
        }
        className="image-container"
        imgClassName="image"
      />
    </Flex>
  )
}

const PartnerSection = () => {
  const items: Array<React.ReactNode> = []

  for (let i = 0; i < 39; i++) {
    items.push(
      <>
        <PartnerCard identifier={i} />
      </>
    )
  }
  return (
    <Box my="20">
      <ResponsiveSlider
        sliderRows={{base: 2}}
        breakpoint="base"
        sliderSpacing={{base: 10}}
        items={items}
        progressProps={{
          colorScheme: 'agt.grayScheme',
          bg: useColorModeValue('gray.200', 'gray.600')
        }}
      />
    </Box>
  )
}

export default PartnerSection
