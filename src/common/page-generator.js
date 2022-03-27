export const createCategoryPages = async (actions, graphql) => {
  const {data} = await graphql(`
    query {
      allShopifyCollection {
        edges {
          node {
            title
            handle
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  data.allShopifyCollection.edges.forEach(edge => {
    let splitHandle = edge.node.handle.split('-')
    let collectionType

    if (!isNaN(splitHandle.at(-1))) {
      splitHandle.pop(-1)
    }

    const len = splitHandle.length

    if (splitHandle[0].length > 1 && splitHandle[0][0] === 'a') {
      collectionType =
        splitHandle[0] +
        String.fromCharCode(
          splitHandle[0].charCodeAt(splitHandle[0].length - 1) + 1
        )
      for (let i = 1; i < splitHandle[0].length; i++) {
        collectionType = collectionType + '-' + splitHandle[i]
      }
      collectionType = collectionType + '-'
    } else {
      // ASCII 97 === a. MinLen = 2 so we use 95 as our basevalue.
      collectionType =
        String.fromCharCode(
          95 +
            (len === 2 && splitHandle[0] === 'a'
              ? 3
              : len > 2 && splitHandle[0][0] !== 'a'
              ? 2
              : len === 2
              ? 2
              : len + 1)
        ) + '-'
    }

    const slug =
      '/' +
      splitHandle
        .toString()
        .substring(edge.node.handle.indexOf('-') + 1)
        .replaceAll(',', '/')

    actions.createPage({
      path: slug,
      component: require.resolve(`../templates/CategoryPage/index.tsx`),
      context: {
        category: {
          title: edge.node.title.slice(edge.node.title.indexOf(' ')),
          handle: splitHandle.toString().replaceAll(',', '-'),
          image:
            edge.node.image !== null
              ? edge.node.image.gatsbyImageData
              : undefined
        },
        subcategories: data.allShopifyCollection.edges.filter(edge => {
          return edge.node.handle.startsWith(collectionType)
        })
      }
    })
  })
}

/* 
            products {
              title
              tags
              status
              totalInventory
              publishedAt
              images {
                gatsbyImageData
              }
            }
*/
