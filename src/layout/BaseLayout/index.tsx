import React from 'react'
import Footer from '../../components/organisms/Footer'
import NavTop from '../../components/organisms/NavTop'
import ScrollToTopButton from '../../components/molecules/buttons/ScrollToTopButton'
export const BaseLayout: React.FC = ({children}) => {
  return (
    <>
      <ScrollToTopButton onScrollToTopClick={() => null} />
      <NavTop
        links={[
          'Waffen',
          'Munition',
          'Wiederladen',
          'Optik',
          'AR15/AR10',
          'Laufrohlinge',
          'Magazine',
          'Zubehör',
          'Ersatzteile'
        ]}
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
