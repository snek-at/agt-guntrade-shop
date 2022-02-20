import React from 'react'
import NavTop from '../../components/organisms/NavTop'

export const BaseLayout: React.FC = ({children}) => {
  return (
    <>
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
    </>
  )
}
