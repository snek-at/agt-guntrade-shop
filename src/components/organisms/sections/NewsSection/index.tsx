import {Box, Heading} from '@chakra-ui/layout'

export interface NewsSectionProps {
  newscards: React.ReactNode
  teaser: React.ReactNode
}

const NewsSection = ({newscards, teaser}: NewsSectionProps) => {
  return (
    <Box>
      <Box textAlign="center">
        <Heading>Neuigkeiten und Informationen</Heading>
        <Box mt="3" mb="10" fontSize="20">
          {teaser}
        </Box>
      </Box>
      {newscards}
    </Box>
  )
}

export default NewsSection
