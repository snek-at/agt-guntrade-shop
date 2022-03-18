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
  heading: React.ReactNode
  contact: React.ReactNode
  // city: React.ReactNode
  // zip_code: React.ReactNode
  // address: React.ReactNode
  // telephone: React.ReactNode
  // telefax: React.ReactNode
  // whatsapp_telephone: React.ReactNode
  // whatsapp_contactline: React.ReactNode
  // email: React.ReactNode
  // copyrightholder: React.ReactNode
}

export const ContactLayout = (props: ContactLayoutProps) => {
  return (
    <BaseLayout activePath="/contact" withSearch={true}>
      <GoogleMaps />
      <SimpleGrid
        minChildWidth="120px"
        spacing="40px"
        py={8}
        bg="agt.gray"
        color="white">
        <Center>
          <VStack spacing={6}>
            <Icon as={FaPhoneSquare} boxSize="16" />
            <Text fontSize="xl" fontWeight="semibold">
              +49 (0) 1511 / 8888888
            </Text>
          </VStack>
        </Center>
        <Center>
          <VStack spacing={6}>
            <Icon as={FaAddressBook} boxSize="16" />
            <Text fontSize="xl" fontWeight="semibold">
              Reßnig 20, 9170 Ferlach
            </Text>
          </VStack>
        </Center>
        <Center>
          <VStack spacing={6}>
            <Icon as={FaEnvelopeSquare} boxSize="16" />
            <Text fontSize="xl" fontWeight="semibold">
              nicoschett@icloud.com
            </Text>
          </VStack>
        </Center>
      </SimpleGrid>
      <Container maxW="8xl" my={8}>
        <ContactForm requestOptions={[]} />
      </Container>
    </BaseLayout>
  )

  return (
    <BaseLayout activePath="/contact" withSearch={true}>
      <ShopLayout>
        <Container maxW="4xl">
          <Flex border={1} borderRadius={'lg'} overflow="hidden">
            <Flex direction={'column'}>
              <Heading as="h2" size="xl" mt="4">
                {props.heading}
              </Heading>
              <Text>{props.contact}</Text>
              <Button variant="ghost">nicoschett@icloud.com</Button>
              <Button variant="ghost">+43 0676 123345 23</Button>
              <Button variant="ghost">Hausergasse 5, 9944 Villach</Button>
            </Flex>
            <Box
              maxW="lg"
              border={1}
              borderRadius={'lg'}
              overflow="hidden"
              bg="white"
              p={4}
              m={4}>
              <ContactForm requestOptions={['a', 'b', 'c']} />
            </Box>
          </Flex>
        </Container>
      </ShopLayout>
    </BaseLayout>
  )
}
