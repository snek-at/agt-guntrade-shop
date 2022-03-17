import {
  Heading,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import {BaseLayout} from '../BaseLayout'
import {ContactLayout} from '../ContactLayout'
import {LegalLayout} from '../LegalLayout'
import {TermsLayout} from '../TermsLayout'
import {MapLayout} from '../MapLayout'


export const ImprintLayout = (props: {activePath: string}) => {
  return (
    <BaseLayout withSearch={true} activePath={props.activePath}>
      <Container
        as="section"
        maxW="8xl"
        pt="6"
        id="featuredproducts"
        bg={useColorModeValue('white', 'gray.700')}
        borderWidth="1px"
        my={{base: 4, md: 8}}
        px={4}
        py={4}
        borderRadius="lg">
        <Heading as="h1" size="lg" fontWeight="extrabold" pb={4}>
          Datenschutz
        </Heading>
        <ContactLayout
          heading={<p>Impressum</p>}
          contact={<p></p>}
          // city={<p>Ried im Innkreis</p>}
          // zip_code={<p>4910</p>}
          // address={<p>Wildfellnerstraße 22/1</p>}
          // telephone={<p>+43 (0) 676 6510977</p>}
          // telefax={<p>5</p>}
          // whatsapp_telephone={<p>6</p>}
          // whatsapp_contactline={<p>7</p>}
          // email={<p>Email: info@agt-guntrade.at</p>}
          // copyrightholder={<p>9</p>}
        />
        <LegalLayout
          heading={<p>Rechtliches</p>}
          legal={<p></p>}
          // vat_number={<p>1</p>}
          // tax_id={<p>UID:ATU77453827</p>}
          // court_of_registry={<p>Landesgericht Ried im Innkreis FN: 563839a</p>}
          // place_of_registry={<p>Ried im Innkreis</p>}
          // trade_register_number={<p>5</p>}
          // ownership={<p>Inh. Patrick Türk</p>}
        />
        <TermsLayout
          heading={<p>Bedingungen</p>}
          terms={<p></p>}
          // about={<p>1</p>}
          // privacy={<p>2</p>}
          // shipping={<p>3</p>}
          // gtc={<p>4</p>}
          // cancellation_policy={<p>5</p>}
        />
        {/* <MapLayout
          heading={<p>Karte</p>}
          about={<p>1</p>}
          privacy={<p>2</p>}
          shipping={<p>3</p>}
          gtc={<p>4</p>}
          cancellation_policy={<p>5</p>}
        /> */}
        {/* 46.53825575917372, 14.292146962563237 */}
        <MapLayout lat={46.53825} lng={14.29214} zoom={13.60}/>
      </Container>
    </BaseLayout>
  )
}
