import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  useColorMode
} from '@chakra-ui/react'

import * as style from './style'

export interface AboutSectionProps {
  heading: React.ReactNode
  teaser: React.ReactNode
  text: React.ReactNode
  backgroundimage: React.ReactNode
}

const AboutSection = ({
  heading,
  teaser,
  text,
  backgroundimage
}: AboutSectionProps) => {
  return (
    <Box position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{base: 'none', lg: 'flex'}}
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <style.BackgroundImage>{backgroundimage}</style.BackgroundImage>
        <Flex
          bgGradient="linear(to-r, white 10%, transparent)"
          w={'full'}
          h={'full'}
          zIndex={1}
        />
      </Flex>
      <Container maxW={'50%'} zIndex={10} position={'relative'} ml="0">
        <Stack direction={{base: 'column', lg: 'row'}}>
          <Stack
            flex={1}
            justify={{lg: 'center'}}
            py={{base: 4, md: 20, xl: 60}}>
            <Box mb="5">
              <Heading mb={5} fontSize={{base: '3xl', md: '5xl'}}>
                {heading}
              </Heading>
              <Text fontSize={'2xl'}>{teaser}</Text>
            </Box>
            <Box>{text}</Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default AboutSection
