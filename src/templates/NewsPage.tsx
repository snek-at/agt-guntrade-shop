import {Box, Heading, Text, Flex} from '@chakra-ui/layout'
import {Field} from '@jaenjs/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'
import {css} from '@emotion/react'

const NewsStyle = () => css`
  .image {
    width: 50%;
    height: auto;
  }
`

const NewsPage = () => {
  return (
    <Box width="100%" position="relative" mt="20" css={NewsStyle()}>
      <Heading textAlign="center" mb="10">
        <Field.Text name="heading" defaultValue="Titel" />
      </Heading>
      <Flex
        justifyContent="center"
        alignContent="center"
        direction={{base: 'column', md: 'row'}}>
        <Field.Image
          name="main"
          defaultValue={
            <StaticImage
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="default image"
              onDragStart={e => e.preventDefault()}
              draggable="false"
            />
          }
          className="image"
        />
        <Text w={{base: '300px', md: '750px'}} ml={{base: 0, md: 5}}>
          <Field.Text
            name="description"
            defaultValue=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum."
          />
        </Text>
      </Flex>
    </Box>
  )
}

export default connectTemplate(NewsPage, {
  displayName: 'NewsPage',
  children: [],
  isRootTemplate: true
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
