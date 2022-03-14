import React from 'react'
import {navigate, PageProps} from 'gatsby'
import {ContactLayout} from '../layout/ContactLayout'
import {LegalLayout} from '../layout/LegalLayout'
import {TermsLayout} from '../layout/TermsLayout'

const ImprintPage = ({}: PageProps) => {
  return (
    <>
      <ContactLayout
        heading={<p>Impressum</p>}
        city=""
        zip_code=""
        address=""
        telephone=""
        telefax=""
        whatsapp_telephone=""
        whatsapp_contactline=""
        email=""
        copyrightholder=""
      />
      <LegalLayout
        heading={<p>Rechtliches</p>}
        vat_number=""
        tax_id=""
        court_of_registry=""
        place_of_registry=""
        trade_register_number=""
        ownership=""
      />
      <TermsLayout
        heading={<p>Bedingungen</p>}
        about=""
        privacy=""
        shipping=""
        gtc=""
        cancellation_policy=""
      />
      <MapLayout
        heading={<p>Karte</p>}
        about=""
        privacy=""
        shipping=""
        gtc=""
        cancellation_policy=""
      />
    </>
  )
}

export default ImprintPage
