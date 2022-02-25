import React, {Props} from 'react'
import Footer from '../../components/organisms/Footer'
import NavTop from '../../components/organisms/NavTop'
import SideButton from '../../components/molecules/buttons/SideButtons'
import ScrollToTopButton from '../../components/molecules/buttons/ScrollToTopButton'
import {navigate} from 'gatsby'
import {
  useProductSearch,
  SearchProvider
} from '../../common/requests/storefront'
import {BsTerminal} from 'react-icons/bs'
import {isEqual} from 'lodash'
import {propNames} from '@chakra-ui/react'

export const BaseLayoutWithoutSearch: React.FC = ({children}) => {
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
  const handleLogoClick = () => {
    navigate('/')
  }

  const handleWishlistClick = () => {
    navigate('/wishlist')
  }

  return (
    <>
      <ScrollToTopButton onScrollToTopClick={() => null} />
      <SideButton
        onSideButton1Click={() => null}
        onSideButton2Click={() => null}
        onSideButton3Click={() => null}
      />
      <NavTop
        search={{
          resultProducts: resultProducts,
          searchProducts: (term: string) => {
            setSearchTerm([term, searchTerm[0]])
          }
        }}
        links={[
          {
            name: 'Waffen',
            path: '/waffen'
          },
          {
            name: 'Munition',
            path: '/munition'
          },
          {
            name: 'Wiederladen',
            path: '/wiederladen'
          },
          {
            name: 'Optik',
            path: '/optik'
          },
          {
            name: 'AR15/AR10',
            path: '/ar15-ar10'
          },
          {
            name: 'Laufrohlinge',
            path: '/laufrohlinge'
          },
          {
            name: 'Magazine',
            path: '/magazine'
          },
          {
            name: 'Zubehör',
            path: '/zubehoer'
          },
          {
            name: 'Ersatzteile',
            path: '/ersatzteile'
          }
        ]}
        activePath={'/waffen'}
      />
      {children}
      <Footer
        col1h="AGT"
        col1={['Startseite', 'Shop', 'Unsere Vertretungen', 'Kontakt']}
        col2h="Rechtliches"
        col2={[
          'Impressum',
          'Datenschutz',
          'AGB’s',
          'Widerrufsrecht/Formular',
          'Versand',
          'Sitemap'
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
}) => (
  <>
    {props.withSearch ? (
      <SearchProvider>
        <BaseLayoutWithoutSearch children={props.children} />
      </SearchProvider>
    ) : (
      <BaseLayoutWithoutSearch children={props.children} />
    )}
  </>
)
