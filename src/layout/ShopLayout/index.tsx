import {ChevronRightIcon} from '@chakra-ui/icons'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import {FaHome} from 'react-icons/fa'

import {RouteComponentProps} from '@reach/router'
import {Link} from 'gatsby'
import NavTop from '../../components/organisms/NavTop'

export const Breadcrumbs = (props: {path: string}) => {
  const pathParts = props.path.split('/').filter(Boolean)
  const pathLength = pathParts.length

  const breadcrumbs = pathParts.map((item, index) => {
    const isLast = index === pathLength - 1

    return (
      <BreadcrumbItem key={item}>
        {isLast ? (
          <Text>{item}</Text>
        ) : (
          <BreadcrumbLink>
            <Link to={`/${pathParts.slice(0, index + 1).join('/')}`}>
              {item}
            </Link>
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    )
  })

  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      my={4}>
      <BreadcrumbItem>
        <BreadcrumbLink>
          <Link to="/">
            <Icon as={FaHome} />
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {breadcrumbs}
    </Breadcrumb>
  )
}

export const ShopLayout: React.FC = ({children}) => {
  return (
    <>
      <Box
        mx={{base: 4, md: 16}}
        my={{base: 4, md: 8}}
        bg={useColorModeValue('white', 'gray.700')}
        borderWidth="1px"
        borderRadius="lg"
        px={4}
        >
        <Box>{children}</Box>
      </Box>
    </>
  )
}
