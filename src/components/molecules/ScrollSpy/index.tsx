import {Flex, Text} from '@chakra-ui/react'
import {Spy} from '../../../common/assets'
import * as style from './style'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import {scroller as Scroll} from 'react-scroll'

export interface AboutSectionProps {
  link1: React.ReactNode
  link2: React.ReactNode
  link3: React.ReactNode
}

const ScrollSpy = () => {
  const items = ['hero', 'featuredproducts', 'reviews', 'news', 'about', 'faq']
  const [activeSection, setActiveSection] = React.useState<string>('hero')

  const scrollTo = (element: string | undefined) => {
    if (element) {
      Scroll.scrollTo(element, {smooth: true, duration: 1000, offset: -100})
    }
  }

  return (
    <Flex
      color="white"
      position="fixed"
      bottom="0"
      left="0"
      display={{base: 'none', md: 'flex'}}
      flexDirection="column"
      zIndex="999"
      css={style.Spy}>
      <Scrollspy
        offset={-500}
        items={items}
        onUpdate={(data: any) => {
          if (typeof data !== 'undefined') setActiveSection(data.id)
        }}
        currentClassName="active-scroll-spy">
        <Flex
          alignItems="center"
          bg="agt.gray"
          py="1"
          pl="4"
          pr="2"
          borderTopRightRadius={'5px'}>
          <Spy
            number={items.indexOf(activeSection)}
            style={{
              color: 'transparent'
            }}
          />
          <Text
            fontWeight={'thin'}
            ml="2"
            fontSize={'1.25rem'}
            color="white"
            className="text"
            casing={'capitalize'}>
            {activeSection}
          </Text>
          <ChevronDownIcon
            borderRadius={'5px'}
            ml="2"
            color="white"
            w={8}
            h={8}
            _hover={{bg: 'whiteAlpha.400'}}
            onClick={() => scrollTo(items[items.indexOf(activeSection) + 1])}
          />
          <ChevronUpIcon
            borderRadius="5px"
            color="white"
            w={8}
            h={8}
            _hover={{bg: 'whiteAlpha.400'}}
            onClick={() => scrollTo(items[items.indexOf(activeSection) - 1])}
          />
        </Flex>
      </Scrollspy>
    </Flex>
  )
}

export default ScrollSpy
