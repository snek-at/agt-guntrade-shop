// @ts-nocheck

import slugify from 'slugify'

import fs from 'fs'

// splitAndType splits the handle and checks for the collectiontype (A, AB, ABC...)
const splitAndType = handle => {
  const splitHandle = handle.split('-')
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
    for (let i = 1; i < splitHandle[0].length + 1; i++) {
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

  return [splitHandle, collectionType]
}
const getUnfilteredRelatedProducts = (data, handle, splitHandle) => {
  const relatedCategories = data.allShopifyCollection.edges.filter(edge2 => {
    if (splitHandle[0].length === 2 && splitHandle[0][0] === 'b') {
      return (
        edge2.node.handle.includes(
          splitHandle.slice(1, -1).toString().replaceAll(',', '-')
        ) &&
        edge2.node.handle !== handle &&
        edge2.node.handle.split('-').length === splitHandle.length
      )
    } else if (splitHandle[0].length > 1) {
      return (
        edge2.node.handle.endsWith(
          splitHandle.slice(2).toString().replaceAll(',', '-')
        ) && edge2.node.handle !== handle
      )
    }
  })

  return [].concat.apply(
    [],
    relatedCategories.map(category => category.node.products)
  )
}

const getFilteredProducts = (unfilteredRelatedProducts, handle) => {
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
          handle.slice(handle.indexOf('-') + 1).replaceAll('-', '/') +
          '/products/' +
          slugify(potentialProduct.title, {remove: /[*+~.()'"!:@]/g})
        titles.push(potentialProduct.title)
        filteredRelatedProducts.push(potentialProduct)
      }
      if (titles.length === unfilteredRelatedProducts.length || runs > 10000) {
        break
      }
      runs++
    }
  }
  return filteredRelatedProducts
}

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

  const products = []
  const collections = {}
  data.allShopifyProduct.edges.map(edge => {
    products.push(edge.node)
    const keys = Object.keys(edge.node.collections)
    const handles = []
    for (const key of keys) {
      handles.push(edge.node.collections[key].handle)
    }
    collections[edge.node.id] = handles
  })

  actions.createPage({
    path: '/products/',
    component: require.resolve('../templates/ShopPage/index.tsx'),
    context: {
      title: 'Alle Produkte',
      handle: 'produkte',
      products: products,
      tags: tags,
      allTags: data.meta.tags,
      amountOfProducts: products.length
    }
  })

  products.forEach(product => {
    let unfilteredRelatedProducts = []
    for (const handle of collections[product.id]) {
      unfilteredRelatedProducts = unfilteredRelatedProducts.concat(
        getUnfilteredRelatedProducts(data, handle, splitAndType(handle)[0])
      )
    }

    const filteredRelatedProducts = getFilteredProducts(
      unfilteredRelatedProducts,
      ''
    )

    actions.createPage({
      path:
        '/products/' + slugify(product.title, {remove: /[*+~.()'"!:@]/g}) + '/',
      component: require.resolve('../templates/ProductPage/index.tsx'),
      context: {
        product: product,
        relatedProducts: filteredRelatedProducts
      }
    })
  })
}

const createCollectionShopAndProductPages = (data, actions) => {
  data.allShopifyCollection.edges.forEach(edge => {
    const [splitHandle, collectionType] = splitAndType(edge.node.handle)

    let slug =
      '/' +
      splitHandle
        .toString()
        .substring(edge.node.handle.indexOf('-') + 1)
        .replaceAll(',', '/')
    console.log(edge.node.title.slice(edge.node.title.indexOf(' ') + 1))
    actions.createPage({
      path: slug,
      component: require.resolve(`../templates/CategoryPage/index.tsx`),
      context: {
        category: {
          title: edge.node.title.slice(edge.node.title.indexOf(' ') + 1),
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

    slug = slug + '/products/'
    actions.createPage({
      path: slug,
      component: require.resolve('../templates/ShopPage/index.tsx'),
      context: {
        title: edge.node.title.slice(edge.node.title.indexOf(' ') + 1),
        handle: splitHandle.toString().replaceAll(',', '-') + '-products',
        products: edge.node.products
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .slice(0, 21),
        tags: tags,
        allTags: data.meta.tags,
        amountOfProducts: edge.node.products.length
      }
    })

    edge.node.products.forEach(product => {
      const unfilteredRelatedProducts = getUnfilteredRelatedProducts(
        data,
        edge.node.handle,
        splitHandle
      )
      const filteredRelatedProducts = getFilteredProducts(
        unfilteredRelatedProducts,
        edge.node.handle
      )

      actions.createPage({
        path: slug + slugify(product.title, {remove: /[*+~.()'"!:@]/g}) + '/',
        component: require.resolve('../templates/ProductPage/index.tsx'),
        context: {
          product: product,
          relatedProducts: filteredRelatedProducts
        }
      })
    })
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
              createdAt
              descriptionHtml
              title
              tags
              status
              totalInventory
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
      allShopifyProduct(sort: {fields: title, order: ASC}, limit: 21) {
        edges {
          node {
            id
            collections {
              handle
            }
            descriptionHtml
            title
            tags
            status
            totalInventory
            createdAt
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
  createCollectionShopAndProductPages(data, actions)
}
