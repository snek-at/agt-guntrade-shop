import {ChevronRightIcon} from '@chakra-ui/icons'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Text
} from '@chakra-ui/react'
import {FaHome} from 'react-icons/fa'

export const Breadcrumbs = () => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      my={4}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon as={FaHome} />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Wiederladen</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Text>"title"</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const ShopLayout: React.FC = ({children}) => {
  return (
    <Box mx={{base: 4, md: 16}}>
      <Box>{children}</Box>
    </Box>
  )
}
