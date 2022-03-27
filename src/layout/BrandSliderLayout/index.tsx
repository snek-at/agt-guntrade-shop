import {
  AspectRatio,
  Box,
  BoxProps,
  Heading,
  HStack,
  Image,
  Spacer,
  VStack
} from '@chakra-ui/react'

import {Slider} from '../ProductSliderLayout/Slider'

const BrandLogoBox = (props: {}) => {
  return (
    <VStack boxSize={'full'} spacing="2">
      <Image src={'https://via.placeholder.com/150'} />
      <Image src={'https://via.placeholder.com/150'} />
    </VStack>
  )
}

export const BrandSliderLayout = (props: {title: string}) => {
  const dummy = Array(10).fill(<BrandLogoBox />)

  return (
    <VStack spacing={6}>
      <Heading textAlign={'center'} size="xl" borderBottom={'1px solid'}>
        {props.title}
      </Heading>

      <Slider items={dummy} />
    </VStack>
  )
}
