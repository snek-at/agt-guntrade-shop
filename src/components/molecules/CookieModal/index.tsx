import React, { useEffect, useState } from 'react';

// Router DOM bindings
// import { Link } from "react-router-dom";

//> Lottie
// import Lottie from "lottie-react-web";
import {
  createLottie,
  Lottie,
  LottieFnFn,
  LottieFnResult
} from '@snek-at/react-lottie'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  Box,
  Flex,
  Link,
  Modal,
  Button,
  Checkbox,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

function useStickyState(defaultValue:any, key:any) {
  const [cookie, setCookie] = useState(() => {
    const stickyValue = typeof window !== 'undefined' && window.localStorage.getItem(key) || ''
    return stickyValue
      ? JSON.parse(stickyValue)
      : defaultValue
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(cookie));
  }, [key, cookie]);
  return [cookie, setCookie];
}

const CookieModal = () => {
  const [cookie, setCookie] = useStickyState('', 'cookiesettings');

  const [cookieModal, setCookieModal] = useState(cookie ? false : true);
  const [essentialCookie] = useState(true);
  const [statisticsCookie, setStatisticsCookie] = useState(false);
  const [marketingCookie, setMarketingCookie] = useState(false);
 
  console.log("Have our privacy cookies been set?", cookieModal)
  const toggleShow = () => setCookieModal(!cookieModal);

  const checkAll = () => {
    setStatisticsCookie(true)
    setMarketingCookie(true)
    saveCookies()
  }
  const saveCookies = () => {
    setCookie(JSON.stringify({
      essential: essentialCookie ? true : false,
      statistics: statisticsCookie ? true : false,
      marketing: marketingCookie ? true : false,
    }))
    toggleShow()
  }

  const ACookieLottie: LottieFnFn = () => container => {
    let creator: LottieFnResult['creator']
    const containerProps: LottieFnResult['containerProps'] = {
      style: {width: "100%"}
    }
  
    creator = createLottie({
      container,
      animationData: require(`./cookie.json`),
      loop: true,
      autoplay: true,
    })
  
    return {creator, containerProps}
  }

  return (
    <Modal
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
      isOpen={cookieModal}
      onClose={() => saveCookies()}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cookie Einstellungen</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={3}>
          <Box w="9rem" mx="auto">
            {/* <Lottie options={defaultOptions} speed={1} ariaRole="img" /> */}
            <Lottie lottie={ACookieLottie()}>
              {({container}) => (
                <i>
                  {container}
                </i>
              )}
            </Lottie>
          </Box>
          <Box>
            Wir verwenden auf unserer Website Cookies, um die Benutzererfahrung
            zu verbessern. Einige davon sind essenziell für den Betrieb der
            Website.{" "}
          </Box>
          <Link color="blue" href="https://www.top-immo.org/privacy" isExternal>
            Datenschutz
          </Link>
          <Flex mt="15px" alignItems="center" justifyContent="center">
            <Checkbox
              isDisabled
              colorScheme="greenwhite"
              isChecked={essentialCookie}>
              Essenziell
            </Checkbox>
          </Flex>
          <Flex mt="10px" alignItems="center" justifyContent="center">
            <Checkbox
              colorScheme="greenwhite"
              isChecked={marketingCookie}
              onChange={(e) => setMarketingCookie(e.target.checked)}>
              Marketing
            </Checkbox>
            <Checkbox
              colorScheme="greenwhite"
              ml="20px"
              isChecked={statisticsCookie}
              onChange={(e) => setStatisticsCookie(e.target.checked)}>
              Statistiken
            </Checkbox>
          </Flex>
        </ModalBody>

        <ModalFooter
          alignItems="center"
          justifyContent="center"
        >
          <Button
            colorScheme="greenwhite"
            mr={3}
            onClick={() => checkAll()}>
            Alle akzeptieren
          </Button>
          <Button onClick={() => saveCookies()}>
            Auswahl speichern
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CookieModal
