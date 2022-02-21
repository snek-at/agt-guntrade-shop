import {Flex, IconButton, ButtonGroup} from '@chakra-ui/react'
import {FiGithub} from '@react-icons/all-files/fi/FiGithub'
import {Spy} from '../../../common/assets'
import * as style from './style'
import Scrollspy from 'react-scrollspy'

export interface AboutSectionProps {
  link1: React.ReactNode
  link2: React.ReactNode
  link3: React.ReactNode
}

const ScrollSpy = () => {
  return (
    <Flex
      as="aside"
      color="white"
      position="fixed"
      bottom="50%"
      left="40px"
      display={{base: 'none', md: 'flex'}}
      flexDirection="column"
      zIndex="999"
      css={style.Spy}>
      <Scrollspy
        offset={-500}
        items={['hero', 'featuredproducts', 'reviews', 'news', 'about', 'faq']}
        currentClassName="active-scroll-spy">
        <Spy
          data-to-scrollspy-id="hero"
          onClick={() => 'hero'}
          color="transparent"
        />
        <Spy
          data-to-scrollspy-id="featuredproducts"
          onClick={() => 'featuredproducts'}
          color="transparent"
          style={{marginTop: 10}}
        />
        <Spy
          data-to-scrollspy-id="reviews"
          onClick={() => 'reviews'}
          color="transparent"
          style={{marginTop: 10}}
        />
        <Spy
          data-to-scrollspy-id="news"
          onClick={() => 'news'}
          color="transparent"
          style={{marginTop: 10}}
        />
        <Spy
          data-to-scrollspy-id="about"
          onClick={() => 'about'}
          color="transparent"
          style={{marginTop: 10}}
        />
        <Spy
          data-to-scrollspy-id="faq"
          onClick={() => 'faq'}
          color="transparent"
          style={{marginTop: 10}}
        />
      </Scrollspy>
    </Flex>
  )
}

export default ScrollSpy
