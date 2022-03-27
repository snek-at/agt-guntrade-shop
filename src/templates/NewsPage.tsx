import {Box, Heading, Text, Flex, Spacer} from '@chakra-ui/layout'
import {Field} from '@jaenjs/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import {connectTemplate} from '@jaenjs/jaen'
import {graphql} from 'gatsby'
import {css} from '@emotion/react'
import {BaseLayout} from '../layout/BaseLayout'
import {useColorModeValue} from '@chakra-ui/react'

const NewsStyle = () => css`
  .image-container {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .image {
    object-fit: contain;
  }
`

const NewsPage = () => {
  return (
    <BaseLayout activePath="" withSearch>
      <Flex
        width="100%"
        css={NewsStyle()}
        my="6"
        justifyContent="center"
        alignItems="center"
        direction="column">
        <Flex
          w="95%"
          py="10"
          border="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          borderRadius="5px"
          justifyContent="center"
          alignItems="center"
          direction="column">
          <Box width={{base: '300px', md: '45%'}}>
            <Field.Image
              name="main"
              defaultValue={
                <StaticImage
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="default image"
                  onDragStart={e => e.preventDefault()}
                  draggable="false"
                  className="image-container"
                  imgClassName="image"
                />
              }
              className="image-container"
              imgClassName="image"
            />
            <Flex mt="10" alignItems="flex-end">
              <Heading>
                <Field.Text name="heading" defaultValue="Titel" />
              </Heading>
              <Spacer />
              <Text color={'agt.blue'} fontWeight={'semibold'} fontSize={'xl'}>
                <Field.Text name="highlight" defaultValue="Aktion" />
              </Text>
            </Flex>
            <Text w="100%" mt="8">
              <Field.Text
                name="description"
                defaultValue=" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum."
              />
            </Text>
          </Box>
        </Flex>
      </Flex>
    </BaseLayout>
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
