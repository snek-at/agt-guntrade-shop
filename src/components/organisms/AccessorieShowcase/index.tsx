import {Image} from '@chakra-ui/image'
import {Box, Text} from '@chakra-ui/layout'

export interface AccessorieShowcaseProps {}

const AccessorieShowcase = ({}: AccessorieShowcaseProps) => {
  return (
    <Box textAlign="center" bg="white" borderRadius="3px" p="10">
      <Image
        src="https://www.hunting-sport.com/media/image/product/37703/md/infiray-tl35-thermal-scope.jpg"
        alt="accessorie"
        w="300"
        h="180"
        mx="auto"
      />
      <Text mt="6" casing="uppercase">
        Acessories
      </Text>
    </Box>
  )
}

export default AccessorieShowcase
