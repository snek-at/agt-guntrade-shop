import {Box, Heading} from '@chakra-ui/react'
export interface IndexPageProps {}

import NewsSection from '../components/organisms/sections/NewsSection'

const IndexPage = ({}: IndexPageProps) => {
  return <NewsSection teaser="This is the teaser." />
}
//#endregion

//#region > Exports
export default IndexPage
//#endregion
