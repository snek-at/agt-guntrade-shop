import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  useColorMode,
  Button
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
        <Flex
          direction="column"
          position="absolute"
          right="0"
          width="100%"
          h="100%">
          <Box
            position="absolute"
            zIndex="1"
            bgGradient="linear(to-b, white 10%, transparent)"
            w="100%"
            h="50px"
          />
          <style.BackgroundImage>{backgroundimage}</style.BackgroundImage>
          <Box
            position="absolute"
            bottom="0"
            zIndex="1"
            bgGradient="linear(to-t, white 10%, transparent)"
            w="100%"
            h="50px"
          />
        </Flex>
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
            <Box>
              <Heading mb={5} fontSize={{base: '3xl', md: '5xl'}}>
                {heading}
              </Heading>
              <Text fontSize={'2xl'}>{teaser}</Text>
            </Box>
            <Box py="3">{text}</Box>
            <Button colorScheme="agt.grayScheme" w="fit-content">
              Mehr über uns
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default AboutSection
