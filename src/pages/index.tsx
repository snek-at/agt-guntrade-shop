import {Box, Heading} from '@chakra-ui/react'
export interface IndexPageProps {
  location: any
}

import NewsSection from '../components/organisms/sections/NewsSection'

const IndexPage = (props: {location: any}) => {
  return <NewsSection teaser="This is the teaser." />
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
