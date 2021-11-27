import {Button, IconButton} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {Text, Box, Heading, Flex} from '@chakra-ui/layout'
import {Modal, ModalContent, ModalOverlay} from '@chakra-ui/modal'
import {navigate} from 'gatsby-link'
import {IoMdShareAlt} from '@react-icons/all-files/io/IoMdShareAlt'
import {IoIosCopy} from '@react-icons/all-files/io/IoIosCopy'

import * as style from './style'
import React from 'react'
import {ScaleFade} from '@chakra-ui/transition'
import {Input} from '@chakra-ui/input'
import {useToast} from '@chakra-ui/toast'

export interface NewsModalProps {
  isOpen: boolean
  heading: string
  text: string
  imageSrc: string
  url: string
}

export const NewsModal = ({
  isOpen,
  heading,
  text,
  imageSrc,
  url
}: NewsModalProps) => {
  const [share, setShare] = React.useState(false)
  const toast = useToast()
  if (isOpen) {
    history.pushState('AGT-Guntrade News', '', url)
  }
  return (
    <Modal isOpen={isOpen} onClose={() => navigate('/')} size="3xl">
      <ModalOverlay />
      <ModalContent borderRadius="3px">
        <Image alt="newsmodal-image" borderTopRadius="3px" src={imageSrc} />
        <Box p="5">
          <Heading textAlign="center" mb="3">
            {heading}
          </Heading>
          <Text css={style.ScrollBar} overflowY="auto" maxH="48" pr="3">
            {text}
          </Text>
          <Flex mt="3" alignItems="flex-end" justifyContent="flex-end">
            <ScaleFade initialScale={0.9} in={share} unmountOnExit>
              <Flex>
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
