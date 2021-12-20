import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/accordion'
import {Button} from '@chakra-ui/button'
import {FormControl, FormLabel} from '@chakra-ui/form-control'
import {Input} from '@chakra-ui/input'
import {Box, Flex, Heading} from '@chakra-ui/layout'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/number-input'

export interface LicenseSectionProps {
  heading: React.ReactNode
}

const LicenseSection = ({heading}: LicenseSectionProps) => {
  return (
    <Flex p="20" direction={{base: 'column', md: 'row'}}>
      <Box w={{base: '100%', md: '50%'}} pr="10">
        <Heading mb="5">{heading}</Heading>
        <Accordion defaultIndex={[0]}>
          <AccordionItem borderColor="#D4D4D9" borderTopRadius="5px">
            <AccordionButton
              borderTopRadius="5px"
              _expanded={{
                bg: 'agt.gray',
                color: 'white',
                _hover: {bg: '#424240'}
              }}
              bg="agt.lightgray"
              _hover={{bg: '#D4D4D9'}}>
              <Box flex="1" textAlign="left">
                Frage 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} borderX="1px" borderColor="#D4D4D9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderColor="#D4D4D9">
            <AccordionButton
              _expanded={{
                bg: 'agt.gray',
                color: 'white',
                _hover: {bg: '#424240'}
              }}
              bg="agt.lightgray"
              _hover={{bg: '#D4D4D9'}}>
              <Box flex="1" textAlign="left">
                Frage 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} borderX="1px" borderColor="#D4D4D9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderColor="#D4D4D9">
            <AccordionButton
              _expanded={{
                bg: 'agt.gray',
                color: 'white',
                _hover: {bg: '#424240'}
              }}
              bg="agt.lightgray"
              _hover={{bg: '#D4D4D9'}}>
              <Box flex="1" textAlign="left">
                Frage 3
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} borderX="1px" borderColor="#D4D4D9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem borderColor="#D4D4D9" borderBottomRadius="5px">
            <AccordionButton
              borderBottomRadius="5px"
              _expanded={{
                borderBottomRadius: '0px',
                bg: 'agt.gray',
                color: 'white',
                _hover: {bg: '#424240'}
              }}
              bg="agt.lightgray"
              _hover={{bg: '#D4D4D9'}}>
              <Box flex="1" textAlign="left">
                Frage 4
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              borderX="1px"
              borderColor="#D4D4D9"
              borderBottomRadius="5px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box w={{base: '100%', md: '50%'}}>
        <Heading mb="5" as="h3">
          Jetzt Anfragen
        </Heading>
        <FormControl>
          <Flex mb="3" direction={{base: 'column', md: 'row'}}>
            <Box mr="5" w={{base: '100%', md: '50%'}}>
              <FormLabel htmlFor="first-name">Vorname</FormLabel>
              <Input id="first-name" placeholder="Max" />
            </Box>
            <Box w={{base: '100%', md: '50%'}}>
              <FormLabel htmlFor="last-name">Nachname</FormLabel>
              <Input id="last-name" placeholder="Mustermann" />
            </Box>
          </Flex>
          <Flex direction={{base: 'column', md: 'row'}}>
            <Box w={{base: '100%', md: '50%'}} mr="5">
              <FormLabel htmlFor="email">Email Adresse</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="max.mustermann@example.at"
              />
            </Box>
            <Box w={{base: '100%', md: '50%'}}>
              <FormLabel htmlFor="age">Alter</FormLabel>
              <NumberInput min={0} max={120}>
                <NumberInputField id="age" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Flex>
          <Button mt="5" colorScheme="agt.grayScheme">
            Absenden
          </Button>
        </FormControl>
      </Box>
    </Flex>
  )
}

export default LicenseSection
