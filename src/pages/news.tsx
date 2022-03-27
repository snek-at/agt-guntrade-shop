import {connectPage} from '@jaenjs/jaen'
import {graphql} from 'gatsby'

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
    </div>
  )
}

export default connectPage(NewsPage, {
  displayName: 'NewsPage'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
