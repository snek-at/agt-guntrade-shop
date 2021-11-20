import {Box, Heading, Text} from '@chakra-ui/layout'
import {JaenBlock, fields} from '@snek-at/jaen-pages'
import React from 'react'

import * as styles from './style'

const NewsBlock: JaenBlock = () => {
  const [lines, setLines] = React.useState(3)

  return (
    <Box
      css={styles.NewsStyle}
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
          fieldName="newsblock-image"
          initValue={{
            src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            alt: 'newsblock-image'
          }}
          className="newsblock-image"
        />
      </Box>
      <Box onClick={() => (lines === 3 ? setLines(100) : setLines(3))}>
        <Heading mb="5" fontSize="25">
          <fields.TextField
            fieldName="newsblock-heading"
            initValue="Neuigkeiten und Informationen"
            rtf={false}
          />
        </Heading>
        <Text noOfLines={{base: lines, md: 100}}>
          <fields.TextField
            fieldName="newsblock-text"
            initValue="amet consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas integer eget
            aliquet nibh praesent tristique magna sit amet purus gravida quis blandit
            turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit
            amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus
            mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet
            tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra
            magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis
            massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat
            imperdiet sed"
          />
        </Text>
      </Box>
    </Box>
  )
}

NewsBlock.BlockDisplayName = 'NewsBlock'
NewsBlock.BlockName = 'NewsBlock'
