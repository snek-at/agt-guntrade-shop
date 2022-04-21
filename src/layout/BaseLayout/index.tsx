import React from 'react'
import Footer from '../../components/organisms/Footer'
import SideButton from '../../components/molecules/buttons/SideButtons'
import {
  useProductSearch,
  SearchProvider
} from '../../common/requests/storefront'
import {isEqual} from 'lodash'
import NavContainer from '../../components/organisms/NavContainer'
import {Link, navigate} from 'gatsby'

export const BaseLayoutWithoutSearch: React.FC<{activePath: string}> = ({
  children,
  activePath
}) => {
  const [searchTerm, setSearchTerm] = React.useState<Array<string>>(['', ''])
  const [resultProducts, setResultProducts] = React.useState<Array<any>>([])

  const filters = {
    term: searchTerm[0],
    tags: [],
    minPrice: 0,
    maxPrice: undefined
  }

  const {products} = useProductSearch(
    true,
    filters,
    [],
    undefined,
    false,
    10,
    [],
    {
      ...filters,
      term: ''
    },
    false
  )
  if (
    !isEqual(resultProducts, products) &&
    products.length > 0 &&
    searchTerm[0] !== searchTerm[1]
  ) {
    setResultProducts(products)
  }

  return (
    <>
      <SideButton
        onMailButtonClick={() => navigate("/kontakt/")}
        onLocationButtonClick={() => navigate("/impressum/")}
        onPhoneButtonClick={() => navigate("/kontakt/")}
      />
      <NavContainer
        search={{
          resultProducts: resultProducts,
          searchProducts: (term: string) => {
            setSearchTerm([term, searchTerm[0]])
          }
        }}
        activePath={activePath}
      />
      {children}
      <Footer
        col1h="AGT"
        col1={['Startseite', 'Shop', 'Unsere Vertretungen', 'Kontakt']}
        col2h="Rechtliches"
        col2={[
          <Link to="/impressum">Impressum</Link>,
          <Link to="/datenschutz">Datenschutz</Link>,
          <Link to="/sitemap/sitemap-index.xml">Sitemap</Link>
        ]}
        col3h="Öffnungszeiten"
        col3={[
          'Mo. – Fr. 8.00 – 12.00 / 14.00 – 18.00',
          'Sonn, Sams- und Feiertags geschlossen'
        ]}
      />
    </>
  )
}

export const BaseLayout = (props: {
  children: React.ReactNode
  withSearch: boolean
  activePath: string
}) => (
  <>
    {props.withSearch ? (
      <SearchProvider>
        <BaseLayoutWithoutSearch
          activePath={props.activePath}
          children={props.children}
        />
      </SearchProvider>
    ) : (
      <BaseLayoutWithoutSearch
        activePath={props.activePath}
        children={props.children}
      />
    )}
  </>
)
