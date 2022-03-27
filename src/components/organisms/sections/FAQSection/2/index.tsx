import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/accordion'
import {Button} from '@chakra-ui/button'
import {Checkbox} from '@chakra-ui/checkbox'
import {FormControl, FormLabel} from '@chakra-ui/form-control'
import {Input} from '@chakra-ui/input'
import {Box, Flex, Heading, Text} from '@chakra-ui/layout'
import {Select} from '@chakra-ui/select'
import {Textarea} from '@chakra-ui/textarea'

export interface FAQSectionProps {
  heading: React.ReactNode
}

const FAQSection = ({heading}: FAQSectionProps) => {
  return (
    <Flex
      p="20"
      direction={{base: 'column', md: 'row'}}
      bg="agt.gray"
      minH="100vh"
      justifyContent="center"
      alignItems="center">
      <Flex>
        <Box w={{base: '100%', md: '50%'}} pr="10" mt="10">
          <Heading mb="5" color="white">
            {heading}
          </Heading>
          <Accordion defaultIndex={[0]} bg="white" borderRadius="7px">
            <AccordionItem border="0px" borderTopRadius="5px">
              <AccordionButton
                borderTopRadius="5px"
                _expanded={{
                  bg: 'agt.blue',
                  color: 'white',
                  _hover: {bg: 'agt.red'}
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
                  bg: 'agt.blue',
                  color: 'white',
                  _hover: {bg: 'agt.red'}
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
                  bg: 'agt.blue',
                  color: 'white',
                  _hover: {bg: 'agt.red'}
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
                  bg: 'agt.blue',
                  color: 'white',
                  _hover: {bg: 'agt.red'}
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
        <Box
          w={{base: '100%', md: '50%'}}
          bg="agt.lightgray"
          borderRadius="5px"
          p="10"
          h="fit-content"
          maxH="90vh">
          <Heading mb="5" as="h3">
            Jetzt Anfragen
          </Heading>
          <FormControl>
            <Flex mb="3" direction={{base: 'column', md: 'row'}}>
              <Box mr="5" w={{base: '100%', md: '50%'}}>
                <FormLabel htmlFor="first-name">Vorname</FormLabel>
                <Input
                  id="first-name"
                  placeholder="Max"
                  bg="white"
                  borderColor="#D4D4D9"
                />
              </Box>
              <Box w={{base: '100%', md: '50%'}}>
                <FormLabel htmlFor="last-name">Nachname</FormLabel>
                <Input
                  id="last-name"
                  placeholder="Mustermann"
                  bg="white"
                  borderColor="#D4D4D9"
                />
              </Box>
            </Flex>
            <Flex direction={{base: 'column', md: 'row'}}>
              <Box w={{base: '100%', md: '50%'}} mr="5">
                <FormLabel htmlFor="email">Email Adresse</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="max.mustermann@example.at"
                  bg="white"
                  borderColor="#D4D4D9"
                />
              </Box>
              <Box w={{base: '100%', md: '50%'}}>
                <FormLabel htmlFor="request-type">
                  Welches Anliegen haben Sie?
                </FormLabel>
                <Select
                  placeholder="Bitte auswählen"
                  bg="white"
                  borderColor="#D4D4D9">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Flex>
            <Box mt="3">
              <FormLabel htmlFor="message">Nachricht</FormLabel>
              <Textarea
                resize="vertical"
                bg="white"
                borderColor="#D4D4D9"
                maxH="45vh"
              />
            </Box>
            <Box>
              <Flex my="3">
                <Checkbox
                  borderColor="#D4D4D9"
                  bg="white"
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
        </Box>
      </Flex>
    </Flex>
  )
}

export default FAQSection
