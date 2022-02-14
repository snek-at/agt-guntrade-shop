const createAllProductsShopPage = (data, actions) => {
  let tags = {}
  data.meta.tags.map(tag => {
    const splitTag = tag.split(':')
    if (typeof tags[splitTag[0]] === 'undefined') {
      tags[splitTag[0]] = [splitTag[1]]
    } else if (!tags[splitTag[0]].includes(splitTag[1])) {
      tags[splitTag[0]].push(splitTag[1])
    }
  })

  actions.createPage({
    path: '/shop/',
    component: require.resolve('../templates/ShopPage/index.tsx'),
    context: {
      title: 'Alle Produkte',
      handle: 'shop',
      products: data.allShopifyProduct.edges.sort((a, b) =>
        a.title > b.title ? 1 : -1
      ),
      tags: tags,
      allTags: data.meta.tags
    }
  })
}

export const createPages = async (actions, graphql) => {
  const {data} = await graphql(`
    query {
      meta: allShopifyProduct {
        tags: distinct(field: tags)
      }
      allShopifyCollection {
        edges {
          node {
            title
            handle
            image {
              gatsbyImageData
            }
            products {
              id
              descriptionHtml
              title
              tags
              status
              totalInventory
              publishedAt
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
              images {
                gatsbyImageData
              }
              featuredImage {
                gatsbyImageData
              }
            }
          }
        }
      }
      allShopifyProduct {
        edges {
          node {
            id
            descriptionHtml
            title
            tags
            status
            totalInventory
            publishedAt
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
            images {
              gatsbyImageData
            }
            featuredImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  createAllProductsShopPage(data, actions)

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

    let slug =
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
        subcategories: data.allShopifyCollection.edges
          .filter(edge2 => {
            return (
              edge2.node.handle.startsWith(collectionType) ||
              edge.node.handle === edge2.node.handle
            )
          })
          .sort((a, b) =>
            a.node.handle.slice(a.node.handle.indexOf('-') + 1) <
            b.node.handle.slice(a.node.handle.indexOf('-') + 1)
              ? 1
              : -1
          )
      }
    })

    let tags = {}
    edge.node.products.map(product => {
      product.tags.map(tag => {
        const splitTag = tag.split(':')
        if (typeof tags[splitTag[0]] === 'undefined') {
          tags[splitTag[0]] = [splitTag[1]]
        } else if (!tags[splitTag[0]].includes(splitTag[1])) {
          tags[splitTag[0]].push(splitTag[1])
        }
      })
    })

    const relatedCategories = data.allShopifyCollection.edges.filter(edge2 => {
      if (splitHandle[0].length === 2 && splitHandle[0][0] === 'b') {
        return (
          edge2.node.handle.includes(
            splitHandle.slice(1, -1).toString().replaceAll(',', '-')
          ) &&
          edge2.node.handle !== edge.node.handle &&
          edge2.node.handle.split('-').length === splitHandle.length
        )
      } else if (splitHandle[0].length > 1) {
        return (
          edge2.node.handle.endsWith(
            splitHandle.slice(2).toString().replaceAll(',', '-')
          ) && edge2.node.handle !== edge.node.handle
        )
      }
    })

    const unfilteredRelatedProducts = [].concat.apply(
      [],
      relatedCategories.map(category => category.node.products)
    )
    const filteredRelatedProducts = []

    if (unfilteredRelatedProducts.length > 0) {
      const titles = []
      let runs = 0
      for (let i = 0; i < 12; i++) {
        const potentialProduct =
          unfilteredRelatedProducts[
            Math.floor(Math.random() * unfilteredRelatedProducts.length)
          ]
        if (titles.includes(potentialProduct.title)) {
          i = i - 1
        } else {
          potentialProduct.slug =
            edge.node.handle
              .slice(edge.node.handle.indexOf('-') + 1)
              .replaceAll('-', '/') +
            '/shop/' +
            potentialProduct.id
          titles.push(potentialProduct.title)
          filteredRelatedProducts.push(potentialProduct)
        }
        if (
          titles.length === unfilteredRelatedProducts.length ||
          runs > 10000
        ) {
          break
        }
        runs++
      }
    }

    slug = slug + '/shop/'
    actions.createPage({
      path: slug,
      component: require.resolve('../templates/ShopPage/index.tsx'),
      context: {
        title: edge.node.title.slice(edge.node.title.indexOf(' ') + 1),
        handle: splitHandle.toString().replaceAll(',', '-') + '-shop',
        products: edge.node.products.sort((a, b) =>
          a.title > b.title ? 1 : -1
        ),
        tags: tags,
        allTags: data.meta.tags
      }
    })
    edge.node.products.forEach(product => {
      actions.createPage({
        path: slug + product.id + '/',
        component: require.resolve('../templates/ProductPage/index.tsx'),
        context: {
          product: product,
          relatedProducts: filteredRelatedProducts
        }
      })
    })
  })
}
