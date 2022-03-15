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
  VStack
} from '@chakra-ui/react'
import {BaseLayout} from '../BaseLayout'
import React, {useEffect, useState} from 'react'
import {CheckCircleIcon, EmailIcon, NotAllowedIcon} from '@chakra-ui/icons'
import {CookieModalService, useCookieState} from '../../services/cookiemodal'

export interface ContactLayoutProps {
  heading: boolean
  city: string
  zip_code: string
  address: string
  telephone: string
  telefax: Function
  whatsapp_telephone: string
  whatsapp_contactline: string
  email: string
  copyrightholder: string
}

export const ContactLayout = (props: ContactLayoutProps) => {

  return (
    <>
      <Heading as="h4" size="md" mt="4">
        {props.heading}
      </Heading>
      {props.city}
      {props.zip_code}
      {props.address}
      {props.telephone}
      {props.telefax}
      {props.whatsapp_telephone}
      {props.whatsapp_contactline}
      {props.email}
      {props.copyrightholder}
    </>
  )
}
