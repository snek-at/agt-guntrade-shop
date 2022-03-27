import {RiHomeLine} from '@react-icons/all-files/ri/RiHomeLine'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon
} from '@chakra-ui/react'

import {SeperatorStyle} from './style'

interface BreadcrumbPops {
  breadcrumb: string
}

const Export = ({breadcrumb}: BreadcrumbPops) => (
  <Breadcrumb
    css={SeperatorStyle}
    pt="1"
    borderRadius="5px"
    color="white"
    px="2"
    w="fit-content"
    bg="agt.gray"
    justifyContent="center"
    alignItems="center"
    separator={<ChevronRightIcon boxSize="2rem" className="icon" />}>
    <BreadcrumbItem position="relative">
      <BreadcrumbLink>
        <Icon
          as={RiHomeLine}
          boxSize="1.25rem"
          mb="1.5"
          _hover={{color: 'agt.blue'}}
          transition="0.3s"
        />
      </BreadcrumbLink>
    </BreadcrumbItem>
    {breadcrumb.split(':').map(crumb => (
      <BreadcrumbItem>
        <BreadcrumbLink
          mb="0.5rem"
          fontSize="1.25rem"
          to=""
          _hover={{color: 'agt.blue'}}
          transition="0.3s"
          fontWeight="100">
          {crumb}
        </BreadcrumbLink>
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
)

export default Export
