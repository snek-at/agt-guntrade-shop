import {Box, Heading, Wrap} from '@chakra-ui/layout'
import {BlockContainer} from '@snek-at/jaen-pages'

import NewsBlock from '../../../blocks/NewsBlock'

export interface NewsSectionProps {
  teaser: React.ReactNode
}

const NewsSection = ({teaser}: NewsSectionProps) => {
  return (
    <Box overflow="hidden" w="100%">
      <Box textAlign="center">
        <Heading>Neuigkeiten und Informationen</Heading>
        <Box mt="3" mb="10" fontSize="20">
          {teaser}
        </Box>
      </Box>
      <Box w="100%" overflowX="scroll" overflowY="hidden">
        <BlockContainer
          blocks={[NewsBlock]}
          name="newssection-bc"
          wrap={true}
          wrapProps={{
            position: 'relative',
            justify: 'center',
            minW: 'max-content',
            spacing: '10'
          }}
        />
      </Box>
    </Box>
  )
}

export default NewsSection
