import React from 'react'
import Footer from '../../components/organisms/Footer'
import NavTop from '../../components/organisms/NavTop'
import SideButton from '../../components/molecules/buttons/SideButtons'
import ScrollToTopButton from '../../components/molecules/buttons/ScrollToTopButton'
import {navigate} from 'gatsby'
export const BaseLayout: React.FC = ({children}) => {
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
