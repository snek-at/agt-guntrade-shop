import {IconButton, ButtonGroup} from '@chakra-ui/react'
import {FiMail} from '@react-icons/all-files/fi/FiMail'
import {FiMapPin} from '@react-icons/all-files/fi/FiMapPin'
import {FiPhoneCall} from '@react-icons/all-files/fi/FiPhoneCall'

export interface SideButtonProps {
  onMailButtonClick: () => void
  onLocationButtonClick: () => void
  onPhoneButtonClick: () => void
}

const SideButton: React.FC<SideButtonProps> = props => {
  return (
    <ButtonGroup
      as="aside"
      variant="ghost"
      color="white"
      position="fixed"
      bottom={{base: '0', md: '50%'}}
      right="0"
      display="flex"
      flexDirection={{base: 'row', md: 'column'}}
      w={{base: '100%', md: 'unset'}}
      spacing="0"
      zIndex="999">
      <IconButton
        as="a"
        w={{base: '100%', md: 'unset'}}
        bg="agt.red"
        href="#"
        aria-label="Email"
        icon={<FiMail fontSize="20px" />}
        onClick={() => {
          props.onMailButtonClick()
        }}></IconButton>
      <IconButton
        as="a"
        w={{base: '100%', md: 'unset'}}
        bg="agt.red"
        href="#"
        aria-label="Location"
        icon={<FiMapPin fontSize="20px" />}
        onClick={() => {
          props.onLocationButtonClick()
        }}></IconButton>
      <IconButton
        as="a"
        w={{base: '100%', md: 'unset'}}
        bg="agt.red"
        href="#"
        aria-label="Phone"
        icon={<FiPhoneCall fontSize="20px" />}
        onClick={() => {
          props.onPhoneButtonClick()
        }}></IconButton>
    </ButtonGroup>
  )
}

export default SideButton
