import {Box, Heading, Wrap} from '@chakra-ui/layout'

import NewsCard from '../../../molecules/NewsCard'

export interface NewsSectionProps {
  newscard1text: React.ReactNode
  newscard1image: React.ReactNode
  newscard1heading: React.ReactNode
  newscard2text: React.ReactNode
  newscard2image: React.ReactNode
  newscard2heading: React.ReactNode
  newscard3text: React.ReactNode
  newscard3image: React.ReactNode
  newscard3heading: React.ReactNode
  teaser: React.ReactNode
}

const NewsSection = ({
  newscard1heading,
  newscard1image,
  newscard1text,
  newscard2heading,
  newscard2image,
  newscard2text,
  newscard3heading,
  newscard3image,
  newscard3text,
  teaser
}: NewsSectionProps) => {
  return (
    <Box>
      <Box textAlign="center">
        <Heading>Neuigkeiten und Informationen</Heading>
        <Box mt="3" mb="10" fontSize="20">
          {teaser}
        </Box>
      </Box>
      <Wrap justify="center" spacing="10">
        <NewsCard
          heading={newscard1heading}
          image={newscard1image}
          text={newscard1text}
        />
        <NewsCard
          heading={newscard2heading}
          image={newscard2image}
          text={newscard2text}
        />
        <NewsCard
          heading={newscard3heading}
          image={newscard3image}
          text={newscard3text}
        />
      </Wrap>
    </Box>
  )
}

export default NewsSection
