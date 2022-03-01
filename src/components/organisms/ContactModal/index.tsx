import {Button, IconButton} from '@chakra-ui/button'
import {Image} from '@chakra-ui/image'
import {Input} from '@chakra-ui/input'
import {Text, Box, Heading, Flex} from '@chakra-ui/layout'
import {Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody} from '@chakra-ui/modal'
import {useToast} from '@chakra-ui/toast'
import {ScaleFade} from '@chakra-ui/transition'
import {IoIosCopy} from '@react-icons/all-files/io/IoIosCopy'
import {IoMdShareAlt} from '@react-icons/all-files/io/IoMdShareAlt'
import React from 'react'
import {FormControl, FormLabel} from '@chakra-ui/form-control'
import {Checkbox} from '@chakra-ui/checkbox'
import {Select} from '@chakra-ui/select'
import {Textarea} from '@chakra-ui/textarea'

import * as style from './style'

export interface ContactModalProps {
  isOpen: boolean
  heading: React.ReactNode
  text: React.ReactNode
  imageSrc: string
  url: string
  onClose: Function
  tag: string
  wishlist: any[]
}

export const ContactModal = ({
  isOpen,
  heading,
  text,
  wishlist,
  onClose,
}: ContactModalProps) => {
  const [share, setShare] = React.useState(false)
  const toast = useToast()
  // if (isOpen) {
  //   history.pushState('AGT-Guntrade News', '', url)
  // }

  let emailContent = `

Ich würde die oben Angeführten Produkte gerne kaufen. Sind diese im Lager noch verfügbar?

Mit freundlichen Grüßen
  `

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
        <ModalHeader>{heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx="5" mb="5">
          <Text mb="3">{text}</Text>
          <FormControl>
            <Flex mb="3" direction={{base: 'column', md: 'row'}}>
              <Box mr="5" w={{base: '100%', md: '50%'}}>
                <FormLabel htmlFor="first-name">Vorname</FormLabel>
                <Input
                  id="first-name"
                  placeholder="Max"
                  borderColor="#D4D4D9"
                />
              </Box>
              <Box w={{base: '100%', md: '50%'}}>
                <FormLabel htmlFor="last-name">Nachname</FormLabel>
                <Input
                  id="last-name"
                  placeholder="Mustermann"
                  borderColor="#D4D4D9"
                />
              </Box>
            </Flex>
            <Box mb="3">
              <FormLabel htmlFor="email">Email Adresse</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="max.mustermann@example.at"
                borderColor="#D4D4D9"
              />
            </Box>
            <Box mb="5">
              <FormLabel htmlFor="message">Nachricht</FormLabel>
              <Textarea
                resize="vertical"
                borderColor="#D4D4D9"
                h="30vh"
                value={
                  wishlist.map(item => (
                    item.quantity + "x " + item.title + item.price
                  )) + emailContent
                }
              />
            </Box>
            <Box>
              <Flex my="3">
                <Checkbox
                  borderColor="#D4D4D9"
                  h="fit-content"
                  mt="0.5"
                  mr="2"
                />
                <Text>
                  Ich habe die AGBs gelesen und stimme der Verarbeitung meiner
                  Daten zu.
                </Text>
              </Flex>
              <Button colorScheme="agt.grayScheme">Absenden</Button>
            </Box>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ContactModal
