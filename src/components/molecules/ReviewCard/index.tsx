import {Box, Flex, Text} from '@chakra-ui/layout'
import React from 'react'

export interface ReviewCardProps {
  reviewtext: React.ReactNode
  reviewimage: React.ReactNode
  reviewbio: React.ReactNode
}

const ReviewCard = ({reviewbio, reviewimage, reviewtext}: ReviewCardProps) => {
  const [lines, setLines] = React.useState(10)
  return (
    <Box
      color="white"
      bg="gray.700"
      border="2px"
      borderColor="orange"
      borderRadius="10px"
      p="10"
      minH="380px"
      w={{base: '300px', md: '540px'}}
      onClick={() => (lines === 10 ? setLines(100) : setLines(10))}>
      <Text noOfLines={{base: lines, md: 100}}>{reviewtext}</Text>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Box mx={{base: 'auto', md: '0'}}>{reviewimage}</Box>
        <Box px={{base: '0', md: '5'}} pt="6">
          {reviewbio}
        </Box>
      </Flex>
    </Box>
  )
}

export default ReviewCard
