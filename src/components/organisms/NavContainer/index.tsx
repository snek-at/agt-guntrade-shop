import {useStaticQuery, graphql} from 'gatsby'
import NavTop from '../NavTop'

const NavContainer = (props: {
  activePath: string
  search: {searchProducts: (term: string) => void; resultProducts: any[]}
}) => {
  const data = useStaticQuery(graphql`
    query {
      handles: allShopifyCollection(
        filter: {handle: {regex: "/^(a|b[c-z]*)-/g"}}
      ) {
        handle: distinct(field: handle)
      }
    }
  `)
  const links = data.handles.handle.map((handle: string) => {
    const parts = handle.split('-')
    const lastElement = parts[parts.length - 1]

    return {name: lastElement, path: `/${lastElement}`}
  })

  return (
    <NavTop links={links} search={props.search} activePath={props.activePath} />
  )
}

export default NavContainer
