import {Box, Heading, Text, Flex} from '@chakra-ui/layout'
import {Image} from '@chakra-ui/react'

import * as style from './style'

const NewsPage = () => {
  return (
    <Box width="100%" css={style.responsiveImage} position="relative" mt="20">
      <Heading textAlign="center" mb="10">
        <p>some heading</p>
      </Heading>
      <Flex
        justifyContent="center"
        alignContent="center"
        direction={{base: 'column', md: 'row'}}>
        <Image
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="t"
          className="image"
        />
        <Text w={{base: '300px', md: '750px'}} ml={{base: 0, md: 5}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Text>
      </Flex>
    </Box>
  )
}

export default NewsPage
