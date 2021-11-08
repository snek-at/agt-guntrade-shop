import {Image} from '@chakra-ui/image'
import {Box, Text} from '@chakra-ui/layout'

export interface AccessorieShowcaseProps {}

const AccessorieShowcase = ({}: AccessorieShowcaseProps) => {
  return (
      <Box
        w="280px"
        h="310"
        bg="gray.800"
        className="shine"
        textAlign="center"
        borderRadius="3px"
        p="10"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage="https://secondamendsports.com/wp-content/uploads/2019/10/4D5EB7A900000578-0-image-a-30_1529321909720-1.jpg">
        <Text casing="uppercase" color="white" mt="100px">
        Acessories
      </Text>
    </Box>
  )
}

export default AccessorieShowcase
