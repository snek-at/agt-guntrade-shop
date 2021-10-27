import {Box, Heading, Text} from '@chakra-ui/layout'
import React from 'react'

import NewsStyle from './style'

export interface NewsCardProps {
  heading: React.ReactNode
  image: React.ReactNode
  text: React.ReactNode
}

const NewsCard = ({heading, text, image}: NewsCardProps) => {
  const [lines, setLines] = React.useState(10)

  return (
    <NewsStyle>
      <Box
        bg="gray.700"
        color="white"
        border="2px"
        borderColor="orange"
        borderRadius="10px"
        p="10"
        w={{base: '300px', md: '540px'}}
        h={{base: 'auto', md: 'auto'}}
        textAlign="center">
        <Box mx="-10" mt="-10" mb="10">
          {image}
        </Box>
        <Box onClick={() => (lines === 10 ? setLines(100) : setLines(10))}>
          <Heading mb="5">{heading}</Heading>
          <Text noOfLines={{base: lines, md: 100}} fontSize="18">
            {text}
          </Text>
        </Box>
      </Box>
    </NewsStyle>
  )
}

export default NewsCard
