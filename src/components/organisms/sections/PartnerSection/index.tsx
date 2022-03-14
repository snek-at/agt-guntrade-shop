import {Box, Flex, useColorModeValue} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import {ResponsiveSlider} from '../../../../layout/ProductSliderLayout/Slider'
import {ImageStyle} from './style'

const PartnerCard = () => {
  return (
    <Flex
      height="180px"
      css={ImageStyle()}
      className="container"
      border="1px"
      borderRadius="5px"
      borderColor={'agt.lightgray'}
      _hover={{borderColor: 'agt.gray'}}
      justifyContent="center"
      alignItems={'center'}>
      <StaticImage
        src="./logoipsum-logo-7.svg"
        alt="superPartner"
        imgClassName="image"
        className="image-container"
      />
    </Flex>
  )
}

const PartnerSection = () => {
  const items: Array<React.ReactNode> = []

  for (let i = 0; i < 40; i++) {
    items.push(
      <>
        <PartnerCard />
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
