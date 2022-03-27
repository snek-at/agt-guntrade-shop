import {useStaticQuery, graphql} from 'gatsby'
import NavTop from '../NavTop'
import React from 'react'

const NavContainer = (props: {
  activePath: string
  search: {searchProducts: (term: string) => void; resultProducts: any[]}
}) => {
  const data = useStaticQuery(graphql`
    query {
      navbarCollections: allShopifyCollection(
        filter: {title: {regex: "/^(A|(B[C-Z]*)):/g"}}
      ) {
        edges {
          node {
            title
            productsCount
          }
        }
      }
    }
  `)

  const links = React.useMemo(
    () =>
      data.navbarCollections.edges
        .map((edge: any) => {
          if (edge.node.productsCount > 0) {
            const parts = edge.node.title.split(':')
            const lastElement = parts[parts.length - 1]

            return {
              name: lastElement,
              path: `/${lastElement.toLowerCase().replaceAll(' ', '-')}`
            }
          }
        })
        .filter((link: any) => typeof link !== 'undefined'),
    [data]
  )

  return (
    <NavTop links={links} search={props.search} activePath={props.activePath} />
  )
}

export default NavContainer
