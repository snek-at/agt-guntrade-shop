import {Box, Heading, Text} from '@chakra-ui/layout'
import {JaenBlock, fields} from '@snek-at/jaen-pages'
import React from 'react'

import NewsStyle from './style'

const NewsCard: JaenBlock = () => {
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
          <fields.ImageField
            fieldName="newssection-card-image"
            initValue={{
              src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
              alt: 'newssection-card-image'
            }}
            className="newssectionCardImage"
          />
        </Box>
        <Box onClick={() => (lines === 10 ? setLines(100) : setLines(10))}>
          <Heading mb="5">
            <fields.TextField
              fieldName="newssection-card-heading"
              initValue="<p>This is the heading</p>"
              rtf={false}
            />
          </Heading>
          <Text noOfLines={{base: lines, md: 100}}>
            <fields.TextField
              fieldName="newssection-card-text"
              initValue="<p>amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed</p>"
            />
          </Text>
        </Box>
      </Box>
    </NewsStyle>
  )
}

NewsCard.BlockName = 'NewsCard'
NewsCard.BlockDisplayName = 'NewsCard'

export default NewsCard
