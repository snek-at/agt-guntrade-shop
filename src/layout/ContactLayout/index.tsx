import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Container,
  HStack,
  Icon,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useColorModeValue,
  VStack,
  SimpleGrid,
  Center
} from '@chakra-ui/react'
import {BaseLayout} from '../BaseLayout'
import React, {useEffect, useState} from 'react'
import {CheckCircleIcon, EmailIcon, NotAllowedIcon} from '@chakra-ui/icons'
import {CookieModalService, useCookieState} from '../../services/cookiemodal'
import GoogleMaps from '../GoogleMapsLayout'
import {ContactForm} from '../../components/organisms/ContactForm'
import {ShopLayout} from '../ShopLayout'
import {FaAddressBook, FaEnvelopeSquare, FaPhoneSquare} from 'react-icons/fa'

export interface ContactLayoutProps {
  phone: React.ReactNode
  email: React.ReactNode
  address: React.ReactNode
}

export const ContactLayout = (props: ContactLayoutProps) => {
  return (
    <BaseLayout activePath="/contact" withSearch={true}>
      <GoogleMaps />
      <SimpleGrid
        spacing="40px"
        py={8}
        columns={[1, 1, 1, 3]}
        bg="agt.gray"
        color="white">
        <Center>
          <VStack spacing={6}>
            <Icon as={FaPhoneSquare} boxSize="16" />
            <Text fontSize="xl" fontWeight="semibold">
              {props.phone}
            </Text>
          </VStack>
        </Center>
        <Center>
          <VStack spacing={6}>
            <Icon as={FaAddressBook} boxSize="16" />
            <Text fontSize="xl" fontWeight="semibold">
              {props.address}
            </Text>
          </VStack>
        </Center>
        <Center>
          <VStack spacing={6}>
            <Icon as={FaEnvelopeSquare} boxSize="16" />
            <Text fontSize="xl" fontWeight="semibold">
              {props.email}
            </Text>
          </VStack>
        </Center>
      </SimpleGrid>
      <Container maxW="8xl" my={8}>
        <ContactForm requestOptions={[]} />
      </Container>
    </BaseLayout>
  )
}
