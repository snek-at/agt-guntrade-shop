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

export interface TermsLayoutProps {
  heading: React.ReactNode
  about: React.ReactNode
  privacy: React.ReactNode
  shipping: React.ReactNode
  gtc: React.ReactNode
  cancellation_policy: React.ReactNode
}


export const TermsLayout = (props: TermsLayoutProps) => {

  return (
    <>
      <Heading as="h4" size="md" mt="4">
        {props.heading}
      </Heading>
      {props.about}
      {props.privacy}
      {props.shipping}
      {props.gtc}
      {props.cancellation_policy}
    </>
  )
}
