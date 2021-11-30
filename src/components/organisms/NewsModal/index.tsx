import {Button, IconButton} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {Input} from '@chakra-ui/input'
import {Text, Box, Heading, Flex} from '@chakra-ui/layout'
import {Modal, ModalContent, ModalOverlay} from '@chakra-ui/modal'
import {useToast} from '@chakra-ui/toast'
import {ScaleFade} from '@chakra-ui/transition'
import {IoIosCopy} from '@react-icons/all-files/io/IoIosCopy'
import {IoMdShareAlt} from '@react-icons/all-files/io/IoMdShareAlt'
import React from 'react'

import * as style from './style'

export interface NewsModalProps {
  isOpen: boolean
  heading: string
  text: string
  imageSrc: string
  url: string
  onClose: Function
}

export const NewsModal = ({
  isOpen,
  heading,
  text,
  imageSrc,
  url,
  onClose
}: NewsModalProps) => {
  const [share, setShare] = React.useState(false)
  const toast = useToast()
  if (isOpen) {
    history.pushState('AGT-Guntrade News', '', url)
  }
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <ModalOverlay />
      <ModalContent
        borderRadius="3px"
        minH="60vh"
        maxH="fit-content"
        minW="40vw"
        maxW={{base: '90vw', md: '70vw', xl: '40vw'}}>
        <Image alt="newsmodal-image" borderTopRadius="3px" src={imageSrc} />
        <Box p="5">
          <Heading textAlign="center" mb="3">
            {heading}
          </Heading>
          <Text
            css={style.ScrollBar}
            overflowY="auto"
            maxH={{base: '300px', md: '32', xl: '20vh'}}
            pr="3">
            {text}
          </Text>
          <Flex
            mt="3"
            direction={{base: 'column-reverse', md: 'row'}}
            justifyContent="flex-end">
            <ScaleFade initialScale={0.9} in={share} unmountOnExit>
              <Flex
                alignSelf={{base: 'center', sm: 'flex-end'}}
                mr={{base: 'auto', sm: '0'}}
                mt={{base: '5', md: '0'}}
                direction={{base: 'column-reverse', sm: 'row'}}
                justifyContent="center"
                alignItems="center">
                <Input
                  isReadOnly
                  value={window.location.href}
                  w="fit-content"
                />
                <IconButton
                  variant="ghost"
                  aria-label="copy"
                  mr="3"
                  icon={<IoIosCopy />}
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    toast({
                      description: 'URL wurde ins Clipboard kopiert.',
                      status: 'success',
                      duration: 3000,
                      isClosable: true
                    })
                  }}
                />
              </Flex>
            </ScaleFade>
            <Button
              alignSelf="end"
              aria-label="teilen"
              leftIcon={<IoMdShareAlt />}
              onClick={() => setShare(!share)}>
              Teilen
            </Button>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default NewsModal
