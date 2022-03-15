import {
  FormControl,
  Flex,
  Box,
  FormLabel,
  Input,
  Select,
  Textarea,
  Checkbox,
  Text,
  Button,
  useToast
} from '@chakra-ui/react'
import {Controller, useForm} from 'react-hook-form'
import {sendEmail} from '../../../services/mail'

type FormData = {
  name: string
  lastname: string
  email: string
  requestOption: string
  message: string
  agbChecked: boolean
}

export const ContactForm = (props: {requestOptions: string[]}) => {
  const toast = useToast()
  const defaultValues: FormData = {
    name: '',
    lastname: '',
    email: '',
    requestOption: '',
    message: '',
    agbChecked: false
  }

  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: {errors, isSubmitting}
  } = useForm<typeof defaultValues>({
    defaultValues
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)

    const {name, lastname, email, requestOption, message} = data

    const subject = `Anfrage (${requestOption}) über AGT Shop`

    const body = `
Anfrage von ${name} ${lastname} (${email}) über AGT Shop.

<== Inhalt der Anfrage ==>

${message}
`

    await sendEmail({
      fromEmail: email,
      name: `${name} ${lastname}`,
      subject,
      message: body
    })

    toast({
      title: 'Anfrage erfolgreich versendet',
      description:
        'Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.',
      status: 'success',
      duration: 9000,
      isClosable: true
    })

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex mb="3" direction={{base: 'column', md: 'row'}}>
        <Box mr="5" w={{base: '100%', md: '50%'}}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="first-name">Vorname</FormLabel>
            <Input
              id="first-name"
              placeholder="Max"
              bg="white"
              borderColor="#D4D4D9"
              {...register('name', {required: true})}
            />
          </FormControl>
        </Box>
        <Box w={{base: '100%', md: '50%'}}>
          <FormControl isInvalid={!!errors.lastname}>
            <FormLabel htmlFor="last-name">Nachname</FormLabel>
            <Input
              id="last-name"
              placeholder="Mustermann"
              bg="white"
              borderColor="#D4D4D9"
              {...register('lastname', {required: true})}
            />
          </FormControl>
        </Box>
      </Flex>
      <Flex direction={{base: 'column', md: 'row'}}>
        <Box w={{base: '100%', md: '50%'}} mr="5">
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email Adresse</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="max.mustermann@example.at"
              bg="white"
              borderColor="#D4D4D9"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
              })}
            />
          </FormControl>
        </Box>
        <Box w={{base: '100%', md: '50%'}}>
          <FormControl isInvalid={!!errors.requestOption}>
            <FormLabel htmlFor="request-type">
              Welches Anliegen haben Sie?
            </FormLabel>
            <Controller
              name="requestOption"
              control={control}
              rules={{required: true}}
              render={({field}) => (
                <Select
                  placeholder="Bitte auswählen"
                  bg="white"
                  borderColor="#D4D4D9"
                  {...field}>
                  {props.requestOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Box>
      </Flex>
      <Box mt="3">
        <FormControl isInvalid={!!errors.message}>
          <FormLabel htmlFor="message">Nachricht</FormLabel>
          <Textarea
            resize="vertical"
            bg="white"
            borderColor="#D4D4D9"
            maxH="45vh"
            {...register('message', {required: true})}
          />
        </FormControl>
      </Box>
      <Box>
        <Flex my="3">
          <FormControl isInvalid={!!errors.agbChecked}>
            <Checkbox
              borderColor="#D4D4D9"
              bg="white"
              h="fit-content"
              mt="0.5"
              mr="2"
              {...register('agbChecked', {required: true})}
            />
            <Text>
              Ich habe die AGBs gelesen und stimme der Verarbeitung meiner Daten
              zu.
            </Text>
          </FormControl>
        </Flex>
        <Button
          colorScheme="agt.grayScheme"
          type="submit"
          isLoading={isSubmitting}>
          Absenden
        </Button>
      </Box>
    </form>
  )
}