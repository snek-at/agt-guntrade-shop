import {Box, Heading, Wrap} from '@chakra-ui/layout'

import NewsCard from '../../../molecules/storybook/NewsCard'

export interface NewsSectionProps {
  teaser: React.ReactNode
}

const NewsSection = ({teaser}: NewsSectionProps) => {
  return (
    <Box>
      <Box textAlign="center">
        <Heading>Neuigkeiten und Informationen</Heading>
        <Box mt="3" mb="10" fontSize="20">
          {teaser}
        </Box>
      </Box>
      <Wrap justify="center" spacing="10"></Wrap>
    </Box>
  )
}

export default NewsSection
