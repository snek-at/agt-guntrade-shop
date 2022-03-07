import {Box, Flex, Text, VStack} from '@chakra-ui/react'
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
  // 'hero', 'featuredproducts', 'reviews', 'news', 'about', 'faq'
  const items = [
    {
      name: 'hero',
      label: 'AGT'
    },
    {
      name: 'featuredproducts',
      label: 'Sortiment'
    },
    {
      name: 'reviews',
      label: 'Bewertungen'
    },
    {
      name: 'news',
      label: 'Neuigkeiten'
    },
    {
      name: 'about',
      label: 'Über uns'
    },
    {
      name: 'faq',
      label: 'FAQ'
    }
  ]

  const allItemNames = items.map(item => item.name)

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
        items={allItemNames}
        onUpdate={(data: any) => {
          if (typeof data !== 'undefined') setActiveSection(data.id)
        }}
        currentClassName="active-scroll-spy">
        <Flex
          alignItems="center"
          bg="agt.gray"
          py="1"
          px="2"
          borderTopRightRadius={'5px'}>
          <Spy
            number={allItemNames.indexOf(activeSection)}
            style={{
              color: 'transparent'
            }}
          />

          <Text
            fontWeight={'thin'}
            ml="2"
            fontSize={'md'}
            color="white"
            className="text"
            casing={'capitalize'}>
            {items.find(item => item.name === activeSection)?.label}
          </Text>
        </Flex>
      </Scrollspy>
    </Flex>
  )
}

export default ScrollSpy
