// @ts-nocheck

import slugify from 'slugify'

// splitAndType splits the handle and checks for the collectiontype (A, AB, ABC...)
const splitAndType = handle => {
  const splitHandle = handle.split('-')
  let collectionType

  if (!isNaN(splitHandle.at(-1))) {
    splitHandle.pop(-1)
  }

  const len = splitHandle.length

  if (len > 1 && splitHandle[0][0] === 'a') {
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
    component: require.resolve('../templatePages/ShopPage/index.tsx'),
    context: {
      header: {title: 'Alle Produkte'},
      products: {items: products.slice(0, 21)},
      filter: {
        allTags: data.meta.tags,
        activeTags: [],
        initialFilters: {
          tags: [],
          maxPrice: Math.max(
            ...products.map(
              product => product.priceRangeV2.maxVariantPrice.amount
            )
          )
        },
        hasNextPage: products.length > 21
      }
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

    const slugifiedTitle = slugify(product.title, {remove: /[*+~.()'"!:@]/g})

    actions.createPage({
      path: '/products/' + slugifiedTitle + '/',
      component: require.resolve('../templatePages/ProductPage/index.tsx'),
      context: {
        header: {title: product.title},
        imageSlider: {
          featuredImage: {
            alt: slugifiedTitle,
            gatsbyImageData: product.featuredImage.gatsbyImageData
          },
          images: product.images
            .filter(image => image.shopifyId !== product.featuredImage.id)
            .map(image => ({
              alt: slugifiedTitle,
              gatsbyImageData: image.gatsbyImageData
            }))
        },
        productDetail: {
          price: product.priceRangeV2.maxVariantPrice.amount,
          status: 'I dunno'
        },
        productMoreDetail: {
          description: product.descriptionHtml
        },
        featuredProducts: filteredRelatedProducts
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

    const subcategories = data.allShopifyCollection.edges
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

    actions.createPage({
      path: slug,
      component: require.resolve(`../templatePages/CategoryPage/index.tsx`),
      context: {
        category: {
          title: edge.node.title.split(' ').at(-1),
          items: subcategories.map(subcategory => ({
            title:
              subcategory.node.title === edge.node.title
                ? 'Alle Produkte'
                : subcategory.node.title.split(' ').at(-1),
            handle: !isNaN(subcategory.node.handle.split('-').at(-1))
              ? subcategory.node.handle.slice(
                  subcategory.node.handle.indexOf('-') + 1
                )
              : subcategory.node.handle,
            totalProducts: subcategory.node.products
              ? subcategory.node.products.length
              : 0,
            image: subcategory.node.image ? subcategory.node.image : undefined
          }))
        },
        productGrid: {
          title: 'Hello my dudes',
          items: edge.node.products.slice(0, 8)
        }
      }
    })

    slug = slug + '/products/'
    actions.createPage({
      path: slug,
      component: require.resolve('../templatePages/ShopPage/index.tsx'),
      context: {
        header: {title: edge.node.title.split(' ').at(-1)},
        products: {
          items: edge.node.products
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .slice(0, 21)
        },
        filter: {
          allTags: data.meta.tags,
          activeTags: data.meta.tags.filter(tag =>
            tag.endsWith(edge.node.title.split(' ').at(-1))
          ),
          initialFilters: {
            tags: [],
            maxPrice: Math.max(
              ...edge.node.products.map(
                product => product.priceRangeV2.maxVariantPrice.amount
              )
            )
          },
          hasNextPage: edge.node.products.length > 21
        }
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

      const slugifiedTitle = slugify(product.title, {remove: /[*+~.()'"!:@]/g})

      actions.createPage({
        path: slug + slugifiedTitle + '/',
        component: require.resolve('../templatePages/ProductPage/index.tsx'),
        context: {
          header: {title: product.title},
          imageSlider: {
            featuredImage: {
              alt: slugifiedTitle,
              gatsbyImageData: product.featuredImage.gatsbyImageData
            },
            images: product.images
              .filter(image => image.shopifyId !== product.featuredImage.id)
              .map(image => ({
                alt: slugifiedTitle,
                gatsbyImageData: image.gatsbyImageData
              }))
          },
          productDetail: {
            price: product.priceRangeV2.maxVariantPrice.amount,
            status: 'I dunno'
          },
          productMoreDetail: {
            description: product.descriptionHtml
          },
          featuredProducts: filteredRelatedProducts
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
                shopifyId
                gatsbyImageData
              }
              featuredImage {
                id
                gatsbyImageData
              }
            }
          }
        }
      }
      allShopifyProduct(sort: {fields: title, order: ASC}) {
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
            }
            images {
              shopifyId
              gatsbyImageData
            }
            featuredImage {
              id
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
