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
  tag: string
}

export const NewsModal = ({
  isOpen,
  heading,
  text,
  imageSrc,
  url,
  onClose,
  tag
}: NewsModalProps) => {
  const [share, setShare] = React.useState(false)
  const toast = useToast()
  if (isOpen) {
    history.pushState('AGT-Guntrade News', '', url)
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose()
        setShare(false)
      }}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent
        borderRadius="5px"
        minH="60vh"
        maxW={{base: '90vw', md: '64vw', xl: '60vw'}}>
        <Flex direction={{base: 'column', md: 'row'}}>
          <Box
            w={{base: '100%', md: '60%'}}
            h={{base: 'auto', md: '60vh'}}
            bg="black"
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Image
              fallback={<Box />}
              my="auto"
              alt="newsmodal-image"
              src={imageSrc}
              w="100%"
              borderLeftRadius="5px"
            />
          </Box>
          <Box
            p="5"
            w={{base: 'auto', md: '40%'}}
            h={{base: 'auto', md: '60vh'}}
            position="relative">
            <Text
              position="absolute"
              top="5"
              right="5"
              fontSize="14"
              fontWeight="bold"
              casing="uppercase"
              color="teal">
              NewsTag
            </Text>
            <Heading mb="3">{heading}</Heading>
            <Text
              css={style.ScrollBar}
              overflowY="auto"
              pr="3"
              maxH={{base: '200px', md: '60%', xl: '70%'}}>
              {text}
            </Text>
            <Flex
              position={{base: 'static', md: 'absolute'}}
              mt={{base: '3', md: '0'}}
              bottom="5"
              right="5"
              direction={{base: 'column-reverse', md: 'column', xl: 'row'}}
              justifyContent="flex-end">
              <ScaleFade initialScale={0.9} in={share} unmountOnExit>
                <Flex
                  alignSelf={{base: 'center', sm: 'flex-end'}}
                  mr={{base: 'auto', sm: '0'}}
                  mt={{base: '5', md: '0'}}
                  mb={{base: '0', md: '3', xl: '0'}}
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
        </Flex>
      </ModalContent>
    </Modal>
  )
}

export default NewsModal
