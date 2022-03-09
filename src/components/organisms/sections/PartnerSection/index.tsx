import {Box, Flex, useColorModeValue} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import {ResponsiveSlider} from '../../../../layout/ProductSliderLayout/Slider'
import {ImageStyle} from './style'

const PartnerCard = (props: {mt: string}) => {
  return (
    <Flex
      height="180px"
      mt={props.mt}
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

  for (let i = 0; i < 20; i++) {
    items.push(
      <Box>
        <PartnerCard mt={'0px'} />
        <PartnerCard mt={'10px'} />
      </Box>
    )
  }

  return (
    <Box my="20">
      <ResponsiveSlider
        breakpoint="base"
        spacing={{base: 10}}
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