import {FormControl, FormLabel} from '@chakra-ui/form-control'
import {Input} from '@chakra-ui/input'
import {Box, Flex, Heading, Text} from '@chakra-ui/layout'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/number-input'

export interface LicenseSectionProps {
  heading: React.ReactNode
  text: React.ReactNode
}

const LicenseSection = ({heading, text}: LicenseSectionProps) => {
  return (
    <Flex p="20" direction={{base: 'column', md: 'row'}}>
      <Box w={{base: '100%', md: '50%'}} pr="10">
        <Heading mb="5">{heading}</Heading>
        <Text>{text}</Text>
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
        </FormControl>
      </Box>
    </Flex>
  )
}

export default LicenseSection
