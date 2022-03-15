import {Box, Flex, useColorModeValue} from '@chakra-ui/react'
import {Field} from '@jaenjs/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'

import {ResponsiveSlider} from '../../../../layout/ProductSliderLayout/Slider'
import {ImageStyle} from './style'

const PartnerCard = (props: {identifier: number}) => {
  const [width, setWidth] = React.useState(150)
  const [height, setHeight] = React.useState(150)

  const imageRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const offsetWidth = imageRef.current?.offsetWidth || 100
    const offsetHeight = imageRef.current?.offsetHeight || 0
    const diff = Math.abs(offsetWidth - offsetHeight)

    if (diff < 20) {
      setWidth(offsetWidth + (100 - offsetWidth))
      setHeight(offsetHeight + (100 - offsetHeight))
    }
  }, [imageRef])

  return (
    <Flex
      w="280px"
      height="180px"
      className="container"
      border="1px"
      borderRadius="5px"
      borderColor={'agt.lightgray'}
      _hover={{borderColor: 'agt.gray'}}
      justifyContent="center"
      alignItems={'center'}
      css={ImageStyle(width, height)}>
      <Box ref={imageRef} className="ref-container">
        <Field.Image
          name={`partner-image-${props.identifier}`}
          defaultValue={
            <StaticImage
              src="./logoipsum-logo-15.svg"
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
      </Box>
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
